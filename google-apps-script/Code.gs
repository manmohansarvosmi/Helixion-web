// ============================================================
// Google Apps Script — Paste this in Google Apps Script Editor
// ============================================================
// 
// STEPS TO SET UP:
// 1. Go to https://script.google.com
// 2. Create a new project → name it "Helixion Contact Form"
// 3. Paste this entire code in Code.gs
// 4. Click Deploy → New Deployment → Web App
//    - Execute as: Me
//    - Who has access: Anyone
// 5. Copy the Web App URL
// 6. Put that URL in your website code (GOOGLE_SCRIPT_URL constant)
//
// This script does TWO things:
// a) Saves form data to a Google Sheet (auto-creates headers)
// b) Sends a Congratulations email to the person who submitted
// ============================================================

// ── Configuration ──
const SHEET_NAME = 'Contact Submissions';
const SENDER_NAME = 'Helixion Innovation';

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    
    // 1. Save to Google Sheet
    saveToSheet(data);
    
    // 2. Send congratulations email
    sendCongratulationsEmail(data);
    
    return ContentService
      .createTextOutput(JSON.stringify({ success: true, message: 'Saved & Email Sent!' }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ success: false, message: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  return ContentService
    .createTextOutput(JSON.stringify({ status: 'Helixion Contact API is running' }))
    .setMimeType(ContentService.MimeType.JSON);
}

// ── Save Form Data to Google Sheet ──
function saveToSheet(data) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = ss.getSheetByName(SHEET_NAME);
  
  // Auto-create sheet with headers if it doesn't exist
  if (!sheet) {
    sheet = ss.insertSheet(SHEET_NAME);
    sheet.appendRow([
      'Timestamp',
      'Name', 
      'Email', 
      'Phone', 
      'Subject', 
      'Message',
      'Source'
    ]);
    // Style header row
    const headerRange = sheet.getRange(1, 1, 1, 7);
    headerRange.setFontWeight('bold');
    headerRange.setBackground('#071326');
    headerRange.setFontColor('#ffffff');
  }
  
  // Append the data
  sheet.appendRow([
    new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
    data.name || data.fullName || '',
    data.email || '',
    data.phone || '',
    data.subject || data.service || '',
    data.message || '',
    data.source || 'Website Contact Form'
  ]);
}

// ── Send Congratulations Email ──
function sendCongratulationsEmail(data) {
  const recipientEmail = data.email;
  const recipientName = data.name || data.fullName || 'Valued Client';
  
  if (!recipientEmail) return;
  
  const subject = '🎉 Thank You for Contacting Helixion Innovation!';
  
  const htmlBody = `
  <!DOCTYPE html>
  <html>
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
  </head>
  <body style="margin:0; padding:0; background-color:#f1f5f9; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
    <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#f1f5f9; padding: 40px 20px;">
      <tr>
        <td align="center">
          <table width="600" cellpadding="0" cellspacing="0" style="background-color:#ffffff; border-radius:16px; overflow:hidden; box-shadow: 0 4px 24px rgba(0,0,0,0.08);">
            
            <!-- Header Banner -->
            <tr>
              <td style="background: linear-gradient(135deg, #071326 0%, #0a2540 100%); padding: 40px 40px 30px; text-align:center;">
                <h1 style="color:#ffffff; margin:0 0 4px; font-size:24px; font-weight:800; letter-spacing:-0.5px;">
                  Helixion Innovation
                </h1>
                <p style="color:#60a5fa; margin:0; font-size:11px; text-transform:uppercase; letter-spacing:3px; font-weight:600;">
                  Building Digital Excellence
                </p>
              </td>
            </tr>
            
            <!-- Congratulations Section -->
            <tr>
              <td style="padding: 40px 40px 20px; text-align:center;">
                <div style="width:72px; height:72px; background-color:#eff6ff; border-radius:50%; margin:0 auto 20px; line-height:72px; font-size:36px;">
                  🎉
                </div>
                <h2 style="color:#0a192f; margin:0 0 8px; font-size:22px; font-weight:700;">
                  Congratulations, ${recipientName}!
                </h2>
                <p style="color:#64748b; margin:0; font-size:15px; line-height:1.6;">
                  We've successfully received your message. Our team is excited to connect with you!
                </p>
              </td>
            </tr>
            
            <!-- Message Details Box -->
            <tr>
              <td style="padding: 0 40px 30px;">
                <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#f8fafc; border-radius:12px; border: 1px solid #e2e8f0;">
                  <tr>
                    <td style="padding: 24px;">
                      <p style="color:#0a192f; font-size:13px; font-weight:700; text-transform:uppercase; letter-spacing:1px; margin:0 0 16px; border-bottom:1px solid #e2e8f0; padding-bottom:10px;">
                        📋 Your Submission Details
                      </p>
                      <table width="100%" cellpadding="0" cellspacing="0">
                        <tr>
                          <td style="padding:6px 0; color:#64748b; font-size:13px; width:100px; vertical-align:top;">Name:</td>
                          <td style="padding:6px 0; color:#0a192f; font-size:13px; font-weight:600;">${recipientName}</td>
                        </tr>
                        <tr>
                          <td style="padding:6px 0; color:#64748b; font-size:13px; vertical-align:top;">Email:</td>
                          <td style="padding:6px 0; color:#0a192f; font-size:13px; font-weight:600;">${recipientEmail}</td>
                        </tr>
                        ${data.phone ? `<tr>
                          <td style="padding:6px 0; color:#64748b; font-size:13px; vertical-align:top;">Phone:</td>
                          <td style="padding:6px 0; color:#0a192f; font-size:13px; font-weight:600;">${data.phone}</td>
                        </tr>` : ''}
                        ${data.subject || data.service ? `<tr>
                          <td style="padding:6px 0; color:#64748b; font-size:13px; vertical-align:top;">Subject:</td>
                          <td style="padding:6px 0; color:#0a192f; font-size:13px; font-weight:600;">${data.subject || data.service}</td>
                        </tr>` : ''}
                      </table>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
            
            <!-- What's Next Section -->
            <tr>
              <td style="padding: 0 40px 30px;">
                <h3 style="color:#0a192f; font-size:16px; font-weight:700; margin:0 0 16px;">
                  ⚡ What Happens Next?
                </h3>
                <table width="100%" cellpadding="0" cellspacing="0">
                  <tr>
                    <td style="padding:8px 0;">
                      <table cellpadding="0" cellspacing="0">
                        <tr>
                          <td style="width:28px; height:28px; background-color:#0070f3; border-radius:50%; text-align:center; color:#fff; font-size:12px; font-weight:700; line-height:28px;">1</td>
                          <td style="padding-left:12px; color:#334155; font-size:14px;">Our team reviews your requirements within <strong>2 hours</strong></td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding:8px 0;">
                      <table cellpadding="0" cellspacing="0">
                        <tr>
                          <td style="width:28px; height:28px; background-color:#0070f3; border-radius:50%; text-align:center; color:#fff; font-size:12px; font-weight:700; line-height:28px;">2</td>
                          <td style="padding-left:12px; color:#334155; font-size:14px;">A specialist will reach out to discuss your project</td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding:8px 0;">
                      <table cellpadding="0" cellspacing="0">
                        <tr>
                          <td style="width:28px; height:28px; background-color:#0070f3; border-radius:50%; text-align:center; color:#fff; font-size:12px; font-weight:700; line-height:28px;">3</td>
                          <td style="padding-left:12px; color:#334155; font-size:14px;">We'll share a tailored proposal and timeline</td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
            
            <!-- Contact Info Footer -->
            <tr>
              <td style="padding: 0 40px 30px;">
                <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#071326; border-radius:12px;">
                  <tr>
                    <td style="padding: 24px; text-align:center;">
                      <p style="color:#94a3b8; font-size:12px; margin:0 0 12px; text-transform:uppercase; letter-spacing:1.5px; font-weight:600;">
                        Reach Us Anytime
                      </p>
                      <p style="color:#ffffff; font-size:14px; margin:0 0 4px;">
                        📧 info@helixioninnovation.com
                      </p>
                      <p style="color:#ffffff; font-size:14px; margin:0 0 4px;">
                        📞 +91 7880111641
                      </p>
                      <p style="color:#94a3b8; font-size:12px; margin:8px 0 0;">
                        📍 Registered: Gwalior, MP &nbsp;|&nbsp; Corporate: Pimple Gurav, Pune
                      </p>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
            
            <!-- Bottom Bar -->
            <tr>
              <td style="background-color:#f8fafc; border-top: 1px solid #e2e8f0; padding:20px 40px; text-align:center;">
                <p style="color:#94a3b8; font-size:11px; margin:0;">
                  © ${new Date().getFullYear()} Helixion Innovation Pvt. Ltd. All rights reserved.
                </p>
                <p style="color:#94a3b8; font-size:11px; margin:6px 0 0;">
                  <a href="https://helixioninnovation.com" style="color:#0070f3; text-decoration:none;">helixioninnovation.com</a>
                </p>
              </td>
            </tr>
            
          </table>
        </td>
      </tr>
    </table>
  </body>
  </html>
  `;
  
  GmailApp.sendEmail(recipientEmail, subject, 
    `Congratulations ${recipientName}! We have received your message. Our team will contact you within 24 hours. - Helixion Innovation`,
    {
      htmlBody: htmlBody,
      name: SENDER_NAME,
    }
  );
}

// ── Test function (run manually to test) ──
function testSubmission() {
  const testData = {
    name: 'Test User',
    email: 'test@example.com',
    phone: '+91 9876543210',
    subject: 'Test Inquiry',
    message: 'This is a test message.',
    source: 'Test'
  };
  
  saveToSheet(testData);
  // sendCongratulationsEmail(testData); // Uncomment to test email too
  Logger.log('Test completed successfully!');
}


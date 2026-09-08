interface ClientLogoProps {
  type: 'tata' | 'reliance' | 'wipro' | 'mahindra' | 'infosys' | 'jindal';
  className?: string;
}

export function ClientLogo({ type, className = '' }: ClientLogoProps) {
  switch (type) {
    case 'tata':
      return (
        <div className={`flex flex-col items-center justify-center ${className}`}>
          {/* TATA Arch Icon */}
          <svg className="h-7 w-auto mb-1" viewBox="0 0 70 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M10 38 C 10 18, 30 6, 35 6 C 40 6, 60 18, 60 38 C 53 38, 39 16, 35 16 C 31 16, 17 38, 10 38 Z"
              fill="#005696"
            />
            <path
              d="M32 38 L38 38 L36 10 L34 10 Z"
              fill="#005696"
            />
          </svg>
          <span className="text-[#005696] font-black text-xl tracking-[0.18em] leading-none">
            TATA
          </span>
        </div>
      );

    case 'reliance':
      return (
        <div className={`flex flex-col items-center justify-center text-center ${className}`}>
          {/* Reliance Crest Emblem */}
          <div className="w-8 h-8 rounded-full bg-[#d4af37]/20 border border-[#c59e2b] flex items-center justify-center mb-1">
            <svg className="w-5 h-5" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="20" cy="20" r="16" stroke="#b38a1e" strokeWidth="2" fill="none" />
              <path d="M20 6 L20 34 M6 20 L34 20 M10 10 L30 30 M10 30 L30 10" stroke="#b38a1e" strokeWidth="1.5" />
              <circle cx="20" cy="20" r="4" fill="#b38a1e" />
            </svg>
          </div>
          <span className="text-[#1a202c] font-serif font-bold text-base leading-tight">
            Reliance
          </span>
          <span className="text-[#4a5568] font-sans text-[9px] tracking-wider uppercase font-medium">
            Industries Limited
          </span>
        </div>
      );

    case 'wipro':
      return (
        <div className={`flex flex-col items-center justify-center ${className}`}>
          {/* Wipro Dotted Rainbow Flower */}
          <svg className="w-12 h-10 mb-0.5" viewBox="0 0 100 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="40" r="3" fill="#6B21A8" />
            {/* Ring 1 */}
            <circle cx="43" cy="37" r="2.5" fill="#4338CA" />
            <circle cx="47" cy="33" r="2.5" fill="#1D4ED8" />
            <circle cx="53" cy="33" r="2.5" fill="#0284C7" />
            <circle cx="57" cy="37" r="2.5" fill="#059669" />
            <circle cx="57" cy="43" r="2.5" fill="#65A30D" />
            <circle cx="53" cy="47" r="2.5" fill="#D97706" />
            <circle cx="47" cy="47" r="2.5" fill="#DC2626" />
            <circle cx="43" cy="43" r="2.5" fill="#BE185D" />
            {/* Ring 2 */}
            <circle cx="34" cy="34" r="3" fill="#4F46E5" />
            <circle cx="42" cy="24" r="3" fill="#2563EB" />
            <circle cx="54" cy="23" r="3" fill="#0284C7" />
            <circle cx="65" cy="30" r="3" fill="#10B981" />
            <circle cx="68" cy="43" r="3" fill="#84CC16" />
            <circle cx="61" cy="56" r="3" fill="#F59E0B" />
            <circle cx="47" cy="59" r="3" fill="#EF4444" />
            <circle cx="36" cy="51" r="3" fill="#EC4899" />
            {/* Ring 3 */}
            <circle cx="23" cy="29" r="3.5" fill="#6366F1" />
            <circle cx="35" cy="14" r="3.5" fill="#3B82F6" />
            <circle cx="52" cy="11" r="3.5" fill="#06B6D4" />
            <circle cx="70" cy="19" r="3.5" fill="#10B981" />
            <circle cx="79" cy="38" r="3.5" fill="#A3E635" />
            <circle cx="73" cy="58" r="3.5" fill="#FBBF24" />
            <circle cx="55" cy="71" r="3.5" fill="#F87171" />
            <circle cx="33" cy="67" r="3.5" fill="#F472B6" />
          </svg>
          <span className="text-[#0c1a30] font-black text-xl tracking-tight leading-none">
            wipro<span className="text-[#0080ff] font-sans">:</span>
          </span>
        </div>
      );

    case 'mahindra':
      return (
        <div className={`flex flex-col items-center justify-center ${className}`}>
          {/* Mahindra Oval Twin-Peak Emblem */}
          <div className="w-14 h-7 mb-1 flex items-center justify-center">
            <svg viewBox="0 0 90 44" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
              <ellipse cx="45" cy="22" rx="42" ry="20" stroke="#e11d24" strokeWidth="4" fill="none" />
              {/* Twin stylized peaks */}
              <path
                d="M26 31 L38 12 L45 23 L52 12 L64 31 L54 31 L48 20 L45 25 L42 20 L36 31 Z"
                fill="#e11d24"
              />
            </svg>
          </div>
          <span className="text-[#0c1a30] font-black text-base tracking-normal leading-none uppercase">
            Mahindra
          </span>
        </div>
      );

    case 'infosys':
      return (
        <div className={`flex flex-col items-center justify-center ${className}`}>
          <span className="text-[#0070ad] font-sans font-bold text-2xl tracking-tighter leading-none italic">
            Infosys
          </span>
          <span className="text-[#0070ad] font-sans text-[8px] tracking-[0.2em] uppercase font-semibold mt-1">
            Navigate your next
          </span>
        </div>
      );

    case 'jindal':
      return (
        <div className={`flex flex-col items-center justify-center ${className}`}>
          <div className="flex items-center gap-1">
            <span className="text-[#0f172a] font-extrabold text-lg tracking-wider">
              JINDAL
            </span>
            <svg className="w-7 h-5" viewBox="0 0 40 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 18 C 12 22, 22 15, 36 6 L32 2 C 20 10, 10 16, 2 12 Z" fill="#16a34a" />
              <path d="M8 22 C 16 26, 26 19, 40 10 L36 6 C 24 14, 14 20, 6 16 Z" fill="#2563eb" />
            </svg>
          </div>
          <span className="text-[#334155] font-sans text-[9px] font-bold tracking-[0.2em] uppercase">
            STEEL & POWER
          </span>
        </div>
      );

    default:
      return null;
  }
}

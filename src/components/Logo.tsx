interface LogoProps {
  variant?: 'dark' | 'light';
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export function Logo({ variant = 'dark', className = '', size = 'md' }: LogoProps) {
  const isLight = variant === 'light';

  const iconSizes = {
    sm: 'w-7 h-7',
    md: 'w-9 h-9',
    lg: 'w-12 h-12',
  };

  const titleSizes = {
    sm: 'text-lg',
    md: 'text-xl',
    lg: 'text-2xl',
  };

  const subtitleSizes = {
    sm: 'text-[9px] tracking-[0.2em]',
    md: 'text-[10px] tracking-[0.25em]',
    lg: 'text-xs tracking-[0.3em]',
  };

  return (
    <div className={`inline-flex items-center gap-2.5 select-none ${className}`}>
      {/* Stylized 3D Hexagon 'H' Emblem */}
      <div className={`relative ${iconSizes[size]} shrink-0 flex items-center justify-center`}>
        <svg
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full drop-shadow-sm"
        >
          <defs>
            <linearGradient id="helixGradient1" x1="10%" y1="0%" x2="90%" y2="100%">
              <stop offset="0%" stopColor="#00a8ff" />
              <stop offset="50%" stopColor="#0070f3" />
              <stop offset="100%" stopColor="#0047ba" />
            </linearGradient>
            <linearGradient id="helixGradient2" x1="0%" y1="50%" x2="100%" y2="50%">
              <stop offset="0%" stopColor="#0080ff" />
              <stop offset="100%" stopColor="#0056cc" />
            </linearGradient>
            <linearGradient id="helixGradientFacet" x1="50%" y1="0%" x2="50%" y2="100%">
              <stop offset="0%" stopColor="#38bdf8" />
              <stop offset="100%" stopColor="#0284c7" />
            </linearGradient>
          </defs>

          {/* Outer Isometric Hexagon Loop with Inner 'H' Crossway */}
          {/* Top-Left to Top-Right facet */}
          <path
            d="M50 8 L88 28 L88 44 L68 34 L50 24 L32 34 L12 24 L50 8 Z"
            fill="url(#helixGradient1)"
          />
          {/* Left Vertical Strut */}
          <path
            d="M12 28 L32 38 L32 72 L12 62 Z"
            fill="url(#helixGradient2)"
          />
          {/* Right Vertical Strut */}
          <path
            d="M68 38 L88 48 L88 82 L68 72 Z"
            fill="url(#helixGradient1)"
          />
          {/* Bottom Facet */}
          <path
            d="M12 66 L50 88 L88 70 L88 86 L50 98 L12 78 Z"
            fill="url(#helixGradient2)"
          />
          {/* Center H Bar / Crossway with 3D Depth */}
          <path
            d="M32 46 L68 46 L68 58 L32 58 Z"
            fill="url(#helixGradientFacet)"
          />
          {/* Subtle interior highlight */}
          <path
            d="M48 24 L52 24 L68 34 L68 40 L50 28 L32 40 L32 34 Z"
            fill="#ffffff"
            fillOpacity="0.25"
          />
        </svg>
      </div>

      {/* Typography */}
      <div className="flex flex-col leading-none">
        <span
          className={`font-extrabold font-sans tracking-tight ${titleSizes[size]} ${
            isLight ? 'text-white' : 'text-[#0a192f]'
          }`}
        >
          Helixion
        </span>
        <span
          className={`font-semibold uppercase ${subtitleSizes[size]} mt-0.5 ${
            isLight ? 'text-blue-300' : 'text-slate-700'
          }`}
        >
          INNOVATION
        </span>
      </div>
    </div>
  );
}

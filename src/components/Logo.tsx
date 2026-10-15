import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'full' | 'mark' | 'stacked';
  theme?: 'dark' | 'light';
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  size = 'md',
  variant = 'full',
  theme = 'light',
}) => {
  // Dimension scales
  const sizeMap = {
    sm: { icon: 28, text: 'text-base', sub: 'text-[9px]' },
    md: { icon: 40, text: 'text-xl', sub: 'text-[11px]' },
    lg: { icon: 54, text: 'text-2xl', sub: 'text-[13px]' },
    xl: { icon: 72, text: 'text-4xl', sub: 'text-[15px]' },
  };

  const { icon, text, sub } = sizeMap[size];
  const textColor = theme === 'dark' ? 'text-white' : 'text-neutral-900';
  const subColor = 'text-[#fda63a]';

  // SVG Mark matching the user's exact uploaded logo with orange palette
  const LogoMark = (
    <svg
      width={icon}
      height={icon}
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="shrink-0 transition-transform duration-200 group-hover:scale-105"
      aria-label="Bashuai Logo Mark"
    >
      {/* Upper diagonal roof beam 1 (narrower left beam) */}
      <polygon
        points="52,14 43,14 18,52 27,52"
        fill="#fda63a"
      />

      {/* Main diagonal roof beam 2 (wider right beam) */}
      <polygon
        points="68,14 55,14 30,52 43,52"
        fill="#fda63a"
      />

      {/* 4-pane architectural glass window (2x2 grid in warm tinted glass) */}
      <rect x="56" y="32" width="8" height="8" rx="0.5" fill="#fedbb0" />
      <rect x="67" y="32" width="8" height="8" rx="0.5" fill="#fedbb0" />
      <rect x="56" y="43" width="8" height="8" rx="0.5" fill="#fedbb0" />
      <rect x="67" y="43" width="8" height="8" rx="0.5" fill="#fedbb0" />

      {/* Smooth foundational curved wave line */}
      <path
        d="M8,56 C26,67 46,65 68,60 C88,55 106,58 116,63 C102,60 84,59 66,63 C46,68 24,67 8,56 Z"
        fill="#fda63a"
      />
    </svg>
  );

  if (variant === 'mark') {
    return <div className={`inline-flex items-center ${className}`}>{LogoMark}</div>;
  }

  if (variant === 'stacked') {
    return (
      <div className={`inline-flex flex-col items-center text-center ${className}`}>
        {LogoMark}
        <div className="mt-2 flex flex-col items-center">
          <span className={`font-display font-extrabold tracking-tight ${textColor} ${text}`}>
            Bashuai
          </span>
          <span className={`font-sans font-bold tracking-[0.24em] uppercase ${subColor} ${sub}`}>
            ALUMINIUM
          </span>
        </div>
      </div>
    );
  }

  // Default horizontal lockup for Top Bar Contract and headers
  return (
    <div className={`inline-flex items-center gap-3 group ${className}`}>
      {LogoMark}
      <div className="flex flex-col leading-none">
        <span className={`font-display font-black tracking-tight ${textColor} ${text}`}>
          Bashuai
        </span>
        <span className={`font-sans font-bold tracking-[0.22em] uppercase mt-1 ${subColor} ${sub}`}>
          ALUMINIUM
        </span>
      </div>
    </div>
  );
};

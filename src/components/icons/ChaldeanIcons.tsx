import React from 'react';

interface IconProps {
  className?: string;
  size?: number;
  fill?: string;
  stroke?: string;
}

// Base icon wrapper with consistent styling
export const IconWrapper: React.FC<{
  children: React.ReactNode;
  className?: string;
  size?: number;
  viewBox?: string;
}> = ({ children, className = '', size = 24, viewBox = '0 0 24 24' }) => (
  <div 
    className={`inline-flex items-center justify-center ${className}`} 
    style={{ width: size, height: size }}
  >
    <svg
      width={size}
      height={size}
      viewBox={viewBox}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
    >
      {children}
    </svg>
  </div>
);

// Cuneiform pattern decoration (reusable) - intentionally removed as unused
// export const CuneiformPattern = ...

// Home - Ziggurat/Temple
export const IconHome: React.FC<IconProps> = ({ className, size = 24 }) => (
  <IconWrapper className={className} size={size}>
    {/* Base */}
    <rect x="2" y="16" width="20" height="5" rx="1" stroke="currentColor" strokeWidth="2" fill="none" />
    {/* Middle tier */}
    <rect x="5" y="10" width="14" height="6" stroke="currentColor" strokeWidth="2" fill="none" />
    {/* Top tier */}
    <rect x="8" y="5" width="8" height="5" stroke="currentColor" strokeWidth="2" fill="none" />
    {/* Star/Sun */}
    <path
      d="M12 1L12.5 3L14 3.5L12.5 4L12 6L11.5 4L10 3.5L11.5 3L12 1z"
      fill="currentColor"
    />
  </IconWrapper>
);

// Lessons - Cuneiform Tablet
export const IconLessons: React.FC<IconProps> = ({ className, size = 24 }) => (
  <IconWrapper className={className} size={size}>
    <rect x="4" y="3" width="16" height="18" rx="2" stroke="currentColor" strokeWidth="2" fill="none" />
    {/* Cuneiform marks */}
    <line x1="7" y1="7" x2="17" y2="7" stroke="currentColor" strokeWidth="1.5" />
    <line x1="7" y1="10" x2="15" y2="10" stroke="currentColor" strokeWidth="1.5" />
    <line x1="7" y1="13" x2="17" y2="13" stroke="currentColor" strokeWidth="1.5" />
    <line x1="7" y1="16" x2="12" y2="16" stroke="currentColor" strokeWidth="1.5" />
    {/* Wedge marks */}
    <path d="M8 8L9 9L8 10" stroke="currentColor" strokeWidth="1" fill="none" />
    <path d="M10 11L11 12L10 13" stroke="currentColor" strokeWidth="1" fill="none" />
  </IconWrapper>
);

// Practice - Shield with Star
export const IconPractice: React.FC<IconProps> = ({ className, size = 24 }) => (
  <IconWrapper className={className} size={size}>
    <path
      d="M12 2L4 5v6c0 5.55 3.84 10.74 8 12 4.16-1.26 8-6.45 8-12V5L12 2z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    {/* 8-pointed star (Ishtar/Venus star) */}
    <path
      d="M12 8L13.5 10.5L16 11L13.5 11.5L12 14L10.5 11.5L8 11L10.5 10.5L12 8z"
      fill="currentColor"
      opacity="0.7"
    />
  </IconWrapper>
);

// Dictionary - Open Tablet/Scroll
export const IconDictionary: React.FC<IconProps> = ({ className, size = 24 }) => (
  <IconWrapper className={className} size={size}>
    {/* Left tablet */}
    <rect x="3" y="4" width="8" height="16" rx="1" stroke="currentColor" strokeWidth="2" fill="none" />
    {/* Right tablet */}
    <rect x="13" y="4" width="8" height="16" rx="1" stroke="currentColor" strokeWidth="2" fill="none" />
    {/* Cuneiform lines */}
    <line x1="5" y1="7" x2="9" y2="7" stroke="currentColor" strokeWidth="1.5" />
    <line x1="5" y1="10" x2="8" y2="10" stroke="currentColor" strokeWidth="1.5" />
    <line x1="5" y1="13" x2="9" y2="13" stroke="currentColor" strokeWidth="1.5" />
    <line x1="15" y1="7" x2="19" y2="7" stroke="currentColor" strokeWidth="1.5" />
    <line x1="15" y1="10" x2="18" y2="10" stroke="currentColor" strokeWidth="1.5" />
    <line x1="15" y1="13" x2="19" y2="13" stroke="currentColor" strokeWidth="1.5" />
  </IconWrapper>
);

// Translator - Two Connected Tablets
export const IconTranslator: React.FC<IconProps> = ({ className, size = 24 }) => (
  <IconWrapper className={className} size={size}>
    {/* Left tablet */}
    <rect x="2" y="5" width="9" height="14" rx="1" stroke="currentColor" strokeWidth="2" fill="none" />
    {/* Right tablet */}
    <rect x="13" y="5" width="9" height="14" rx="1" stroke="currentColor" strokeWidth="2" fill="none" />
    {/* Connection arrow */}
    <path d="M11 12L13 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M12 11L13 12L12 13" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    {/* Cuneiform marks */}
    <line x1="4" y1="8" x2="9" y2="8" stroke="currentColor" strokeWidth="1.5" />
    <line x1="4" y1="11" x2="7" y2="11" stroke="currentColor" strokeWidth="1.5" />
    <line x1="15" y1="8" x2="20" y2="8" stroke="currentColor" strokeWidth="1.5" />
    <line x1="15" y1="11" x2="18" y2="11" stroke="currentColor" strokeWidth="1.5" />
  </IconWrapper>
);

// Forum - Temple/Community Gathering
export const IconForum: React.FC<IconProps> = ({ className, size = 24 }) => (
  <IconWrapper className={className} size={size}>
    {/* Temple base */}
    <rect x="4" y="14" width="16" height="6" rx="1" stroke="currentColor" strokeWidth="2" fill="none" />
    {/* Columns */}
    <line x1="7" y1="14" x2="7" y2="8" stroke="currentColor" strokeWidth="2" />
    <line x1="12" y1="14" x2="12" y2="6" stroke="currentColor" strokeWidth="2" />
    <line x1="17" y1="14" x2="17" y2="8" stroke="currentColor" strokeWidth="2" />
    {/* Arch/roof */}
    <path d="M7 8L12 6L17 8" stroke="currentColor" strokeWidth="2" fill="none" />
    {/* Star above */}
    <path
      d="M12 2L11 4L12 5L13 4L12 2z"
      fill="currentColor"
      opacity="0.7"
    />
  </IconWrapper>
);

// Review - Circular Arrow (Refresh)
export const IconReview: React.FC<IconProps> = ({ className, size = 24 }) => (
  <IconWrapper className={className} size={size}>
    <path
      d="M4 12a8 8 0 018-8V2M20 12a8 8 0 01-8 8v2M4 12h2M20 12h2"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <path
      d="M12 4a8 8 0 018 8M12 20a8 8 0 01-8-8"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
      opacity="0.5"
    />
    {/* Cuneiform decoration */}
    <circle cx="12" cy="12" r="1.5" fill="currentColor" opacity="0.4" />
  </IconWrapper>
);

// Settings - Gear with Cuneiform Pattern
export const IconSettings: React.FC<IconProps> = ({ className, size = 24 }) => (
  <IconWrapper className={className} size={size}>
    <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" fill="none" />
    <path
      d="M12 1v6m0 6v6M23 12h-6m-6 0H1M19.07 4.93l-4.24 4.24M9.17 9.17L4.93 4.93M19.07 19.07l-4.24-4.24M9.17 14.83L4.93 19.07"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      fill="none"
    />
    {/* Cuneiform marks */}
    <line x1="10" y1="10" x2="11" y2="10" stroke="currentColor" strokeWidth="1" opacity="0.5" />
    <line x1="13" y1="10" x2="14" y2="10" stroke="currentColor" strokeWidth="1" opacity="0.5" />
    <line x1="10" y1="14" x2="11" y2="14" stroke="currentColor" strokeWidth="1" opacity="0.5" />
    <line x1="13" y1="14" x2="14" y2="14" stroke="currentColor" strokeWidth="1" opacity="0.5" />
  </IconWrapper>
);

// Admin - Tools with Ancient Symbols
export const IconAdmin: React.FC<IconProps> = ({ className, size = 24 }) => (
  <IconWrapper className={className} size={size}>
    {/* Wrench/hammer */}
    <path
      d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    {/* Star symbol */}
    <path
      d="M6 18L5 20L6 21L7 20L6 18z"
      fill="currentColor"
      opacity="0.6"
    />
  </IconWrapper>
);

// Heart/Like - Heart with Cuneiform Pattern
export const IconHeart: React.FC<IconProps & { filled?: boolean }> = ({ className, size = 24, filled = false }) => (
  <IconWrapper className={className} size={size}>
    <path
      d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill={filled ? 'currentColor' : 'none'}
    />
    {/* Cuneiform decoration */}
    {!filled && (
      <>
        <line x1="10" y1="9" x2="11" y2="9" stroke="currentColor" strokeWidth="1" opacity="0.4" />
        <line x1="13" y1="9" x2="14" y2="9" stroke="currentColor" strokeWidth="1" opacity="0.4" />
      </>
    )}
  </IconWrapper>
);

// Comment - Speech Bubble with Cuneiform
export const IconComment: React.FC<IconProps> = ({ className, size = 24 }) => (
  <IconWrapper className={className} size={size}>
    <path
      d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    {/* Cuneiform lines */}
    <line x1="7" y1="9" x2="17" y2="9" stroke="currentColor" strokeWidth="1.5" />
    <line x1="7" y1="12" x2="15" y2="12" stroke="currentColor" strokeWidth="1.5" />
    <line x1="7" y1="15" x2="12" y2="15" stroke="currentColor" strokeWidth="1.5" />
  </IconWrapper>
);

// Eye/View - Eye with Ancient Pattern
export const IconEye: React.FC<IconProps> = ({ className, size = 24 }) => (
  <IconWrapper className={className} size={size}>
    <path
      d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" fill="none" />
    {/* Decorative marks */}
    <path d="M8 8L9 9L8 10" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.4" />
    <path d="M16 8L15 9L16 10" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.4" />
  </IconWrapper>
);

// Menu - Three Lines with Decorative Elements
export const IconMenu: React.FC<IconProps> = ({ className, size = 24 }) => (
  <IconWrapper className={className} size={size}>
    <line x1="3" y1="6" x2="21" y2="6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <line x1="3" y1="12" x2="21" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <line x1="3" y1="18" x2="21" y2="18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    {/* Decorative dots */}
    <circle cx="5" cy="6" r="0.5" fill="currentColor" opacity="0.5" />
    <circle cx="5" cy="12" r="0.5" fill="currentColor" opacity="0.5" />
    <circle cx="5" cy="18" r="0.5" fill="currentColor" opacity="0.5" />
  </IconWrapper>
);

// Close/X - X with Decorative Elements
export const IconClose: React.FC<IconProps> = ({ className, size = 24 }) => (
  <IconWrapper className={className} size={size}>
    <line x1="18" y1="6" x2="6" y2="18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <line x1="6" y1="6" x2="18" y2="18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    {/* Decorative corners */}
    <path d="M4 4L5 5" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />
    <path d="M20 4L19 5" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />
    <path d="M4 20L5 19" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />
    <path d="M20 20L19 19" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />
  </IconWrapper>
);

// Location/Pin - Location Marker with Ancient Symbol
export const IconLocation: React.FC<IconProps> = ({ className, size = 24 }) => (
  <IconWrapper className={className} size={size}>
    <path
      d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="2" fill="none" />
    {/* Star decoration */}
    <path
      d="M12 7L11.5 8.5L10 9L11.5 9.5L12 11L12.5 9.5L14 9L12.5 8.5L12 7z"
      fill="currentColor"
      opacity="0.6"
    />
  </IconWrapper>
);

// Search - Magnifying Glass with Ancient Pattern
export const IconSearch: React.FC<IconProps> = ({ className, size = 24 }) => (
  <IconWrapper className={className} size={size}>
    <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="2" fill="none" />
    <path d="M21 21l-4.35-4.35" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    {/* Cuneiform decoration */}
    <line x1="8" y1="9" x2="9" y2="9" stroke="currentColor" strokeWidth="1" opacity="0.4" />
    <line x1="8" y1="11" x2="9.5" y2="11" stroke="currentColor" strokeWidth="1" opacity="0.4" />
  </IconWrapper>
);

// Audio/Speaker - Speaker with Ancient Pattern
export const IconAudio: React.FC<IconProps> = ({ className, size = 24 }) => (
  <IconWrapper className={className} size={size}>
    <polygon
      points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <path
      d="M19.07 4.93a10 10 0 010 14.14M15.54 8.46a5 5 0 010 7.07"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      fill="none"
    />
    {/* Decorative marks */}
    <circle cx="17" cy="12" r="1" fill="currentColor" opacity="0.4" />
  </IconWrapper>
);

// More/Options - Three Dots with Pattern
export const IconMore: React.FC<IconProps> = ({ className, size = 24 }) => (
  <IconWrapper className={className} size={size}>
    <circle cx="12" cy="5" r="1.5" fill="currentColor" />
    <circle cx="12" cy="12" r="1.5" fill="currentColor" />
    <circle cx="12" cy="19" r="1.5" fill="currentColor" />
    {/* Connecting lines */}
    <line x1="12" y1="6.5" x2="12" y2="10.5" stroke="currentColor" strokeWidth="1" opacity="0.3" />
    <line x1="12" y1="13.5" x2="12" y2="17.5" stroke="currentColor" strokeWidth="1" opacity="0.3" />
  </IconWrapper>
);

// Star - 8-pointed Star (Ishtar/Venus star)
export const IconStar: React.FC<IconProps & { filled?: boolean }> = ({ className, size = 24, filled = false }) => (
  <IconWrapper className={className} size={size}>
    {/* 8-pointed star */}
    <path
      d="M12 2L13.5 6.5L18 8L13.5 9.5L12 14L10.5 9.5L6 8L10.5 6.5L12 2z"
      stroke="currentColor"
      strokeWidth="2"
      fill={filled ? 'currentColor' : 'none'}
    />
    {/* Inner decoration */}
    <circle cx="12" cy="8" r="1.5" fill={filled ? 'none' : 'currentColor'} opacity="0.3" />
  </IconWrapper>
);

// Arrow Left
export const IconArrowLeft: React.FC<IconProps> = ({ className, size = 24 }) => (
  <IconWrapper className={className} size={size}>
    <path d="M19 12H5M12 19l-7-7 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
  </IconWrapper>
);

// Arrow Right
export const IconArrowRight: React.FC<IconProps> = ({ className, size = 24 }) => (
  <IconWrapper className={className} size={size}>
    <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
  </IconWrapper>
);

// Checkmark
export const IconCheck: React.FC<IconProps> = ({ className, size = 24 }) => (
  <IconWrapper className={className} size={size}>
    <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
  </IconWrapper>
);

// Plus
export const IconPlus: React.FC<IconProps> = ({ className, size = 24 }) => (
  <IconWrapper className={className} size={size}>
    <line x1="12" y1="5" x2="12" y2="19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <line x1="5" y1="12" x2="19" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </IconWrapper>
);


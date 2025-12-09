import React from 'react';
import { IconWrapper } from './ChaldeanIcons';

interface IconProps {
  className?: string;
  size?: number;
}

// --- Greetings & Social ---

export const IconGreeting: React.FC<IconProps> = ({ className, size = 24 }) => (
  <IconWrapper className={className} size={size}>
    {/* Hand with palm showing - Hamsa style */}
    <path 
      d="M12 2C11 2 10 3 10 5V11H8V6C8 5 7 4 6 4C5 4 4 5 4 6V14C4 17.5 7.5 21 12 21C16.5 21 20 17.5 20 14V6C20 5 19 4 18 4C17 4 16 5 16 6V11H14V5C14 3 13 2 12 2Z" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
    />
    {/* Eye in palm */}
    <circle cx="12" cy="14" r="2" stroke="currentColor" strokeWidth="1.5" />
    <path d="M12 13L12 15" stroke="currentColor" strokeWidth="1" />
  </IconWrapper>
);

export const IconDialogue: React.FC<IconProps> = ({ className, size = 24 }) => (
  <IconWrapper className={className} size={size}>
    {/* Speech bubbles with ancient script styling */}
    <path d="M21 11.5C21 16.2 17 20 12 20C10.5 20 9 19.6 7.5 19L3 21L4.5 16.5C3.5 15 3 13.5 3 11.5C3 6.8 7 3 12 3C17 3 21 6.8 21 11.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    {/* Cuneiform lines inside */}
    <line x1="8" y1="10" x2="16" y2="10" stroke="currentColor" strokeWidth="1.5" />
    <line x1="8" y1="13" x2="13" y2="13" stroke="currentColor" strokeWidth="1.5" />
  </IconWrapper>
);

export const IconPeople: React.FC<IconProps> = ({ className, size = 24 }) => (
  <IconWrapper className={className} size={size}>
    {/* Stylized person figures */}
    <circle cx="12" cy="7" r="3" stroke="currentColor" strokeWidth="2" />
    <path d="M6 21V19C6 16.5 8 14 12 14C16 14 18 16.5 18 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    {/* Robe details */}
    <path d="M12 14V21" stroke="currentColor" strokeWidth="1.5" strokeDasharray="2 2" />
  </IconWrapper>
);

// --- Numbers ---

export const IconNumbers: React.FC<IconProps> = ({ className, size = 24 }) => (
  <IconWrapper className={className} size={size}>
    {/* Clay tablet with number marks */}
    <rect x="5" y="4" width="14" height="16" rx="2" stroke="currentColor" strokeWidth="2" />
    {/* Tally marks / Wedges */}
    <path d="M8 8L8 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M10 8L10 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M12 8L12 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M8 13L12 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M12 13L8 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </IconWrapper>
);

export const IconHash: React.FC<IconProps> = ({ className, size = 24 }) => (
  <IconWrapper className={className} size={size}>
    <line x1="8" y1="3" x2="8" y2="21" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <line x1="16" y1="3" x2="16" y2="21" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <line x1="3" y1="9" x2="21" y2="9" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <line x1="3" y1="15" x2="21" y2="15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    {/* Decorative dots at intersections */}
    <circle cx="8" cy="9" r="1" fill="currentColor" />
    <circle cx="16" cy="15" r="1" fill="currentColor" />
  </IconWrapper>
);

// --- Family ---

export const IconFamily: React.FC<IconProps> = ({ className, size = 24 }) => (
  <IconWrapper className={className} size={size}>
    {/* Group of figures under an arch/roof */}
    <path d="M3 12L12 4L21 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <circle cx="9" cy="14" r="2" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="15" cy="14" r="2" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="12" cy="18" r="1.5" stroke="currentColor" strokeWidth="1.5" />
    <path d="M7 21V19C7 18 8 17 9 17" stroke="currentColor" strokeWidth="1.5" />
    <path d="M17 21V19C17 18 16 17 15 17" stroke="currentColor" strokeWidth="1.5" />
  </IconWrapper>
);

// --- Colors ---

export const IconPalette: React.FC<IconProps> = ({ className, size = 24 }) => (
  <IconWrapper className={className} size={size}>
    <path d="M12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22C17.5 22 22 17.5 22 12C22 9 20.5 6.5 18 5L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <circle cx="8" cy="10" r="1.5" fill="currentColor" opacity="0.6" />
    <circle cx="12" cy="7" r="1.5" fill="currentColor" opacity="0.6" />
    <circle cx="16" cy="10" r="1.5" fill="currentColor" opacity="0.6" />
    <path d="M9 17C9 17 10 15 12 15C14 15 15 17 15 17" stroke="currentColor" strokeWidth="1.5" />
  </IconWrapper>
);

export const IconRainbow: React.FC<IconProps> = ({ className, size = 24 }) => (
  <IconWrapper className={className} size={size}>
    <path d="M4 17V15C4 10.6 7.6 7 12 7C16.4 7 20 10.6 20 15V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M7 17V15C7 12.2 9.2 10 12 10C14.8 10 17 12.2 17 15V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.7" />
    <path d="M10 17V15C10 13.9 10.9 13 12 13C13.1 13 14 13.9 14 15V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.4" />
    {/* Sun below */}
    <circle cx="12" cy="19" r="2" fill="currentColor" opacity="0.5" />
  </IconWrapper>
);

// --- Food ---

export const IconFood: React.FC<IconProps> = ({ className, size = 24 }) => (
  <IconWrapper className={className} size={size}>
    {/* Bowl and steam */}
    <path d="M4 10C4 10 4 11 5 14C6 17 8 19 12 19C16 19 18 17 19 14C20 11 20 10 20 10H4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <line x1="4" y1="10" x2="20" y2="10" stroke="currentColor" strokeWidth="2" />
    {/* Steam lines */}
    <path d="M10 4C10 4 9 5 9 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M14 4C14 4 13 5 13 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M12 2C12 2 11 3 11 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </IconWrapper>
);

export const IconFruit: React.FC<IconProps> = ({ className, size = 24 }) => (
  <IconWrapper className={className} size={size}>
    {/* Grapes-like cluster */}
    <circle cx="12" cy="9" r="3" stroke="currentColor" strokeWidth="2" />
    <circle cx="9" cy="13" r="2.5" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="15" cy="13" r="2.5" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="12" cy="17" r="2.5" stroke="currentColor" strokeWidth="1.5" />
    <path d="M12 6V3" stroke="currentColor" strokeWidth="2" />
    <path d="M12 3L15 4" stroke="currentColor" strokeWidth="2" />
  </IconWrapper>
);

export const IconVegetable: React.FC<IconProps> = ({ className, size = 24 }) => (
  <IconWrapper className={className} size={size}>
    {/* Carrot/Root vegetable */}
    <path d="M12 20L7 6C7 6 9 4 12 4C15 4 17 6 17 6L12 20Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M8 6L16 6" stroke="currentColor" strokeWidth="1" />
    <path d="M9 10L15 10" stroke="currentColor" strokeWidth="1" />
    <path d="M10 14L14 14" stroke="currentColor" strokeWidth="1" />
    {/* Leaves */}
    <path d="M12 4V1" stroke="currentColor" strokeWidth="2" />
    <path d="M12 4L9 2" stroke="currentColor" strokeWidth="2" />
    <path d="M12 4L15 2" stroke="currentColor" strokeWidth="2" />
  </IconWrapper>
);

export const IconCooking: React.FC<IconProps> = ({ className, size = 24 }) => (
  <IconWrapper className={className} size={size}>
    {/* Pan */}
    <path d="M15 13H5C4 13 3 14 3 15C3 17 5 19 9 19H11C15 19 17 17 17 15C17 14 16 13 15 13Z" stroke="currentColor" strokeWidth="2" />
    <path d="M17 14L21 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    {/* Fire/Heat */}
    <path d="M7 21L7 22" stroke="currentColor" strokeWidth="2" />
    <path d="M10 21L10 23" stroke="currentColor" strokeWidth="2" />
    <path d="M13 21L13 22" stroke="currentColor" strokeWidth="2" />
  </IconWrapper>
);

// --- Actions ---

export const IconRun: React.FC<IconProps> = ({ className, size = 24 }) => (
  <IconWrapper className={className} size={size}>
    <path d="M13 4L15 9L11 12L15 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="14" cy="4" r="2" stroke="currentColor" strokeWidth="2" />
    <path d="M8 20L11 17L11 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M15 15L13 18L15 21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    {/* Motion lines */}
    <path d="M6 14L4 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M7 17L5 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </IconWrapper>
);

export const IconConjugation: React.FC<IconProps> = ({ className, size = 24 }) => (
  <IconWrapper className={className} size={size}>
    <path d="M4 12C4 12 5 8 8 8C11 8 12 12 12 12C12 12 13 16 16 16C19 16 20 12 20 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M4 12L6 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M20 12L18 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <circle cx="12" cy="12" r="2" fill="currentColor" opacity="0.4" />
  </IconWrapper>
);

export const IconPast: React.FC<IconProps> = ({ className, size = 24 }) => (
  <IconWrapper className={className} size={size}>
    <path d="M12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M12 8V12L9 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M4 12H2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M2 12L5 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </IconWrapper>
);

export const IconPoint: React.FC<IconProps> = ({ className, size = 24 }) => (
  <IconWrapper className={className} size={size}>
    <path d="M22 12L16 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M18 9L22 12L18 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M2 12H12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <circle cx="12" cy="12" r="2" fill="currentColor" />
  </IconWrapper>
);

export const IconConnect: React.FC<IconProps> = ({ className, size = 24 }) => (
  <IconWrapper className={className} size={size}>
    <path d="M10 13C10.5523 13 11 12.5523 11 12C11 11.4477 10.5523 11 10 11H7C5.34315 11 4 12.3431 4 14C4 15.6569 5.34315 17 7 17H10C10.5523 17 11 16.5523 11 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M14 11C13.4477 11 13 11.4477 13 12C13 12.5523 13.4477 13 14 13H17C18.6569 13 20 11.6569 20 10C20 8.34315 18.6569 7 17 7H14C13.4477 7 13 7.44772 13 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <line x1="8" y1="12" x2="16" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </IconWrapper>
);

// --- Time ---

export const IconTime: React.FC<IconProps> = ({ className, size = 24 }) => (
  <IconWrapper className={className} size={size}>
    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
    <path d="M12 7V12L15 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    {/* Sun dial markings */}
    <path d="M12 3V5" stroke="currentColor" strokeWidth="1.5" />
    <path d="M12 19V21" stroke="currentColor" strokeWidth="1.5" />
    <path d="M3 12H5" stroke="currentColor" strokeWidth="1.5" />
    <path d="M19 12H21" stroke="currentColor" strokeWidth="1.5" />
  </IconWrapper>
);

export const IconCalendar: React.FC<IconProps> = ({ className, size = 24 }) => (
  <IconWrapper className={className} size={size}>
    <rect x="3" y="4" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2" />
    <line x1="3" y1="9" x2="21" y2="9" stroke="currentColor" strokeWidth="2" />
    <line x1="8" y1="2" x2="8" y2="6" stroke="currentColor" strokeWidth="2" />
    <line x1="16" y1="2" x2="16" y2="6" stroke="currentColor" strokeWidth="2" />
    <circle cx="8" cy="14" r="1" fill="currentColor" />
    <circle cx="12" cy="14" r="1" fill="currentColor" />
    <circle cx="16" cy="14" r="1" fill="currentColor" />
    <circle cx="8" cy="18" r="1" fill="currentColor" />
    <circle cx="12" cy="18" r="1" fill="currentColor" />
    <circle cx="16" cy="18" r="1" fill="currentColor" />
  </IconWrapper>
);

// --- Nature ---

export const IconSun: React.FC<IconProps> = ({ className, size = 24 }) => (
  <IconWrapper className={className} size={size}>
    <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="2" />
    <path d="M12 2V4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M12 20V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M2 12H4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M20 12H22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M4.93 4.93L6.34 6.34" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M17.66 17.66L19.07 19.07" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M4.93 19.07L6.34 17.66" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M17.66 6.34L19.07 4.93" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </IconWrapper>
);

export const IconMoon: React.FC<IconProps> = ({ className, size = 24 }) => (
  <IconWrapper className={className} size={size}>
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M13 14L14 15L13 16" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.4" />
    <path d="M15 12L16 13L15 14" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.4" />
  </IconWrapper>
);

export const IconCloudSun: React.FC<IconProps> = ({ className, size = 24 }) => (
  <IconWrapper className={className} size={size}>
    <path d="M16.5 16.5L18.5 18.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <circle cx="19" cy="5" r="3" stroke="currentColor" strokeWidth="2" />
    <path d="M18 10C16 10 15 11 14 12C12.5 12 11.5 11 10 11C7 11 5 13.5 5 16C5 18.5 7.5 20 10 20H17C19.5 20 21 18 21 16C21 14 19.5 12.5 18 12.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
  </IconWrapper>
);

export const IconMountain: React.FC<IconProps> = ({ className, size = 24 }) => (
  <IconWrapper className={className} size={size}>
    <path d="M3 20H21L14 4L9 14L6 10L3 20Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    {/* Snow caps */}
    <path d="M14 4L12.5 7.5L14 8L15.5 7.5L14 4" stroke="currentColor" strokeWidth="1.5" fill="none" />
    <path d="M6 10L5 12L6 12.5L7 12L6 10" stroke="currentColor" strokeWidth="1.5" fill="none" />
  </IconWrapper>
);

// --- Animals ---

export const IconDog: React.FC<IconProps> = ({ className, size = 24 }) => (
  <IconWrapper className={className} size={size}>
    <path d="M5 14C5 14 4 13 4 11C4 9 6 8 8 8H11L14 5L15 6L14 9H17C19 9 20 11 20 13V18H18V14H15V18H13V14H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M5 14V18H7V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <circle cx="8" cy="10" r="1" fill="currentColor" />
  </IconWrapper>
);

export const IconBird: React.FC<IconProps> = ({ className, size = 24 }) => (
  <IconWrapper className={className} size={size}>
    <path d="M3 14C3 14 3 9 7 6C11 3 16 3 16 3L18 5L15 7C15 7 19 8 20 10C21 12 18 14 18 14L15 16H9C6 16 3 14 3 14Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M9 16L11 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M14 16L13 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <circle cx="8" cy="8" r="1" fill="currentColor" />
    <path d="M8 11H13" stroke="currentColor" strokeWidth="1.5" />
  </IconWrapper>
);

export const IconRabbit: React.FC<IconProps> = ({ className, size = 24 }) => (
  <IconWrapper className={className} size={size}>
    <path d="M7 14C7 14 6 10 9 7C9 7 8 2 11 2C11 2 12 6 12 7C12 7 15 2 16 4C17 6 14 8 14 9C16 11 18 11 18 14C18 17 15 19 11 19C8 19 7 17 7 14Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M14 19L16 21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M11 19L9 21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <circle cx="10" cy="10" r="1" fill="currentColor" />
  </IconWrapper>
);

export const IconInsect: React.FC<IconProps> = ({ className, size = 24 }) => (
  <IconWrapper className={className} size={size}>
    <path d="M12 19V7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M12 7C13.1 7 14 6.1 14 5C14 3.9 13.1 3 12 3C10.9 3 10 3.9 10 5C10 6.1 10.9 7 12 7Z" stroke="currentColor" strokeWidth="2" />
    <path d="M12 11H18M12 11H6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M12 14L17 16M12 14L7 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M12 17L16 20M12 17L8 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <circle cx="9" cy="4" r="0.5" fill="currentColor" />
    <circle cx="15" cy="4" r="0.5" fill="currentColor" />
  </IconWrapper>
);

// --- Body ---

export const IconBodyParts: React.FC<IconProps> = ({ className, size = 24 }) => (
  <IconWrapper className={className} size={size}>
    {/* Outline of a body or hand/foot */}
    <path d="M12 2C10 2 9 4 9 5V10H8V6C8 5 7 4 6 4C5 4 4 5 4 6V14C4 18 8 22 12 22C16 22 20 18 20 14V6C20 5 19 4 18 4C17 4 16 5 16 6V10H15V5C15 4 14 2 12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M12 14V17" stroke="currentColor" strokeWidth="1.5" />
  </IconWrapper>
);

export const IconBone: React.FC<IconProps> = ({ className, size = 24 }) => (
  <IconWrapper className={className} size={size}>
    <path d="M17 10C17.5 9 18 8.5 19 9C20.5 9.5 20.5 12 19 13L9 19C8 19.5 6 19.5 5 18C4 16.5 4.5 15 5 14L15 8C16 7.5 16.5 8 17 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="6" cy="18" r="0.5" fill="currentColor" />
    <circle cx="19" cy="9" r="0.5" fill="currentColor" />
  </IconWrapper>
);

// --- Clothing ---

export const IconShirt: React.FC<IconProps> = ({ className, size = 24 }) => (
  <IconWrapper className={className} size={size}>
    <path d="M20.38 3.46L16 2L18 6L14 8L12 2L10 8L6 6L8 2L3.62 3.46C2.98 3.67 2.65 4.38 2.86 5.02L5 11.5L8 10L8 21H16L16 10L19 11.5L21.14 5.02C21.35 4.38 21.02 3.67 20.38 3.46Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M12 2V8" stroke="currentColor" strokeWidth="1.5" />
  </IconWrapper>
);

export const IconDress: React.FC<IconProps> = ({ className, size = 24 }) => (
  <IconWrapper className={className} size={size}>
    <path d="M12 2L8 5L4 16L2 22H22L20 16L16 5L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M12 5V22" stroke="currentColor" strokeWidth="1.5" />
    <path d="M8 12H16" stroke="currentColor" strokeWidth="1.5" />
  </IconWrapper>
);

// --- Places & Objects ---

export const IconCity: React.FC<IconProps> = ({ className, size = 24 }) => (
  <IconWrapper className={className} size={size}>
    <path d="M3 21H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M5 21V10L9 8L13 10V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M13 21V7L17 5L20 7V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <rect x="7" y="12" width="2" height="2" fill="currentColor" opacity="0.6" />
    <rect x="7" y="16" width="2" height="2" fill="currentColor" opacity="0.6" />
    <rect x="15" y="10" width="2" height="2" fill="currentColor" opacity="0.6" />
    <rect x="15" y="14" width="2" height="2" fill="currentColor" opacity="0.6" />
  </IconWrapper>
);

export const IconHospital: React.FC<IconProps> = ({ className, size = 24 }) => (
  <IconWrapper className={className} size={size}>
    <path d="M3 21H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M5 21V7H19V21" stroke="currentColor" strokeWidth="2" />
    <path d="M9 21V15H15V21" stroke="currentColor" strokeWidth="2" />
    {/* Cross symbol */}
    <path d="M12 9V13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M10 11H14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </IconWrapper>
);

export const IconSchool: React.FC<IconProps> = ({ className, size = 24 }) => (
  <IconWrapper className={className} size={size}>
    <path d="M4 20h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M12 4L4 9v9h16V9l-8-5z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M12 13V18" stroke="currentColor" strokeWidth="2" />
    <path d="M9 20V12" stroke="currentColor" strokeWidth="1.5" />
    <path d="M15 20V12" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="12" cy="7" r="1.5" stroke="currentColor" strokeWidth="1.5" />
  </IconWrapper>
);

export const IconBackpack: React.FC<IconProps> = ({ className, size = 24 }) => (
  <IconWrapper className={className} size={size}>
    <rect x="5" y="5" width="14" height="16" rx="2" stroke="currentColor" strokeWidth="2" />
    <path d="M9 5V2C9 2 10 2 12 2C14 2 15 2 15 2V5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M5 10H19" stroke="currentColor" strokeWidth="2" />
    <path d="M12 15V19" stroke="currentColor" strokeWidth="2" />
    <circle cx="12" cy="12" r="1" fill="currentColor" />
  </IconWrapper>
);

export const IconBook: React.FC<IconProps> = ({ className, size = 24 }) => (
  <IconWrapper className={className} size={size}>
    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M8 6H16" stroke="currentColor" strokeWidth="1.5" />
    <path d="M8 10H14" stroke="currentColor" strokeWidth="1.5" />
  </IconWrapper>
);

export const IconPencil: React.FC<IconProps> = ({ className, size = 24 }) => (
  <IconWrapper className={className} size={size}>
    <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M14 6l4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </IconWrapper>
);

// --- General ---

export const IconSparkles: React.FC<IconProps> = ({ className, size = 24 }) => (
  <IconWrapper className={className} size={size}>
    <path d="M12 3L13.5 8.5L19 10L13.5 11.5L12 17L10.5 11.5L5 10L10.5 8.5L12 3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M19 17L19.5 18.5L21 19L19.5 19.5L19 21L18.5 19.5L17 19L18.5 18.5L19 17Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M5 19L5.5 20L7 20.5L5.5 21L5 22L4.5 21L3 20.5L4.5 20L5 19Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </IconWrapper>
);

export const IconQuestion: React.FC<IconProps> = ({ className, size = 24 }) => (
  <IconWrapper className={className} size={size}>
    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="12" cy="17" r="0.5" fill="currentColor" />
  </IconWrapper>
);

export const IconStop: React.FC<IconProps> = ({ className, size = 24 }) => (
  <IconWrapper className={className} size={size}>
    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
    <path d="M5 5L19 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </IconWrapper>
);

export const IconEmotionHappy: React.FC<IconProps> = ({ className, size = 24 }) => (
  <IconWrapper className={className} size={size}>
    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
    <path d="M8 14s1.5 2 4 2 4-2 4-2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M9 9h.01" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    <path d="M15 9h.01" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
  </IconWrapper>
);

export const IconEmotionSad: React.FC<IconProps> = ({ className, size = 24 }) => (
  <IconWrapper className={className} size={size}>
    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
    <path d="M16 16s-1.5-2-4-2-4 2-4 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M9 9h.01" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    <path d="M15 9h.01" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
  </IconWrapper>
);

export const IconTravel: React.FC<IconProps> = ({ className, size = 24 }) => (
  <IconWrapper className={className} size={size}>
    <path d="M22 2L11 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M22 2L15 22L11 13L2 9L22 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </IconWrapper>
);

export const IconCompass: React.FC<IconProps> = ({ className, size = 24 }) => (
  <IconWrapper className={className} size={size}>
    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
    <path d="M16.24 7.76L14.12 14.12L7.76 16.24L9.88 9.88L16.24 7.76Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </IconWrapper>
);

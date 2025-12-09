import React from 'react';
import { IconWrapper } from './ChaldeanIcons';

interface IconProps {
  className?: string;
  size?: number;
}

// --- Practice Game Icons ---

export const IconMatchGame: React.FC<IconProps> = ({ className, size = 24 }) => (
  <IconWrapper className={className} size={size}>
    <path d="M10 3H6C4 3 3 4 3 6V10C3 12 4 13 6 13H10C12 13 13 12 13 10V6C13 4 12 3 10 3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M18 11H14C12 11 11 12 11 14V18C11 20 12 21 14 21H18C20 21 21 20 21 18V14C21 12 20 11 18 11Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    {/* Connection/Match line */}
    <path d="M13 13L11 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    {/* Decorative patterns */}
    <circle cx="8" cy="8" r="1.5" fill="currentColor" opacity="0.5" />
    <circle cx="16" cy="16" r="1.5" fill="currentColor" opacity="0.5" />
  </IconWrapper>
);

export const IconQuizGame: React.FC<IconProps> = ({ className, size = 24 }) => (
  <IconWrapper className={className} size={size}>
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M12 7v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M12 13v.01" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    <path d="M10 9h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </IconWrapper>
);

export const IconListeningGame: React.FC<IconProps> = ({ className, size = 24 }) => (
  <IconWrapper className={className} size={size}>
    <path d="M3 18v-6a9 9 0 0 1 18 0v6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    {/* Sound waves */}
    <path d="M12 6v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M12 14v.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    {/* Ancient decoration */}
    <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" opacity="0.5" />
  </IconWrapper>
);

export const IconFlashcardsGame: React.FC<IconProps> = ({ className, size = 24 }) => (
  <IconWrapper className={className} size={size}>
    <rect x="5" y="2" width="14" height="16" rx="2" transform="rotate(5 12 10)" stroke="currentColor" strokeWidth="2" strokeOpacity="0.5" />
    <rect x="5" y="6" width="14" height="16" rx="2" className="bg-gray-900" stroke="currentColor" strokeWidth="2" />
    {/* Card Content Lines */}
    <line x1="9" y1="11" x2="15" y2="11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <line x1="9" y1="15" x2="13" y2="15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </IconWrapper>
);

export const IconSpeedGame: React.FC<IconProps> = ({ className, size = 24 }) => (
  <IconWrapper className={className} size={size}>
    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
    <path d="M12 7v5l3 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    {/* Speed lines / Lightning */}
    <path d="M19 12l2-2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M5 12l-2-2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M12 3v-1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    {/* Inner tick marks */}
    <path d="M12 17v1" stroke="currentColor" strokeWidth="1.5" opacity="0.5" />
    <path d="M17 12h1" stroke="currentColor" strokeWidth="1.5" opacity="0.5" />
    <path d="M7 12h-1" stroke="currentColor" strokeWidth="1.5" opacity="0.5" />
  </IconWrapper>
);


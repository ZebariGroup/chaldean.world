import React from 'react';
import { IconLessons } from './ChaldeanIcons';

// Map emoji to custom icon components
const emojiToIcon: Record<string, React.ComponentType<{ className?: string; size?: number }>> = {
  '📚': IconLessons,
  '👋': IconLessons, // Greetings
  '🔢': IconLessons, // Numbers
  '👨‍👩‍👧‍👦': IconLessons, // Family
  '🎨': IconLessons, // Colors
  '🍽️': IconLessons, // Food
  '🏃': IconLessons, // Actions
  '📅': IconLessons, // Time
  '🐕': IconLessons, // Animals
  '🌤️': IconLessons, // Weather
  '👀': IconLessons, // Body parts
  '🏠': IconLessons, // Home
  '👕': IconLessons, // Clothing
  '✨': IconLessons, // General
  '#️⃣': IconLessons, // Numbers
  '🎒': IconLessons, // Objects
  '🏙️': IconLessons, // Places
  '👨‍⚕️': IconLessons, // Professions
  '🎭': IconLessons, // Activities
  '✈️': IconLessons, // Travel
  '🏥': IconLessons, // Places
  '👨‍🍳': IconLessons, // Professions
  '🌈': IconLessons, // Colors
  '📆': IconLessons, // Calendar
  '🌦️': IconLessons, // Weather
  '🍇': IconLessons, // Food
  '🥕': IconLessons, // Food
  '🍳': IconLessons, // Food
  '🐰': IconLessons, // Animals
  '🏃‍♂️': IconLessons, // Actions
  '👤': IconLessons, // People
  '🦴': IconLessons, // Body
  '👉': IconLessons, // Actions
  '🏔️': IconLessons, // Places
  '📝': IconLessons, // Writing
  '💬': IconLessons, // Communication
  '👗': IconLessons, // Clothing
  '❤️': IconLessons, // Emotions
  '🐝': IconLessons, // Animals
  '🦅': IconLessons, // Animals
  '🔄': IconLessons, // Actions
  '⏮️': IconLessons, // Navigation
  '❓': IconLessons, // Questions
  '🚫': IconLessons, // Negation
  '🤝': IconLessons, // Social
  '🧭': IconLessons, // Navigation
  '🔗': IconLessons, // Connections
  '⏭️': IconLessons, // Navigation
  '💭': IconLessons, // Thoughts
  '🎯': IconLessons, // Target/Practice
};

interface IconRendererProps {
  icon?: string;
  className?: string;
  size?: number;
}

/**
 * Renders either a custom icon component or falls back to emoji
 * This allows gradual migration from emoji to custom icons
 */
export const IconRenderer: React.FC<IconRendererProps> = ({ icon, className = '', size = 24 }) => {
  if (!icon) {
    return <IconLessons className={className} size={size} />;
  }

  const IconComponent = emojiToIcon[icon];
  
  if (IconComponent) {
    return <IconComponent className={className} size={size} />;
  }

  // Fallback to emoji if no custom icon exists
  return <span className={className} style={{ fontSize: size }}>{icon}</span>;
};


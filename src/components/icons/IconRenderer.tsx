import React from 'react';
import { IconLessons, IconHome } from './ChaldeanIcons';
import {
  IconGreeting, IconDialogue, IconPeople, IconNumbers, IconHash, IconFamily,
  IconPalette, IconRainbow, IconFood, IconFruit, IconVegetable, IconCooking,
  IconRun, IconConjugation, IconPast, IconPoint, IconConnect, IconTime,
  IconCalendar, IconCloudSun, IconMountain, IconDog,
  IconBird, IconRabbit, IconInsect, IconBodyParts, IconBone, IconShirt,
  IconDress, IconCity, IconHospital, IconBackpack, IconBook,
  IconPencil, IconSparkles, IconQuestion, IconStop, IconEmotionHappy,
  IconTravel, IconCompass
} from './LessonIcons';

// Map emoji to custom icon components
const emojiToIcon: Record<string, React.ComponentType<{ className?: string; size?: number }>> = {
  '📚': IconLessons,
  '👋': IconGreeting, // Greetings
  '🔢': IconNumbers, // Numbers
  '👨‍👩‍👧‍👦': IconFamily, // Family
  '🎨': IconPalette, // Colors
  '🍽️': IconFood, // Food
  '🏃': IconRun, // Actions
  '📅': IconCalendar, // Time
  '🐕': IconDog, // Animals
  '🌤️': IconCloudSun, // Weather
  '👀': IconBodyParts, // Body parts
  '🏠': IconHome, // Home
  '👕': IconShirt, // Clothing
  '✨': IconSparkles, // General
  '#️⃣': IconHash, // Numbers
  '🎒': IconBackpack, // Objects
  '🏙️': IconCity, // Places
  '👨‍⚕️': IconHospital, // Professions (Doctor)
  '🎭': IconEmotionHappy, // Activities/Emotions
  '✈️': IconTravel, // Travel
  '🏥': IconHospital, // Places
  '👨‍🍳': IconCooking, // Professions (Chef)
  '🌈': IconRainbow, // Colors
  '📆': IconCalendar, // Calendar
  '🌦️': IconCloudSun, // Weather
  '🍇': IconFruit, // Food
  '🥕': IconVegetable, // Food
  '🍳': IconCooking, // Food
  '🐰': IconRabbit, // Animals
  '🏃‍♂️': IconRun, // Actions
  '👤': IconPeople, // People
  '🦴': IconBone, // Body
  '👉': IconPoint, // Actions
  '🏔️': IconMountain, // Places
  '📝': IconPencil, // Writing
  '💬': IconDialogue, // Communication
  '👗': IconDress, // Clothing
  '❤️': IconEmotionHappy, // Emotions
  '🐝': IconInsect, // Animals
  '🦅': IconBird, // Animals
  '🔄': IconConjugation, // Actions
  '⏮️': IconPast, // Navigation
  '❓': IconQuestion, // Questions
  '🚫': IconStop, // Negation
  '🤝': IconConnect, // Social
  '🧭': IconCompass, // Navigation
  '🔗': IconConnect, // Connections
  '⏭️': IconConnect, // Navigation
  '💭': IconDialogue, // Thoughts
  '🎯': IconSparkles, // Target/Practice
  '😊': IconEmotionHappy,
  '📖': IconBook,
  '✍️': IconPencil,
  '📍': IconPoint,
  '⏰': IconTime,
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

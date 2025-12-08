/**
 * Migration script to populate lessons table from hardcoded lessons.ts file
 * Run with: npx tsx scripts/migrate-lessons.ts
 */

import { createClient } from '@supabase/supabase-js';
import { lessonsData } from '../src/data/lessons';
import { dictionaryData } from '../src/data/dictionary';

const supabaseUrl = process.env.VITE_SUPABASE_URL || 'http://127.0.0.1:54321';
const supabaseKey = process.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZS1kZW1vIiwicm9sZSI6ImFub24iLCJleHAiOjE5ODM4MTI5OTZ9.CRXP1A7WOeoJeXxjNni43kdQwgnWNReilDMblYTn_I0';

const supabase = createClient(supabaseUrl, supabaseKey);

async function migrateLessons() {
  console.log('Starting lessons migration...');
  
  for (const lesson of lessonsData) {
    console.log(`Migrating lesson: ${lesson.title} (ID: ${lesson.id})`);
    
    // Insert lesson
    const { data: lessonRecord, error: lessonError } = await supabase
      .from('lessons')
      .insert({
        id: lesson.id,
        title: lesson.title,
        description: lesson.description,
        level: lesson.level,
        xp_reward: lesson.xpReward,
        icon: lesson.icon,
        display_order: lesson.id,
      })
      .select()
      .single();

    if (lessonError) {
      console.error(`Error inserting lesson ${lesson.id}:`, lessonError);
      continue;
    }

    // Insert vocabulary - match words to dictionary entries in database
    for (let i = 0; i < lesson.vocabulary.length; i++) {
      const vocab = lesson.vocabulary[i];
      
      // Query database for matching dictionary entry by word
      let { data: dictEntries, error: dictError } = await supabase
        .from('dictionary')
        .select('id')
        .ilike('word', vocab.word)
        .limit(1);

      if (dictError || !dictEntries || dictEntries.length === 0) {
        // Try to find by translation
        const { data: dictEntriesByTranslation } = await supabase
          .from('dictionary')
          .select('id')
          .ilike('translation', vocab.translation)
          .limit(1);
        
        if (dictEntriesByTranslation && dictEntriesByTranslation.length > 0) {
          const { error: vocabError } = await supabase
            .from('lesson_vocabulary')
            .insert({
              lesson_id: lesson.id,
              dictionary_id: dictEntriesByTranslation[0].id,
              display_order: i,
            });
          
          if (vocabError) {
            console.error(`Error inserting vocabulary for ${vocab.word}:`, vocabError);
          } else {
            console.log(`  Linked vocabulary: ${vocab.word} (by translation)`);
          }
        } else {
          console.warn(`  Skipping vocabulary: ${vocab.word} - no dictionary match found`);
        }
        continue;
      }

      const { error: vocabError } = await supabase
        .from('lesson_vocabulary')
        .insert({
          lesson_id: lesson.id,
          dictionary_id: dictEntries[0].id,
          display_order: i,
        });

      if (vocabError) {
        console.error(`Error inserting vocabulary for ${vocab.word}:`, vocabError);
      } else {
        console.log(`  Linked vocabulary: ${vocab.word}`);
      }
    }

    // Insert questions
    for (let i = 0; i < lesson.content.length; i++) {
      const question = lesson.content[i];
      
      const { error: questionError } = await supabase
        .from('lesson_questions')
        .insert({
          lesson_id: lesson.id,
          question_type: question.type,
          question: question.question,
          options: question.options || null,
          correct_answer: question.correctAnswer,
          display_order: i,
        });

      if (questionError) {
        console.error(`Error inserting question ${question.id}:`, questionError);
      } else {
        console.log(`  Inserted question: ${question.question.substring(0, 50)}...`);
      }
    }

    console.log(`✓ Completed lesson: ${lesson.title}\n`);
  }

  console.log('Migration complete!');
}

migrateLessons().catch(console.error);


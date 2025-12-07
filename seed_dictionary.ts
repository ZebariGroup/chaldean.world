// Seed script to populate dictionary table from static data
import { createClient } from '@supabase/supabase-js';
import { dictionaryData } from './src/data/dictionary';

const supabaseUrl = 'http://127.0.0.1:54321';
const supabaseServiceKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZS1kZW1vIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImV4cCI6MTk4MzgxMjk5Nn0.EGIM96RAZx35lJzdJsyH-qQwv8Hdp7fsn3W0YpN81IU';

const supabase = createClient(supabaseUrl, supabaseServiceKey);

async function seedDictionary() {
  console.log('Starting dictionary seed...');
  console.log(`Total entries to seed: ${dictionaryData.length}`);

  // Clear existing data
  const { error: deleteError } = await supabase
    .from('dictionary')
    .delete()
    .neq('id', '00000000-0000-0000-0000-000000000000'); // Delete all

  if (deleteError) {
    console.error('Error clearing dictionary:', deleteError);
    process.exit(1);
  }

  console.log('Cleared existing dictionary data');

  // Insert in batches of 100
  const batchSize = 100;
  for (let i = 0; i < dictionaryData.length; i += batchSize) {
    const batch = dictionaryData.slice(i, i + batchSize);
    
    const { error } = await supabase
      .from('dictionary')
      .insert(batch);

    if (error) {
      console.error(`Error inserting batch ${i / batchSize + 1}:`, error);
      process.exit(1);
    }

    console.log(`Inserted batch ${i / batchSize + 1} (${Math.min(i + batchSize, dictionaryData.length)} / ${dictionaryData.length})`);
  }

  console.log('✅ Dictionary seeded successfully!');
  process.exit(0);
}

seedDictionary();


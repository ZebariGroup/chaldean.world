#!/usr/bin/env python3
import re

# Essential words that should be in any basic Chaldean dictionary
essential_words = [
    # Days of the week
    { "word": "Khadshaba", "translation": "Sunday", "phonetic": "Khad-sha-ba", "script": "ܚܕܫܒܐ", "category": "time" },
    { "word": "Trayshaba", "translation": "Monday", "phonetic": "Tray-sha-ba", "script": "ܬܪܝܢܫܒܐ", "category": "time" },
    { "word": "Tlathashaba", "translation": "Tuesday", "phonetic": "Tla-tha-sha-ba", "script": "ܬܠܬܫܒܐ", "category": "time" },
    { "word": "Arbashaba", "translation": "Wednesday", "phonetic": "Ar-ba-sha-ba", "script": "ܐܪܒܥܫܒܐ", "category": "time" },
    { "word": "Khamshashaba", "translation": "Thursday", "phonetic": "Kham-sha-sha-ba", "script": "ܚܡܫܫܒܐ", "category": "time" },
    { "word": "Arubta", "translation": "Friday", "phonetic": "A-rub-ta", "script": "ܥܪܘܒܬܐ", "category": "time" },
    
    # Common greetings/phrases
    { "word": "Sapra tawa", "translation": "Good morning", "phonetic": "Sap-ra ta-wa", "script": "ܨܦܪܐ ܛܒܐ", "category": "greeting" },
    { "word": "Ramsha tawa", "translation": "Good evening", "phonetic": "Ram-sha ta-wa", "script": "ܪܡܫܐ ܛܒܐ", "category": "greeting" },
    { "word": "Lelya tawa", "translation": "Good night", "phonetic": "Lel-ya ta-wa", "script": "ܠܠܝܐ ܛܒܐ", "category": "greeting" },
    { "word": "Khadi khawit", "translation": "I'm fine", "phonetic": "Kha-di kha-wit", "script": "ܚܕܝ ܚܘܝܬ", "category": "phrase" },
    { "word": "Raba basima", "translation": "Very good/Thank you very much", "phonetic": "Ra-ba ba-si-ma", "script": "ܪܒܐ ܒܣܝܡܐ", "category": "phrase" },
    { "word": "Layt mushkilta", "translation": "No problem", "phonetic": "Layt mush-kil-ta", "script": "ܠܝܬ ܡܫܟܠܬܐ", "category": "phrase" },
    { "word": "Khoshakha", "translation": "I love you (to male)", "phonetic": "Kho-sha-kha", "script": "ܚܘܒܟܐ", "category": "phrase" },
    { "word": "Khoshakh", "translation": "I love you (to female)", "phonetic": "Kho-shakh", "script": "ܚܘܒܟ", "category": "phrase" },
    
    # More common verbs
    { "word": "Khawin", "translation": "To show", "phonetic": "Kha-win", "script": "ܚܘܝ", "category": "verb" },
    { "word": "Pakhi", "translation": "To become", "phonetic": "Pa-khi", "script": "ܦܟܝ", "category": "verb" },
    { "word": "Nashiq", "translation": "To need", "phonetic": "Na-shiq", "script": "ܢܫܩ", "category": "verb" },
    { "word": "Mashkhin", "translation": "To be able/can", "phonetic": "Mash-khin", "script": "ܡܫܟܚ", "category": "verb" },
    { "word": "Hamzim", "translation": "To speak/talk", "phonetic": "Ham-zim", "script": "ܗܡܙܡ", "category": "verb" },
    
    # Common adjectives
    { "word": "Tawa", "translation": "Good", "phonetic": "Ta-wa", "script": "ܛܒܐ", "category": "adjective" },
    { "word": "Bisha", "translation": "Bad/Evil", "phonetic": "Bi-sha", "script": "ܒܝܫܐ", "category": "adjective" },
    { "word": "Qaleela", "translation": "Little/Few", "phonetic": "Qa-lee-la", "script": "ܩܠܝܠܐ", "category": "adjective" },
    { "word": "Khelta", "translation": "Sweet", "phonetic": "Khel-ta", "script": "ܚܠܝܐ", "category": "adjective" },
    { "word": "Mareera", "translation": "Bitter", "phonetic": "Ma-ree-ra", "script": "ܡܪܝܪܐ", "category": "adjective" },
    { "word": "Khamima", "translation": "Hot (temperature)", "phonetic": "Kha-mi-ma", "script": "ܚܡܝܡܐ", "category": "adjective" },
    { "word": "Qareera", "translation": "Cold", "phonetic": "Qa-ree-ra", "script": "ܩܪܝܪܐ", "category": "adjective" },
    
    # Essential nouns
    { "word": "Shma", "translation": "Name", "phonetic": "Sh-ma", "script": "ܫܡܐ", "category": "noun" },
    { "word": "Lishana", "translation": "Language/Tongue", "phonetic": "Li-sha-na", "script": "ܠܫܢܐ", "category": "noun" },
    { "word": "Atra", "translation": "Country/Place", "phonetic": "At-ra", "script": "ܐܬܪܐ", "category": "noun" },
    { "word": "Umtha", "translation": "Nation/People", "phonetic": "Um-tha", "script": "ܐܘܡܬܐ", "category": "noun" },
    { "word": "Zuza", "translation": "Money", "phonetic": "Zu-za", "script": "ܙܘܙܐ", "category": "noun" },
    { "word": "Egartha", "translation": "Letter", "phonetic": "E-gar-tha", "script": "ܐܓܪܬܐ", "category": "noun" },
    { "word": "Miltha", "translation": "Word/Thing", "phonetic": "Mil-tha", "script": "ܡܠܬܐ", "category": "noun" },
    { "word": "Shuraya", "translation": "Beginning", "phonetic": "Shu-ra-ya", "script": "ܫܘܪܝܐ", "category": "noun" },
    { "word": "Sopa", "translation": "End", "phonetic": "So-pa", "script": "ܣܘܦܐ", "category": "noun" },
    
    # More numbers (11-20)
    { "word": "Khdessar", "translation": "Eleven", "phonetic": "Khd-es-sar", "script": "ܚܕܥܣܪ", "category": "number" },
    { "word": "Tressar", "translation": "Twelve", "phonetic": "Tres-sar", "script": "ܬܪܥܣܪ", "category": "number" },
    { "word": "Tlathessar", "translation": "Thirteen", "phonetic": "Tla-thes-sar", "script": "ܬܠܬܥܣܪ", "category": "number" },
    { "word": "Esrin", "translation": "Twenty", "phonetic": "Es-rin", "script": "ܥܣܪܝܢ", "category": "number" },
    { "word": "Tlatin", "translation": "Thirty", "phonetic": "Tla-tin", "script": "ܬܠܬܝܢ", "category": "number" },
    { "word": "Arb'in", "translation": "Forty", "phonetic": "Arb-in", "script": "ܐܪܒܥܝܢ", "category": "number" },
    { "word": "Khamšin", "translation": "Fifty", "phonetic": "Kham-šin", "script": "ܚܡܫܝܢ", "category": "number" },
    
    # More body parts
    { "word": "Aina", "translation": "Eye", "phonetic": "Ai-na", "script": "ܥܝܢܐ", "category": "body" },
    { "word": "Edna", "translation": "Ear", "phonetic": "Ed-na", "script": "ܐܕܢܐ", "category": "body" },
    { "word": "Khurṭma", "translation": "Nose", "phonetic": "Khur-ṭma", "script": "ܚܪܛܡܐ", "category": "body" },
    { "word": "Puma", "translation": "Mouth", "phonetic": "Pu-ma", "script": "ܦܘܡܐ", "category": "body" },
    { "word": "Shina", "translation": "Tooth", "phonetic": "Shi-na", "script": "ܫܢܐ", "category": "body" },
    { "word": "Lishana", "translation": "Tongue", "phonetic": "Li-sha-na", "script": "ܠܫܢܐ", "category": "body" },
    { "word": "Regla", "translation": "Foot/Leg", "phonetic": "Reg-la", "script": "ܪܓܠܐ", "category": "body" },
    { "word": "Etsba", "translation": "Finger", "phonetic": "Ets-ba", "script": "ܐܨܒܥܐ", "category": "body" },
]

# Read the current dictionary
with open('src/data/dictionary.ts', 'r', encoding='utf-8') as f:
    content = f.read()

# Extract existing words to avoid adding duplicates
existing_words = set()
for match in re.finditer(r'word:\s*"([^"]+)".*script:\s*"([^"]+)"', content):
    word, script = match.groups()
    existing_words.add((word, script))

# Find where to insert (after the last entry, before the closing ];)
closing_bracket_pos = content.rfind('];')

# Prepare new entries to add
new_entries = []
for entry in essential_words:
    key = (entry['word'], entry['script'])
    if key not in existing_words:
        entry_str = f'  {{ word: "{entry["word"]}", translation: "{entry["translation"]}", phonetic: "{entry["phonetic"]}", script: "{entry["script"]}", category: "{entry["category"]}" }},'
        new_entries.append(entry_str)
        print(f"Adding: {entry['word']} = {entry['translation']}")

if new_entries:
    # Insert new entries before the closing bracket
    new_content = content[:closing_bracket_pos] + '\n  // Additional essential words\n' + '\n'.join(new_entries) + '\n' + content[closing_bracket_pos:]
    
    with open('src/data/dictionary.ts', 'w', encoding='utf-8') as f:
        f.write(new_content)
    
    print(f"\n✓ Added {len(new_entries)} missing essential words to dictionary")
else:
    print("\n✓ All essential words already present in dictionary")





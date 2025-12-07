#!/usr/bin/env python3
import re

# Read the file
with open('src/data/dictionary.ts', 'r', encoding='utf-8') as f:
    lines = f.readlines()

# Track seen entries to remove exact duplicates
seen = set()
output_lines = []
skip_next_blank = False

for i, line in enumerate(lines):
    # Extract entry if it's a dictionary entry line
    match = re.search(r'\{\s*word:\s*"([^"]+)".*script:\s*"([^"]+)".*category:\s*"([^"]+)"', line)
    
    if match:
        word, script, category = match.groups()
        entry_key = (word, script)
        
        # Skip exact duplicates
        if entry_key in seen:
            print(f"Removing duplicate: {word} ({script})")
            skip_next_blank = True
            continue
        seen.add(entry_key)
        
        # Fix remaining miscategorized adjectives
        new_line = line
        
        # Check for patterns in the translation to determine proper category
        if 'category: "adjective"' in line:
            # Check what the translation is
            trans_match = re.search(r'translation:\s*"([^"]+)"', line)
            if trans_match:
                translation = trans_match.group(1)
                
                # Verbs (To ...)
                if translation.startswith('To '):
                    new_line = line.replace('category: "adjective"', 'category: "verb"')
                    print(f"Fixed verb: {word} = {translation}")
                # Numbers
                elif any(num in translation for num in ['Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 
                                                         'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen',
                                                         'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty',
                                                         'Seventy', 'Eighty', 'Ninety', 'Hundred', 'Thousand']):
                    new_line = line.replace('category: "adjective"', 'category: "number"')
                    print(f"Fixed number: {word} = {translation}")
                # Body parts
                elif any(body in translation for body in ['Eye', 'Ear', 'Nose', 'Mouth', 'Tooth', 'Teeth',
                                                           'Tongue', 'Neck', 'Shoulder', 'Back', 'Chest',
                                                           'Stomach', 'Arm', 'Leg', 'Foot', 'Feet', 'Finger',
                                                           'Toe', 'Skin', 'Hair', 'Beard']):
                    new_line = line.replace('category: "adjective"', 'category: "body"')
                    print(f"Fixed body: {word} = {translation}")
                # Nature
                elif any(nat in translation for nat in ['Sun', 'Moon', 'Star', 'Sky', 'Cloud', 'Rain', 'Snow',
                                                         'Wind', 'Storm', 'Lightning', 'Thunder', 'Fire',
                                                         'Water', 'Earth', 'Stone', 'Rock', 'Sand', 'Dust',
                                                         'Ice', 'Frost', 'Dew', 'Fog', 'Mist']):
                    new_line = line.replace('category: "adjective"', 'category: "nature"')
                    print(f"Fixed nature: {word} = {translation}")
                # Nouns (general objects, concepts)
                elif any(noun in translation for noun in ['Thing', 'Name', 'Word', 'Question', 'Answer',
                                                           'Problem', 'Solution', 'Idea', 'Money', 'Price',
                                                           'Gift', 'Letter', 'Message', 'News', 'Story',
                                                           'Song', 'Music', 'Picture', 'Photo', 'Door',
                                                           'Window', 'Wall', 'Floor', 'Ceiling', 'Roof',
                                                           'Room', 'Kitchen', 'Bathroom', 'Bedroom', 'Garden',
                                                           'Street', 'Bridge', 'Building']):
                    new_line = line.replace('category: "adjective"', 'category: "noun"')
                    print(f"Fixed noun: {word} = {translation}")
                # Phrases
                elif any(phrase in translation for phrase in ['Excuse me', 'Sorry', 'Help', 'Welcome',
                                                               'Congratulations', 'Good luck', 'God willing',
                                                               'See you', 'Take care', 'Bless you']):
                    new_line = line.replace('category: "adjective"', 'category: "phrase"')
                    print(f"Fixed phrase: {word} = {translation}")
        
        output_lines.append(new_line)
    elif skip_next_blank and line.strip() == '':
        # Skip blank line after duplicate
        skip_next_blank = False
        continue
    else:
        output_lines.append(line)
        skip_next_blank = False

# Write back
with open('src/data/dictionary.ts', 'w', encoding='utf-8') as f:
    f.writelines(output_lines)

print("\nComprehensive fixes applied!")
print(f"Total entries remaining: {len(seen)}")





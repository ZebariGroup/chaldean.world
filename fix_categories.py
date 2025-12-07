#!/usr/bin/env python3
import re

# Read the file
with open('src/data/dictionary.ts', 'r', encoding='utf-8') as f:
    content = f.read()

# Define category mappings based on translations
category_rules = [
    # Home items
    (r'category: "adjective".*// (Plate|Spoon|Fork|Knife|Cup|Glass|Key)', 'category: "home"'),
    
    # Clothing
    (r'"(Shirt|Pants|Shoe|Hat/Cap)".*category: "adjective"', 'category: "clothing"'),
    
    # Travel/Places continued
    (r'"(Passport|Ticket|Luggage)".*category: "adjective"', 'category: "travel"'),
    (r'"Grandfather\'s House".*category: "adjective"', 'category: "place"'),
    
    # Time words
    (r'"(Hour/Clock|Minute|Year|Month|Now|Later|Before|Morning|Evening)".*category: "adjective"', 'category: "time"'),
    
    # Emotions
    (r'"(Happy|Sad|Angry|Scared)".*category: "adjective"', 'category: "emotion"'),
    
    # Nature
    (r'"(Sun|Moon|Star|Sky|Sea|River|Mountain|Tree|Flower|Rain|Snow|Wind)".*category: "adjective"', 'category: "nature"'),
]

# Apply all rules - this is a simplified approach
# Actually, let's be more precise with line-by-line processing

lines = content.split('\n')
output_lines = []

for line in lines:
    new_line = line
    
    # Home items
    if 'category: "adjective"' in line:
        if any(word in line for word in ['Plate', 'Spoon', 'Fork', 'Knife', 'Cup', 'Glass', 'Key']):
            new_line = line.replace('category: "adjective"', 'category: "home"')
        # Clothing
        elif any(word in line for word in ['Shirt', 'Pants', 'Shoe', 'Hat/Cap']):
            new_line = line.replace('category: "adjective"', 'category: "clothing"')
        # Travel
        elif any(word in line for word in ['Passport', 'Ticket', 'Luggage']):
            new_line = line.replace('category: "adjective"', 'category: "travel"')
        # Places
        elif "Grandfather's House" in line:
            new_line = line.replace('category: "adjective"', 'category: "place"')
        # Time
        elif any(word in line for word in ['Hour/Clock', 'Minute', 'Year', 'Month', 'Now', 'Later/After', 'Before', 'Morning', 'Evening']):
            new_line = line.replace('category: "adjective"', 'category: "time"')
        # Emotions
        elif any(word in line for word in ['Happy', 'Sad', 'Angry', 'Scared']):
            new_line = line.replace('category: "adjective"', 'category: "emotion"')
        # Nature
        elif any(word in line for word in ['Sun', 'Moon', 'Star', 'Sky', 'Sea', 'River', 'Mountain', 'Tree', 'Flower', 'Rain', 'Snow', 'Wind', 'Cloud', 'Fire', 'Water', 'Earth', 'Stone']):
            new_line = line.replace('category: "adjective"', 'category: "nature"')
        # Numbers that weren't caught earlier
        elif any(word in line for word in ['Hundred', 'Thousand', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety']):
            new_line = line.replace('category: "adjective"', 'category: "number"')
        # Body parts
        elif any(word in line for word in ['Eye', 'Ear', 'Nose', 'Mouth', 'Tooth', 'Tongue', 'Neck', 'Shoulder', 'Arm', 'Leg', 'Foot', 'Finger', 'Face']):
            new_line = line.replace('category: "adjective"', 'category: "body"')
    
    output_lines.append(new_line)

# Write back
with open('src/data/dictionary.ts', 'w', encoding='utf-8') as f:
    f.write('\n'.join(output_lines))

print("Category fixes applied!")





#!/usr/bin/env python3
"""
Script to add images to all dictionary entries that don't have them.
Uses Unsplash URLs based on translation keywords and categories.
"""

import re
import sys

# Read the dictionary file
with open('src/data/dictionary.ts', 'r') as f:
    content = f.read()

# Function to get image URL based on translation and category
def get_image_url(translation, category):
    trans_lower = translation.lower()
    
    # Category-specific images
    category_images = {
        'greeting': 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&auto=format&fit=crop&q=60',
        'question': 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=800&auto=format&fit=crop&q=60',
        'preposition': 'https://images.unsplash.com/photo-1522661067900-ab829854a57f?w=800&auto=format&fit=crop&q=60',
        'conjunction': 'https://images.unsplash.com/photo-1473181488821-2d23949a045a?w=800&auto=format&fit=crop&q=60',
        'phrase': 'https://images.unsplash.com/photo-1509099836639-18ba02e2e1ba?w=800&auto=format&fit=crop&q=60',
        'adjective': 'https://images.unsplash.com/photo-1464375117522-1311d6a5b81f?w=800&auto=format&fit=crop&q=60',
        'color': 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=800&auto=format&fit=crop&q=60',
        'family': 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=800&auto=format&fit=crop&q=60',
        'noun': 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=800&auto=format&fit=crop&q=60',
        'verb': 'https://images.unsplash.com/photo-1489515217757-5fd1be406fef?w=800&auto=format&fit=crop&q=60',
        'number': 'https://images.unsplash.com/photo-1529676468690-a442a6c78fcd?w=800&auto=format&fit=crop&q=60',
        'time': 'https://images.unsplash.com/photo-1501139083538-0139583c060f?w=800&auto=format&fit=crop&q=60',
        'animal': 'https://images.unsplash.com/photo-1501706362039-c06b2d715385?w=800&auto=format&fit=crop&q=60',
        'nature': 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&auto=format&fit=crop&q=60',
        'body': 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&auto=format&fit=crop&q=60',
        'home': 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800&auto=format&fit=crop&q=60',
        'profession': 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&auto=format&fit=crop&q=60',
        'clothing': 'https://images.unsplash.com/photo-1495121553079-4c61bcce1894?w=800&auto=format&fit=crop&q=60',
        'emotion': 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=800&auto=format&fit=crop&q=60',
        'travel': 'https://images.unsplash.com/photo-1502920917128-1aa500764b8a?w=800&auto=format&fit=crop&q=60',
        'place': 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=800&auto=format&fit=crop&q=60',
        'food': 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&auto=format&fit=crop&q=60',
    }
    
    # Specific keyword-based images
    keyword_images = {
        # Colors
        'red': 'https://images.unsplash.com/photo-1518893063132-36ae2366d998?w=800&auto=format&fit=crop&q=60',
        'blue': 'https://images.unsplash.com/photo-1519682337058-a94d519337bc?w=800&auto=format&fit=crop&q=60',
        'green': 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&auto=format&fit=crop&q=60',
        'yellow': 'https://images.unsplash.com/photo-1493612276216-ee3925520721?w=800&auto=format&fit=crop&q=60',
        'black': 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&auto=format&fit=crop&q=60',
        'white': 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&auto=format&fit=crop&q=60',
        'orange': 'https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=800&auto=format&fit=crop&q=60',
        'purple': 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=800&auto=format&fit=crop&q=60',
        'pink': 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=800&auto=format&fit=crop&q=60',
        'brown': 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=800&auto=format&fit=crop&q=60',
        'grey': 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=800&auto=format&fit=crop&q=60',
        'gold': 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=800&auto=format&fit=crop&q=60',
        'silver': 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=800&auto=format&fit=crop&q=60',
        
        # Family
        'father': 'https://images.unsplash.com/photo-1511895426328-dc8714191300?w=800&auto=format&fit=crop&q=60',
        'mother': 'https://images.unsplash.com/photo-1511895426328-dc8714191300?w=800&auto=format&fit=crop&q=60',
        'brother': 'https://images.unsplash.com/photo-1511895426328-dc8714191300?w=800&auto=format&fit=crop&q=60',
        'sister': 'https://images.unsplash.com/photo-1511895426328-dc8714191300?w=800&auto=format&fit=crop&q=60',
        'son': 'https://images.unsplash.com/photo-1511895426328-dc8714191300?w=800&auto=format&fit=crop&q=60',
        'daughter': 'https://images.unsplash.com/photo-1511895426328-dc8714191300?w=800&auto=format&fit=crop&q=60',
        'grandfather': 'https://images.unsplash.com/photo-1511895426328-dc8714191300?w=800&auto=format&fit=crop&q=60',
        'grandmother': 'https://images.unsplash.com/photo-1511895426328-dc8714191300?w=800&auto=format&fit=crop&q=60',
        'uncle': 'https://images.unsplash.com/photo-1511895426328-dc8714191300?w=800&auto=format&fit=crop&q=60',
        'husband': 'https://images.unsplash.com/photo-1511895426328-dc8714191300?w=800&auto=format&fit=crop&q=60',
        'wife': 'https://images.unsplash.com/photo-1511895426328-dc8714191300?w=800&auto=format&fit=crop&q=60',
        'child': 'https://images.unsplash.com/photo-1511895426328-dc8714191300?w=800&auto=format&fit=crop&q=60',
        'boy': 'https://images.unsplash.com/photo-1511895426328-dc8714191300?w=800&auto=format&fit=crop&q=60',
        'girl': 'https://images.unsplash.com/photo-1511895426328-dc8714191300?w=800&auto=format&fit=crop&q=60',
        'man': 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&auto=format&fit=crop&q=60',
        'woman': 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&auto=format&fit=crop&q=60',
        'person': 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&auto=format&fit=crop&q=60',
        'people': 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&auto=format&fit=crop&q=60',
        
        # Numbers
        'one': 'https://images.unsplash.com/photo-1529676468690-a442a6c78fcd?w=800&auto=format&fit=crop&q=60',
        'two': 'https://images.unsplash.com/photo-1529676468690-a442a6c78fcd?w=800&auto=format&fit=crop&q=60',
        'three': 'https://images.unsplash.com/photo-1529676468690-a442a6c78fcd?w=800&auto=format&fit=crop&q=60',
        'four': 'https://images.unsplash.com/photo-1529676468690-a442a6c78fcd?w=800&auto=format&fit=crop&q=60',
        'five': 'https://images.unsplash.com/photo-1529676468690-a442a6c78fcd?w=800&auto=format&fit=crop&q=60',
        'six': 'https://images.unsplash.com/photo-1529676468690-a442a6c78fcd?w=800&auto=format&fit=crop&q=60',
        'seven': 'https://images.unsplash.com/photo-1529676468690-a442a6c78fcd?w=800&auto=format&fit=crop&q=60',
        'eight': 'https://images.unsplash.com/photo-1529676468690-a442a6c78fcd?w=800&auto=format&fit=crop&q=60',
        'nine': 'https://images.unsplash.com/photo-1529676468690-a442a6c78fcd?w=800&auto=format&fit=crop&q=60',
        'ten': 'https://images.unsplash.com/photo-1529676468690-a442a6c78fcd?w=800&auto=format&fit=crop&q=60',
        'eleven': 'https://images.unsplash.com/photo-1529676468690-a442a6c78fcd?w=800&auto=format&fit=crop&q=60',
        'twelve': 'https://images.unsplash.com/photo-1529676468690-a442a6c78fcd?w=800&auto=format&fit=crop&q=60',
        'thirteen': 'https://images.unsplash.com/photo-1529676468690-a442a6c78fcd?w=800&auto=format&fit=crop&q=60',
        'fourteen': 'https://images.unsplash.com/photo-1529676468690-a442a6c78fcd?w=800&auto=format&fit=crop&q=60',
        'fifteen': 'https://images.unsplash.com/photo-1529676468690-a442a6c78fcd?w=800&auto=format&fit=crop&q=60',
        'sixteen': 'https://images.unsplash.com/photo-1529676468690-a442a6c78fcd?w=800&auto=format&fit=crop&q=60',
        'seventeen': 'https://images.unsplash.com/photo-1529676468690-a442a6c78fcd?w=800&auto=format&fit=crop&q=60',
        'eighteen': 'https://images.unsplash.com/photo-1529676468690-a442a6c78fcd?w=800&auto=format&fit=crop&q=60',
        'nineteen': 'https://images.unsplash.com/photo-1529676468690-a442a6c78fcd?w=800&auto=format&fit=crop&q=60',
        'twenty': 'https://images.unsplash.com/photo-1529676468690-a442a6c78fcd?w=800&auto=format&fit=crop&q=60',
        'thirty': 'https://images.unsplash.com/photo-1529676468690-a442a6c78fcd?w=800&auto=format&fit=crop&q=60',
        'forty': 'https://images.unsplash.com/photo-1529676468690-a442a6c78fcd?w=800&auto=format&fit=crop&q=60',
        'fifty': 'https://images.unsplash.com/photo-1529676468690-a442a6c78fcd?w=800&auto=format&fit=crop&q=60',
        'sixty': 'https://images.unsplash.com/photo-1529676468690-a442a6c78fcd?w=800&auto=format&fit=crop&q=60',
        'seventy': 'https://images.unsplash.com/photo-1529676468690-a442a6c78fcd?w=800&auto=format&fit=crop&q=60',
        'eighty': 'https://images.unsplash.com/photo-1529676468690-a442a6c78fcd?w=800&auto=format&fit=crop&q=60',
        'ninety': 'https://images.unsplash.com/photo-1529676468690-a442a6c78fcd?w=800&auto=format&fit=crop&q=60',
        'hundred': 'https://images.unsplash.com/photo-1529676468690-a442a6c78fcd?w=800&auto=format&fit=crop&q=60',
        'thousand': 'https://images.unsplash.com/photo-1529676468690-a442a6c78fcd?w=800&auto=format&fit=crop&q=60',
        
        # Time
        'day': 'https://images.unsplash.com/photo-1501139083538-0139583c060f?w=800&auto=format&fit=crop&q=60',
        'night': 'https://images.unsplash.com/photo-1501139083538-0139583c060f?w=800&auto=format&fit=crop&q=60',
        'today': 'https://images.unsplash.com/photo-1501139083538-0139583c060f?w=800&auto=format&fit=crop&q=60',
        'yesterday': 'https://images.unsplash.com/photo-1501139083538-0139583c060f?w=800&auto=format&fit=crop&q=60',
        'tomorrow': 'https://images.unsplash.com/photo-1501139083538-0139583c060f?w=800&auto=format&fit=crop&q=60',
        'week': 'https://images.unsplash.com/photo-1501139083538-0139583c060f?w=800&auto=format&fit=crop&q=60',
        'month': 'https://images.unsplash.com/photo-1501139083538-0139583c060f?w=800&auto=format&fit=crop&q=60',
        'year': 'https://images.unsplash.com/photo-1501139083538-0139583c060f?w=800&auto=format&fit=crop&q=60',
        'hour': 'https://images.unsplash.com/photo-1501139083538-0139583c060f?w=800&auto=format&fit=crop&q=60',
        'minute': 'https://images.unsplash.com/photo-1501139083538-0139583c060f?w=800&auto=format&fit=crop&q=60',
        'morning': 'https://images.unsplash.com/photo-1501139083538-0139583c060f?w=800&auto=format&fit=crop&q=60',
        'evening': 'https://images.unsplash.com/photo-1501139083538-0139583c060f?w=800&auto=format&fit=crop&q=60',
        'now': 'https://images.unsplash.com/photo-1501139083538-0139583c060f?w=800&auto=format&fit=crop&q=60',
        'before': 'https://images.unsplash.com/photo-1501139083538-0139583c060f?w=800&auto=format&fit=crop&q=60',
        'after': 'https://images.unsplash.com/photo-1501139083538-0139583c060f?w=800&auto=format&fit=crop&q=60',
        'later': 'https://images.unsplash.com/photo-1501139083538-0139583c060f?w=800&auto=format&fit=crop&q=60',
        'always': 'https://images.unsplash.com/photo-1501139083538-0139583c060f?w=800&auto=format&fit=crop&q=60',
        'never': 'https://images.unsplash.com/photo-1501139083538-0139583c060f?w=800&auto=format&fit=crop&q=60',
        'sometimes': 'https://images.unsplash.com/photo-1501139083538-0139583c060f?w=800&auto=format&fit=crop&q=60',
        
        # Nature
        'sun': 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=800&auto=format&fit=crop&q=60',
        'moon': 'https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=800&auto=format&fit=crop&q=60',
        'star': 'https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=800&auto=format&fit=crop&q=60',
        'sky': 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=800&auto=format&fit=crop&q=60',
        'heaven': 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=800&auto=format&fit=crop&q=60',
        'earth': 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&auto=format&fit=crop&q=60',
        'rain': 'https://images.unsplash.com/photo-1527482797697-8795b05a13fe?w=800&auto=format&fit=crop&q=60',
        'snow': 'https://images.unsplash.com/photo-1551524164-6cf77f63edb6?w=800&auto=format&fit=crop&q=60',
        'wind': 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=800&auto=format&fit=crop&q=60',
        'cloud': 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=800&auto=format&fit=crop&q=60',
        'lightning': 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=800&auto=format&fit=crop&q=60',
        'thunder': 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=800&auto=format&fit=crop&q=60',
        'tree': 'https://images.unsplash.com/photo-1513836279014-a89f7a760af0?w=800&auto=format&fit=crop&q=60',
        'flower': 'https://images.unsplash.com/photo-1490750967868-58cb75065ed4?w=800&auto=format&fit=crop&q=60',
        'river': 'https://images.unsplash.com/photo-1437482078695-73f5ca6c96e2?w=800&auto=format&fit=crop&q=60',
        'sea': 'https://images.unsplash.com/photo-1471922694854-ff1b63b20054?w=800&auto=format&fit=crop&q=60',
        'lake': 'https://images.unsplash.com/photo-1471922694854-ff1b63b20054?w=800&auto=format&fit=crop&q=60',
        'mountain': 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&auto=format&fit=crop&q=60',
        'garden': 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=800&auto=format&fit=crop&q=60',
        'stone': 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&auto=format&fit=crop&q=60',
        'rock': 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&auto=format&fit=crop&q=60',
        'sand': 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&auto=format&fit=crop&q=60',
        'fire': 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=800&auto=format&fit=crop&q=60',
        'cold': 'https://images.unsplash.com/photo-1551524164-6cf77f63edb6?w=800&auto=format&fit=crop&q=60',
        'hot': 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=800&auto=format&fit=crop&q=60',
        'warm': 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=800&auto=format&fit=crop&q=60',
        'heat': 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=800&auto=format&fit=crop&q=60',
        
        # Body parts
        'eye': 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&auto=format&fit=crop&q=60',
        'nose': 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&auto=format&fit=crop&q=60',
        'mouth': 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&auto=format&fit=crop&q=60',
        'ear': 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&auto=format&fit=crop&q=60',
        'hand': 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&auto=format&fit=crop&q=60',
        'head': 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&auto=format&fit=crop&q=60',
        'heart': 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&auto=format&fit=crop&q=60',
        'foot': 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&auto=format&fit=crop&q=60',
        'leg': 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&auto=format&fit=crop&q=60',
        'arm': 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&auto=format&fit=crop&q=60',
        'face': 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&auto=format&fit=crop&q=60',
        'tongue': 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&auto=format&fit=crop&q=60',
        'tooth': 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&auto=format&fit=crop&q=60',
        'hair': 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&auto=format&fit=crop&q=60',
        'chest': 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&auto=format&fit=crop&q=60',
        'stomach': 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&auto=format&fit=crop&q=60',
        'belly': 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&auto=format&fit=crop&q=60',
        'back': 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&auto=format&fit=crop&q=60',
        'finger': 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&auto=format&fit=crop&q=60',
        'knee': 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&auto=format&fit=crop&q=60',
        
        # Home items
        'house': 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800&auto=format&fit=crop&q=60',
        'door': 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800&auto=format&fit=crop&q=60',
        'window': 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800&auto=format&fit=crop&q=60',
        'roof': 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800&auto=format&fit=crop&q=60',
        'bed': 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800&auto=format&fit=crop&q=60',
        'kitchen': 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800&auto=format&fit=crop&q=60',
        'bathroom': 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800&auto=format&fit=crop&q=60',
        'room': 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800&auto=format&fit=crop&q=60',
        'bedroom': 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800&auto=format&fit=crop&q=60',
        'wall': 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800&auto=format&fit=crop&q=60',
        'floor': 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800&auto=format&fit=crop&q=60',
        'ground': 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800&auto=format&fit=crop&q=60',
        'key': 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800&auto=format&fit=crop&q=60',
        'light': 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800&auto=format&fit=crop&q=60',
        'lamp': 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800&auto=format&fit=crop&q=60',
        'plate': 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800&auto=format&fit=crop&q=60',
        'spoon': 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800&auto=format&fit=crop&q=60',
        'fork': 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800&auto=format&fit=crop&q=60',
        'knife': 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800&auto=format&fit=crop&q=60',
        'cup': 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800&auto=format&fit=crop&q=60',
        'glass': 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800&auto=format&fit=crop&q=60',
        'table': 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800&auto=format&fit=crop&q=60',
        'chair': 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800&auto=format&fit=crop&q=60',
        'bowl': 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800&auto=format&fit=crop&q=60',
        'pot': 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800&auto=format&fit=crop&q=60',
        'towel': 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800&auto=format&fit=crop&q=60',
        'soap': 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800&auto=format&fit=crop&q=60',
        'oven': 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800&auto=format&fit=crop&q=60',
        'stairs': 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800&auto=format&fit=crop&q=60',
        
        # Nouns/Objects
        'god': 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&auto=format&fit=crop&q=60',
        'car': 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&auto=format&fit=crop&q=60',
        'book': 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=800&auto=format&fit=crop&q=60',
        'pen': 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=800&auto=format&fit=crop&q=60',
        
        # Verbs
        'eat': 'https://images.unsplash.com/photo-1489515217757-5fd1be406fef?w=800&auto=format&fit=crop&q=60',
        'drink': 'https://images.unsplash.com/photo-1489515217757-5fd1be406fef?w=800&auto=format&fit=crop&q=60',
        'sleep': 'https://images.unsplash.com/photo-1489515217757-5fd1be406fef?w=800&auto=format&fit=crop&q=60',
        'sit': 'https://images.unsplash.com/photo-1489515217757-5fd1be406fef?w=800&auto=format&fit=crop&q=60',
        'stand': 'https://images.unsplash.com/photo-1489515217757-5fd1be406fef?w=800&auto=format&fit=crop&q=60',
        'rise': 'https://images.unsplash.com/photo-1489515217757-5fd1be406fef?w=800&auto=format&fit=crop&q=60',
        'see': 'https://images.unsplash.com/photo-1489515217757-5fd1be406fef?w=800&auto=format&fit=crop&q=60',
        'hear': 'https://images.unsplash.com/photo-1489515217757-5fd1be406fef?w=800&auto=format&fit=crop&q=60',
        'go': 'https://images.unsplash.com/photo-1489515217757-5fd1be406fef?w=800&auto=format&fit=crop&q=60',
        'come': 'https://images.unsplash.com/photo-1489515217757-5fd1be406fef?w=800&auto=format&fit=crop&q=60',
        'write': 'https://images.unsplash.com/photo-1489515217757-5fd1be406fef?w=800&auto=format&fit=crop&q=60',
        'read': 'https://images.unsplash.com/photo-1489515217757-5fd1be406fef?w=800&auto=format&fit=crop&q=60',
        'open': 'https://images.unsplash.com/photo-1489515217757-5fd1be406fef?w=800&auto=format&fit=crop&q=60',
        'close': 'https://images.unsplash.com/photo-1489515217757-5fd1be406fef?w=800&auto=format&fit=crop&q=60',
        'hold': 'https://images.unsplash.com/photo-1489515217757-5fd1be406fef?w=800&auto=format&fit=crop&q=60',
        'take': 'https://images.unsplash.com/photo-1489515217757-5fd1be406fef?w=800&auto=format&fit=crop&q=60',
        'buy': 'https://images.unsplash.com/photo-1489515217757-5fd1be406fef?w=800&auto=format&fit=crop&q=60',
        'give': 'https://images.unsplash.com/photo-1489515217757-5fd1be406fef?w=800&auto=format&fit=crop&q=60',
        'want': 'https://images.unsplash.com/photo-1489515217757-5fd1be406fef?w=800&auto=format&fit=crop&q=60',
        'love': 'https://images.unsplash.com/photo-1489515217757-5fd1be406fef?w=800&auto=format&fit=crop&q=60',
        'know': 'https://images.unsplash.com/photo-1489515217757-5fd1be406fef?w=800&auto=format&fit=crop&q=60',
        'work': 'https://images.unsplash.com/photo-1489515217757-5fd1be406fef?w=800&auto=format&fit=crop&q=60',
        'play': 'https://images.unsplash.com/photo-1489515217757-5fd1be406fef?w=800&auto=format&fit=crop&q=60',
        'speak': 'https://images.unsplash.com/photo-1489515217757-5fd1be406fef?w=800&auto=format&fit=crop&q=60',
        'walk': 'https://images.unsplash.com/photo-1489515217757-5fd1be406fef?w=800&auto=format&fit=crop&q=60',
        'run': 'https://images.unsplash.com/photo-1489515217757-5fd1be406fef?w=800&auto=format&fit=crop&q=60',
        'laugh': 'https://images.unsplash.com/photo-1489515217757-5fd1be406fef?w=800&auto=format&fit=crop&q=60',
        'cry': 'https://images.unsplash.com/photo-1489515217757-5fd1be406fef?w=800&auto=format&fit=crop&q=60',
        
        # Animals
        'dog': 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=800&auto=format&fit=crop&q=60',
        'cat': 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=800&auto=format&fit=crop&q=60',
        'horse': 'https://images.unsplash.com/photo-1534759846116-5799c33ce22a?w=800&auto=format&fit=crop&q=60',
        'bull': 'https://images.unsplash.com/photo-1559449927-41787c188b36?w=800&auto=format&fit=crop&q=60',
        'ox': 'https://images.unsplash.com/photo-1559449927-41787c188b36?w=800&auto=format&fit=crop&q=60',
        'donkey': 'https://images.unsplash.com/photo-1589656966895-2f33e7653819?w=800&auto=format&fit=crop&q=60',
        'lion': 'https://images.unsplash.com/photo-1614027164847-1b28cfe1df60?w=800&auto=format&fit=crop&q=60',
        'sheep': 'https://images.unsplash.com/photo-1484557985045-edf25e08da73?w=800&auto=format&fit=crop&q=60',
        'cow': 'https://images.unsplash.com/photo-1560114928-40f1f1eb26a0?w=800&auto=format&fit=crop&q=60',
        'goat': 'https://images.unsplash.com/photo-1501706362039-c06b2d715385?w=800&auto=format&fit=crop&q=60',
        'pig': 'https://images.unsplash.com/photo-1501706362039-c06b2d715385?w=800&auto=format&fit=crop&q=60',
        'bear': 'https://images.unsplash.com/photo-1501706362039-c06b2d715385?w=800&auto=format&fit=crop&q=60',
        'wolf': 'https://images.unsplash.com/photo-1501706362039-c06b2d715385?w=800&auto=format&fit=crop&q=60',
        'fox': 'https://images.unsplash.com/photo-1501706362039-c06b2d715385?w=800&auto=format&fit=crop&q=60',
        'rabbit': 'https://images.unsplash.com/photo-1501706362039-c06b2d715385?w=800&auto=format&fit=crop&q=60',
        'mouse': 'https://images.unsplash.com/photo-1501706362039-c06b2d715385?w=800&auto=format&fit=crop&q=60',
        'rat': 'https://images.unsplash.com/photo-1501706362039-c06b2d715385?w=800&auto=format&fit=crop&q=60',
        'ant': 'https://images.unsplash.com/photo-1501706362039-c06b2d715385?w=800&auto=format&fit=crop&q=60',
        'bee': 'https://images.unsplash.com/photo-1501706362039-c06b2d715385?w=800&auto=format&fit=crop&q=60',
        'bird': 'https://images.unsplash.com/photo-1501706362039-c06b2d715385?w=800&auto=format&fit=crop&q=60',
        'eagle': 'https://images.unsplash.com/photo-1501706362039-c06b2d715385?w=800&auto=format&fit=crop&q=60',
        'rooster': 'https://images.unsplash.com/photo-1501706362039-c06b2d715385?w=800&auto=format&fit=crop&q=60',
        'hen': 'https://images.unsplash.com/photo-1501706362039-c06b2d715385?w=800&auto=format&fit=crop&q=60',
        'duck': 'https://images.unsplash.com/photo-1501706362039-c06b2d715385?w=800&auto=format&fit=crop&q=60',
        'goose': 'https://images.unsplash.com/photo-1501706362039-c06b2d715385?w=800&auto=format&fit=crop&q=60',
        'dove': 'https://images.unsplash.com/photo-1501706362039-c06b2d715385?w=800&auto=format&fit=crop&q=60',
        'pigeon': 'https://images.unsplash.com/photo-1501706362039-c06b2d715385?w=800&auto=format&fit=crop&q=60',
        'snake': 'https://images.unsplash.com/photo-1501706362039-c06b2d715385?w=800&auto=format&fit=crop&q=60',
        'serpent': 'https://images.unsplash.com/photo-1501706362039-c06b2d715385?w=800&auto=format&fit=crop&q=60',
        'frog': 'https://images.unsplash.com/photo-1501706362039-c06b2d715385?w=800&auto=format&fit=crop&q=60',
        'lizard': 'https://images.unsplash.com/photo-1501706362039-c06b2d715385?w=800&auto=format&fit=crop&q=60',
        'butterfly': 'https://images.unsplash.com/photo-1501706362039-c06b2d715385?w=800&auto=format&fit=crop&q=60',
        'fly': 'https://images.unsplash.com/photo-1501706362039-c06b2d715385?w=800&auto=format&fit=crop&q=60',
        'mosquito': 'https://images.unsplash.com/photo-1501706362039-c06b2d715385?w=800&auto=format&fit=crop&q=60',
        'camel': 'https://images.unsplash.com/photo-1501706362039-c06b2d715385?w=800&auto=format&fit=crop&q=60',
        'elephant': 'https://images.unsplash.com/photo-1501706362039-c06b2d715385?w=800&auto=format&fit=crop&q=60',
        'monkey': 'https://images.unsplash.com/photo-1501706362039-c06b2d715385?w=800&auto=format&fit=crop&q=60',
        
        # Places
        'school': 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&auto=format&fit=crop&q=60',
        'church': 'https://images.unsplash.com/photo-1438232992991-995b7058bbb3?w=800&auto=format&fit=crop&q=60',
        'market': 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800&auto=format&fit=crop&q=60',
        'village': 'https://images.unsplash.com/photo-1596423734564-354b1314984c?w=800&auto=format&fit=crop&q=60',
        'town': 'https://images.unsplash.com/photo-1596423734564-354b1314984c?w=800&auto=format&fit=crop&q=60',
        'city': 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=800&auto=format&fit=crop&q=60',
        'hospital': 'https://images.unsplash.com/photo-1587351021759-3e566b9a44fd?w=800&auto=format&fit=crop&q=60',
        'store': 'https://images.unsplash.com/photo-1604719312566-8912e9227c6a?w=800&auto=format&fit=crop&q=60',
        'shop': 'https://images.unsplash.com/photo-1604719312566-8912e9227c6a?w=800&auto=format&fit=crop&q=60',
        'bank': 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=800&auto=format&fit=crop&q=60',
        'library': 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=800&auto=format&fit=crop&q=60',
        'field': 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&auto=format&fit=crop&q=60',
        'farm': 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&auto=format&fit=crop&q=60',
        'park': 'https://images.unsplash.com/photo-1496070242169-b672c576566b?w=800&auto=format&fit=crop&q=60',
        'restaurant': 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&auto=format&fit=crop&q=60',
        'office': 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&auto=format&fit=crop&q=60',
        
        # Professions
        'teacher': 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&auto=format&fit=crop&q=60',
        'doctor': 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=800&auto=format&fit=crop&q=60',
        'baker': 'https://images.unsplash.com/photo-1583338917451-face2751d8d5?w=800&auto=format&fit=crop&q=60',
        'driver': 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&auto=format&fit=crop&q=60',
        'police': 'https://images.unsplash.com/photo-1453873419063-ad7fb1e252bc?w=800&auto=format&fit=crop&q=60',
        'tailor': 'https://images.unsplash.com/photo-1596356453261-03465289427d?w=800&auto=format&fit=crop&q=60',
        'seamstress': 'https://images.unsplash.com/photo-1596356453261-03465289427d?w=800&auto=format&fit=crop&q=60',
        'singer': 'https://images.unsplash.com/photo-1516280440614-6697288d5d38?w=800&auto=format&fit=crop&q=60',
        'cook': 'https://images.unsplash.com/photo-1583394293214-28ded15ee548?w=800&auto=format&fit=crop&q=60',
        'chef': 'https://images.unsplash.com/photo-1583394293214-28ded15ee548?w=800&auto=format&fit=crop&q=60',
        'builder': 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&auto=format&fit=crop&q=60',
        'farmer': 'https://images.unsplash.com/photo-1592982537447-6f2a6a0c7c18?w=800&auto=format&fit=crop&q=60',
        
        # Travel
        'road': 'https://images.unsplash.com/photo-1470240731273-7821a6eeb6bd?w=800&auto=format&fit=crop&q=60',
        'way': 'https://images.unsplash.com/photo-1470240731273-7821a6eeb6bd?w=800&auto=format&fit=crop&q=60',
        'airplane': 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&auto=format&fit=crop&q=60',
        'bus': 'https://images.unsplash.com/photo-1570125909232-eb263c188f7e?w=800&auto=format&fit=crop&q=60',
        'train': 'https://images.unsplash.com/photo-1502920917128-1aa500764b8a?w=800&auto=format&fit=crop&q=60',
        'boat': 'https://images.unsplash.com/photo-1502920917128-1aa500764b8a?w=800&auto=format&fit=crop&q=60',
        'ship': 'https://images.unsplash.com/photo-1502920917128-1aa500764b8a?w=800&auto=format&fit=crop&q=60',
        'vehicle': 'https://images.unsplash.com/photo-1502920917128-1aa500764b8a?w=800&auto=format&fit=crop&q=60',
        'bicycle': 'https://images.unsplash.com/photo-1502920917128-1aa500764b8a?w=800&auto=format&fit=crop&q=60',
        'bridge': 'https://images.unsplash.com/photo-1502920917128-1aa500764b8a?w=800&auto=format&fit=crop&q=60',
        'passport': 'https://images.unsplash.com/photo-1502920917128-1aa500764b8a?w=800&auto=format&fit=crop&q=60',
        'ticket': 'https://images.unsplash.com/photo-1502920917128-1aa500764b8a?w=800&auto=format&fit=crop&q=60',
        'luggage': 'https://images.unsplash.com/photo-1502920917128-1aa500764b8a?w=800&auto=format&fit=crop&q=60',
        
        # Clothing
        'shirt': 'https://images.unsplash.com/photo-1495121553079-4c61bcce1894?w=800&auto=format&fit=crop&q=60',
        'pants': 'https://images.unsplash.com/photo-1495121553079-4c61bcce1894?w=800&auto=format&fit=crop&q=60',
        'shoe': 'https://images.unsplash.com/photo-1495121553079-4c61bcce1894?w=800&auto=format&fit=crop&q=60',
        'hat': 'https://images.unsplash.com/photo-1495121553079-4c61bcce1894?w=800&auto=format&fit=crop&q=60',
        'cap': 'https://images.unsplash.com/photo-1495121553079-4c61bcce1894?w=800&auto=format&fit=crop&q=60',
        'dress': 'https://images.unsplash.com/photo-1495121553079-4c61bcce1894?w=800&auto=format&fit=crop&q=60',
        'veil': 'https://images.unsplash.com/photo-1495121553079-4c61bcce1894?w=800&auto=format&fit=crop&q=60',
        'scarf': 'https://images.unsplash.com/photo-1495121553079-4c61bcce1894?w=800&auto=format&fit=crop&q=60',
        'belt': 'https://images.unsplash.com/photo-1495121553079-4c61bcce1894?w=800&auto=format&fit=crop&q=60',
        'trousers': 'https://images.unsplash.com/photo-1495121553079-4c61bcce1894?w=800&auto=format&fit=crop&q=60',
        'coat': 'https://images.unsplash.com/photo-1495121553079-4c61bcce1894?w=800&auto=format&fit=crop&q=60',
        'robe': 'https://images.unsplash.com/photo-1495121553079-4c61bcce1894?w=800&auto=format&fit=crop&q=60',
        'sleeve': 'https://images.unsplash.com/photo-1495121553079-4c61bcce1894?w=800&auto=format&fit=crop&q=60',
        'pocket': 'https://images.unsplash.com/photo-1495121553079-4c61bcce1894?w=800&auto=format&fit=crop&q=60',
        'button': 'https://images.unsplash.com/photo-1495121553079-4c61bcce1894?w=800&auto=format&fit=crop&q=60',
        'thread': 'https://images.unsplash.com/photo-1495121553079-4c61bcce1894?w=800&auto=format&fit=crop&q=60',
        'needle': 'https://images.unsplash.com/photo-1495121553079-4c61bcce1894?w=800&auto=format&fit=crop&q=60',
        'scissors': 'https://images.unsplash.com/photo-1495121553079-4c61bcce1894?w=800&auto=format&fit=crop&q=60',
        
        # Emotions
        'happy': 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=800&auto=format&fit=crop&q=60',
        'happiness': 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=800&auto=format&fit=crop&q=60',
        'joy': 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=800&auto=format&fit=crop&q=60',
        'sad': 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=800&auto=format&fit=crop&q=60',
        'sadness': 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=800&auto=format&fit=crop&q=60',
        'sorrow': 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=800&auto=format&fit=crop&q=60',
        'fear': 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=800&auto=format&fit=crop&q=60',
        'anger': 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=800&auto=format&fit=crop&q=60',
        'angry': 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=800&auto=format&fit=crop&q=60',
        'hope': 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=800&auto=format&fit=crop&q=60',
        'peace': 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=800&auto=format&fit=crop&q=60',
        'calm': 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=800&auto=format&fit=crop&q=60',
        'surprise': 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=800&auto=format&fit=crop&q=60',
        'shame': 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=800&auto=format&fit=crop&q=60',
        'patience': 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=800&auto=format&fit=crop&q=60',
        'scared': 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=800&auto=format&fit=crop&q=60',
        'love': 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=800&auto=format&fit=crop&q=60',
        
        # Adjectives
        'good': 'https://images.unsplash.com/photo-1464375117522-1311d6a5b81f?w=800&auto=format&fit=crop&q=60',
        'beautiful': 'https://images.unsplash.com/photo-1464375117522-1311d6a5b81f?w=800&auto=format&fit=crop&q=60',
        'big': 'https://images.unsplash.com/photo-1464375117522-1311d6a5b81f?w=800&auto=format&fit=crop&q=60',
        'small': 'https://images.unsplash.com/photo-1464375117522-1311d6a5b81f?w=800&auto=format&fit=crop&q=60',
        'long': 'https://images.unsplash.com/photo-1464375117522-1311d6a5b81f?w=800&auto=format&fit=crop&q=60',
        'short': 'https://images.unsplash.com/photo-1464375117522-1311d6a5b81f?w=800&auto=format&fit=crop&q=60',
        'new': 'https://images.unsplash.com/photo-1464375117522-1311d6a5b81f?w=800&auto=format&fit=crop&q=60',
        'old': 'https://images.unsplash.com/photo-1464375117522-1311d6a5b81f?w=800&auto=format&fit=crop&q=60',
        'tired': 'https://images.unsplash.com/photo-1464375117522-1311d6a5b81f?w=800&auto=format&fit=crop&q=60',
        'hungry': 'https://images.unsplash.com/photo-1464375117522-1311d6a5b81f?w=800&auto=format&fit=crop&q=60',
        'thirsty': 'https://images.unsplash.com/photo-1464375117522-1311d6a5b81f?w=800&auto=format&fit=crop&q=60',
        'sick': 'https://images.unsplash.com/photo-1464375117522-1311d6a5b81f?w=800&auto=format&fit=crop&q=60',
        'strong': 'https://images.unsplash.com/photo-1464375117522-1311d6a5b81f?w=800&auto=format&fit=crop&q=60',
        'weak': 'https://images.unsplash.com/photo-1464375117522-1311d6a5b81f?w=800&auto=format&fit=crop&q=60',
        'fast': 'https://images.unsplash.com/photo-1464375117522-1311d6a5b81f?w=800&auto=format&fit=crop&q=60',
        'slow': 'https://images.unsplash.com/photo-1464375117522-1311d6a5b81f?w=800&auto=format&fit=crop&q=60',
        'heavy': 'https://images.unsplash.com/photo-1464375117522-1311d6a5b81f?w=800&auto=format&fit=crop&q=60',
        'high': 'https://images.unsplash.com/photo-1464375117522-1311d6a5b81f?w=800&auto=format&fit=crop&q=60',
        'low': 'https://images.unsplash.com/photo-1464375117522-1311d6a5b81f?w=800&auto=format&fit=crop&q=60',
        'much': 'https://images.unsplash.com/photo-1464375117522-1311d6a5b81f?w=800&auto=format&fit=crop&q=60',
        'very': 'https://images.unsplash.com/photo-1464375117522-1311d6a5b81f?w=800&auto=format&fit=crop&q=60',
    }
    
    # Check for keyword matches first
    for keyword, img_url in keyword_images.items():
        if keyword in trans_lower:
            return img_url
    
    # Fall back to category image
    return category_images.get(category, category_images.get('default', 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&auto=format&fit=crop&q=60'))

# Find all entries without images and add them
lines = content.split('\n')
new_lines = []
i = 0
added_count = 0

while i < len(lines):
    line = lines[i]
    
    # Check if this is a dictionary entry line without an image
    if re.match(r'^\s*\{ word:', line) and 'image:' not in line:
        # Extract translation and category
        translation_match = re.search(r'translation:\s*"([^"]+)"', line)
        category_match = re.search(r'category:\s*"([^"]+)"', line)
        
        if translation_match and category_match:
            translation = translation_match.group(1)
            category = category_match.group(1)
            image_url = get_image_url(translation, category)
            
            # Add image property before the closing brace
            if line.rstrip().endswith(','):
                # Entry ends with comma
                line = line.rstrip()[:-1] + f', image: "{image_url}"' + ',\n'
            elif line.rstrip().endswith('}'):
                # Entry ends with }
                line = line.rstrip()[:-1] + f', image: "{image_url}"' + '}\n'
            else:
                # Add before any trailing whitespace/newline
                line = line.rstrip() + f', image: "{image_url}"\n'
            
            added_count += 1
    
    new_lines.append(line)
    i += 1

# Write the updated content
new_content = '\n'.join(new_lines)
with open('src/data/dictionary.ts', 'w') as f:
    f.write(new_content)

print(f"Added images to {added_count} dictionary entries")
print("Done!")





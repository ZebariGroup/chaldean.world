#!/usr/bin/env python3
import os

# Comprehensive list ~1000 words
TRANSLATIONS = {
    "a": "أ", "about": "عن", "above": "فوق", "across": "عبر", "act": "فعل", "active": "نشيط", "activity": "نشاط", "add": "أضاف",
    "afraid": "خائف", "after": "بعد", "again": "مرة أخرى", "age": "عمر", "ago": "منذ", "agree": "وافق", "air": "هواء", "all": "كل",
    "alone": "وحده", "along": "على طول", "already": "بالفعل", "always": "دائما", "am": "أكون", "amount": "كمية", "an": "أ", "and": "و",
    "angry": "غاضب", "another": "آخر", "answer": "إجابة", "any": "أي", "anyone": "أي شخص", "anything": "أي شيء", "anytime": "في أي وقت",
    "appear": "ظهر", "apple": "تفاحة", "are": "يكون", "area": "منطقة", "arm": "ذراع", "army": "جيش", "around": "حول", "arrive": "وصل",
    "art": "فن", "as": "كما", "ask": "سأل", "at": "في", "attack": "هجوم", "aunt": "عمة", "autumn": "خريف", "away": "بعيدا",
    "baby": "رضيع", "base": "قاعدة", "back": "خلف", "bad": "سيء", "bag": "حقيبة", "ball": "كرة", "bank": "بنك", "basket": "سلة",
    "bath": "حمام", "be": "كان", "bean": "فاصوليا", "bear": "دب", "beautiful": "جميل", "bed": "سرير", "bedroom": "غرفة نوم",
    "beer": "بيرة", "behave": "تصرف", "before": "قبل", "begin": "بدأ", "behind": "وراء", "bell": "جرس", "below": "تحت", "besides": "بجانب",
    "best": "أفضل", "better": "أحسن", "between": "بين", "big": "كبير", "bird": "طائر", "birth": "ميلاد", "birthday": "عيد ميلاد",
    "bit": "قليل", "bite": "عضة", "black": "أسود", "bleed": "نزف", "block": "كتلة", "blood": "دم", "blow": "نفخ", "blue": "أزرق",
    "board": "لوحة", "boat": "قارب", "body": "جسم", "boil": "غلى", "bone": "عظم", "book": "كتاب", "border": "حدود", "born": "ولد",
    "borrow": "استعار", "both": "كلا", "bottle": "زجاجة", "bottom": "قاع", "bowl": "وعاء", "box": "صندوق", "boy": "ولد", "branch": "فرع",
    "brave": "شجاع", "bread": "خبز", "break": "كسر", "breakfast": "فطور", "breathe": "تنفس", "bridge": "جسر", "bright": "مشرق",
    "bring": "جلب", "brother": "أخ", "brown": "بني", "brush": "فرشاة", "build": "بنى", "burn": "حرق", "bus": "حافلة", "busy": "مشغول",
    "but": "لكن", "butter": "زبدة", "button": "زر", "buy": "اشترى", "by": "بواسطة", "cake": "كعكة", "call": "نداء", "camera": "كاميرا",
    "can": "يستطيع", "candle": "شمعة", "cap": "قبعة", "capital": "عاصمة", "car": "سيارة", "card": "بطاقة", "care": "عناية",
    "careful": "حذر", "careless": "مهمل", "carry": "حمل", "case": "حالة", "cat": "قطة", "catch": "أمسك", "central": "مركزي",
    "century": "قرن", "certain": "مؤكد", "chair": "كرسي", "chance": "فرصة", "change": "تغيير", "chase": "طارد", "cheap": "رخيص",
    "cheese": "جبن", "chicken": "دجاج", "child": "طفل", "children": "أطفال", "chocolate": "شوكلاته", "choice": "خيار", "circle": "دائرة",
    "city": "مدينة", "class": "فصل", "clever": "ذكي", "clean": "نظيف", "clear": "واضح", "climb": "تسلق", "clock": "ساعة",
    "close": "قريب", "cloth": "قماش", "clothes": "ملابس", "cloud": "سحابة", "cloudy": "غائم", "coat": "معطف", "coffee": "قهوة",
    "coin": "عملة", "cold": "بارد", "collect": "جمع", "colour": "لون", "comb": "مشط", "come": "أتى", "comfortable": "مريح",
    "common": "شائع", "compare": "قارن", "complete": "كامل", "computer": "حاسوب", "condition": "شرط", "continue": "استمر",
    "control": "سيطرة", "cook": "طبخ", "cool": "بارد", "copper": "نحاس", "corn": "ذرة", "corner": "زاوية", "correct": "صحيح",
    "cost": "كلفة", "contain": "احتوى", "count": "عد", "country": "بلد", "course": "دورة", "cover": "غطاء", "crash": "اصطدام",
    "cross": "عبر", "cry": "بكى", "cup": "كوب", "cupboard": "خزانة", "cut": "قص", "dance": "رقص", "danger": "خطر", "dangerous": "خطير",
    "dark": "مظلم", "daughter": "ابنة", "day": "يوم", "dead": "ميت", "deal": "صفقة", "dear": "عزيز", "death": "موت", "decide": "قرر",
    "deep": "عميق", "deer": "غزال", "desk": "مكتب", "destroy": "دمر", "develop": "طور", "die": "مات", "different": "مختلف",
    "difficult": "صعب", "dinner": "عشاء", "direction": "اتجاه", "dirty": "قذر", "discover": "اكتشف", "dish": "طبق", "do": "فعل",
    "dog": "كلب", "door": "باب", "double": "مزدوج", "down": "أسفل", "draw": "رسم", "dream": "حلم", "dress": "فستان", "drink": "شرب",
    "drive": "قاد", "drop": "قطرة", "dry": "جاف", "duck": "بطة", "dust": "غبار", "duty": "واجب", "each": "كل", "ear": "أذن",
    "early": "مبكر", "earn": "كسب", "earth": "أرض", "east": "شرق", "easy": "سهل", "eat": "أكل", "education": "تعليم", "effect": "تأثير",
    "egg": "بيضة", "eight": "ثمانية", "either": "إما", "electric": "كهربائي", "elephant": "فيل", "else": "آخر", "empty": "فارغ",
    "end": "نهاية", "enemy": "عدو", "enjoy": "استمتع", "enough": "كاف", "enter": "دخل", "equal": "مساوي", "entrance": "مدخل",
    "escape": "هروب", "even": "حتى", "evening": "مساء", "event": "حدث", "ever": "أبدا", "every": "كل", "everyone": "الجميع",
    "exact": "دقيق", "everybody": "الجميع", "examination": "امتحان", "example": "مثال", "except": "باستثناء", "excited": "متحمس",
    "exercise": "تمرين", "expect": "توقع", "expensive": "غالي", "explain": "شرح", "extremely": "جدا", "eye": "عين", "face": "وجه",
    "fact": "حقيقة", "fail": "فشل", "fall": "سقوط", "false": "خاطئ", "family": "عائلة", "famous": "مشهور", "far": "بعيد", "farm": "مزرعة",
    "father": "أب", "fast": "سريع", "fat": "سمين", "fault": "خطأ", "fear": "خوف", "feed": "أطعم", "feel": "شعر", "female": "أنثى",
    "fever": "حمى", "few": "قليل", "fight": "قتال", "fill": "ملأ", "film": "فيلم", "find": "وجد", "fine": "بخير", "finger": "إصبع",
    "finish": "أنهى", "fire": "نار", "first": "أول", "fish": "سمك", "fit": "لائق", "five": "خمسة", "fix": "أصلح", "flag": "علم",
    "flat": "شقة", "float": "طفو", "floor": "أرضية", "flour": "طحين", "flower": "زهرة", "fly": "طار", "fold": "طي", "food": "طعام",
    "fool": "أحمق", "foot": "قدم", "football": "كرة قدم", "for": "لـ", "force": "قوة", "foreign": "أجنبي", "forest": "غابة",
    "forget": "نسي", "forgive": "سامح", "fork": "شوكة", "form": "شكل", "fox": "ثعلب", "four": "أربعة", "free": "حر", "freedom": "حرية",
    "freeze": "تجمد", "fresh": "طازج", "friend": "صديق", "friendly": "ودود", "from": "من", "front": "أمام", "fruit": "فاكهة",
    "full": "ممتلئ", "fun": "مرح", "funny": "مضحك", "furniture": "أثاث", "further": "أبعد", "future": "مستقبل", "game": "لعبة",
    "garden": "حديقة", "gate": "بوابة", "general": "عام", "gentleman": "سيد", "get": "حصل", "gift": "هدية", "give": "أعطى",
    "glad": "سعيد", "glass": "زجاج", "go": "ذهب", "goat": "ماعز", "god": "الله", "gold": "ذهب", "good": "جيد", "goodbye": "وداعا",
    "grandfather": "جد", "grandmother": "جدة", "grass": "عشب", "grave": "قبر", "great": "عظيم", "green": "أخضر", "grey": "رمادي",
    "ground": "أرض", "group": "مجموعة", "grow": "نما", "gun": "بندقية", "hair": "شعر", "half": "نصف", "hall": "قاعة", "hammer": "مطرقة",
    "hand": "يد", "happen": "حدث", "happy": "سعيد", "hard": "صعب", "hat": "قبعة", "hate": "كره", "have": "ملك", "he": "هو",
    "head": "رأس", "healthy": "صحي", "hear": "سمع", "heart": "قلب", "heat": "حرارة", "heaven": "جنة", "heavy": "ثقيل", "height": "ارتفاع",
    "hello": "مرحبا", "help": "مساعدة", "hen": "دجاجة", "her": "لها", "here": "هنا", "hers": "لها", "hide": "أخفى", "high": "عالي",
    "hill": "تلة", "him": "له", "his": "له", "hit": "ضرب", "hobby": "هواية", "hold": "أمسك", "hole": "ثقب", "holiday": "عطلة",
    "home": "منزل", "hope": "أمل", "horse": "حصان", "hospital": "مستشفى", "hot": "حار", "hotel": "فندق", "hour": "ساعة",
    "house": "بيت", "how": "كيف", "huge": "ضخم", "human": "إنسان", "hundred": "مائة", "hungry": "جائع", "hunt": "صيد", "hurry": "عجل",
    "hurt": "أذى", "husband": "زوج", "I": "أنا", "ice": "ثلج", "idea": "فكرة", "if": "إذا", "ill": "مريض", "important": "مهم",
    "in": "في", "increase": "زيادة", "inside": "داخل", "into": "إلى", "introduce": "قدم", "invent": "اخترع", "iron": "حديد",
    "invite": "دعا", "is": "يكون", "island": "جزيرة", "it": "هو/هي", "its": "له/لها", "jelly": "هلام", "job": "وظيفة", "join": "انضم",
    "juice": "عصير", "jump": "قفز", "just": "فقط", "keep": "احتفظ", "key": "مفتاح", "kill": "قتل", "kind": "نوع", "king": "ملك",
    "kitchen": "مطبخ", "knee": "ركبة", "knife": "سكين", "knock": "طرق", "know": "عرف", "ladder": "سلم", "lady": "سيدة", "lamp": "مصباح",
    "land": "أرض", "large": "كبير", "last": "آخر", "late": "متأخر", "lately": "مؤخرا", "laugh": "ضحك", "lazy": "كسول", "lead": "قاد",
    "leaf": "ورقة", "learn": "تعلم", "leave": "غادر", "leg": "ساق", "left": "يسار", "lend": "أعار", "length": "طول", "less": "أقل",
    "lesson": "درس", "let": "دع", "letter": "رسالة", "library": "مكتبة", "lie": "كذب", "life": "حياة", "light": "ضوء", "like": "مثل",
    "lion": "أسد", "lip": "شفة", "list": "قائمة", "listen": "استمع", "little": "قليل", "live": "عاش", "lock": "قفل", "lonely": "وحيد",
    "long": "طويل", "look": "نظر", "lose": "خسر", "lot": "كثير", "love": "حب", "low": "منخفض", "lower": "أدنى", "luck": "حظ",
    "lump": "كتلة", "lunch": "غداء", "machine": "آلة", "main": "رئيسي", "make": "صنع", "male": "ذكر", "man": "رجل", "many": "كثير",
    "map": "خريطة", "mark": "علامة", "market": "سوق", "marry": "تزوج", "matter": "أمر", "may": "ربما", "me": "أنا", "meal": "وجبة",
    "mean": "عنى", "measure": "قياس", "meat": "لحم", "medicine": "دواء", "meet": "قابل", "member": "عضو", "mention": "ذكر",
    "metal": "معدن", "middle": "وسط", "milk": "حليب", "million": "مليون", "mind": "عقل", "minute": "دقيقة", "miss": "فوت",
    "mistake": "خطأ", "mix": "خلط", "model": "نموذج", "modern": "حديث", "moment": "لحظة", "money": "مال", "monkey": "قرد",
    "month": "شهر", "moon": "قمر", "more": "أكثر", "morning": "صباح", "most": "معظم", "mother": "أم", "mountain": "جبل",
    "mouse": "فأر", "mouth": "فم", "move": "تحرك", "much": "كثير", "music": "موسيقى", "must": "يجب", "my": "لي", "name": "اسم",
    "narrow": "ضيق", "nation": "أمة", "nature": "طبيعة", "near": "قريب", "nearly": "تقريبا", "neck": "رقبة", "need": "حاجة",
    "needle": "إبرة", "neighbour": "جار", "neither": "لا هذا ولا ذاك", "net": "شبكة", "never": "أبدا", "new": "جديد", "news": "أخبار",
    "newspaper": "جريدة", "next": "التالي", "nice": "لطيف", "night": "ليل", "nine": "تسعة", "no": "لا", "noble": "نبيل", "noise": "ضجيج",
    "none": "لا أحد", "nor": "ولا", "north": "شمال", "nose": "أنف", "not": "ليس", "nothing": "لا شيء", "notice": "ملاحظة", "now": "الآن",
    "number": "رقم", "obey": "أطاع", "object": "شيء", "ocean": "محيط", "of": "من", "off": "بعيدا", "offer": "عرض", "office": "مكتب",
    "often": "غالبا", "oil": "زيت", "old": "قديم", "on": "على", "one": "واحد", "only": "فقط", "open": "مفتوح", "opposite": "عكس",
    "or": "أو", "orange": "برتقالي", "order": "أمر", "other": "آخر", "our": "لنا", "out": "خارج", "outside": "خارج", "over": "فوق",
    "own": "خاص", "page": "صفحة", "pain": "ألم", "paint": "طلاء", "pair": "زوج", "pan": "مقلاة", "paper": "ورق", "parent": "والد",
    "park": "منتزه", "part": "جزء", "partner": "شريك", "party": "حفلة", "pass": "مر", "past": "ماضي", "path": "مسار", "pay": "دفع",
    "peace": "سلام", "pen": "قلم", "pencil": "قلم رصاص", "people": "ناس", "pepper": "فلفل", "perfect": "مثالي", "period": "فترة",
    "person": "شخص", "petrol": "بنزين", "photograph": "صورة", "piano": "بيانو", "pick": "التقط", "picture": "صورة", "piece": "قطعة",
    "pig": "خنزير", "pin": "دبوس", "pink": "وردي", "place": "مكان", "plane": "طائرة", "plant": "نبات", "plastic": "بلاستيك",
    "plate": "طبق", "play": "لعب", "please": "أرجوك", "plenty": "وفرة", "pocket": "جيب", "point": "نقطة", "poison": "سم",
    "police": "شرطة", "polite": "مهذب", "pool": "مسبح", "poor": "فقير", "popular": "محبوب", "position": "موقع", "possible": "ممكن",
    "potato": "بطاطس", "pour": "صب", "power": "قوة", "present": "حاضر", "press": "ضغط", "pretty": "جميل", "prevent": "منع",
    "price": "سعر", "prince": "أمير", "prison": "سجن", "private": "خاص", "prize": "جائزة", "probably": "من المحتمل", "problem": "مشكلة",
    "produce": "أنتج", "promise": "وعد", "proper": "مناسب", "protect": "حمى", "provide": "وفر", "public": "عام", "pull": "سحب",
    "punish": "عاقب", "pupil": "تلميذ", "push": "دفع", "put": "وضع", "queen": "ملكة", "question": "سؤال", "quick": "سريع",
    "quiet": "هادئ", "quite": "تماما", "radio": "راديو", "rain": "مطر", "rainy": "ممطر", "raise": "رفع", "reach": "وصل", "read": "قرأ",
    "ready": "جاهز", "real": "حقيقي", "really": "حقا", "receive": "استلم", "record": "سجل", "red": "أحمر", "remember": "تذكر",
    "remind": "ذكر", "remove": "أزال", "rent": "إيجار", "repair": "إصلاح", "repeat": "كرر", "reply": "رد", "report": "تقرير",
    "rest": "راحة", "restaurant": "مطعم", "result": "نتيجة", "return": "عودة", "rice": "أرز", "rich": "غني", "ride": "ركب",
    "right": "يمين", "ring": "خاتم", "rise": "ارتفع", "river": "نهر", "road": "طريق", "rob": "سرق", "rock": "صخرة", "room": "غرفة",
    "round": "دائري", "rubber": "مطاط", "rude": "وقح", "rule": "قاعدة", "ruler": "مسطرة", "run": "ركض", "rush": "اندفاع", "sad": "حزين",
    "safe": "آمن", "sail": "أبحر", "salt": "ملح", "same": "نفس", "sand": "رمل", "save": "حفظ", "say": "قال", "school": "مدرسة",
    "science": "علوم", "scissors": "مقص", "search": "بحث", "seat": "مقعد", "second": "ثانية", "see": "رأى", "seem": "بدا",
    "sell": "باع", "send": "أرسل", "sentence": "جملة", "serve": "خدم", "seven": "سبعة", "several": "عدة", "sex": "جنس", "shade": "ظل",
    "shadow": "ظل", "shake": "هز", "shape": "شكل", "share": "شارك", "sharp": "حاد", "she": "هي", "sheep": "خروف", "sheet": "ورقة",
    "shelf": "رف", "shine": "لمع", "ship": "سفينة", "shirt": "قميص", "shoe": "حذاء", "shoot": "أطلق النار", "shop": "دكان",
    "short": "قصير", "should": "يجب", "shoulder": "كتف", "shout": "صرخ", "show": "عرض", "shut": "أغلق", "shy": "خجول", "sick": "مريض",
    "side": "جانب", "signal": "إشارة", "silence": "صمت", "silly": "سخيف", "silver": "فضة", "similar": "مشابه", "simple": "بسيط",
    "single": "عازب", "since": "منذ", "sing": "غنى", "sink": "غرق", "sister": "أخت", "sit": "جلس", "six": "ستة", "size": "حجم",
    "skill": "مهارة", "skin": "جلد", "skirt": "تنورة", "sky": "سماء", "sleep": "نام", "slip": "انزلق", "slow": "بطيء", "small": "صغير",
    "smell": "شم", "smile": "ابتسم", "smoke": "دخان", "snow": "ثلج", "so": "لذلك", "soap": "صابون", "sock": "جورب", "soft": "ناعم",
    "some": "بعض", "someone": "شخص ما", "something": "شيء ما", "sometimes": "أحيانا", "son": "ابن", "soon": "قريبا", "sorry": "آسف",
    "sound": "صوت", "soup": "حساء", "sour": "حامض", "south": "جنوب", "space": "فضاء", "speak": "تكلم", "special": "خاص", "speed": "سرعة",
    "spell": "تهجى", "spend": "أنفق", "spoon": "ملعقة", "sport": "رياضة", "spread": "انتشر", "spring": "ربيع", "square": "مربع",
    "stamp": "طابع", "stand": "وقف", "star": "نجم", "start": "بدأ", "station": "محطة", "stay": "بقي", "steal": "سرق", "steam": "بخار",
    "step": "خطوة", "still": "لا يزال", "stomach": "معدة", "stone": "حجر", "stop": "توقف", "store": "مخزن", "storm": "عاصفة",
    "story": "قصة", "strange": "غريب", "street": "شارع", "strong": "قوي", "structure": "هيكل", "student": "طالب", "study": "درس",
    "stupid": "غبي", "subject": "موضوع", "substance": "مادة", "successful": "ناجح", "such": "مثل", "sudden": "مفاجئ", "sugar": "سكر",
    "summer": "صيف", "sun": "شمس", "sunny": "مشمس", "support": "دعم", "sure": "متأكد", "surprise": "مفاجأة", "sweet": "حلو",
    "swim": "سبح", "sword": "سيف", "table": "طاولة", "tail": "ذيل", "take": "أخذ", "talk": "تحدث", "tall": "طويل", "taste": "طعم",
    "taxi": "تاكسي", "tea": "شاي", "teach": "علم", "team": "فريق", "tear": "دمعة", "telephone": "هاتف", "television": "تلفاز",
    "tell": "أخبر", "ten": "عشرة", "tennis": "تنس", "terrible": "رهيب", "test": "اختبار", "than": "من", "that": "ذلك", "the": "ال",
    "their": "لهم", "then": "ثم", "there": "هناك", "therefore": "لذلك", "these": "هؤلاء", "thick": "سميك", "thin": "رفيع",
    "thing": "شيء", "think": "فكر", "third": "ثالث", "this": "هذا", "though": "رغم", "threat": "تهديد", "three": "ثلاثة",
    "through": "خلال", "throw": "رمى", "thumb": "إبهام", "thunder": "رعد", "ticket": "تذكرة", "tidy": "مرتب", "tie": "ربطة",
    "tiger": "نمر", "tight": "ضيق", "time": "وقت", "tin": "علبة", "tiny": "صغير جدا", "tip": "طرف", "tire": "إطار", "tired": "تعبان",
    "title": "عنوان", "to": "إلى", "today": "اليوم", "toe": "إصبع قدم", "together": "معا", "tomorrow": "غدا", "tongue": "لسان",
    "tonight": "الليلة", "too": "أيضا", "tool": "أداة", "tooth": "سن", "top": "قمة", "total": "مجموع", "touch": "لمس", "tour": "جولة",
    "towel": "منشفة", "town": "بلدة", "toy": "لعبة", "track": "مسار", "trade": "تجارة", "traffic": "مرور", "train": "قطار",
    "travel": "سفر", "tree": "شجرة", "trip": "رحلة", "trouble": "مشكلة", "true": "حقيقي", "trust": "ثقة", "try": "حاول",
    "turn": "دور", "twice": "مرتين", "type": "نوع", "ugly": "قبيح", "uncle": "عم", "under": "تحت", "understand": "فهم", "unit": "وحدة",
    "until": "حتى", "up": "فوق", "use": "استعمل", "useful": "مفيد", "usual": "معتاد", "usually": "عادة", "vegetable": "خضار",
    "very": "جدا", "village": "قرية", "voice": "صوت", "visit": "زار", "wait": "انتظر", "wake": "استيقظ", "walk": "مشى", "wall": "جدار",
    "want": "أراد", "warm": "دافئ", "wash": "غسل", "waste": "نفايات", "watch": "راقب", "water": "ماء", "way": "طريق", "we": "نحن",
    "weak": "ضعيف", "wear": "ارتدى", "weather": "طقس", "wedding": "زفاف", "week": "أسبوع", "weight": "وزن", "welcome": "أهلا",
    "well": "جيد", "west": "غرب", "wet": "مبلل", "what": "ماذا", "wheel": "عجلة", "when": "متى", "where": "أين", "which": "أي",
    "while": "بينما", "white": "أبيض", "who": "من", "why": "لماذا", "wide": "واسع", "wife": "زوجة", "wild": "بري", "will": "سوف",
    "win": "فاز", "wind": "ريح", "window": "نافذة", "wine": "نبيذ", "winter": "شتاء", "wire": "سلك", "wise": "حكيم", "wish": "تمنى",
    "with": "مع", "without": "بدون", "woman": "امرأة", "wonder": "تساءل", "word": "كلمة", "work": "عمل", "world": "عالم", "worm": "دودة",
    "worry": "قلق", "worse": "أسوأ", "worst": "الأسوأ", "write": "كتب", "wrong": "خطأ", "year": "سنة", "yes": "نعم",
    "yesterday": "أمس", "yet": "بعد", "you": "أنت", "young": "شاب", "zero": "صفر", "zoo": "حديقة حيوان"
}

def transliterate_arabic(text):
    mapping = {
        'ا': 'a', 'أ': 'a', 'إ': 'e', 'آ': 'a', 'ء': 'a',
        'ب': 'b', 'ت': 't', 'ث': 'th', 'ج': 'j', 'ح': 'h', 'خ': 'kh',
        'د': 'd', 'ذ': 'dh', 'ر': 'r', 'ز': 'z', 'س': 's', 'ش': 'sh',
        'ص': 's', 'ض': 'd', 'ط': 't', 'ظ': 'z', 'ع': "'a", 'غ': 'gh',
        'ف': 'f', 'ق': 'q', 'ك': 'k', 'ل': 'l', 'م': 'm', 'ن': 'n',
        'ه': 'h', 'و': 'w', 'ي': 'y', 'ى': 'a', 'ة': 'ah', 'ئ': "'", 'ؤ': "u",
        ' ': ' '
    }
    result = []
    for char in text:
        if char in mapping:
            result.append(mapping[char])
        else:
            result.append(char)
    return "".join(result)

def main():
    print("Generating comprehensive English-Arabic migration file...")
    
    output_file = 'supabase/migrations/20251207060000_seed_english_arabic.sql'
    
    with open(output_file, 'w') as f:
        f.write("-- Seed English-Arabic Dictionary with ~1000 words\n")
        f.write("DELETE FROM english_arabic_dictionary;\n")
        f.write("\n")
        
        inserted = 0
        for english, arabic in TRANSLATIONS.items():
            # Determine part of speech (simple heuristic)
            pos = "noun" # Default
            if english.endswith("ing"): pos = "verb"
            
            # Generate phonetic
            arabic_phonetic = transliterate_arabic(arabic)
            
            # Escape single quotes
            english_esc = english.replace("'", "''")
            arabic_esc = arabic.replace("'", "''")
            phonetic_esc = arabic_phonetic.replace("'", "''")
            
            sql = f"""
INSERT INTO english_arabic_dictionary (english, arabic, arabic_phonetic, part_of_speech, frequency_rank)
VALUES ('{english_esc}', '{arabic_esc}', '{phonetic_esc}', '{pos}', {inserted + 100});
"""
            f.write(sql)
            inserted += 1
            
    print(f"✓ Generated migration file: {output_file} with {inserted} entries")

if __name__ == "__main__":
    main()

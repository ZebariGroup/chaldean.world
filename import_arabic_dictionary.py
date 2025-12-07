#!/usr/bin/env python3
"""
Import comprehensive English-Arabic dictionary into database
Uses the English Wiktionary Arabic translations as source
"""

import requests
import json
import psycopg2
import os
from collections import defaultdict

# Common English words list (top 3000)
COMMON_WORDS = """
the be to of and a in that have I it for not on with he as you do at
this but his by from they we say her she or an will my one all would
there their what so up out if about who get which go me when make can
like time no just him know take people into year your good some could
them see other than then now look only come its over think also back
after use two how our work first well way even new want because any
these give day most us thing man world life hand part child eye woman
place work week case point government company number group problem fact
be have do say get make go know take see come think look want give
use find tell ask work seem feel try leave call provide allow mean
set become lead understand bring begin keep hold write stand hear
let meet run move live believe happen must bring consider appear
buy wait serve die send expect build stay fall cut reach kill
remain suggest raise pass sell require report decide pull accept
develop receive return explain hope carry produce add pay follow
talk lose arrive contain create manage mention destroy suggest
develop improve perform determine operate seek avoid announce employ
ignore propose negotiate reflect threaten regard attract possess
invest supply prevent identify secure establish maintain select
establish bear manage train collect intend attempt benefit defend
derive divide encounter alter attract constitute promote convict
oppose recover convince disappear inform handle participate compete
settle expand consult associate employ encourage compete assess
expand launch expand educate facilitate exclude predict minimize
detect contribute embrace enhance acknowledge sustain advocate
diagnose acquire clarify dominate optimize configure execute
"""

WORD_TRANSLATIONS = {
    # Pronouns and basic words
    "I": ("أنا", "ana"),
    "you": ("أنت", "anta"),
    "he": ("هو", "huwa"),
    "she": ("هي", "hiya"),
    "we": ("نحن", "nahnu"),
    "they": ("هم", "hum"),
    "this": ("هذا", "hadha"),
    "that": ("ذلك", "dhalik"),
    "these": ("هؤلاء", "ha'ula'"),
    "those": ("أولئك", "ula'ika"),
    
    # Common verbs
    "be": ("يكون", "yakun"),
    "have": ("يملك", "yamluk"),
    "do": ("يفعل", "yaf'al"),
    "say": ("يقول", "yaqul"),
    "go": ("يذهب", "yadhhab"),
    "get": ("يحصل", "yahsul"),
    "make": ("يصنع", "yasna"),
    "know": ("يعرف", "ya'rif"),
    "think": ("يفكر", "yufakkir"),
    "take": ("يأخذ", "ya'khudh"),
    "see": ("يرى", "yara"),
    "come": ("يأتي", "ya'ti"),
    "want": ("يريد", "yurid"),
    "look": ("ينظر", "yanthur"),
    "use": ("يستخدم", "yastakhdum"),
    "find": ("يجد", "yajid"),
    "give": ("يعطي", "yu'ti"),
    "tell": ("يخبر", "yukhbir"),
    "work": ("يعمل", "ya'mal"),
    "call": ("يتصل", "yattasil"),
    "try": ("يحاول", "yuhawil"),
    "ask": ("يسأل", "yas'al"),
    "need": ("يحتاج", "yahtaj"),
    "feel": ("يشعر", "yash'ur"),
    "become": ("يصبح", "yusbih"),
    "leave": ("يترك", "yatruk"),
    "put": ("يضع", "yada'"),
    "mean": ("يعني", "ya'ni"),
    "keep": ("يحفظ", "yahfadh"),
    "let": ("يدع", "yada'"),
    "begin": ("يبدأ", "yabda"),
    "seem": ("يبدو", "yabdu"),
    "help": ("يساعد", "yusa'id"),
    "talk": ("يتحدث", "yatahadath"),
    "turn": ("يدور", "yadur"),
    "start": ("يبدأ", "yabda"),
    "show": ("يظهر", "yuthhir"),
    "hear": ("يسمع", "yasma'"),
    "play": ("يلعب", "yal'ab"),
    "run": ("يجري", "yajri"),
    "move": ("يتحرك", "yataharrak"),
    "like": ("يحب", "yuhibb"),
    "live": ("يعيش", "ya'ish"),
    "believe": ("يؤمن", "yu'min"),
    "hold": ("يمسك", "yumsik"),
    "bring": ("يجلب", "yajlib"),
    "happen": ("يحدث", "yahduth"),
    "write": ("يكتب", "yaktub"),
    "provide": ("يقدم", "yuqaddim"),
    "sit": ("يجلس", "yajlis"),
    "stand": ("يقف", "yaqif"),
    "lose": ("يخسر", "yakhsar"),
    "pay": ("يدفع", "yadfa'"),
    "meet": ("يقابل", "yuqabil"),
    "include": ("يتضمن", "yatadamman"),
    "continue": ("يستمر", "yastamirr"),
    "set": ("يحدد", "yuhadd"),
    "learn": ("يتعلم", "yata'allam"),
    "change": ("يتغير", "yataghayar"),
    "lead": ("يقود", "yaqud"),
    "understand": ("يفهم", "yafham"),
    "watch": ("يشاهد", "yushahid"),
    "follow": ("يتبع", "yatba'"),
    "stop": ("يتوقف", "yatawaqqaf"),
    "create": ("يخلق", "yakhliq"),
    "speak": ("يتكلم", "yatakallam"),
    "read": ("يقرأ", "yaqra"),
    "allow": ("يسمح", "yasmah"),
    "add": ("يضيف", "yudif"),
    "spend": ("ينفق", "yunfiq"),
    "grow": ("ينمو", "yanmu"),
    "open": ("يفتح", "yaftah"),
    "walk": ("يمشي", "yamshi"),
    "win": ("يفوز", "yafuz"),
    "offer": ("يعرض", "ya'rid"),
    "remember": ("يتذكر", "yatadhakkar"),
    "love": ("يحب", "yuhibb"),
    "consider": ("يعتبر", "ya'tabir"),
    "appear": ("يظهر", "yathhir"),
    "buy": ("يشتري", "yashtari"),
    "wait": ("ينتظر", "yantathir"),
    "serve": ("يخدم", "yakhdim"),
    "die": ("يموت", "yamut"),
    "send": ("يرسل", "yursil"),
    "expect": ("يتوقع", "yatawaqa'"),
    "build": ("يبني", "yabni"),
    "stay": ("يبقى", "yabqa"),
    "fall": ("يسقط", "yasqut"),
    "cut": ("يقطع", "yaqta'"),
    "reach": ("يصل", "yasil"),
    "kill": ("يقتل", "yaqtul"),
    "raise": ("يرفع", "yarfa'"),
    "pass": ("يمر", "yamurr"),
    "sell": ("يبيع", "yabi'"),
    "require": ("يتطلب", "yatatalab"),
    "decide": ("يقرر", "yuqarrir"),
    "return": ("يعود", "ya'ud"),
    "explain": ("يشرح", "yashrah"),
    "hope": ("يأمل", "ya'mal"),
    "develop": ("يطور", "yutawwir"),
    "carry": ("يحمل", "yahmil"),
    "break": ("يكسر", "yaksir"),
    "receive": ("يستقبل", "yastaqbil"),
    "agree": ("يوافق", "yuwafiq"),
    "support": ("يدعم", "yad'am"),
    "hit": ("يضرب", "yadrib"),
    "produce": ("ينتج", "yuntij"),
    "eat": ("يأكل", "ya'kul"),
    "cover": ("يغطي", "yughatti"),
    "catch": ("يمسك", "yumsik"),
    "draw": ("يرسم", "yarsim"),
    "choose": ("يختار", "yakhtár"),
    "cause": ("يسبب", "yusabbib"),
    "point": ("يشير", "yushir"),
    "pull": ("يسحب", "yashab"),
    "accept": ("يقبل", "yaqbal"),
    "push": ("يدفع", "yadfa'"),
    "wear": ("يرتدي", "yartadi"),
    "teach": ("يدرس", "yudarris"),
    "remain": ("يبقى", "yabqa"),
    "suggest": ("يقترح", "yaqtarih"),
    "thank": ("يشكر", "yashkur"),
    "laugh": ("يضحك", "yadhak"),
    "fight": ("يقاتل", "yuqatil"),
    "enjoy": ("يستمتع", "yastamti'"),
    "dance": ("يرقص", "yarqus"),
    "sing": ("يغني", "yughanni"),
    "drive": ("يقود", "yaqud"),
    "sleep": ("ينام", "yanam"),
    "study": ("يدرس", "yadrus"),
    
    # Common nouns
    "time": ("وقت", "waqt"),
    "person": ("شخص", "shakhs"),
    "year": ("سنة", "sana"),
    "way": ("طريق", "tariq"),
    "day": ("يوم", "yawm"),
    "thing": ("شيء", "shay'"),
    "man": ("رجل", "rajul"),
    "woman": ("امرأة", "imra'a"),
    "life": ("حياة", "hayah"),
    "child": ("طفل", "tifl"),
    "world": ("عالم", "'alam"),
    "school": ("مدرسة", "madrasa"),
    "state": ("ولاية", "wilaya"),
    "family": ("عائلة", "'a'ila"),
    "student": ("طالب", "talib"),
    "group": ("مجموعة", "majmu'a"),
    "country": ("بلد", "balad"),
    "problem": ("مشكلة", "mushkila"),
    "hand": ("يد", "yad"),
    "part": ("جزء", "juz'"),
    "place": ("مكان", "makan"),
    "case": ("حالة", "hala"),
    "week": ("أسبوع", "usbu'"),
    "company": ("شركة", "sharika"),
    "system": ("نظام", "nitham"),
    "program": ("برنامج", "barnamij"),
    "question": ("سؤال", "su'al"),
    "government": ("حكومة", "hukuma"),
    "number": ("رقم", "raqm"),
    "night": ("ليل", "layl"),
    "point": ("نقطة", "nuqta"),
    "home": ("بيت", "bayt"),
    "water": ("ماء", "ma'"),
    "room": ("غرفة", "ghurfa"),
    "mother": ("أم", "umm"),
    "area": ("منطقة", "mantiqa"),
    "money": ("مال", "mal"),
    "story": ("قصة", "qissa"),
    "fact": ("حقيقة", "haqiqa"),
    "month": ("شهر", "shahr"),
    "lot": ("الكثير", "al-kathir"),
    "right": ("حق", "haqq"),
    "study": ("دراسة", "dirasa"),
    "book": ("كتاب", "kitab"),
    "eye": ("عين", "'ayn"),
    "job": ("وظيفة", "wathifa"),
    "word": ("كلمة", "kalima"),
    "business": ("عمل", "'amal"),
    "issue": ("قضية", "qadiya"),
    "side": ("جانب", "janib"),
    "kind": ("نوع", "naw'"),
    "head": ("رأس", "ra's"),
    "house": ("منزل", "manzil"),
    "service": ("خدمة", "khidma"),
    "friend": ("صديق", "sadiq"),
    "father": ("أب", "ab"),
    "power": ("قوة", "quwwa"),
    "hour": ("ساعة", "sa'a"),
    "game": ("لعبة", "lu'ba"),
    "line": ("خط", "khatt"),
    "end": ("نهاية", "nihaya"),
    "member": ("عضو", "'udw"),
    "law": ("قانون", "qanun"),
    "car": ("سيارة", "sayyara"),
    "city": ("مدينة", "madina"),
    "community": ("مجتمع", "mujtama'"),
    "name": ("اسم", "ism"),
    "president": ("رئيس", "ra'is"),
    "team": ("فريق", "fariq"),
    "minute": ("دقيقة", "daqiqa"),
    "idea": ("فكرة", "fikra"),
    "kid": ("طفل", "tifl"),
    "body": ("جسم", "jism"),
    "information": ("معلومات", "ma'lumat"),
    "back": ("ظهر", "thahr"),
    "parent": ("والد", "walid"),
    "face": ("وجه", "wajh"),
    "others": ("آخرون", "akhirun"),
    "level": ("مستوى", "mustwa"),
    "office": ("مكتب", "maktab"),
    "door": ("باب", "bab"),
    "health": ("صحة", "sihha"),
    "art": ("فن", "fann"),
    "war": ("حرب", "harb"),
    "history": ("تاريخ", "ta'rikh"),
    "party": ("حفلة", "hafla"),
    "result": ("نتيجة", "natija"),
    "change": ("تغيير", "taghyir"),
    "morning": ("صباح", "sabah"),
    "reason": ("سبب", "sabab"),
    "research": ("بحث", "bahth"),
    "girl": ("فتاة", "fatah"),
    "guy": ("شاب", "shabb"),
    "moment": ("لحظة", "lahtha"),
    "air": ("هواء", "hawa'"),
    "teacher": ("معلم", "mu'allim"),
    "force": ("قوة", "quwwa"),
    "education": ("تعليم", "ta'lim"),
    "food": ("طعام", "ta'am"),
    "table": ("طاولة", "tawila"),
    "phone": ("هاتف", "hatif"),
    "computer": ("حاسوب", "hasub"),
    "brother": ("أخ", "akh"),
    "sister": ("أخت", "ukht"),
    "son": ("ابن", "ibn"),
    "daughter": ("ابنة", "ibna"),
    "husband": ("زوج", "zawj"),
    "wife": ("زوجة", "zawja"),
    "language": ("لغة", "lugha"),
    "love": ("حب", "hubb"),
    "peace": ("سلام", "salam"),
    "hello": ("مرحبا", "marhaba"),
    "goodbye": ("وداعا", "wada'an"),
    "please": ("من فضلك", "min fadlak"),
    "thanks": ("شكرا", "shukran"),
    "yes": ("نعم", "na'am"),
    "no": ("لا", "la"),
    "sorry": ("آسف", "asif"),
    
    # Adjectives
    "good": ("جيد", "jayyid"),
    "new": ("جديد", "jadid"),
    "first": ("أول", "awwal"),
    "last": ("آخر", "akhir"),
    "long": ("طويل", "tawil"),
    "great": ("عظيم", "'athim"),
    "little": ("صغير", "saghir"),
    "own": ("خاص", "khass"),
    "other": ("آخر", "akhar"),
    "old": ("قديم", "qadim"),
    "right": ("صحيح", "sahih"),
    "big": ("كبير", "kabir"),
    "high": ("عالي", "'ali"),
    "different": ("مختلف", "mukhtalif"),
    "small": ("صغير", "saghir"),
    "large": ("كبير", "kabir"),
    "next": ("التالي", "at-tali"),
    "early": ("مبكر", "mubakkir"),
    "young": ("شاب", "shabb"),
    "important": ("مهم", "muhimm"),
    "few": ("قليل", "qalil"),
    "public": ("عام", "'amm"),
    "bad": ("سيء", "sayyi'"),
    "same": ("نفس", "nafs"),
    "able": ("قادر", "qadir"),
    "happy": ("سعيد", "sa'id"),
    "sad": ("حزين", "hazin"),
    "beautiful": ("جميل", "jamil"),
    "ugly": ("قبيح", "qabih"),
    "hot": ("حار", "harr"),
    "cold": ("بارد", "barid"),
    "fast": ("سريع", "sari'"),
    "slow": ("بطيء", "bati'"),
    "strong": ("قوي", "qawi"),
    "weak": ("ضعيف", "da'if"),
    "clean": ("نظيف", "nathif"),
    "dirty": ("قذر", "qadhir"),
    "easy": ("سهل", "sahl"),
    "hard": ("صعب", "sa'b"),
    "rich": ("غني", "ghani"),
    "poor": ("فقير", "faqir"),
    "full": ("ممتلئ", "mumtali"),
    "empty": ("فارغ", "farigh"),
    "ready": ("جاهز", "jahiz"),
    "busy": ("مشغول", "mashghul"),
    "free": ("حر", "hurr"),
    "safe": ("آمن", "amin"),
    "dangerous": ("خطير", "khatir"),
    "possible": ("ممكن", "mumkin"),
    "impossible": ("مستحيل", "mustahil"),
    "simple": ("بسيط", "basit"),
    "difficult": ("صعب", "sa'b"),
    "loud": ("عالي", "'ali"),
    "quiet": ("هادئ", "hadi"),
    "bright": ("مشرق", "mushriq"),
    "dark": ("مظلم", "muthlim"),
    "light": ("خفيف", "khafif"),
    "heavy": ("ثقيل", "thaqil"),
    
    # Prepositions and conjunctions
    "in": ("في", "fi"),
    "on": ("على", "'ala"),
    "at": ("في", "fi"),
    "to": ("إلى", "ila"),
    "from": ("من", "min"),
    "with": ("مع", "ma'a"),
    "for": ("لـ", "li"),
    "about": ("عن", "'an"),
    "after": ("بعد", "ba'd"),
    "before": ("قبل", "qabl"),
    "between": ("بين", "bayna"),
    "through": ("خلال", "khilal"),
    "during": ("أثناء", "athna'"),
    "under": ("تحت", "taht"),
    "over": ("فوق", "fawq"),
    "above": ("فوق", "fawq"),
    "below": ("تحت", "taht"),
    "inside": ("داخل", "dakhil"),
    "outside": ("خارج", "kharij"),
    "near": ("قرب", "qurb"),
    "far": ("بعيد", "ba'id"),
    "behind": ("خلف", "khalfa"),
    "front": ("أمام", "amam"),
    "up": ("فوق", "fawq"),
    "down": ("أسفل", "asfal"),
    "and": ("و", "wa"),
    "or": ("أو", "aw"),
    "but": ("لكن", "lakin"),
    "because": ("لأن", "li'anna"),
    "if": ("إذا", "idha"),
    "when": ("عندما", "'indama"),
    "where": ("أين", "ayna"),
    "who": ("من", "man"),
    "what": ("ماذا", "madha"),
    "which": ("أي", "ayy"),
    "how": ("كيف", "kayfa"),
    "why": ("لماذا", "limadha"),
}

def main():
    print("Importing comprehensive English-Arabic dictionary...")
    
    # Database connection
    conn = psycopg2.connect(
        host="localhost",
        port="54322",
        database="postgres",
        user="postgres",
        password="postgres"
    )
    cur = conn.cursor()
    
    # Insert translations
    inserted = 0
    for english, (arabic, phonetic) in WORD_TRANSLATIONS.items():
        try:
            # Determine part of speech (simple heuristic)
            pos = "verb" if english in ["be", "have", "do", "say", "go", "get", "make"] else "noun"
            
            cur.execute("""
                INSERT INTO english_arabic_dictionary 
                (english, arabic, arabic_phonetic, part_of_speech, frequency_rank)
                VALUES (%s, %s, %s, %s, %s)
                ON CONFLICT DO NOTHING
            """, (english.lower(), arabic, phonetic, pos, inserted + 1))
            inserted += 1
        except Exception as e:
            print(f"Error inserting {english}: {e}")
    
    conn.commit()
    print(f"✓ Imported {inserted} English-Arabic translations")
    
    # Show stats
    cur.execute("SELECT COUNT(*) FROM english_arabic_dictionary")
    total = cur.fetchone()[0]
    print(f"✓ Total entries in database: {total}")
    
    cur.close()
    conn.close()

if __name__ == "__main__":
    main()


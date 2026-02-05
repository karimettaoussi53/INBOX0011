
import { Appliance, Language } from './types';

export const SYSTEM_INSTRUCTION = `
You are FixPro, an expert maintenance engineer.
GOAL: Provide FAST, ACCURATE, and SAFE repair advice.

CRITICAL RULES FOR SPEED & QUALITY:
1. BE CONCISE: Do not use long introductions. Get straight to the solution.
2. STRUCTURE:
   - ⚠️ **Safety Warning** (Only if dangerous)
   - 🔍 **Diagnosis** (1 sentence)
   - 🛠️ **Fix Steps** (Short bullet points)
   - 🔧 **Tools** (Comma separated list)
3. LANGUAGE: Respond STRICTLY in the user's language (Arabic, English, French, or Amazigh/Tifinagh).
4. 📸 **VISUAL ANALYSIS** (If image is provided):
   - Look for: Error codes on screens, Burn marks, Swollen capacitors, Loose wires, Cracks, or Rust.
   - If a specific part is damaged in the photo, name it precisely and explain how to replace it.
   - If the image is unclear, ask for a closer shot of the label or circuit board.

If the input is just an appliance name (e.g., "Washing Machine"), list the 3 most common problems and their quick fixes immediately.
`;

export const LANGUAGES: Record<Language, { label: string, dir: 'ltr' | 'rtl' }> = {
  ar: { label: 'العربية', dir: 'rtl' },
  ber: { label: 'ⵜⴰⵎⴰⵣⵉⵖⵜ', dir: 'ltr' },
  fr: { label: 'Français', dir: 'ltr' },
  en: { label: 'English', dir: 'ltr' }
};

export const APPLIANCES: Appliance[] = [
  { id: 'smartphone', name: { ar: 'هاتف ذكي', fr: 'Smartphone', en: 'Smartphone', ber: 'ⵜⴰⵜⵉⵍⵉⴼⵓⵏⵜ' }, icon: '' },
  { id: 'tv', name: { ar: 'تلفاز', fr: 'Smart TV', en: 'Smart TV', ber: 'ⵜⵉⵍⵉⴼⵉⵣⵢⵓⵏ' }, icon: '' },
  { id: 'laptop', name: { ar: 'حاسوب', fr: 'Ordinateur', en: 'Laptop', ber: 'ⴰⵙⵍⴽⵉⵎ' }, icon: '' },
  { id: 'washing_machine', name: { ar: 'غسالة', fr: 'Lave-linge', en: 'Washer', ber: 'ⵜⴰⵎⵛⵓⵜ' }, icon: '' },
  { id: 'fridge', name: { ar: 'ثلاجة', fr: 'Réfrigérateur', en: 'Fridge', ber: 'ⴰⵙⵎⵎⵉⴹ' }, icon: '' },
  { id: 'ac', name: { ar: 'مكيف', fr: 'Climatiseur', en: 'AC Unit', ber: 'ⴰⵎⵉⵙⵉⴷ' }, icon: '' },
  { id: 'airfryer', name: { ar: 'قلاية هوائية', fr: 'Friteuse', en: 'Air Fryer', ber: 'ⵜⴰⴼⵔⴰⵢⵜ' }, icon: '' },
  { id: 'oven', name: { ar: 'فرن', fr: 'Four', en: 'Oven', ber: 'ⴰⴼⴰⵔⵏⵓ' }, icon: '' },
];

export const UI_STRINGS: Record<Language, Record<string, string>> = {
  ar: {
    welcome: 'مركز الصيانة الذكي',
    welcomeUser: 'مرحباً، {name}',
    tagline: 'FixPro: خبيرك التقني في كل زمان ومكان',
    placeholder: 'صوّر العطل أو اكتب المشكلة هنا...',
    send: 'إرسال',
    safetyNotice: 'إخلاء مسؤولية: اتبع دائماً معايير السلامة المهنية. بعض الأعطال تتطلب فنياً مختصاً.',
    uploadImage: 'تحليل الصورة',
    openCamera: 'صور العطل',
    uploadFile: 'إرفاق صورة',
    login: 'تسجيل الدخول',
    logout: 'خروج',
    enterName: 'سجل دخولك للمتابعة',
    nameLabel: 'الاسم الكامل',
    emailLabel: 'البريد الإلكتروني',
    passwordLabel: 'كلمة المرور',
    startAction: 'دخول آمن',
    getStarted: 'ابدأ الصيانة الآن',
    settings: 'الإعدادات المتقدمة',
    appearance: 'المظهر والسمات',
    lightMode: 'وضع النهار',
    darkMode: 'الوضع الليلي',
    language: 'لغة الواجهة',
    back: 'الرجوع للخلف',
    errorTitle: 'خطأ في النظام',
    errorQuota: 'تم تجاوز الحد المسموح، يرجى المحاولة لاحقاً.',
    errorGeneral: 'تعذر الاتصال بالخادم الذكي.',
    shareApp: 'مشاركة التطبيق',
    analyzing: 'جاري تحليل الصورة وتشخيص العطل...'
  },
  en: {
    welcome: 'Smart Repair Center',
    welcomeUser: 'Welcome, {name}',
    tagline: 'FixPro: Your Pro Engineer Anywhere',
    placeholder: 'Snap a photo or describe the issue...',
    send: 'Send',
    safetyNotice: 'Disclaimer: Always follow safety standards. Some repairs require certified pros.',
    uploadImage: 'Analyze Image',
    openCamera: 'Snap Photo',
    uploadFile: 'Upload',
    login: 'Login',
    logout: 'Logout',
    enterName: 'Sign in to continue',
    nameLabel: 'Full Name',
    emailLabel: 'Email Address',
    passwordLabel: 'Password',
    startAction: 'Secure Login',
    getStarted: 'Start Repair',
    settings: 'Settings',
    appearance: 'Appearance',
    lightMode: 'Light',
    darkMode: 'Dark',
    language: 'Language',
    back: 'Back',
    errorTitle: 'System Error',
    errorQuota: 'Quota exceeded, please try later.',
    errorGeneral: 'AI Connection failed.',
    shareApp: 'Share App',
    analyzing: 'Analyzing image & diagnosing...'
  },
  fr: {
    welcome: 'Centre de Réparation',
    welcomeUser: 'Bienvenue, {name}',
    tagline: 'FixPro: Votre Expert Technique Partout',
    placeholder: 'Prenez une photo ou décrivez le problème...',
    send: 'Envoyer',
    safetyNotice: 'Avis: Respectez les normes de sécurité. Certains cas exigent un pro.',
    uploadImage: 'Analyse Image',
    openCamera: 'Photo',
    uploadFile: 'Fichier',
    login: 'Connexion',
    logout: 'Déconnexion',
    enterName: 'Connectez-vous pour continuer',
    nameLabel: 'Nom Complet',
    emailLabel: 'Adresse E-mail',
    passwordLabel: 'Mot de passe',
    startAction: 'Connexion Sécurisée',
    getStarted: 'Commencer',
    settings: 'Paramètres',
    appearance: 'Apparence',
    lightMode: 'Clair',
    darkMode: 'Sombre',
    language: 'Langue',
    back: 'Retour',
    errorTitle: 'Erreur Système',
    errorQuota: 'Quota dépassé, réessayez plus tard.',
    errorGeneral: 'Échec de la connexion IA.',
    shareApp: 'Partager',
    analyzing: 'Analyse de l\'image en cours...'
  },
  ber: {
    welcome: 'ⴰⵎⵎⴰⵙ ⵏ ⵜⵄⵎⵔⵜ',
    welcomeUser: 'ⴰⵏⵙⵓⴼ, {name}',
    tagline: 'FixPro: ⴰⵎⵙⵏⴰⵡ ⵏⵏⴽ ⴳ ⴽⵓ ⴰⴷⵖⴰⵔ',
    placeholder: 'ⴰⵔⵓ ⵜⴰⵎⵓⴽⵔيسⵜ ⵏⵏⴽ...',
    send: 'ⴰⵣⵏ',
    safetyNotice: 'ⴰⴷⴰⵢⵏ: ⴹⴼⵔ ⵉⵙⴻⴳⴳⴰⴷⵏ ⵏ ⵜⴼⵍⵓⵙⵜ.',
    uploadImage: 'ⴰⵙⵍⵍⴻⵢ ⵏ ⵜⵡⵍⴰⴼⵜ',
    openCamera: 'ⵜⴰⴽⴰⵎⵉⵔⴰ',
    uploadFile: 'ⴰⴼⴰⵢⵍⵓ',
    login: 'ⴽⵛⵎ',
    logout: 'ⴼⴼⵖ',
    enterName: 'ⴽⵛⵎ ⴰⴼⴰⴷ ⴰⵜⴽⵎⵍⴷ',
    nameLabel: 'ⵉⵙⵎ ⴰⵎⴽⵎⵍ',
    emailLabel: 'ⵜⴰⵏⵙⴰ ⵉⵍⵉⴽⵜⵔⵓⵏⵉⵜ',
    passwordLabel: 'ⵜⴰⴳⵓⵔⵉ ⵏ ⵓⵣⵔⴰⵢ',
    startAction: 'ⴽⵛⵎ ⵙ ⵜⵏⴼⵔⵓⵜ',
    getStarted: 'ⴱⴷⵓ ⵜⴰⵄⵎⵔⵜ',
    settings: 'ⵉⵙⴻⴳⴳⴰⴷⵏ',
    appearance: 'ⴰⵎⵓⵖ',
    lightMode: 'ⴰⵙⵙ',
    darkMode: 'ⵉⴹ',
    language: 'ⵜⵓⵜⵍⴰⵢⵜ',
    back: 'ⵓⵖⴰⵍ',
    errorTitle: 'ⵜⵓⴳⵏⴰ ⵏ ⵓⵏⴳⵔⴰⵡ',
    errorQuota: 'ⵜⵓⴳⵏⴰ ⵏ ⵓⵣⴷⴰⵢ: ⴳⴳⵓⵏ ⴽرا ⵏ ⵜⵉⴽⴽⵍⵜ.',
    errorGeneral: 'ⵜⵓⴳⵏⴰ ⵏ ⵓⵣⴷⴰⵢ ⴷ IA',
    shareApp: 'ⴰⵣⵏ ⵜⴰⵎⵙⵙⵓⴳⵓⵔⵜ',
    analyzing: 'ⴰⵙⵍⵍⴻⵢ ⵏ ⵜⵡⵍⴰⴼⵜ...'
  }
};

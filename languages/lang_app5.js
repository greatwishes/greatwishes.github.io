// languages/lang_app5.js
const lang = {
  ar: {
    nav: [
      "الرئيسية",
      "التطبيقات",
      "الدليل",
      "سياسة الخصوصية",
      "تواصل معنا"
    ],
    navLinks: [
      "الرئيسية",
      "التالي",
      "الخصوصية"
    ],
    downloadBtn: "تحميل التطبيق الآن",
    headerTitle: "ملاحظات سرية",
    headerSubtitle: "احفظ ملاحظاتك الشخصية بسرية تامة مع حماية كاملة",
    appTitle: "تطبيق ملاحظات سرية",
    appDescription: "تطبيق ملاحظات سرية هو أداة آمنة وسهلة الاستخدام لحفظ ملاحظاتك الشخصية بسرية تامة. يتيح لك التطبيق تدوين الأفكار والمعلومات الحساسة مع حماية كاملة بكلمة مرور، وواجهة بسيطة تدعم العربية.",
    featuresTitle: "الميزات الرئيسية للتطبيق",
    features: [
      "حماية بكلمة مرور: يمكنك تأمين ملاحظاتك بكلمة مرور لمنع الوصول غير المصرح به.",
      "واجهة مستخدم سهلة: تصميم بسيط يساعدك على كتابة وتنظيم الملاحظات بسرعة.",
      "دعم النسخ الاحتياطي: حفظ واستعادة الملاحظات بسهولة عند الحاجة.",
      "تصنيفات وألوان: تنظيم الملاحظات باستخدام التصنيفات وتلوينها لسهولة الوصول.",
      "دعم اللغة العربية: تجربة استخدام مرنة وسلسة للمستخدم العربي."
    ],
    footer: {
      siteName: "GreatWishes",
      rights: "جميع الحقوق محفوظة"
    }
  },
  en: {
    nav: [
      "Home",
      "Apps",
      "Guide",
      "Privacy Policy",
      "Contact Us"
    ],
    navLinks: [
      "Home",
      "Next",
      "Privacy"
    ],
    downloadBtn: "Download App Now",
    headerTitle: "Secret Notes",
    headerSubtitle: "Keep your personal notes completely private with full protection",
    appTitle: "Secret Notes App",
    appDescription: "Secret Notes is a secure and easy-to-use tool for keeping your personal notes completely private. The app allows you to jot down ideas and sensitive information with full password protection and a simple Arabic-friendly interface.",
    featuresTitle: "Main Features",
    features: [
      "Password Protection: Secure your notes with a password to prevent unauthorized access.",
      "Easy-to-Use Interface: Simple design helps you write and organize notes quickly.",
      "Backup Support: Easily save and restore notes when needed.",
      "Categories and Colors: Organize notes using categories and color-coding for easy access.",
      "Arabic Language Support: Flexible and smooth experience for Arabic users."
    ],
    footer: {
      siteName: "GreatWishes",
      rights: "All rights reserved"
    }
  }
};

// Default language
let currentLang = 'ar';

function setLanguage(langCode) {
  currentLang = langCode;

  // Header
  document.querySelector('.header h1').innerHTML

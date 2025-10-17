// lang_app5.js
let currentLang = 'ar';

const lang = {
  ar: {
    siteName: "GreatWishes",
    rights: "جميع الحقوق محفوظة",
    headerTitle: "ملاحظات سرية",
    headerSubtitle: "احفظ ملاحظاتك الشخصية بسرية تامة مع حماية كاملة",
    downloadApp: "تحميل التطبيق",
    downloadNow: "تحميل التطبيق الآن",
    appTitle: "تطبيق ملاحظات سرية",
    appDescription: "تطبيق ملاحظات سرية هو أداة آمنة وسهلة الاستخدام لحفظ ملاحظاتك الشخصية بسرية تامة. يتيح لك التطبيق تدوين الأفكار والمعلومات الحساسة مع حماية كاملة بكلمة مرور، وواجهة بسيطة تدعم العربية.",
    featuresTitle: "الميزات الرئيسية للتطبيق:",
    features: [
      "حماية بكلمة مرور: يمكنك تأمين ملاحظاتك بكلمة مرور لمنع الوصول غير المصرح به.",
      "واجهة مستخدم سهلة: تصميم بسيط يساعدك على كتابة وتنظيم الملاحظات بسرعة.",
      "دعم النسخ الاحتياطي: حفظ واستعادة الملاحظات بسهولة عند الحاجة.",
      "تصنيفات وألوان: تنظيم الملاحظات باستخدام التصنيفات وتلوينها لسهولة الوصول.",
      "دعم اللغة العربية: تجربة استخدام مرنة وسلسة للمستخدم العربي."
    ],
    navHome: "الرئيسية",
    navNext: "التالي",
    navPrev: "السابق",
    clickAlert: "رابط التحميل غير جاهز بعد. يرجى المحاولة لاحقاً."
  },
  en: {
    siteName: "GreatWishes",
    rights: "All rights reserved",
    headerTitle: "Secret Notes",
    headerSubtitle: "Keep your personal notes completely private with full protection",
    downloadApp: "Download App",
    downloadNow: "Download Now",
    appTitle: "Secret Notes App",
    appDescription: "Secret Notes is a secure and easy-to-use tool for keeping your personal notes completely private. The app allows you to jot down ideas and sensitive information with full password protection and a simple Arabic-friendly interface.",
    featuresTitle: "Main Features:",
    features: [
      "Password Protection: Secure your notes with a password to prevent unauthorized access.",
      "Easy-to-Use Interface: Simple design helps you write and organize notes quickly.",
      "Backup Support: Easily save and restore notes when needed.",
      "Categories and Colors: Organize notes using categories and color-coding for easy access.",
      "Arabic Language Support: Flexible and smooth experience for Arabic users."
    ],
    navHome: "Home",
    navNext: "Next",
    navPrev: "Previous",
    clickAlert: "Download link is not ready yet. Please try again later."
  }
};

// دالة لتغيير اللغة في الصفحة
function setLanguage(langCode) {
  currentLang = langCode;

  // نصوص الفوتر
  document.querySelector('[data-lang-key="siteName"]').innerText = lang[langCode].siteName;
  document.querySelector('[data-lang-key="rights"]').innerText = lang[langCode].rights;

  // الهيدر
  document.querySelector('.header h1').innerText = lang[langCode].headerTitle;
  document.querySelector('.header p').innerText = lang[langCode].headerSubtitle;

  // أزرار التحميل
  document.getElementById('downloadBtn1').innerText = lang[langCode].downloadApp;
  document.getElementById('downloadBtn2').innerText = lang[langCode].downloadNow;

  // وصف التطبيق
  document.querySelector('.app-description h2').innerText = lang[langCode].appTitle;
  document.querySelector('.app-description p').innerText = lang[langCode].appDescription;
  document.querySelector('.app-description h3').innerText = lang[langCode].featuresTitle;

  // قائمة الميزات
  const featuresList = document.querySelectorAll('.app-description ul li');
  lang[langCode].features.forEach((text, index) => {
    if(featuresList[index]) featuresList[index].innerText = text;
  });

  // روابط التنقل
  const navLinks = document.querySelectorAll('.navigation-links a');
  if(navLinks[0]) navLinks[0].innerText = lang[langCode].navHome;
  if(navLinks[1]) navLinks[1].innerText = lang[langCode].navNext;
  if(navLinks[2]) navLinks[2].innerText = lang[langCode].navPrev;
}

// lang_app5.js
const lang = {
  ar: {
    headerTitle: "ملاحظات سرية",
    headerSubtitle: "احفظ ملاحظاتك الشخصية بسرية تامة مع حماية كاملة",
    downloadBtn: "تحميل التطبيق",
    downloadBtnNow: "تحميل التطبيق الآن",
    appTitle: "تطبيق ملاحظات سرية",
    featuresTitle: "الميزات الرئيسية للتطبيق:",
    featuresList: [
      "حماية بكلمة مرور: يمكنك تأمين ملاحظاتك بكلمة مرور لمنع الوصول غير المصرح به.",
      "واجهة مستخدم سهلة: تصميم بسيط يساعدك على كتابة وتنظيم الملاحظات بسرعة.",
      "دعم النسخ الاحتياطي: حفظ واستعادة الملاحظات بسهولة عند الحاجة.",
      "تصنيفات وألوان: تنظيم الملاحظات باستخدام التصنيفات وتلوينها لسهولة الوصول.",
      "دعم اللغة العربية: تجربة استخدام مرنة وسلسة للمستخدم العربي."
    ],
    navigation: ["الرئيسية", "التالي", "السابق"],
    footer: {
      siteName: "GreatWishes",
      rights: "جميع الحقوق محفوظة"
    }
  },
  en: {
    headerTitle: "Secret Notes",
    headerSubtitle: "Keep your personal notes completely secure with full protection",
    downloadBtn: "Download App",
    downloadBtnNow: "Download App Now",
    appTitle: "Secret Notes App",
    featuresTitle: "Main Features:",
    featuresList: [
      "Password Protection: Secure your notes with a password to prevent unauthorized access.",
      "Easy-to-use interface: Simple design to quickly write and organize notes.",
      "Backup Support: Save and restore notes easily when needed.",
      "Categories and Colors: Organize notes using categories and color coding for easy access.",
      "Supports Arabic: Smooth and flexible experience for Arabic users."
    ],
    navigation: ["Home", "Next", "Previous"],
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
  document.querySelector('.header h1').innerHTML = lang[langCode].headerTitle;
  document.querySelector('.header p').innerHTML = lang[langCode].headerSubtitle;

  // Buttons
  document.getElementById('downloadBtn1').innerHTML = lang[langCode].downloadBtn;
  document.getElementById('downloadBtn2').innerHTML = lang[langCode].downloadBtnNow;

  // App description
  document.querySelector('.app-description h2').innerHTML = lang[langCode].appTitle;
  document.querySelector('.app-description h3').innerHTML = lang[langCode].featuresTitle;

  const featuresItems = document.querySelectorAll('.app-description ul li');
  featuresItems.forEach((li, index) => {
    li.innerHTML = lang[langCode].featuresList[index];
  });

  // Navigation links
  const navLinks = document.querySelectorAll('.navigation-links a');
  navLinks.forEach((a, index) => {
    a.innerHTML = lang[langCode].navigation[index];
  });

  // Footer
  document.querySelector('.footer').innerHTML =
    `&copy; 2025 <span data-lang-key="siteName">${lang[langCode].footer.siteName}</span> | <span data-lang-key="rights">${lang[langCode].footer.rights}</span>`;
}


// lang_app3.js
const lang = {
  ar: {
    headerTitle: "تحويل الصوت إلى نص",
    headerSubtitle: "حول صوتك إلى نصوص مكتوبة بسرعة وسهولة وحفظه ملف ورد",
    downloadBtn: "تحميل التطبيق",
    downloadBtnNow: "تحميل التطبيق الآن",
    appTitle: "تطبيق تحويل المذكرة الصوتية إلى ملف",
    featuresTitle: "الميزات الرئيسية للتطبيق:",
    featuresList: [
      "تحويل الصوت إلى نص: تسجيل المذكرة الصوتية أو استيراد ملف صوتي وتحويله مباشرة.",
      "دقة عالية في التعرف على الصوت: تقنيات متقدمة لمعالجة الصوت بدقة.",
      "حفظ النصوص: حفظ النتائج بصيغة وورد أو نص عادي.",
      "مشاركة النصوص: مشاركة مباشرة عبر البريد أو التطبيقات المختلفة.",
      "دعم اللغتين العربية والإنجليزية: تجربة استخدام سلسة ومتكاملة."
    ],
    navigation: ["الرئيسية", "التالي", "السابق"],
    footer: {
      siteName: "GreatWishes",
      rights: "جميع الحقوق محفوظة"
    }
  },
  en: {
    headerTitle: "Voice to Text",
    headerSubtitle: "Convert your voice into written text quickly and easily, and save it as a Word file",
    downloadBtn: "Download App",
    downloadBtnNow: "Download App Now",
    appTitle: "Voice Note to Word App",
    featuresTitle: "Main Features:",
    featuresList: [
      "Voice to Text: Record a voice note or import audio and convert it instantly.",
      "High Accuracy: Advanced voice processing techniques for precise results.",
      "Save Text: Save results as Word or plain text.",
      "Share Text: Directly share via email or other apps.",
      "Supports Arabic & English: Smooth and complete user experience."
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

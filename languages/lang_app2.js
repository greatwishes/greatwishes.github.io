// lang_app2.js
const lang = {
  ar: {
    headerTitle: "حساب العمر والأبراج",
    headerSubtitle: "اكتشف عمرك وبرجك بسهولة مع نصائح يومية ممتعة",
    downloadBtn: "تحميل التطبيق",
    downloadBtnNow: "تحميل التطبيق الآن",
    appTitle: "تطبيق حساب العمر",
    featuresTitle: "الميزات:",
    featuresList: [
      "حساب دقيق للعمر",
      "تحليل طاقة الاسم",
      "معاني أسماء",
      "تحليل الأبراج",
      "يدعم العربية والإنجليزية"
    ],
    navigation: ["الرئيسية", "التالي", "السابق"],
    footer: {
      siteName: "GreatWishes",
      rights: "جميع الحقوق محفوظة"
    }
  },
  en: {
    headerTitle: "Age & Zodiac Calculator",
    headerSubtitle: "Discover your age and zodiac easily with fun daily tips",
    downloadBtn: "Download App",
    downloadBtnNow: "Download App Now",
    appTitle: "Age Calculator App",
    featuresTitle: "Features:",
    featuresList: [
      "Accurate age calculation",
      "Name energy analysis",
      "Name meanings",
      "Zodiac analysis",
      "Supports Arabic and English"
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

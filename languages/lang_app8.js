// lang_app8.js
let currentLang = 'ar';

const lang = {
  ar: {
    siteName: "GreatWishes",
    rights: "جميع الحقوق محفوظة",
    headerTitle: "لعبة ترتيب الأرقام",
    headerSubtitle: "رتب الأرقام داخل الشبكة للوصول إلى الترتيب الصحيح بطريقة مسلية وتفاعلية",
    downloadBtn: "تحميل اللعبة",
    downloadBtnNow: "تحميل اللعبة الآن",
    appTitle: "ترتيب الأرقام",
    featuresTitle: "مميزات اللعبة:",
    featuresList: [
      "ألوان مضيئة عند ترتيب الصفوف: رؤية الصفوف تضيء عند الترتيب الصحيح تضيف متعة وتشويق.",
      "تحدي وتركيز: تحسين مهارات التركيز وحل المشكلات من خلال ترتيب الأرقام.",
      "إحصائيات وتحكم بالوقت: عداد الوقت وسجل الحركات لمتابعة الأداء.",
      "تصميم جذاب وبسيط: واجهة واضحة وسهلة اللعب مع تأثيرات بصرية مميزة.",
      "مناسبة للجميع: لعبة ممتعة للكبار والصغار، وتدعم اللغة العربية بالكامل."
    ],
    navigation: ["الرئيسية", "التالي", "السابق"]
  },
  en: {
    siteName: "GreatWishes",
    rights: "All rights reserved",
    headerTitle: "Fifteen Puzzle",
    headerSubtitle: "Arrange the numbers in the grid to reach the correct order in a fun and interactive way",
    downloadBtn: "Download Game",
    downloadBtnNow: "Download Game Now",
    appTitle: "Number Puzzle",
    featuresTitle: "Game Features:",
    featuresList: [
      "Glowing colors when rows are correctly arranged: Rows light up adding fun and excitement.",
      "Challenge and focus: Improve concentration and problem-solving skills by arranging numbers.",
      "Statistics and time control: Timer and move count to track your performance.",
      "Attractive and simple design: Clear interface with enjoyable visual effects.",
      "Suitable for everyone: Fun game for kids and adults with full Arabic support."
    ],
    navigation: ["Home", "Next", "Previous"]
  }
};

function setLanguage(langCode) {
  currentLang = langCode;

  // Header
  document.querySelector('.header h1').innerText = lang[langCode].headerTitle;
  document.querySelector('.header p').innerText = lang[langCode].headerSubtitle;

  // Buttons
  document.getElementById('downloadBtn1').innerText = lang[langCode].downloadBtn;
  document.getElementById('downloadBtn2').innerText = lang[langCode].downloadBtnNow;

  // App description
  document.querySelector('.app-description h2').innerText = lang[langCode].appTitle;
  document.querySelector('.app-description h3').innerText = lang[langCode].featuresTitle;

  const featuresItems = document.querySelectorAll('.app-description ul li');
  featuresItems.forEach((li, index) => {
    li.innerText = lang[langCode].featuresList[index];
  });

  // Navigation links
  const navLinks = document.querySelectorAll('.navigation-links a');
  navLinks.forEach((a, index) => {
    a.innerText = lang[langCode].navigation[index];
  });

  // Footer
  document.querySelector('.footer').innerHTML =
    `&copy; 2025 <span data-lang-key="siteName">${lang[langCode].siteName}</span> | <span data-lang-key="rights">${lang[langCode].rights}</span>`;
    }

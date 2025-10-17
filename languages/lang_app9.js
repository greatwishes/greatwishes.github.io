// lang_app9.js
let currentLang = 'ar';

const lang = {
  ar: {
    siteName: "GreatWishes",
    rights: "جميع الحقوق محفوظة",
    headerTitle: "🃏 لعبة الذاكرة",
    headerSubtitle: "اختبر ذاكرتك وحاول تذكر مواقع البطاقات المطابقة بطريقة ممتعة وتفاعلية",
    downloadBtn: "تحميل اللعبة",
    downloadBtnNow: "تحميل اللعبة الآن",
    appTitle: "لعبة الذاكرة",
    featuresTitle: "مميزات اللعبة:",
    featuresList: [
      "تصميم جذاب وبسيط: واجهة واضحة وسهلة اللعب مع تأثيرات بصرية ممتعة عند مطابقة البطاقات.",
      "تحدي وتركيز: تحسين مهارات الذاكرة والتركيز من خلال تذكر مواقع البطاقات.",
      "إحصائيات وتحكم بالوقت: عداد الوقت وسجل الحركات لمتابعة الأداء وتحسين المهارات.",
      "مناسبة للجميع: لعبة ممتعة للكبار والصغار، وتدعم اللغة العربية بالكامل.",
      "تحديات مختلفة: مستويات متنوعة تزيد من صعوبة اللعبة تدريجيًا."
    ],
    navigation: ["الرئيسية", "التالي", "السابق"]
  },
  en: {
    siteName: "GreatWishes",
    rights: "All rights reserved",
    headerTitle: "Memory Game",
    headerSubtitle: "Test your memory and try to remember matching card locations in a fun and interactive way",
    downloadBtn: "Download Game",
    downloadBtnNow: "Download Game Now",
    appTitle: "Memory Game",
    featuresTitle: "Game Features:",
    featuresList: [
      "Attractive and simple design: Clear interface with enjoyable visual effects when matching cards.",
      "Challenge and focus: Improve memory and concentration skills by remembering card positions.",
      "Statistics and time control: Timer and move count to track performance and improve skills.",
      "Suitable for everyone: Fun game for kids and adults with full Arabic support.",
      "Different challenges: Various levels gradually increase the difficulty of the game."
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

// lang_app8.js
const lang = {
  ar: {
    headerTitle: "لعبة ترتيب الأرقام",
    headerSubtitle: "رتب الأرقام داخل الشبكة للوصول إلى الترتيب الصحيح بطريقة مسلية وتفاعلية",
    downloadBtn: "تحميل اللعبة",
    downloadBtnNow: "تحميل اللعبة الآن",
    appTitle: "ترتيب الأرقام",
    appDescription: "تطبيق <strong>ترتيب الارقام</strong> يمنحك تجربة تحدي ذهني ممتع، حيث عليك ترتيب الأرقام من 1 إلى 15 داخل شبكة 4×4. حاول ترتيب كل صف للحصول على ألوان مضيئة وتأثيرات بصرية ممتعة.",
    featuresTitle: "مميزات اللعبة:",
    featuresList: [
      "ألوان مضيئة عند ترتيب الصفوف: رؤية الصفوف تضيء عند الترتيب الصحيح تضيف متعة وتشويق.",
      "تحدي وتركيز: تحسين مهارات التركيز وحل المشكلات من خلال ترتيب الأرقام.",
      "إحصائيات وتحكم بالوقت: عداد الوقت وسجل الحركات لمتابعة الأداء.",
      "تصميم جذاب وبسيط: واجهة واضحة وسهلة اللعب مع تأثيرات بصرية مميزة.",
      "مناسبة للجميع: لعبة ممتعة للكبار والصغار، وتدعم اللغة العربية بالكامل."
    ],
    navigation: ["الرئيسية", "التالي", "السابق"],
    footer: {
      siteName: "GreatWishes",
      rights: "جميع الحقوق محفوظة"
    }
  },
  en: {
    headerTitle: "Fifteen Puzzle",
    headerSubtitle: "Arrange the numbers in the grid to reach the correct order in a fun and interactive way",
    downloadBtn: "Download Game",
    downloadBtnNow: "Download Game Now",
    appTitle: "Number Puzzle",
    appDescription: "The <strong>Number Puzzle</strong> app gives you a fun brain challenge, arranging numbers from 1 to 15 in a 4×4 grid. Try to order each row to get glowing colors and enjoyable visual effects.",
    featuresTitle: "Game Features:",
    featuresList: [
      "Glowing colors when rows are correct: Rows light up when correctly arranged, adding fun and excitement.",
      "Challenge and focus: Improve concentration and problem-solving skills by arranging numbers.",
      "Statistics and time control: Timer and move log to track your performance.",
      "Attractive and simple design: Clear interface with enjoyable visual effects.",
      "Suitable for everyone: Fun game for both adults and children with full Arabic support."
    ],
    navigation: ["Home", "Next", "Previous"],
    footer: {
      siteName: "GreatWishes",
      rights: "All rights reserved"
    }
  }
};

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
  document.querySelector('.app-description p').innerHTML = lang[langCode].appDescription;

  // Features
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

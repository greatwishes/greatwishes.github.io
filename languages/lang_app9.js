// lang_app9.js
const lang = {
  ar: {
    headerTitle: "🃏 لعبة الذاكرة",
    headerSubtitle: "اختبر ذاكرتك وحاول تذكر مواقع البطاقات المطابقة بطريقة ممتعة وتفاعلية",
    downloadBtn: "تحميل اللعبة",
    downloadBtnNow: "تحميل اللعبة الآن",
    appTitle: "لعبة الذاكرة",
    appDescription: "تطبيق <strong>لعبة الذاكرة</strong> يمنحك تجربة تحدي ذهني ممتعة، حيث عليك مطابقة البطاقات المتشابهة للكشف عن الأزواج. حاول تذكر مواقع البطاقات لإيجاد جميع الأزواج بأقل عدد من الحركات.",
    featuresTitle: "مميزات اللعبة:",
    featuresList: [
      "تصميم جذاب وبسيط: واجهة واضحة وسهلة اللعب مع تأثيرات بصرية ممتعة عند مطابقة البطاقات.",
      "تحدي وتركيز: تحسين مهارات الذاكرة والتركيز من خلال تذكر مواقع البطاقات.",
      "إحصائيات وتحكم بالوقت: عداد الوقت وسجل الحركات لمتابعة الأداء وتحسين المهارات.",
      "مناسبة للجميع: لعبة ممتعة للكبار والصغار، وتدعم اللغة العربية بالكامل.",
      "تحديات مختلفة: مستويات متنوعة تزيد من صعوبة اللعبة تدريجيًا."
    ],
    navigation: ["الرئيسية", "التالي", "السابق"],
    footer: {
      siteName: "GreatWishes",
      rights: "جميع الحقوق محفوظة"
    }
  },
  en: {
    headerTitle: "🃏 Memory Game",
    headerSubtitle: "Test your memory and try to remember the positions of matching cards in a fun and interactive way",
    downloadBtn: "Download Game",
    downloadBtnNow: "Download Game Now",
    appTitle: "Memory Game",
    appDescription: "The <strong>Memory Game</strong> app offers a fun brain challenge where you match similar cards to reveal pairs. Try to remember card positions to find all pairs with the fewest moves.",
    featuresTitle: "Game Features:",
    featuresList: [
      "Attractive and simple design: Clear interface with enjoyable visual effects when matching cards.",
      "Challenge and focus: Improve memory and concentration by remembering card positions.",
      "Statistics and time control: Timer and move log to track performance and improve skills.",
      "Suitable for everyone: Fun game for adults and children, fully supports Arabic.",
      "Different challenges: Various levels gradually increase the game's difficulty."
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
  document.querySelector('.app-description p').innerHTML = lang[langCode].appDescription;

  // Features list
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

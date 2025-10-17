// lang_app7.js
const lang = {
  ar: {
    headerTitle: "لعبة من سيربح المليون",
    headerSubtitle: "النسخة العربية الأشهر من المسابقة العالمية من سيربح المليون",
    downloadBtn: "تحميل اللعبة",
    downloadBtnNow: "تحميل اللعبة الآن",
    appTitle: "من سيربح المليون",
    featuresTitle: "مميزات اللعبة:",
    featuresList: [
      "أجواء المسابقة الحقيقية: موسيقى وتأثيرات صوتية تزيد من الإثارة.",
      "تنوع كبير في الأسئلة: أسئلة صعبة وسهلة لتناسب الجميع.",
      "وسائل مساعدة: مثل حذف إجابتين، الاتصال بصديق، أو الاستعانة بالجمهور.",
      "تصميم جذاب: واجهة سهلة وممتعة تحاكي البرنامج الأصلي.",
      "مناسبة للجميع: متعة وتسلية للأطفال والكبار بدعم كامل للغة العربية."
    ],
    navigation: ["الرئيسية", "التالي", "السابق"],
    footer: {
      siteName: "GreatWishes",
      rights: "جميع الحقوق محفوظة"
    }
  },
  en: {
    headerTitle: "Who Wants to Be a Millionaire",
    headerSubtitle: "The famous Arabic version of the global quiz game",
    downloadBtn: "Download Game",
    downloadBtnNow: "Download Game Now",
    appTitle: "Who Wants to Be a Millionaire",
    featuresTitle: "Game Features:",
    featuresList: [
      "Real quiz atmosphere: Music and sound effects increase excitement.",
      "Wide variety of questions: Easy and hard questions suitable for everyone.",
      "Lifelines: Such as 50/50, call a friend, or ask the audience.",
      "Attractive design: Easy and enjoyable interface mimicking the original show.",
      "Suitable for everyone: Fun and entertainment for kids and adults with full Arabic support."
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

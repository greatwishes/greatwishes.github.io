// lang_app6.js
const lang = {
  ar: {
    headerTitle: "لعبة الثلاث أحرف",
    headerSubtitle: "الاجابه من ثلاث احرف بسرعة وتنمّى ذكائك مع تحديات يومية مسلية",
    downloadBtn: "تحميل التطبيق",
    downloadBtnNow: "تحميل التطبيق الآن",
    appTitle: "لعبة أسئلة بثلاثة أحرف",
    featuresTitle: "الميزات الرئيسية للعبة:",
    featuresList: [
      "إجابات قصيرة: كل الأسئلة تعتمد على إجابة من ثلاثة أحرف فقط.",
      "تنوع في الأسئلة: تشمل الثقافة العامة، الرياضة، التاريخ، والفن.",
      "واجهة بسيطة: تصميم مريح وسهل الاستخدام يناسب الجميع.",
      "تحديات مستمرة: مستويات مختلفة تزيد من صعوبة اللعبة تدريجيًا.",
      "مناسبة للجميع: متعة وتسلية للأطفال والكبار مع دعم كامل للغة العربية."
    ],
    navigation: ["الرئيسية", "التالي", "السابق"],
    footer: {
      siteName: "GreatWishes",
      rights: "جميع الحقوق محفوظة"
    }
  },
  en: {
    headerTitle: "Three Letters Game",
    headerSubtitle: "Answer with three letters quickly and enhance your intelligence with daily fun challenges",
    downloadBtn: "Download App",
    downloadBtnNow: "Download App Now",
    appTitle: "Three Letters Quiz Game",
    featuresTitle: "Main Features of the Game:",
    featuresList: [
      "Short Answers: All questions require an answer of only three letters.",
      "Variety of Questions: Includes general knowledge, sports, history, and arts.",
      "Simple Interface: Comfortable and easy-to-use design for everyone.",
      "Continuous Challenges: Different levels gradually increase the game's difficulty.",
      "Suitable for Everyone: Fun and entertainment for kids and adults with full Arabic support."
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

// languages/lang_app6.js
const lang = {
  ar: {
    nav: [
      "الرئيسية",
      "التطبيقات",
      "الدليل",
      "سياسة الخصوصية",
      "تواصل معنا"
    ],
    navLinks: [
      "الرئيسية",
      "التالي",
      "الخصوصية"
    ],
    downloadBtn: "تحميل التطبيق الآن",
    headerTitle: "لعبة الثلاث أحرف",
    headerSubtitle: "الاجابة من ثلاث احرف بسرعة وتنمّى ذكائك مع تحديات يومية مسلية",
    appTitle: "لعبة أسئلة بثلاثة أحرف",
    appDescription: "تطبيق لعبة الثلاث احرف هو لعبة شيقة ومسلية تعتمد على الإجابة الصحيحة باستخدام ثلاثة أحرف فقط. اختبر ذكاءك وسرعة بديهتك مع مجموعة متنوعة من الأسئلة في مجالات متعددة.",
    featuresTitle: "الميزات الرئيسية للعبة",
    features: [
      "إجابات قصيرة: كل الأسئلة تعتمد على إجابة من ثلاثة أحرف فقط.",
      "تنوع في الأسئلة: تشمل الثقافة العامة، الرياضة، التاريخ، والفن.",
      "واجهة بسيطة: تصميم مريح وسهل الاستخدام يناسب الجميع.",
      "تحديات مستمرة: مستويات مختلفة تزيد من صعوبة اللعبة تدريجيًا.",
      "مناسبة للجميع: متعة وتسلية للأطفال والكبار مع دعم كامل للغة العربية."
    ],
    footer: {
      siteName: "GreatWishes",
      rights: "جميع الحقوق محفوظة"
    }
  },
  en: {
    nav: [
      "Home",
      "Apps",
      "Guide",
      "Privacy Policy",
      "Contact Us"
    ],
    navLinks: [
      "Home",
      "Next",
      "Privacy"
    ],
    downloadBtn: "Download App Now",
    headerTitle: "Three-Letter Game",
    headerSubtitle: "Answer using three letters quickly and boost your intelligence with fun daily challenges",
    appTitle: "Three-Letter Quiz Game",
    appDescription: "Three-Letter Game is an exciting and fun game that relies on correct answers using only three letters. Test your intelligence and quick thinking with a variety of questions across multiple fields.",
    featuresTitle: "Main Features of the Game",
    features: [
      "Short Answers: All questions require a three-letter answer only.",
      "Variety of Questions: Includes general knowledge, sports, history, and arts.",
      "Simple Interface: Comfortable and easy-to-use design suitable for everyone.",
      "Continuous Challenges: Different levels gradually increase the game's difficulty.",
      "Suitable for All: Fun and entertainment for children and adults with full Arabic language support."
    ],
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

  // App description
  document.querySelector('.app-description h2').innerHTML = lang[langCode].appTitle;
  document.querySelector('.app-description p').innerHTML = lang[langCode].appDescription;
  document.querySelector('.app-description h3').innerHTML = lang[langCode].featuresTitle;

  const featureItems = document.querySelectorAll('.app-description ul li');
  featureItems.forEach((li, index) => {
    if (lang[langCode].features[index]) {
      li.innerHTML = `<strong>${lang[langCode].features[index].split(":")[0]}:</strong>${lang[langCode].features[index].split(":")[1]}`;
    }
  });

  // Buttons
  document.querySelectorAll('.btn').forEach(btn => {
    btn.innerHTML = lang[langCode].downloadBtn;
  });

  // Navigation menu (القائمة العلوية)
  const navItems = document.querySelectorAll('.nav-links li a');
  navItems.forEach((el, index) => {
    if (lang[langCode].nav[index]) {
      el.innerHTML = lang[langCode].nav[index];
    }
  });

  // Navigation links (الروابط السفلية)
  const navLinks = document.querySelectorAll('.navigation-links a');
  navLinks.forEach((el, index) => {
    if (lang[langCode].navLinks[index]) {
      el.innerHTML = lang[langCode].navLinks[index];
    }
  });

  // Footer
  const footerElements = document.querySelectorAll('[data-lang-key]');
  footerElements.forEach(el => {
    const key = el.getAttribute('data-lang-key');
    if(lang[langCode].footer[key]){
      el.innerHTML = lang[langCode].footer[key];
    }
  });
      }

// lang_app6.js
let currentLang = 'ar';

const lang = {
  ar: {
    siteName: "GreatWishes",
    rights: "جميع الحقوق محفوظة",
    headerTitle: "لعبة الثلاث أحرف",
    headerSubtitle: "الاجابة من ثلاث احرف بسرعة وتنمّى ذكائك مع تحديات يومية مسلية",
    downloadApp: "تحميل التطبيق",
    downloadNow: "تحميل التطبيق الآن",
    appTitle: "لعبة أسئلة بثلاثة أحرف",
    appDescription: "تطبيق لعبة الثلاث احرف هو لعبة شيقة ومسلية تعتمد على الإجابة الصحيحة باستخدام ثلاثة أحرف فقط. اختبر ذكاءك وسرعة بديهتك مع مجموعة متنوعة من الأسئلة في مجالات متعددة.",
    featuresTitle: "الميزات الرئيسية للعبة:",
    features: [
      "إجابات قصيرة: كل الأسئلة تعتمد على إجابة من ثلاثة أحرف فقط.",
      "تنوع في الأسئلة: تشمل الثقافة العامة، الرياضة، التاريخ، والفن.",
      "واجهة بسيطة: تصميم مريح وسهل الاستخدام يناسب الجميع.",
      "تحديات مستمرة: مستويات مختلفة تزيد من صعوبة اللعبة تدريجيًا.",
      "مناسبة للجميع: متعة وتسلية للأطفال والكبار مع دعم كامل للغة العربية."
    ],
    navHome: "الرئيسية",
    navNext: "التالي",
    navPrev: "السابق",
    clickAlert: "رابط التحميل غير جاهز بعد. يرجى المحاولة لاحقاً."
  },
  en: {
    siteName: "GreatWishes",
    rights: "All rights reserved",
    headerTitle: "Three-Letter Game",
    headerSubtitle: "Answer using three letters quickly and boost your intelligence with fun daily challenges",
    downloadApp: "Download App",
    downloadNow: "Download Now",
    appTitle: "Three-Letter Quiz Game",
    appDescription: "Three-Letter Game is an exciting and fun game that relies on correct answers using only three letters. Test your intelligence and quick thinking with a variety of questions across multiple fields.",
    featuresTitle: "Main Features of the Game:",
    features: [
      "Short Answers: All questions require a three-letter answer only.",
      "Variety of Questions: Includes general knowledge, sports, history, and arts.",
      "Simple Interface: Comfortable and easy-to-use design suitable for everyone.",
      "Continuous Challenges: Different levels gradually increase the game's difficulty.",
      "Suitable for All: Fun and entertainment for children and adults with full Arabic language support."
    ],
    navHome: "Home",
    navNext: "Next",
    navPrev: "Previous",
    clickAlert: "Download link is not ready yet. Please try again later."
  }
};

// دالة لتغيير اللغة في الصفحة
function setLanguage(langCode) {
  currentLang = langCode;

  // نصوص الفوتر
  document.querySelector('[data-lang-key="siteName"]').innerText = lang[langCode].siteName;
  document.querySelector('[data-lang-key="rights"]').innerText = lang[langCode].rights;

  // الهيدر
  document.querySelector('.header h1').innerText = lang[langCode].headerTitle;
  document.querySelector('.header p').innerText = lang[langCode].headerSubtitle;

  // أزرار التحميل
  document.getElementById('downloadBtn1').innerText = lang[langCode].downloadApp;
  document.getElementById('downloadBtn2').innerText = lang[langCode].downloadNow;

  // وصف التطبيق
  document.querySelector('.app-description h2').innerText = lang[langCode].appTitle;
  document.querySelector('.app-description p').innerText = lang[langCode].appDescription;
  document.querySelector('.app-description h3').innerText = lang[langCode].featuresTitle;

  // قائمة الميزات
  const featuresList = document.querySelectorAll('.app-description ul li');
  lang[langCode].features.forEach((text, index) => {
    if(featuresList[index]) featuresList[index].innerText = text;
  });

  // روابط التنقل
  const navLinks = document.querySelectorAll('.navigation-links a');
  if(navLinks[0]) navLinks[0].innerText = lang[langCode].navHome;
  if(navLinks[1]) navLinks[1].innerText = lang[langCode].navNext;
  if(navLinks[2]) navLinks[2].innerText = lang[langCode].navPrev;
    }

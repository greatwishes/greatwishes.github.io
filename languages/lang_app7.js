// lang_app7.js
let currentLang = 'ar';

const lang = {
  ar: {
    siteName: "GreatWishes",
    rights: "جميع الحقوق محفوظة",
    headerTitle: "لعبة من سيربح المليون",
    headerSubtitle: "النسخة العربية الأشهر من المسابقة العالمية من سيربح المليون",
    downloadApp: "تحميل اللعبة",
    downloadNow: "تحميل اللعبة الآن",
    appTitle: "من سيربح المليون",
    appDescription: "تطبيق من سيربح المليون يجلب لك أجواء المسابقة التلفزيونية الشهيرة مباشرة على هاتفك. تحدَّ نفسك بالإجابة على أسئلة متنوعة في الثقافة العامة، العلوم، الرياضة، التاريخ، والفن لتصل إلى المليون.",
    featuresTitle: "مميزات اللعبة:",
    features: [
      "أجواء المسابقة الحقيقية: موسيقى وتأثيرات صوتية تزيد من الإثارة.",
      "تنوع كبير في الأسئلة: أسئلة صعبة وسهلة لتناسب الجميع.",
      "وسائل مساعدة: مثل حذف إجابتين، الاتصال بصديق، أو الاستعانة بالجمهور.",
      "تصميم جذاب: واجهة سهلة وممتعة تحاكي البرنامج الأصلي.",
      "مناسبة للجميع: متعة وتسلية للأطفال والكبار بدعم كامل للغة العربية."
    ],
    navHome: "الرئيسية",
    navNext: "التالي",
    navPrev: "السابق",
    clickAlert: "رابط التحميل غير جاهز بعد. يرجى المحاولة لاحقاً."
  },
  en: {
    siteName: "GreatWishes",
    rights: "All rights reserved",
    headerTitle: "Who Wants to Be a Millionaire",
    headerSubtitle: "The famous Arabic version of the global quiz show",
    downloadApp: "Download Game",
    downloadNow: "Download Now",
    appTitle: "Who Wants to Be a Millionaire",
    appDescription: "The Who Wants to Be a Millionaire app brings the famous TV quiz show experience directly to your phone. Challenge yourself with questions in general knowledge, science, sports, history, and arts to reach the million.",
    featuresTitle: "Game Features:",
    features: [
      "Real quiz atmosphere: Music and sound effects enhance excitement.",
      "Wide variety of questions: Easy and difficult questions to suit everyone.",
      "Help options: Such as removing two wrong answers, calling a friend, or asking the audience.",
      "Attractive design: Easy and enjoyable interface that mimics the original show.",
      "Suitable for all: Fun and entertainment for children and adults with full Arabic support."
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

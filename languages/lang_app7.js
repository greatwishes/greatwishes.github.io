// languages/lang_app7.js
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
      "السابق"
    ],
    downloadBtn: "تحميل اللعبة الآن",
    headerTitle: "لعبة من سيربح المليون",
    headerSubtitle: "النسخة العربية الأشهر من المسابقة العالمية من سيربح المليون",
    appTitle: "من سيربح المليون",
    appDescription: "تطبيق <strong>من سيربح المليون</strong> يجلب لك أجواء المسابقة التلفزيونية الشهيرة مباشرة على هاتفك. تحدَّ نفسك بالإجابة على أسئلة متنوعة في <strong>الثقافة العامة، العلوم، الرياضة، التاريخ، والفن</strong> لتصل إلى المليون.",
    featuresTitle: "مميزات اللعبة",
    features: [
      "أجواء المسابقة الحقيقية: موسيقى وتأثيرات صوتية تزيد من الإثارة.",
      "تنوع كبير في الأسئلة: أسئلة صعبة وسهلة لتناسب الجميع.",
      "وسائل مساعدة: مثل حذف إجابتين، الاتصال بصديق، أو الاستعانة بالجمهور.",
      "تصميم جذاب: واجهة سهلة وممتعة تحاكي البرنامج الأصلي.",
      "مناسبة للجميع: متعة وتسلية للأطفال والكبار بدعم كامل للغة العربية."
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
      "Previous"
    ],
    downloadBtn: "Download Game Now",
    headerTitle: "Who Wants to Be a Millionaire",
    headerSubtitle: "The famous Arabic version of the global quiz show",
    appTitle: "Millionaire Game",
    appDescription: "The <strong>Millionaire Game</strong> brings the famous TV quiz experience directly to your phone. Challenge yourself with questions in <strong>general knowledge, science, sports, history, and arts</strong> to reach a million.",
    featuresTitle: "Game Features",
    features: [
      "Real Show Atmosphere: Music and sound effects increase excitement.",
      "Wide Variety of Questions: Easy and difficult questions for everyone.",
      "Help Options: Such as 50:50, phone a friend, or ask the audience.",
      "Attractive Design: Easy and enjoyable interface simulating the original show.",
      "Suitable for All: Fun and entertainment for children and adults with full Arabic support."
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

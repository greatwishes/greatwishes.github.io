// lang_app9.js
let currentLang = 'ar';

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
    downloadBtn: "تحميل الآن",
    downloadNow: "تحميل الآن",
    headerTitle: "🃏 لعبة الذاكرة",
    headerSubtitle: "اختبر ذاكرتك وحاول تذكر مواقع البطاقات المطابقة بطريقة ممتعة وتفاعلية",
    appTitle: "لعبة الذاكرة",
    appDescription: "تطبيق <strong>لعبة الذاكرة</strong> يمنحك تجربة تحدي ذهني ممتعة، حيث عليك مطابقة البطاقات المتشابهة للكشف عن الأزواج. حاول تذكر مواقع البطاقات لإيجاد جميع الأزواج بأقل عدد من الحركات.",
    featuresTitle: "مميزات اللعبة:",
    features: [
      "تصميم جذاب وبسيط: واجهة واضحة وسهلة اللعب مع تأثيرات بصرية ممتعة عند مطابقة البطاقات.",
      "تحدي وتركيز: تحسين مهارات الذاكرة والتركيز من خلال تذكر مواقع البطاقات.",
      "إحصائيات وتحكم بالوقت: عداد الوقت وسجل الحركات لمتابعة الأداء وتحسين المهارات.",
      "مناسبة للجميع: لعبة ممتعة للكبار والصغار، وتدعم اللغة العربية بالكامل.",
      "تحديات مختلفة: مستويات متنوعة تزيد من صعوبة اللعبة تدريجيًا."
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
    downloadBtn: "Download Game",
    downloadNow: "Download Game Now",
    headerTitle: "🃏 Memory Game",
    headerSubtitle: "Test your memory and try to remember the positions of matching cards in a fun and interactive way",
    appTitle: "Memory Game",
    appDescription: "The <strong>Memory Game</strong> app offers a fun brain challenge where you match similar cards to reveal pairs. Try to remember card positions to find all pairs with the fewest moves.",
    featuresTitle: "Game Features:",
    features: [
      "Attractive and simple design: Clear interface with enjoyable visual effects when matching cards.",
      "Challenge and focus: Improve memory and concentration by remembering card positions.",
      "Statistics and time control: Timer and move log to track performance and improve skills.",
      "Suitable for everyone: Fun game for adults and children, fully supports Arabic.",
      "Different challenges: Various levels gradually increase the game's difficulty."
    ],
    footer: {
      siteName: "GreatWishes",
      rights: "All rights reserved"
    }
  }
};

// دالة لتغيير اللغة في الصفحة
function setLanguage(langCode) {
  currentLang = langCode;

  // Header
  document.querySelector('.header h1').innerHTML = lang[langCode].headerTitle;
  document.querySelector('.header p').innerHTML = lang[langCode].headerSubtitle;

  // Buttons
  document.querySelectorAll('.btn').forEach(btn => {
    btn.innerHTML = lang[langCode].downloadBtn;
  });

  // App description
  document.querySelector('.app-description h2').innerHTML = lang[langCode].appTitle;
  document.querySelector('.app-description p').innerHTML = lang[langCode].appDescription;
  document.querySelector('.app-description h3').innerHTML = lang[langCode].featuresTitle;

  // Features list
  const featuresItems = document.querySelectorAll('.app-description ul li');
  featuresItems.forEach((li, index) => {
    if(lang[langCode].features[index]) li.innerHTML = lang[langCode].features[index];
  });

  // Navigation menu (القائمة العلوية)
  const navItems = document.querySelectorAll('.nav-links li a');
  navItems.forEach((el, index) => {
    if(lang[langCode].nav[index]) el.innerHTML = lang[langCode].nav[index];
  });

  // Navigation links (الروابط السفلية)
  const navLinks = document.querySelectorAll('.navigation-links a');
  navLinks.forEach((el, index) => {
    if(lang[langCode].navLinks[index]) el.innerHTML = lang[langCode].navLinks[index];
  });

  // Footer
  const footerElements = document.querySelectorAll('[data-lang-key]');
  footerElements.forEach(el => {
    const key = el.getAttribute('data-lang-key');
    if(lang[langCode].footer[key]) el.innerHTML = lang[langCode].footer[key];
  });
    }

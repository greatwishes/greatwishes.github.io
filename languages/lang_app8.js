// languages/lang_app8.js
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
    headerTitle: "لعبة ترتيب الأرقام",
    headerSubtitle: "رتب الأرقام داخل الشبكة للوصول إلى الترتيب الصحيح بطريقة مسلية وتفاعلية",
    appTitle: "ترتيب الأرقام",
    appDescription: "تطبيق <strong>ترتيب الأرقام</strong> يمنحك تجربة تحدي ذهني ممتع، حيث عليك ترتيب الأرقام من 1 إلى 15 داخل شبكة 4×4. حاول ترتيب كل صف للحصول على ألوان مضيئة وتأثيرات بصرية ممتعة.",
    featuresTitle: "مميزات اللعبة",
    features: [
      "ألوان مضيئة عند ترتيب الصفوف: رؤية الصفوف تضيء عند الترتيب الصحيح تضيف متعة وتشويق.",
      "تحدي وتركيز: تحسين مهارات التركيز وحل المشكلات من خلال ترتيب الأرقام.",
      "إحصائيات وتحكم بالوقت: عداد الوقت وسجل الحركات لمتابعة الأداء.",
      "تصميم جذاب وبسيط: واجهة واضحة وسهلة اللعب مع تأثيرات بصرية مميزة.",
      "مناسبة للجميع: لعبة ممتعة للكبار والصغار، وتدعم اللغة العربية بالكامل."
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
    headerTitle: "Fifteen Puzzle",
    headerSubtitle: "Arrange the numbers in the grid to reach the correct order in a fun and interactive way",
    appTitle: "Fifteen Puzzle",
    appDescription: "The <strong>Fifteen Puzzle</strong> app gives you a fun mental challenge, where you must arrange numbers from 1 to 15 in a 4×4 grid. Try to arrange each row to get glowing colors and enjoyable visual effects.",
    featuresTitle: "Game Features",
    features: [
      "Glowing Colors: Rows light up when arranged correctly to add fun and excitement.",
      "Challenge & Focus: Improve concentration and problem-solving skills through arranging numbers.",
      "Statistics & Time Control: Track your performance with a timer and move counter.",
      "Attractive & Simple Design: Clear interface with visual effects for easy and fun gameplay.",
      "Suitable for All: Enjoyable for children and adults with full Arabic support."
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

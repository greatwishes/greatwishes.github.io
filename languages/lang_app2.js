// languages/lang_app2.js
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
    headerTitle: "حساب العمر والأبراج",
    headerSubtitle: "اكتشف عمرك وبرجك بسهولة مع نصائح يومية ممتعة",
    appTitle: "تطبيق حساب العمر",
    appDescription: "تطبيق حساب العمر هو أداة ذكية وسهلة الاستخدام لحساب عمرك بدقة، مع خصائص للأبراج وتحليل الأسماء.",
    featuresTitle: "الميزات الرئيسية للتطبيق",
    features: [
      "حساب دقيق للعمر: احسب عمرك بسهولة وبدقة عالية.",
      "تحليل طاقة الاسم: اكتشف الطاقة الكامنة في اسمك.",
      "معاني أسماء: تعرف على معاني الأسماء المختلفة.",
      "تحليل الأبراج: اكتشف خصائص برجك وتأثيراته اليومية.",
      "يدعم العربية والإنجليزية: استخدم التطبيق باللغتين بكل سهولة."
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
    headerTitle: "Age & Zodiac",
    headerSubtitle: "Discover your age and zodiac easily with daily fun tips",
    appTitle: "Age Calculator App",
    appDescription: "Age Calculator is a smart and easy-to-use tool to calculate your age accurately, with zodiac features and name analysis.",
    featuresTitle: "Main Features",
    features: [
      "Accurate Age Calculation: Easily calculate your age with high precision.",
      "Name Energy Analysis: Discover the hidden energy in your name.",
      "Name Meanings: Learn the meanings of different names.",
      "Zodiac Analysis: Explore your zodiac traits and daily effects.",
      "Supports Arabic and English: Use the app in both languages effortlessly."
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

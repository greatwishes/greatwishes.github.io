// lang_app2.js
let currentLang = 'ar';

const lang = {
  ar: {
    siteName: "GreatWishes",
    rights: "جميع الحقوق محفوظة",
    headerTitle: "حساب العمر والأبراج",
    headerSubtitle: "اكتشف عمرك وبرجك بسهولة مع نصائح يومية ممتعة",
    downloadApp: "تحميل التطبيق",
    downloadNow: "تحميل التطبيق الآن",
    appTitle: "تطبيق حساب العمر",
    appDescription: "تطبيق حساب العمر هو أداة ذكية وسهلة الاستخدام لحساب عمرك بدقة، مع خصائص للأبراج وتحليل الأسماء.",
    featuresTitle: "الميزات:",
    features: [
      "حساب دقيق للعمر",
      "تحليل طاقة الاسم",
      "معاني أسماء",
      "تحليل الأبراج",
      "يدعم العربية والإنجليزية"
    ],
    nav: [
      "الرئيسية",
      "التطبيقات",
      "الدليل",
      "سياسة الخصوصية",
      "تواصل معنا"
    ],
    navHome: "الرئيسية",
    navNext: "التالي",
    navPrev: "السابق",
    clickAlert: "رابط التحميل غير جاهز بعد. يرجى المحاولة لاحقاً."
  },
  en: {
    siteName: "GreatWishes",
    rights: "All rights reserved",
    headerTitle: "Age & Zodiac",
    headerSubtitle: "Discover your age and zodiac easily with daily fun tips",
    downloadApp: "Download App",
    downloadNow: "Download Now",
    appTitle: "Age Calculator App",
    appDescription: "Age Calculator is a smart and easy-to-use tool to calculate your age accurately, with zodiac features and name analysis.",
    featuresTitle: "Features:",
    features: [
      "Accurate age calculation",
      "Name energy analysis",
      "Name meanings",
      "Zodiac analysis",
      "Supports Arabic and English"
    ],
    nav: [
      "Home",
      "Apps",
      "Guide",
      "Privacy Policy",
      "Contact Us"
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

  // ترجمة القوائم الموجودة في الـ nav-links
  const navItems = document.querySelectorAll('.nav-links li a');
  navItems.forEach((el, index) => {
    if(lang[langCode].nav[index]){
      el.innerText = lang[langCode].nav[index];
    }
  });

  // روابط التنقل في أسفل الصفحة إذا كانت موجودة
  const navigationLinks = document.querySelectorAll('.navigation-links a');
  if(navigationLinks[0]) navigationLinks[0].innerText = lang[langCode].navHome;
  if(navigationLinks[1]) navigationLinks[1].innerText = lang[langCode].navNext;
  if(navigationLinks[2]) navigationLinks[2].innerText = lang[langCode].navPrev;
       }

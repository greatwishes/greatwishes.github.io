// lang_app10.js
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
    downloadBtn: "تحميل اللعبة",
    downloadNow: "تحميل اللعبة الآن",
    headerTitle: "📝 دفتر الملاحظات",
    headerSubtitle: "دوّن ملاحظاتك بسرعة وسهولة وصنّفها حسب الفئة مع إمكانية ضبط التذكيرات",
    appTitle: "دفتر الملاحظات",
    appDescription: "تطبيق <strong>دفتر الملاحظات</strong> يتيح لك كتابة وتنظيم ملاحظاتك بسرعة وسهولة، مع تصنيفها حسب الفئة وضبط التذكيرات المهمة.",
    featuresTitle: "مميزات التطبيق:",
    features: [
      "<strong>تصميم جذاب وبسيط:</strong> واجهة واضحة وسهلة الاستخدام مع كروت 3D لكل ملاحظة.",
      "<strong>تصنيف الملاحظات:</strong> سهولة تنظيم الملاحظات حسب الفئة: عام، هام، تذكير.",
      "<strong>تذكيرات قابلة للتخصيص:</strong> ضبط تنبيهات للملاحظات المهمة بمواعيد محددة.",
      "<strong>مناسبة للجميع:</strong> استخدام سريع وسهل لجميع الأعمار، يدعم اللغة العربية بالكامل.",
      "<strong>حفظ آمن:</strong> تخزين الملاحظات محليًا مع إمكانية التعديل والحذف بسهولة."
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
    downloadBtn: "Download App",
    downloadNow: "Download App Now",
    headerTitle: "📝 Notepad",
    headerSubtitle: "Quickly and easily write your notes and categorize them with reminders",
    appTitle: "Notepad",
    appDescription: "The <strong>Notepad</strong> app lets you quickly and easily write and organize your notes, categorize them, and set important reminders.",
    featuresTitle: "App Features:",
    features: [
      "<strong>Attractive and simple design:</strong> Clear interface with 3D cards for each note.",
      "<strong>Note categorization:</strong> Easily organize notes by category: General, Important, Reminder.",
      "<strong>Customizable reminders:</strong> Set alerts for important notes at specific times.",
      "<strong>Suitable for everyone:</strong> Fast and easy to use for all ages, fully supports Arabic.",
      "<strong>Secure storage:</strong> Store notes locally with easy edit and delete options."
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
  const headerTitle = document.querySelector('.header h1');
  if(headerTitle) headerTitle.innerHTML = lang[langCode].headerTitle;

  const headerSubtitle = document.querySelector('.header p');
  if(headerSubtitle) headerSubtitle.innerHTML = lang[langCode].headerSubtitle;

  // Buttons
  document.querySelectorAll('.btn').forEach(btn => {
    if(btn.id === "downloadBtn1") btn.innerHTML = lang[langCode].downloadBtn;
    if(btn.id === "downloadBtn2") btn.innerHTML = lang[langCode].downloadNow;
  });

  // App description
  const appTitle = document.querySelector('.app-description h2');
  if(appTitle) appTitle.innerHTML = lang[langCode].appTitle;

  const appDesc = document.querySelector('.app-description p');
  if(appDesc) appDesc.innerHTML = lang[langCode].appDescription;

  const featuresTitle = document.querySelector('.app-description h3');
  if(featuresTitle) featuresTitle.innerHTML = lang[langCode].featuresTitle;

  // Features list
  const featuresItems = document.querySelectorAll('.app-description ul li');
  featuresItems.forEach((li, index) => {
    if(lang[langCode].features[index]) li.innerHTML = lang[langCode].features[index];
  });

  // Navigation menu
  const navItems = document.querySelectorAll('.nav-links li a');
  navItems.forEach((el, index) => {
    if(lang[langCode].nav[index]) el.innerHTML = lang[langCode].nav[index];
  });

  // Navigation links السفلية (الرئيسية | التالي | السابق)
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

// languages/lang_app4.js
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
    downloadBtn: "تحميل الآن",
    headerTitle: "مشغل الفيديو",
    headerSubtitle: "استمتع بمشاهدة أفلامك وفيديوهاتك بجودة عالية وسهولة تشغيل",
    appTitle: "تطبيق مشغل الفيديوهات",
    appDescription: "تطبيق مشغل الفيديوهات هو أداة قوية وسهلة الاستخدام لعرض وتشغيل ملفات الفيديو بجودة عالية. يتميز التطبيق بواجهة بسيطة وأنيقة تدعم تشغيل جميع صيغ الفيديو الشهيرة، مع دعم كامل للغة العربية والإنجليزية لتناسب جميع المستخدمين.",
    featuresTitle: "الميزات الرئيسية للتطبيق",
    features: [
      "تشغيل جميع صيغ الفيديو: يدعم التطبيق معظم صيغ الفيديو الشهيرة مثل MP4، AVI، MKV وغيرها.",
      "واجهة مستخدم سهلة: تصميم بسيط وأنيق يجعل تشغيل الفيديوهات سهلاً وممتعاً.",
      "التحكم الكامل: يمكنك التحكم في الإيقاف والتقديم، وضبط مستوى الصوت وسطوع الشاشة بسهولة.",
      "دعم تشغيل الفيديوهات من الهاتف أو الذاكرة الخارجية: تصفح وشغل ملفات الفيديو أينما كانت مخزنة.",
      "دعم اللغة العربية: تجربة استخدام مرنة وسهلة لأي مستخدم."
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
    headerTitle: "Video Player",
    headerSubtitle: "Enjoy watching your movies and videos in high quality with easy playback",
    appTitle: "Video Player App",
    appDescription: "Video Player is a powerful and easy-to-use tool for viewing and playing video files in high quality. The app features a simple and elegant interface that supports all popular video formats, with full Arabic and English support to suit all users.",
    featuresTitle: "Main Features",
    features: [
      "Play All Video Formats: Supports most popular video formats like MP4, AVI, MKV, and more.",
      "Easy-to-Use Interface: A simple and elegant design that makes video playback easy and enjoyable.",
      "Full Control: You can pause, fast-forward, adjust volume and screen brightness easily.",
      "Play Videos from Phone or External Storage: Browse and play video files wherever they are stored.",
      "Arabic Language Support: Flexible and easy-to-use experience for any user."
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

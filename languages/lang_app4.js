// lang_app4.js
let currentLang = 'ar';

const lang = {
  ar: {
    siteName: "GreatWishes",
    rights: "جميع الحقوق محفوظة",
    headerTitle: "مشغل الفيديو",
    headerSubtitle: "استمتع بمشاهدة أفلامك وفيديوهاتك بجودة عالية وسهولة تشغيل",
    downloadApp: "تحميل التطبيق",
    downloadNow: "تحميل التطبيق الآن",
    appTitle: "تطبيق مشغل الفيديوهات",
    appDescription: "تطبيق مشغل الفيديوهات هو أداة قوية وسهلة الاستخدام لعرض وتشغيل ملفات الفيديو بجودة عالية. يتميز التطبيق بواجهة بسيطة وأنيقة تدعم تشغيل جميع صيغ الفيديو الشهيرة، مع دعم كامل للغة العربية والإنجليزية لتناسب جميع المستخدمين.",
    featuresTitle: "الميزات الرئيسية للتطبيق:",
    features: [
      "تشغيل جميع صيغ الفيديو: يدعم التطبيق معظم صيغ الفيديو الشهيرة مثل MP4، AVI، MKV وغيرها.",
      "واجهة مستخدم سهلة: تصميم بسيط وأنيق يجعل تشغيل الفيديوهات سهلاً وممتعاً.",
      "التحكم الكامل: يمكنك التحكم في الإيقاف والتقديم، وضبط مستوى الصوت وسطوع الشاشة بسهولة.",
      "دعم تشغيل الفيديوهات من الهاتف أو الذاكرة الخارجية: تصفح وشغل ملفات الفيديو أينما كانت مخزنة.",
      "دعم اللغة العربية: تجربة استخدام مرنة وسهلة لأي مستخدم."
    ],
    navHome: "الرئيسية",
    navNext: "التالي",
    navPrev: "السابق",
    clickAlert: "رابط التحميل غير جاهز بعد. يرجى المحاولة لاحقاً."
  },
  en: {
    siteName: "GreatWishes",
    rights: "All rights reserved",
    headerTitle: "Video Player",
    headerSubtitle: "Enjoy watching your movies and videos in high quality with easy playback",
    downloadApp: "Download App",
    downloadNow: "Download Now",
    appTitle: "Video Player App",
    appDescription: "Video Player is a powerful and easy-to-use tool for viewing and playing video files in high quality. The app features a simple and elegant interface that supports all popular video formats, with full Arabic and English support to suit all users.",
    featuresTitle: "Main Features:",
    features: [
      "Play All Video Formats: Supports most popular video formats like MP4, AVI, MKV, and more.",
      "Easy-to-Use Interface: A simple and elegant design that makes video playback easy and enjoyable.",
      "Full Control: You can pause, fast-forward, adjust volume and screen brightness easily.",
      "Play Videos from Phone or External Storage: Browse and play video files wherever they are stored.",
      "Arabic Language Support: Flexible and easy-to-use experience for any user."
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

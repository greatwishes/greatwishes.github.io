// lang_app4.js
const lang = {
  ar: {
    headerTitle: "مشغل الفيديو",
    headerSubtitle: "استمتع بمشاهدة أفلامك وفيديوهاتك بجودة عالية وسهولة تشغيل",
    downloadBtn: "تحميل التطبيق",
    downloadBtnNow: "تحميل التطبيق الآن",
    appTitle: "تطبيق مشغل الفيديوهات",
    featuresTitle: "الميزات الرئيسية للتطبيق:",
    featuresList: [
      "تشغيل جميع صيغ الفيديو: يدعم التطبيق معظم صيغ الفيديو الشهيرة مثل MP4، AVI، MKV وغيرها.",
      "واجهة مستخدم سهلة: تصميم بسيط وأنيق يجعل تشغيل الفيديوهات سهلاً وممتعاً.",
      "التحكم الكامل: يمكنك التحكم في الإيقاف والتقديم، وضبط مستوى الصوت وسطوع الشاشة بسهولة.",
      "دعم تشغيل الفيديوهات من الهاتف أو الذاكرة الخارجية: تصفح وشغل ملفات الفيديو أينما كانت مخزنة.",
      "دعم اللغة العربية: تجربة استخدام مرنة وسهلة لأي مستخدم."
    ],
    navigation: ["الرئيسية", "للتالي", "السابق"],
    footer: {
      siteName: "GreatWishes",
      rights: "جميع الحقوق محفوظة"
    }
  },
  en: {
    headerTitle: "Video Player",
    headerSubtitle: "Enjoy watching your movies and videos in high quality with easy playback",
    downloadBtn: "Download App",
    downloadBtnNow: "Download App Now",
    appTitle: "Video Player App",
    featuresTitle: "Main Features:",
    featuresList: [
      "Supports all video formats: Most popular formats like MP4, AVI, MKV, etc.",
      "Easy-to-use interface: Simple and elegant design for smooth playback.",
      "Full control: Play, pause, skip, adjust volume and brightness easily.",
      "Play videos from device or external storage: Browse and play files anywhere.",
      "Supports Arabic: Flexible and easy-to-use experience for everyone."
    ],
    navigation: ["Home", "Next", "Previous"],
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

  // Buttons
  document.getElementById('downloadBtn1').innerHTML = lang[langCode].downloadBtn;
  document.getElementById('downloadBtn2').innerHTML = lang[langCode].downloadBtnNow;

  // App description
  document.querySelector('.app-description h2').innerHTML = lang[langCode].appTitle;
  document.querySelector('.app-description h3').innerHTML = lang[langCode].featuresTitle;

  const featuresItems = document.querySelectorAll('.app-description ul li');
  featuresItems.forEach((li, index) => {
    li.innerHTML = lang[langCode].featuresList[index];
  });

  // Navigation links
  const navLinks = document.querySelectorAll('.navigation-links a');
  navLinks.forEach((a, index) => {
    a.innerHTML = lang[langCode].navigation[index];
  });

  // Footer
  document.querySelector('.footer').innerHTML =
    `&copy; 2025 <span data-lang-key="siteName">${lang[langCode].footer.siteName}</span> | <span data-lang-key="rights">${lang[langCode].footer.rights}</span>`;
}

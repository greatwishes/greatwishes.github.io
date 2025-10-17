const lang = {
  ar: {
    headerTitle: "تطبيق موسيقى",
    headerSubtitle: "استمتع بأغانيك المفضلة وقوائم التشغيل المتنوعة",
    appTitle: "تطبيق الموسيقى",
    appDescription: "تطبيق مبتكر لتشغيل الموسيقى والاستمتاع بأفضل الأغاني من جميع الأنواع.",
    featuresTitle: "الميزات الرئيسية للتطبيق",
    features: [
      "تشغيل الموسيقى: استمتع بتشغيل أغانيك المفضلة في أي وقت وفي أي مكان.",
      "واجهة مستخدم سهلة: تصميم عصري يتيح لك تصفح وتنظيم الموسيقى بكل سهولة.",
      "دعم جميع الأنواع الموسيقية: من الأغاني العربية إلى العالمية، تجد جميع الأنماط التي تحبها.",
      "إمكانية إنشاء قوائم تشغيل: قم بإنشاء قوائم تشغيل خاصة بك وتنظيم الموسيقى كما تشاء.",
      "جودة صوت عالية: استمتع بتجربة صوت نقية وعالية الجودة."
    ],
    navLinks: [
      { text: "الرئيسية", href: "index.html" },
      { text: "التالي", href: "app2.html" },
      { text: "الخصوصية", href: "privacy.html" }
    ],
    downloadBtn: "تحميل التطبيق الآن",
    footer: {
      siteName: "GreatWishes",
      rights: "جميع الحقوق محفوظة"
    }
  },
  en: {
    headerTitle: "Music App",
    headerSubtitle: "Enjoy your favorite songs and diverse playlists",
    appTitle: "Music App",
    appDescription: "An innovative music app to play and enjoy the best songs from all genres.",
    featuresTitle: "Main Features",
    features: [
      "Play Music: Enjoy your favorite songs anytime and anywhere.",
      "Easy User Interface: Modern design allows you to browse and organize music easily.",
      "Support All Music Genres: From Arabic to international songs, find all the styles you love.",
      "Create Playlists: Create your own playlists and organize music as you like.",
      "High-Quality Sound: Enjoy a pure and high-quality audio experience."
    ],
    navLinks: [
      { text: "Home", href: "index.html" },
      { text: "Next", href: "app2.html" },
      { text: "Privacy", href: "privacy.html" }
    ],
    downloadBtn: "Download App Now",
    footer: {
      siteName: "GreatWishes",
      rights: "All rights reserved"
    }
  }
};

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

  // Features
  const featureItems = document.querySelectorAll('.app-description ul li');
  featureItems.forEach((li, index) => {
    const feature = lang[langCode].features[index];
    if (feature) {
      const parts = feature.split(":");
      li.innerHTML = `<strong>${parts[0]}:</strong> ${parts[1]}`;
    }
  });

  // Buttons
  document.querySelectorAll('.btn').forEach(btn => {
    btn.innerHTML = lang[langCode].downloadBtn;
  });

  // Footer
  document.querySelectorAll('[data-lang-key]').forEach(el => {
    const key = el.getAttribute('data-lang-key');
    if (lang[langCode].footer[key]) el.innerHTML = lang[langCode].footer[key];
  });

  // Navigation Links
  const navContainer = document.querySelector('.navigation-links');
  if (navContainer) {
    navContainer.innerHTML = lang[langCode].navLinks
      .map((link, i) => {
        const separator = i < lang[langCode].navLinks.length - 1 ? " | " : "";
        return `<a href="${link.href}">${link.text}</a>${separator}`;
      })
      .join('');
  }
}

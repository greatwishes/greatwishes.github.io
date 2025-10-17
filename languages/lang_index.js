// languages/lang_app1.js
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

    nav: [
      "الرئيسية",
      "التطبيقات",
      "الدليل",
      "سياسة الخصوصية",
      "تواصل معنا"
    ],

    downloadBtn: "تحميل التطبيق الآن",

    navigationLinks: [
      { text: "الرئيسية", href: "index.html" },
      { text: "التالي", href: "app2.html" },
      { text: "الخصوصية", href: "privacy.html" }
    ],

    footer: {
      siteName: "GreatWishes",
      rights: "جميع الحقوق محفوظة"
    }
  },
  en: {
    headerTitle: "Music App",
    headerSubtitle: "Enjoy your favorite songs and diverse playlists",
    appTitle: "Music App",
    appDescription: "An innovative app to play and enjoy the best songs from all genres.",
    featuresTitle: "Main Features",
    features: [
      "Play Music: Enjoy your favorite songs anytime and anywhere.",
      "Easy User Interface: Modern design allows you to browse and organize music easily.",
      "Support All Music Genres: From Arabic to international songs, find all the styles you love.",
      "Create Playlists: Create your own playlists and organize music as you like.",
      "High-Quality Sound: Enjoy a pure and high-quality audio experience."
    ],

    nav: [
      "Home",
      "Apps",
      "Guide",
      "Privacy Policy",
      "Contact Us"
    ],

    downloadBtn: "Download App Now",

    navigationLinks: [
      { text: "Home", href: "index.html" },
      { text: "Next", href: "app2.html" },
      { text: "Privacy", href: "privacy.html" }
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

  // Features list
  const featureItems = document.querySelectorAll('.app-description ul li');
  featureItems.forEach((li, index) => {
    if (lang[langCode].features[index]) {
      const parts = lang[langCode].features[index].split(":");
      li.innerHTML = `<strong>${parts[0]}:</strong> ${parts[1]}`;
    }
  });

  // Buttons
  document.querySelectorAll('.btn').forEach(btn => {
    btn.innerHTML = lang[langCode].downloadBtn;
  });

  // Navigation Menu
  const navItems = document.querySelectorAll('.nav-links li a');
  navItems.forEach((el, index) => {
    if (lang[langCode].nav[index]) {
      el.innerHTML = lang[langCode].nav[index];
    }
  });

  // Navigation Links (prev/next/privacy)
  const navContainer = document.querySelector('.navigation-links');
  if (navContainer) {
    navContainer.innerHTML = lang[langCode].navigationLinks
      .map((link, i) => {
        const separator = i < lang[langCode].navigationLinks.length - 1 ? " | " : "";
        return `<a href="${link.href}" class="${link.text === "Privacy" || link.text === "الخصوصية" ? "contact-link" : ""}">${link.text}</a>${separator}`;
      })
      .join('');
  }

  // Footer
  const footerElements = document.querySelectorAll('[data-lang-key]');
  footerElements.forEach(el => {
    const key = el.getAttribute('data-lang-key');
    if(lang[langCode].footer[key]){
      el.innerHTML = lang[langCode].footer[key];
    }
  });
        }

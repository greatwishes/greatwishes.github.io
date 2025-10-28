// languages/lang_app3.js
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
    headerTitle: "تحويل الصوت إلى نص",
    headerSubtitle: "حول صوتك إلى نصوص مكتوبة بسرعة وسهولة وحفظه ملف ورد",
    appTitle: "تطبيق تحويل المذكرة الصوتية إلى ملف",
    appDescription: "تطبيق تحويل الصوت الى نص هو أداة ذكية تساعدك على تحويل التسجيلات الصوتية إلى ملفات نصية بدقة وسرعة، مما يسهل حفظ الأفكار، المحاضرات، والاجتماعات. التطبيق يدعم العربية والإنجليزية.",
    featuresTitle: "الميزات الرئيسية للتطبيق",
    features: [
      "تحويل الصوت إلى نص: تسجيل المذكرة الصوتية أو استيراد ملف صوتي وتحويله مباشرة.",
      "دقة عالية في التعرف على الصوت: تقنيات متقدمة لمعالجة الصوت بدقة.",
      "حفظ النصوص: حفظ النتائج بصيغة وورد أو نص عادي.",
      "مشاركة النصوص: مشاركة مباشرة عبر البريد أو التطبيقات المختلفة.",
      "دعم اللغتين العربية والإنجليزية: تجربة استخدام سلسة ومتكاملة."
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
    headerTitle: "Voice to Text",
    headerSubtitle: "Convert your voice to written text quickly and easily and save it as a Word file",
    appTitle: "Voice Note to File App",
    appDescription: "Voice to Text is a smart tool that helps you convert audio recordings into text files accurately and quickly, making it easy to save ideas, lectures, and meetings. The app supports Arabic and English.",
    featuresTitle: "Main Features",
    features: [
      "Voice to Text: Record a voice note or import an audio file and convert it directly.",
      "High Accuracy Speech Recognition: Advanced audio processing technologies.",
      "Save Texts: Save results as Word or plain text files.",
      "Share Texts: Share directly via email or various apps.",
      "Supports Arabic and English: Smooth and complete user experience."
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

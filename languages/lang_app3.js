// lang_app3.js
let currentLang = 'ar';

const lang = {
  ar: {
    siteName: "GreatWishes",
    rights: "جميع الحقوق محفوظة",
    headerTitle: "تحويل الصوت إلى نص",
    headerSubtitle: "حول صوتك إلى نصوص مكتوبة بسرعة وسهولة وحفظه ملف ورد",
    downloadApp: "تحميل التطبيق",
    downloadNow: "تحميل التطبيق الآن",
    appTitle: "تطبيق تحويل المذكرة الصوتية إلى ملف",
    appDescription: "تطبيق تحويل الصوت الى نص هو أداة ذكية تساعدك على تحويل التسجيلات الصوتية إلى ملفات نصية بدقة وسرعة، مما يسهل حفظ الأفكار، المحاضرات، والاجتماعات. التطبيق يدعم العربية والإنجليزية.",
    featuresTitle: "الميزات الرئيسية للتطبيق:",
    features: [
      "تحويل الصوت إلى نص: تسجيل المذكرة الصوتية أو استيراد ملف صوتي وتحويله مباشرة.",
      "دقة عالية في التعرف على الصوت: تقنيات متقدمة لمعالجة الصوت بدقة.",
      "حفظ النصوص: حفظ النتائج بصيغة وورد أو نص عادي.",
      "مشاركة النصوص: مشاركة مباشرة عبر البريد أو التطبيقات المختلفة.",
      "دعم اللغتين العربية والإنجليزية: تجربة استخدام سلسة ومتكاملة."
    ],
    navHome: "الرئيسية",
    navNext: "التالي",
    navPrev: "السابق",
    clickAlert: "رابط التحميل غير جاهز بعد. يرجى المحاولة لاحقاً."
  },
  en: {
    siteName: "GreatWishes",
    rights: "All rights reserved",
    headerTitle: "Voice to Text",
    headerSubtitle: "Convert your voice to written text quickly and easily and save it as a Word file",
    downloadApp: "Download App",
    downloadNow: "Download Now",
    appTitle: "Voice Note to File App",
    appDescription: "Voice to Text is a smart tool that helps you convert audio recordings into text files accurately and quickly, making it easy to save ideas, lectures, and meetings. The app supports Arabic and English.",
    featuresTitle: "Main Features:",
    features: [
      "Voice to Text: Record a voice note or import an audio file and convert it directly.",
      "High Accuracy Speech Recognition: Advanced audio processing technologies.",
      "Save Texts: Save results as Word or plain text files.",
      "Share Texts: Share directly via email or various apps.",
      "Supports Arabic and English: Smooth and complete user experience."
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

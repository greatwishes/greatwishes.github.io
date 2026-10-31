// languages/lang_app15.js
const lang = {
  ar: {
    nav: ["الرئيسية", "التطبيقات", "الدليل", "سياسة الخصوصية", "تواصل معنا"],
    navLinks: ["الرئيسية", "التالي", "السابق"],
    downloadBtn: "تحميل الآن",
    headerTitle: "🤖 المساعد الذكي للمسابقات",
    headerSubtitle: "الأداة الأسهل لتنظيم الأنشطة التفاعلية وطرح الأسئلة بسرعة واحترافية",
    appTitle: "حول تطبيق المساعد الذكي",
    appDescription: "يعتبر <strong>المساعد الذكي</strong> الحل المبتكر لتنظيم جولات المسابقات المختلفة، حيث يسهل عليك إدارة عملية طرح الأسئلة، ترتيب المشاركات، وإعلان النتائج في واجهة عصرية وبسيطة.",
    featuresTitle: "أهم مميزات التطبيق:",
    features: [
      "<strong>التنظيم الآلي:</strong> يقوم التطبيق بتنظيم دورة الأسئلة وعرضها بشكل متتابع لضمان سير المسابقة دون توقف.",
      "<strong>دقة المتابعة:</strong> سرعة فائقة في رصد المشاركات وتحديد صاحب أسرع إجابة صحيحة بكل دقة.",
      "<strong>لوحة النتائج:</strong> حساب تلقائي للنقاط مع إمكانية عرض قائمة بأسماء المتصدرين لتعزيز الحماس.",
      "<strong>سهولة التحكم:</strong> واجهة مرنة تتيح لك إضافة بنوك أسئلة متنوعة والتحكم الكامل في وقت ظهورها.",
      "<strong>تصميم مريح:</strong> واجهة مستخدم مبسطة تدعم وضع الرؤية الكاملة لضمان تجربة استخدام ممتعة ومنظمة.",
      "<strong>استقرار الأداء:</strong> تطبيق خفيف ومحسن ليعمل بكفاءة عالية على مختلف الأجهزة دون أي تعقيدات."
    ],
    footer: { siteName: "GreatWishes", rights: "جميع الحقوق محفوظة" }
  },
  en: {
    nav: ["Home", "Apps", "Guide", "Privacy Policy", "Contact Us"],
    navLinks: ["Home", "Next", "Previous"],
    downloadBtn: "Download Now",
    headerTitle: "🤖 Smart Quiz Assistant",
    headerSubtitle: "The easiest tool to organize interactive activities and present questions quickly and professionally",
    appTitle: "About the Smart Assistant App",
    appDescription: "The <strong>Smart Assistant</strong> is an innovative solution for organizing various quiz rounds, making it easy to manage questions, arrange participations, and announce results in a modern, simple interface.",
    featuresTitle: "Key App Features:",
    features: [
      "<strong>Automated Organization:</strong> The app organizes the question cycle and displays them sequentially to keep the quiz running without interruption.",
      "<strong>Accurate Tracking:</strong> Ultra-fast detection of participations and precise identification of the fastest correct answer.",
      "<strong>Scoreboard:</strong> Automatic score calculation with the ability to display a list of top players to boost excitement.",
      "<strong>Easy Control:</strong> A flexible interface that lets you add various question banks and fully control their display time.",
      "<strong>Comfortable Design:</strong> A simplified user interface that supports full-screen mode for an enjoyable, organized experience.",
      "<strong>Stable Performance:</strong> A light, optimized app that runs efficiently on various devices without complications."
    ],
    footer: { siteName: "GreatWishes", rights: "All rights reserved" }
  }
};

let currentLang = 'ar';

function setLanguage(langCode) {
  currentLang = langCode;
  const t = lang[langCode];

  const h1 = document.querySelector('.header h1');
  if (h1) h1.innerHTML = t.headerTitle;
  const hp = document.querySelector('.header p');
  if (hp) hp.innerHTML = t.headerSubtitle;

  const at = document.querySelector('.app-description h2');
  if (at) at.innerHTML = t.appTitle;
  const ad = document.querySelector('.app-description p');
  if (ad) ad.innerHTML = t.appDescription;
  const ft = document.querySelector('.app-description h3');
  if (ft) ft.innerHTML = t.featuresTitle;

  document.querySelectorAll('.app-description ul li').forEach((li, i) => {
    if (t.features[i]) li.innerHTML = t.features[i];
  });

  document.querySelectorAll('.btn').forEach(btn => { btn.innerHTML = t.downloadBtn; });

  document.querySelectorAll('.nav-links li a').forEach((el, i) => {
    if (t.nav[i]) el.innerHTML = t.nav[i];
  });
  document.querySelectorAll('.navigation-links a').forEach((el, i) => {
    if (t.navLinks[i]) el.innerHTML = t.navLinks[i];
  });

  document.querySelectorAll('[data-lang-key]').forEach(el => {
    const key = el.getAttribute('data-lang-key');
    if (t.footer[key]) el.innerHTML = t.footer[key];
  });
}

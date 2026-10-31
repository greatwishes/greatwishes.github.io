// languages/lang_calculator.js
const lang = {
  ar: {
    nav: ["الرئيسية", "التطبيقات", "الدليل", "سياسة الخصوصية", "تواصل معنا"],
    navLinks: ["الرئيسية", "التالي", "السابق"],
    downloadBtn: "تحميل الآن",
    headerTitle: "🔢 الآلة الحاسبة",
    headerSubtitle: "أجرِ عملياتك الحسابية بدقة وسرعة مع واجهة مستخدم مبتكرة ومريحة",
    appTitle: "الآلة الحاسبة الذكية",
    appDescription: "تطبيق <strong>الآلة الحاسبة</strong> يتيح لك القيام بكافة العمليات الحسابية الأساسية والمتقدمة بسلاسة تامة، مع تصميم نيومورفيزم فريد.",
    featuresTitle: "مميزات التطبيق:",
    features: [
      "<strong>تصميم عصري:</strong> واجهة مستخدم مبنية بأسلوب النيومورفيزم الجذاب (Neumorphism).",
      "<strong>دقة عالية:</strong> حساب النتائج بدقة فائقة وسرعة استجابة فورية.",
      "<strong>شاشة LCD:</strong> عرض الأرقام والعمليات بخط رقمي مميز يحاكي الواقع.",
      "<strong>تجربة مريحة:</strong> ألوان متباينة تسهل الوصول للأرقام والعمليات الحسابية المختلفة.",
      "<strong>خفيف وسريع:</strong> حجم تطبيق صغير جداً ولا يؤثر على أداء الهاتف."
    ],
    footer: { siteName: "GreatWishes", rights: "جميع الحقوق محفوظة" }
  },
  en: {
    nav: ["Home", "Apps", "Guide", "Privacy Policy", "Contact Us"],
    navLinks: ["Home", "Next", "Previous"],
    downloadBtn: "Download Now",
    headerTitle: "🔢 Calculator",
    headerSubtitle: "Perform your calculations quickly and accurately with an innovative, comfortable interface",
    appTitle: "Smart Calculator",
    appDescription: "The <strong>Calculator</strong> app lets you perform all basic and advanced calculations smoothly, with a unique neumorphic design.",
    featuresTitle: "App Features:",
    features: [
      "<strong>Modern Design:</strong> A user interface built with the attractive Neumorphism style.",
      "<strong>High Accuracy:</strong> Extremely accurate results with instant response.",
      "<strong>LCD Screen:</strong> Displays numbers and operations with a distinctive digital font that mimics reality.",
      "<strong>Comfortable Experience:</strong> Contrasting colors make numbers and operations easy to access.",
      "<strong>Light and Fast:</strong> Very small app size that does not affect phone performance."
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

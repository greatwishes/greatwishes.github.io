// languages/lang_game2048.js
const lang = {
  ar: {
    nav: ["الرئيسية", "التطبيقات", "الدليل", "سياسة الخصوصية", "تواصل معنا"],
    navLinks: ["الرئيسية", "التالي", "السابق"],
    downloadBtn: "تحميل الآن",
    headerTitle: "🎮 لعبة 2048",
    headerSubtitle: "تحدى ذكاءك في دمج الأرقام المتشابهة للوصول إلى المربع الذهبي 2048",
    appTitle: "لعبة 2048 (الأصلية)",
    appDescription: "تعتبر <strong>لعبة 2048</strong> واحدة من أكثر ألعاب الألغاز إثارة، حيث تعتمد على تحريك المربعات ودمج الأرقام المتطابقة لمضاعفتها حتى تصل للهدف المنشود.",
    featuresTitle: "مميزات اللعبة:",
    features: [
      "<strong>تصميم عصري وجذاب:</strong> واجهة مستخدم مريحة للعين تدعم تقنيات العرض ثلاثية الأبعاد.",
      "<strong>مستويات تحدي متدرجة:</strong> ابدأ من أرقام بسيطة وحاول السيطرة على الشبكة قبل امتلائها.",
      "<strong>حفظ تلقائي للتقدم:</strong> يمكنك العودة وإكمال لعبتك من حيث توقفت في أي وقت.",
      "<strong>مناسبة لجميع الأعمار:</strong> تساعد على تنشيط الذاكرة وسرعة البديهة للكبار والصغار.",
      "<strong>أداء سلس وسريع:</strong> اللعبة محسنة لتعمل بمرونة عالية على كافة أجهزة الأندرويد."
    ],
    footer: { siteName: "GreatWishes", rights: "جميع الحقوق محفوظة" }
  },
  en: {
    nav: ["Home", "Apps", "Guide", "Privacy Policy", "Contact Us"],
    navLinks: ["Home", "Next", "Previous"],
    downloadBtn: "Download Now",
    headerTitle: "🎮 2048 Game",
    headerSubtitle: "Challenge your mind by merging matching numbers to reach the golden 2048 tile",
    appTitle: "2048 Game (Original)",
    appDescription: "The <strong>2048 game</strong> is one of the most exciting puzzle games, based on moving tiles and merging matching numbers to double them until you reach the target.",
    featuresTitle: "Game Features:",
    features: [
      "<strong>Modern and Attractive Design:</strong> An eye-friendly interface that supports 3D display techniques.",
      "<strong>Gradual Challenge Levels:</strong> Start with simple numbers and try to control the grid before it fills up.",
      "<strong>Automatic Progress Saving:</strong> Return and continue your game from where you left off at any time.",
      "<strong>Suitable for All Ages:</strong> Helps activate memory and quick thinking for adults and children.",
      "<strong>Smooth and Fast Performance:</strong> Optimized to run flexibly on all Android devices."
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

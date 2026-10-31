// languages/lang_app16.js
const lang = {
  ar: {
    nav: ["الرئيسية", "التطبيقات", "الدليل", "سياسة الخصوصية", "تواصل معنا"],
    navLinks: ["الرئيسية", "التطبيقات", "السابق"],
    downloadBtn: "تحميل الآن",
    headerTitle: "🧪 لعبة فرز السوائل",
    headerSubtitle: "الطريقة الأسهل والأكثر متعة لترتيب الألوان وتحدّي ذكائك",
    appTitle: "حول لعبة Water Sort",
    appDescription: "تُعدّ <strong>Water Sort</strong> لعبة ألغاز عصرية تعتمد على ترتيب السوائل الملوّنة داخل الزجاجات حتى يصبح كل لون وحده في زجاجة واحدة، في واجهة بسيطة وسلسة تمنحك تجربة ممتعة وتحدياً ذهنياً متجدداً مع كل مرحلة.",
    featuresTitle: "أهم مميزات اللعبة:",
    features: [
      "<strong>مراحل لا نهائية:</strong> تحديات جديدة بصعوبة متزايدة تُبقي اللعب مشوّقاً دائماً.",
      "<strong>تحكم بسيط ودقيق:</strong> انقل السوائل بنقرة واحدة عبر واجهة سلسة وسهلة الاستخدام.",
      "<strong>أدوات مساعدة:</strong> التراجع، والتلميح الذكي، وإعادة المحاولة عند الحاجة.",
      "<strong>نظام النجوم:</strong> قيّم أداءك في كل مرحلة وحاول تحقيق أفضل نتيجة.",
      "<strong>مؤثرات صوتية:</strong> أصوات واقعية للصب والتنبيهات مع إمكانية كتمها من الإعدادات.",
      "<strong>يعمل بدون إنترنت:</strong> تطبيق خفيف ومحسّن يعمل بكفاءة على مختلف الأجهزة، والعب في أي وقت وأي مكان."
    ],
    footer: { siteName: "GreatWishes", rights: "جميع الحقوق محفوظة" }
  },
  en: {
    nav: ["Home", "Apps", "Guide", "Privacy Policy", "Contact Us"],
    navLinks: ["Home", "Apps", "Previous"],
    downloadBtn: "Download Now",
    headerTitle: "🧪 Water Sort – Color Sorting Game",
    headerSubtitle: "The easiest and most fun way to sort colors and challenge your mind",
    appTitle: "About Water Sort Game",
    appDescription: "<strong>Water Sort</strong> is a modern puzzle game based on sorting colored liquids inside bottles until each color is alone in one bottle, in a simple and smooth interface that gives you a fun experience and a renewed mental challenge with every level.",
    featuresTitle: "Key Game Features:",
    features: [
      "<strong>Endless Levels:</strong> New challenges with increasing difficulty keep the game exciting at all times.",
      "<strong>Simple and Precise Control:</strong> Move liquids with one tap through a smooth, easy-to-use interface.",
      "<strong>Helper Tools:</strong> Undo, smart hint, and retry when needed.",
      "<strong>Star System:</strong> Rate your performance at each level and try to achieve the best result.",
      "<strong>Sound Effects:</strong> Realistic pouring and alert sounds with the ability to mute them from settings.",
      "<strong>Works Offline:</strong> A light, optimized app that runs efficiently on various devices, play anytime and anywhere."
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

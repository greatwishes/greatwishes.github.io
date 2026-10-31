// languages/lang_studenttracker.js
const lang = {
  ar: {
    nav: ["الرئيسية", "التطبيقات", "الدليل", "سياسة الخصوصية", "تواصل معنا"],
    navLinks: ["الرئيسية", "التالي", "السابق"],
    downloadBtn: "تحميل الآن",
    headerTitle: "📝 متابع الطلاب برو",
    headerSubtitle: "الأداة المتكاملة للمعلم لإدارة المجموعات ورصد الحضور والغياب باحترافية",
    appTitle: "تطبيق متابع الطلاب برو",
    appDescription: "يعتبر <strong>تطبيق متابع الطلاب</strong> الحل الأمثل للمعلمين لتنظيم سجلات الطلاب، رصد الغياب والحضور، ومتابعة الأمور المالية للمجموعات في مكان واحد.",
    featuresTitle: "مميزات التطبيق:",
    features: [
      "<strong>تصميم عصري وجذاب:</strong> واجهة مستخدم مريحة للعين تعتمد على أسلوب النيومورفيك الأنيق.",
      "<strong>إدارة شاملة للمجموعات:</strong> تنظيم الطلاب حسب المرحلة الدراسية والمواعيد بسهولة تامة.",
      "<strong>رصد الحضور والغياب:</strong> واجهة سريعة لتسجيل حضور الطلاب بلمسة واحدة وحفظ التقدم.",
      "<strong>مناسبة لجميع المعلمين:</strong> تساعد على توفير الوقت والجهد في المتابعة اليومية والمالية.",
      "<strong>أداء سلس وسريع:</strong> التطبيق محسن ليعمل بمرونة عالية على كافة أجهزة الأندرويد."
    ],
    footer: { siteName: "GreatWishes", rights: "جميع الحقوق محفوظة" }
  },
  en: {
    nav: ["Home", "Apps", "Guide", "Privacy Policy", "Contact Us"],
    navLinks: ["Home", "Next", "Previous"],
    downloadBtn: "Download Now",
    headerTitle: "📝 Student Tracker Pro",
    headerSubtitle: "The integrated tool for teachers to manage groups and track attendance professionally",
    appTitle: "Student Tracker Pro App",
    appDescription: "The <strong>Student Tracker</strong> app is the ideal solution for teachers to organize student records, track attendance and absence, and follow up on group finances in one place.",
    featuresTitle: "App Features:",
    features: [
      "<strong>Modern and Attractive Design:</strong> An eye-friendly interface based on elegant neumorphic style.",
      "<strong>Comprehensive Group Management:</strong> Easily organize students by grade and schedule.",
      "<strong>Attendance Tracking:</strong> A quick interface to record student attendance with one touch and save progress.",
      "<strong>Suitable for All Teachers:</strong> Helps save time and effort in daily and financial follow-up.",
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

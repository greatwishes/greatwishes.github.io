// lang_index.js
const lang = {
  ar: {
    headerTitle: "مرحبًا بك في GreatWishes",
    headerSubtitle: "منصة تطبيقاتك للاندرويد بتصميم فريد وتجربة استثنائية",
    selectedApps: "تطبيقات مختارة",
    installGuide: "📱 دليل تثبيت التطبيقات على هاتفك",
    nav: [
      "الرئيسية",
      "التطبيقات",
      "الدليل",
      "سياسة الخصوصية",
      "تواصل معنا"
    ],
    steps: [
      "افتح تطبيق <strong>جوجل بلاي</strong> على هاتفك.",
      "قم بتعطيل خيار <strong>فحص التطبيقات</strong> بـ Play Protect.",
      "الآن، افتح التطبيق واستمتع باستخدامه! 🎉"
    ],
    prev: "السابق",
    next: "التالي",
    apps: [
      "تطبيق موسيقى",
      "آلة حساب العمر",
      "تحويل الصوتية إلى نص",
      "تطبيق الفيديوهات",
      "ملاحظات سرية",
      "لعبة الثلاث أحرف",
      "لعبة من سيربح المليون",
      "لعبة ترتيب الأرقام",
      "لعبة الذاكرة",
      "دفتر الملاحظات",
      "الآلة الحاسبة",
      "لعبة 2048",
      "متابع الطلاب برو",
      "متابع المشتريات برو",
      "بوت الأسئلة الذكي",
      "ترتيب الألوان"
    ],
    footer: {
      siteName: "GreatWishes",
      rights: "جميع الحقوق محفوظة",
      contactText: "للتواصل",
      privacyPolicy: "سياسة الخصوصية"
    }
  },
  en: {
    headerTitle: "Welcome to GreatWishes",
    headerSubtitle: "Your Android apps platform with unique design and amazing experience",
    selectedApps: "Selected Apps",
    installGuide: "📱 App Installation Guide",
    nav: [
      "Home",
      "Apps",
      "Guide",
      "Privacy Policy",
      "Contact Us"
    ],
    steps: [
      "Open the <strong>Google Play</strong> app on your phone.",
      "Disable the <strong>App Scan</strong> option in Play Protect.",
      "Now, open the app and enjoy! 🎉"
    ],
    prev: "Previous",
    next: "Next",
    apps: [
      "Music App",
      "Age Calculator",
      "Voice to Text",
      "Video App",
      "Secret Notes",
      "Three Letters Game",
      "Who Wants to Be a Millionaire",
      "Fifteen Puzzle",
      "Memory Game",
      "Notepad",
      "Calculator",
      "2048 Game",
      "Student Tracker Pro",
      "Purchases Tracker Pro",
      "Smart Quiz Bot",
      "Water Sort"
    ],
    footer: {
      siteName: "GreatWishes",
      rights: "All rights reserved",
      contactText: "Contact",
      privacyPolicy: "Privacy Policy"
    }
  }
};

// Default language
let currentLang = 'ar';

function setLanguage(langCode) {
  currentLang = langCode;
  const t = lang[langCode];

  // Header
  const h1 = document.querySelector('.header h1');
  if (h1) h1.innerHTML = t.headerTitle;
  const hp = document.querySelector('.header p');
  if (hp) hp.innerHTML = t.headerSubtitle;

  // Section Titles
  const appsTitle = document.querySelector('#apps h2');
  if (appsTitle) appsTitle.innerHTML = t.selectedApps;
  const guideTitle = document.querySelector('#interactive-guide');
  if (guideTitle && guideTitle.previousElementSibling) {
    guideTitle.previousElementSibling.innerHTML = t.installGuide;
  }

  // Navigation Menu
  document.querySelectorAll('.nav-links li a').forEach((el, index) => {
    if (t.nav[index]) el.innerHTML = t.nav[index];
  });

  // Steps
  document.querySelectorAll('#interactive-guide .step-item span').forEach((step, index) => {
    if (t.steps[index]) step.innerHTML = t.steps[index];
  });

  // Buttons
  document.querySelectorAll('.prev-btn').forEach(btn => btn.innerHTML = t.prev);
  document.querySelectorAll('.next-btn').forEach(btn => btn.innerHTML = t.next);

  // Update app names (the slider repeats the list, so wrap with modulo)
  document.querySelectorAll('.app-name').forEach((el, index) => {
    const name = t.apps[index % t.apps.length];
    if (name) el.innerHTML = name;
  });

  // Footer
  document.querySelectorAll('[data-lang-key]').forEach(el => {
    const key = el.getAttribute('data-lang-key');
    if (t.footer[key]) el.innerHTML = t.footer[key];
  });
}

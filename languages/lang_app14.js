// languages/lang_app14.js
const lang = {
  ar: {
    nav: ["الرئيسية", "التطبيقات", "الدليل", "سياسة الخصوصية", "تواصل معنا"],
    navLinks: ["الرئيسية", "التالي", "السابق"],
    downloadBtn: "تحميل الآن",
    headerTitle: "📝 متابع المشتريات",
    headerSubtitle: "الأداة المتكاملة لإدارة المشتريات الشهرية وتتبع الديون باحترافية",
    appTitle: "تطبيق متابع المشتريات",
    appDescription: "يعتبر <strong>تطبيق متابع المشتريات</strong> الحل الأمثل لتنظيم السجلات التجارية، متابعة المبالغ المستحقة، وجرد المشتريات الشهرية في واجهة واحدة منظمة.",
    featuresTitle: "مميزات التطبيق:",
    features: [
      "<strong>التعرف على النصوص:</strong> إمكانية قراءة بيانات الفواتير والمشتريات آلياً عبر الكاميرا لتوفير وقت الإدخال اليدوي.",
      "<strong>نظام الأرشفة الشهرية:</strong> إمكانية إنشاء سجلات منفصلة لكل شهر لتسهيل مراجعة المشتريات السابقة.",
      "<strong>تتبع المبالغ والديون:</strong> رصد دقيق لجميع المبالغ المدفوعة والمتبقية مع حساب إجمالي الديون تلقائياً.",
      "<strong>توثيق العمليات:</strong> تسجيل دقيق لوقت وتاريخ كل عملية تعديل أو دفع لضمان المتابعة الصحيحة.",
      "<strong>إدارة شاملة للمحتوى:</strong> سهولة إضافة وتعديل وحذف المشتريات مع إمكانية إضافة ملاحظات خاصة لكل عملية.",
      "<strong>البحث السريع والفوري:</strong> العثور على أي صنف أو مورد داخل الأرشيف بلمحة بصر عبر محرك بحث ذكي."
    ],
    footer: { siteName: "GreatWishes", rights: "جميع الحقوق محفوظة" }
  },
  en: {
    nav: ["Home", "Apps", "Guide", "Privacy Policy", "Contact Us"],
    navLinks: ["Home", "Next", "Previous"],
    downloadBtn: "Download Now",
    headerTitle: "📝 Purchases Tracker",
    headerSubtitle: "The integrated tool to manage monthly purchases and track debts professionally",
    appTitle: "Purchases Tracker App",
    appDescription: "The <strong>Purchases Tracker</strong> app is the ideal solution for organizing commercial records, tracking outstanding amounts, and inventorying monthly purchases in one organized interface.",
    featuresTitle: "App Features:",
    features: [
      "<strong>Text Recognition:</strong> Read invoice and purchase data automatically via the camera to save manual entry time.",
      "<strong>Monthly Archiving System:</strong> Create separate records for each month to easily review previous purchases.",
      "<strong>Amounts and Debts Tracking:</strong> Accurate monitoring of all paid and remaining amounts with automatic total debt calculation.",
      "<strong>Transaction Documentation:</strong> Accurate recording of the time and date of every edit or payment to ensure proper follow-up.",
      "<strong>Comprehensive Content Management:</strong> Easily add, edit, and delete purchases with the ability to add private notes for each transaction.",
      "<strong>Fast and Instant Search:</strong> Find any item or supplier within the archive at a glance via a smart search engine."
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

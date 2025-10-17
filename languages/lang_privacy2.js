// lang_privacy2.js
const lang = {
  ar: {
    headerTitle: "سياسة الخصوصية وإخلاء المسؤولية",
    headerSubtitle: "لجميع التطبيقات المعروضة على هذا الموقع",
    contentSections: [
      {
        title: "مرحبًا بك في موقعنا",
        paragraphs: [
          "نوفر مجموعة من التطبيقات التي تهدف إلى تسهيل المهام اليومية، وتقديم محتوى مفيد وترفيهي."
        ]
      },
      {
        title: "أولاً: سياسة الخصوصية",
        paragraphs: [
          "جميع التطبيقات المتوفرة على هذا الموقع لا تطلب تسجيل دخول أو إدخال بيانات شخصية.",
          "لا نقوم بجمع أو مشاركة أي معلومات تعريفية عن المستخدمين.",
          "لا يتم تخزين بيانات المستخدم على خوادم خارجية.",
          "التطبيقات تعمل محليًا على جهاز المستخدم فقط."
        ]
      },
      {
        title: "ثانيًا: إخلاء المسؤولية",
        paragraphs: [
          "التطبيقات مصممة لأغراض تعليمية، ترفيهية، أو معلوماتية حسب طبيعة كل تطبيق.",
          "لا نقدم أي ضمانات بخصوص دقة أو صحة النتائج المعروضة داخل التطبيقات.",
          "استخدامك لأي من التطبيقات يتم على مسؤوليتك الشخصية، ونحن غير مسؤولين عن أي نتائج أو قرارات ناتجة عن استخدامها."
        ]
      },
      {
        title: "للتواصل",
        paragraphs: [
          "لأي استفسار أو ملاحظات حول التطبيقات، يرجى مراسلتنا عبر البريد الإلكتروني: <a href='mailto:Greatdaylight@gmail.com' style='color: #ffcc00; text-decoration: underline;'>Greatdaylight@gmail.com</a>"
        ]
      }
    ],
    backBtn: "الرجوع للصفحة الرئيسية",
    navigation: ["الرئيسية", "التطبيقات", "الدليل", "سياسة الخصوصية", "تواصل معنا"],
    footer: {
      siteName: "GreatWishes",
      rights: "جميع الحقوق محفوظة"
    }
  },
  en: {
    headerTitle: "Privacy Policy & Disclaimer",
    headerSubtitle: "For all apps displayed on this website",
    contentSections: [
      {
        title: "Welcome to our site",
        paragraphs: [
          "We provide a collection of apps designed to simplify daily tasks and offer useful and entertaining content."
        ]
      },
      {
        title: "1. Privacy Policy",
        paragraphs: [
          "All apps available on this site do not require login or entering personal data.",
          "We do not collect or share any identifying information about users.",
          "User data is not stored on external servers.",
          "Apps run locally on the user's device only."
        ]
      },
      {
        title: "2. Disclaimer",
        paragraphs: [
          "Apps are designed for educational, entertainment, or informational purposes depending on the nature of each app.",
          "We make no guarantees regarding the accuracy or correctness of results displayed in the apps.",
          "Your use of any apps is at your own risk, and we are not responsible for any outcomes or decisions resulting from their use."
        ]
      },
      {
        title: "Contact",
        paragraphs: [
          "For any inquiries or feedback regarding the apps, please contact us via email: <a href='mailto:Greatdaylight@gmail.com' style='color: #ffcc00; text-decoration: underline;'>Greatdaylight@gmail.com</a>"
        ]
      }
    ],
    backBtn: "Back to Home Page",
    navigation: ["Home", "Apps", "Guide", "Privacy Policy", "Contact Us"],
    footer: {
      siteName: "GreatWishes",
      rights: "All rights reserved"
    }
  }
};

let currentLang = 'ar';

function setLanguage(langCode) {
  currentLang = langCode;

  // Header
  document.querySelector('header h1').innerHTML = lang[langCode].headerTitle;
  document.querySelector('header p').innerHTML = lang[langCode].headerSubtitle;

  // Content Sections
  const sections = document.querySelectorAll('.content h3');
  const paragraphs = document.querySelectorAll('.content p');

  let paraIndex = 0;
  sections.forEach((section, i) => {
    if (lang[langCode].contentSections[i]) {
      section.innerHTML = lang[langCode].contentSections[i].title;
      lang[langCode].contentSections[i].paragraphs.forEach(pText => {
        if (paragraphs[paraIndex]) {
          paragraphs[paraIndex].innerHTML = pText;
          paraIndex++;
        }
      });
    }
  });

  // Back button
  const backBtn = document.querySelector('.content .btn');
  if (backBtn) backBtn.innerHTML = lang[langCode].backBtn;

  // Navigation links
  const navLinks = document.querySelectorAll('.nav-links a');
  navLinks.forEach((a, index) => {
    if (lang[langCode].navigation[index]) {
      a.innerHTML = lang[langCode].navigation[index];
    }
  });

  // Footer
  document.querySelector('footer').innerHTML =
    `&copy; 2025 <span data-lang-key="siteName">${lang[langCode].footer.siteName}</span> | <span data-lang-key="rights">${lang[langCode].footer.rights}</span>`;
  }

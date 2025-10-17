// lang_privacy.js
const lang = {
  ar: {
    headerTitle: "سياسة الخصوصية",
    headerSubtitle: "نحترم خصوصيتك ونضمن حماية بياناتك",
    contentTitle: "سياسة الخصوصية",
    contentParagraphs: [
      "نحن نُولي أهمية كبيرة لخصوصيتك، ونعمل على حماية بياناتك الشخصية بكل الوسائل الممكنة. باستخدامك لهذا التطبيق، فإنك توافق على الشروط الموضّحة في هذه السياسة.",
      "<strong>جمع المعلومات:</strong> لا يقوم هذا التطبيق بجمع أي معلومات شخصية أو حساسة عن المستخدمين بشكل مباشر. يتم استخدام الأذونات فقط لتقديم الوظائف الأساسية للتطبيق (مثل استخدام الميكروفون لتحويل الصوت إلى نص).",
      "<strong>استخدام المعلومات:</strong> لا يتم تخزين أو مشاركة أي بيانات يتم إدخالها داخل التطبيق. جميع العمليات تتم محليًا على جهاز المستخدم دون إرسال أي بيانات إلى خوادم خارجية.",
      "<strong>أمان البيانات:</strong> نحن لا نحتفظ بأي بيانات، وبالتالي لا يمكن الوصول أو اختراق أي معلومات تتعلق بك كمستخدم.",
      "<strong>أطراف خارجية:</strong> لا يتم مشاركة أي بيانات مع جهات خارجية أو معلنين أو شركاء.",
      "<strong>التعديلات على السياسة:</strong> قد نقوم بتحديث هذه السياسة من وقت لآخر، وسيتم عرض التحديثات في هذا القسم.",
      "للاستفسارات أو أي أسئلة متعلقة بسياسة الخصوصية، يُرجى التواصل معنا عبر البريد الإلكتروني التالي: <a href='mailto:Greatdaylight@gmail.com' style='color: #ffcc00; text-decoration: underline;'>Greatdaylight@gmail.com</a>",
      "للاطلاع على سياسة الخصوصية العامة لجميع التطبيقات، تفضل بزيارة: <a href='privacy2.html' style='color:#ffcc00; text-decoration: underline;'>سياسة خصوصية التطبيقات</a>"
    ],
    backBtn: "الرجوع للصفحة الرئيسية",
    navigation: ["الرئيسية", "التطبيقات", "الدليل", "سياسة الخصوصية", "تواصل معنا"],
    footer: {
      siteName: "GreatWishes",
      rights: "جميع الحقوق محفوظة"
    }
  },
  en: {
    headerTitle: "Privacy Policy",
    headerSubtitle: "We respect your privacy and ensure the protection of your data",
    contentTitle: "Privacy Policy",
    contentParagraphs: [
      "We value your privacy highly and work to protect your personal data by all possible means. By using this app, you agree to the terms outlined in this policy.",
      "<strong>Information Collection:</strong> This app does not collect any personal or sensitive information directly from users. Permissions are only used to provide core app functionalities (e.g., using the microphone for voice-to-text).",
      "<strong>Information Usage:</strong> No data entered within the app is stored or shared. All operations are performed locally on the user's device without sending data to external servers.",
      "<strong>Data Security:</strong> We do not retain any data, so no user information can be accessed or breached.",
      "<strong>Third Parties:</strong> No data is shared with external entities, advertisers, or partners.",
      "<strong>Policy Updates:</strong> We may update this policy from time to time, and updates will be displayed in this section.",
      "For inquiries or questions regarding the privacy policy, please contact us via the following email: <a href='mailto:Greatdaylight@gmail.com' style='color: #ffcc00; text-decoration: underline;'>Greatdaylight@gmail.com</a>",
      "To view the general privacy policy for all apps, please visit: <a href='privacy2.html' style='color:#ffcc00; text-decoration: underline;'>Apps Privacy Policy</a>"
    ],
    backBtn: "Back to Home Page",
    navigation: ["Home", "Apps", "Guide", "Privacy Policy", "Contact Us"],
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
  document.querySelector('header h1').innerHTML = lang[langCode].headerTitle;
  document.querySelector('header p').innerHTML = lang[langCode].headerSubtitle;

  // Content
  document.querySelector('.content h3').innerHTML = lang[langCode].contentTitle;
  const paragraphs = document.querySelectorAll('.content p');
  paragraphs.forEach((p, index) => {
    if (lang[langCode].contentParagraphs[index]) {
      p.innerHTML = lang[langCode].contentParagraphs[index];
    }
  });

  // Back button
  document.querySelector('.content .btn').innerHTML = lang[langCode].backBtn;

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

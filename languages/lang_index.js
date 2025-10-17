// lang.js
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
"اضغط على صورة حسابك في الأعلى للدخول إلى <strong>الإعدادات</strong>.",
"اختر <strong>Play Protect</strong> من القائمة.",
"اضغط على الترس اعلى اليمين للدخول الى الاعدادات <strong>الإعدادات</strong>.",
"قم بتعطيل خيار <strong>فحص التطبيقات</strong>.",
"اضغط على صورة أو رابط التطبيق الذي تريده من القائمة أعلاه.",
"سيتم نقلك إلى صفحة التطبيق حيث تجد زر التحميل (Download).",
"بعد تحميل ملف <strong>APK</strong> على هاتفك، افتحه لبدء التثبيت.",
"قد يطلب منك الهاتف السماح بالتثبيت من مصادر غير معروفة، قم بتفعيل الخيار من الإعدادات.",
"اضغط على 'تثبيت' وانتظر حتى يكتمل التثبيت.",
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
"لعبة الثلاث احرف",
"لعبة من سيربح المليون",
"لعبة ترتيب الارقام",
"لعبة الذاكرة"
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
"Tap your profile picture at the top to enter <strong>Settings</strong>.",
"Select <strong>Play Protect</strong> from the menu.",
"Tap the gear at the top right to enter <strong>Settings</strong>.",
"Disable the <strong>App Scan</strong> option.",
"Tap the app image or link you want from the list above.",
"You'll be redirected to the app page where you can find the Download button.",
"After downloading the <strong>APK</strong> file to your phone, open it to start the installation.",
"Your phone may ask permission to install from unknown sources, enable it in Settings.",
"Tap 'Install' and wait for completion.",
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
"Memory Game"
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

// Header
document.querySelector('.header h1').innerHTML = lang[langCode].headerTitle;
document.querySelector('.header p').innerHTML = lang[langCode].headerSubtitle;

// Section Titles
document.querySelector('h2').innerHTML = lang[langCode].selectedApps;
document.querySelector('#interactive-guide').previousElementSibling.innerHTML = lang[langCode].installGuide;

// Navigation Menu
const navItems = document.querySelectorAll('.nav-links li a');
navItems.forEach((el, index) => {
if (lang[langCode].nav[index]) {
el.innerHTML = lang[langCode].nav[index];
}
});

// Steps
const steps = document.querySelectorAll('#interactive-guide .step-item span');
steps.forEach((step, index) => {
if (lang[langCode].steps[index]) {
step.innerHTML = lang[langCode].steps[index];
}
});

// Buttons
const prevBtns = document.querySelectorAll('.prev-btn');
const nextBtns = document.querySelectorAll('.next-btn');
prevBtns.forEach(btn => btn.innerHTML = lang[langCode].prev);
nextBtns.forEach(btn => btn.innerHTML = lang[langCode].next);

// Update app names
const appNames = document.querySelectorAll('.app-name');
appNames.forEach((el, index) => {
if (lang[langCode].apps[index]) {
el.innerHTML = lang[langCode].apps[index];
}
});

// Footer
const footerElements = document.querySelectorAll('[data-lang-key]');
footerElements.forEach(el => {
const key = el.getAttribute('data-lang-key');
if(lang[langCode].footer[key]){
el.innerHTML = lang[langCode].footer[key];
}
});
}


const lang = {
  ar: {
    headerTitle: "تواصل معنا",
    headerSubtitle: "نحن هنا للإجابة على استفساراتك وملاحظاتك",
    formTitle: "أرسل لنا رسالة",
    labels: {
      name: "الاسم:",
      email: "البريد الإلكتروني:",
      subject: "الموضوع:",
      message: "الرسالة:"
    },
    placeholders: {
      name: "أدخل اسمك",
      email: "أدخل بريدك الإلكتروني",
      subject: "موضوع الرسالة",
      message: "اكتب رسالتك هنا"
    },
    submitBtn: "إرسال الرسالة",
    otherContactsTitle: "طرق التواصل الأخرى",
    emailText: "البريد الإلكتروني:",
    socialText: "تابعنا على وسائل التواصل الاجتماعي:",
    socialLinks: ["فيسبوك", "تويتر", "إنستغرام"],
    footer: {
      siteName: "GreatWishes",
      rights: "جميع الحقوق محفوظة"
    }
  },
  en: {
    headerTitle: "Contact Us",
    headerSubtitle: "We are here to answer your inquiries and feedback",
    formTitle: "Send us a message",
    labels: {
      name: "Name:",
      email: "Email:",
      subject: "Subject:",
      message: "Message:"
    },
    placeholders: {
      name: "Enter your name",
      email: "Enter your email",
      subject: "Message subject",
      message: "Write your message here"
    },
    submitBtn: "Send Message",
    otherContactsTitle: "Other Contact Methods",
    emailText: "Email:",
    socialText: "Follow us on social media:",
    socialLinks: ["Facebook", "Twitter", "Instagram"],
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
  document.querySelector('.header h1').innerHTML = lang[langCode].headerTitle;
  document.querySelector('.header p').innerHTML = lang[langCode].headerSubtitle;

  // Form title
  document.querySelector('.contact-form h2').innerHTML = lang[langCode].formTitle;

  // Labels
  document.querySelector('label[for="name"]').innerHTML = lang[langCode].labels.name;
  document.querySelector('label[for="email"]').innerHTML = lang[langCode].labels.email;
  document.querySelector('label[for="subject"]').innerHTML = lang[langCode].labels.subject;
  document.querySelector('label[for="message"]').innerHTML = lang[langCode].labels.message;

  // Placeholders
  document.getElementById('name').placeholder = lang[langCode].placeholders.name;
  document.getElementById('email').placeholder = lang[langCode].placeholders.email;
  document.getElementById('subject').placeholder = lang[langCode].placeholders.subject;
  document.getElementById('message').placeholder = lang[langCode].placeholders.message;

  // Button
  document.querySelector('.contact-form button').innerHTML = lang[langCode].submitBtn;

  // Other contacts section
  document.querySelector('.contact-info h2').innerHTML = lang[langCode].otherContactsTitle;
  const emailParagraph = document.querySelector('.contact-info p:nth-of-type(1)');
  emailParagraph.innerHTML = `📧 ${lang[langCode].emailText} <a href="mailto:Greatdaylight@gmail.com" class="contact-link">Greatdaylight@gmail.com</a>`;
  const socialParagraph = document.querySelector('.contact-info p:nth-of-type(2)');
  socialParagraph.innerHTML = `📱 ${lang[langCode].socialText}`;
  const socialLinks = document.querySelectorAll('.social-links li a');
  socialLinks.forEach((link, index) => {
    link.innerHTML = lang[langCode].socialLinks[index];
  });

  // Footer
  document.querySelector('.footer').innerHTML =
    `&copy; 2025 <span data-lang-key="siteName">${lang[langCode].footer.siteName}</span> | <span data-lang-key="rights">${lang[langCode].footer.rights}</span>`;
}

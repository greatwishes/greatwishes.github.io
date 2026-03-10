/* ================= main.js ================= */
/* الحاجات المشتركة لجميع صفحات الموقع + منطق السلايدر */

const menuToggle = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

if (menuToggle && navLinks) {
    menuToggle.onclick = (e) => {
        e.stopPropagation();
        navLinks.classList.toggle('active');
    };
    
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.onclick = () => {
            navLinks.classList.remove('active');
        };
    });

    document.addEventListener('click', (e) => {
        if (!navLinks.contains(e.target) && !menuToggle.contains(e.target)) {
            navLinks.classList.remove('active');
        }
    });
}

// ===== زر تغيير اللغة =====
const langBtn = document.getElementById('lang-btn');
if (langBtn) {
    langBtn.addEventListener('click', () => {
      if (typeof currentLang !== 'undefined') {
          if (currentLang === 'ar') {
            setLanguage('en');
            langBtn.innerHTML = 'AR';
          } else {
            setLanguage('ar');
            langBtn.innerHTML = 'EN';
          }
      }
    });
}

// ===== منطق السلايدر الذكي لمنع الارتداد =====
function updateActiveCard() {
    const sliderTrack = document.querySelector('.slider-track');
    if (!sliderTrack) return;

    const cards = sliderTrack.querySelectorAll('a');
    const containerRect = document.querySelector('.slider-container').getBoundingClientRect();
    const centerX = containerRect.left + containerRect.width / 2;

    let closestCard = null;
    let minDistance = Infinity;

    cards.forEach(card => {
        const rect = card.getBoundingClientRect();
        const cardCenter = rect.left + rect.width / 2;
        const distance = Math.abs(centerX - cardCenter);

        if (distance < minDistance) {
            minDistance = distance;
            closestCard = card;
        }
    });

    // تحديث الكلاسات فقط إذا تغير الكارت النشط
    if (closestCard && !closestCard.classList.contains('active')) {
        cards.forEach(c => c.classList.remove('active'));
        closestCard.classList.add('active');
    }
}

// تشغيل التحديث مع كل فريم من الأنميشن لضمان النعومة القصوى
function animateSlider() {
    updateActiveCard();
    requestAnimationFrame(animateSlider);
}

// بدء التشغيل عند تحميل الصفحة
window.addEventListener('DOMContentLoaded', () => {
    if (document.querySelector('.slider-track')) {
        requestAnimationFrame(animateSlider);
    }
});

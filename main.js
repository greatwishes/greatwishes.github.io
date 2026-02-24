/* ================= main.js ================= */
/* الحاجات المشتركة لجميع صفحات الموقع */

const menuToggle = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

if (menuToggle && navLinks) {
    // فتح وغلق القائمة
    menuToggle.onclick = (e) => {
        e.stopPropagation();
        navLinks.classList.toggle('active');
    };
    
    // إغلاق القائمة عند الضغط على أي رابط
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.onclick = () => {
            navLinks.classList.remove('active');
        };
    });

    // إغلاق القائمة عند الضغط في أي مكان خارجها
    document.addEventListener('click', (e) => {
        if (!navLinks.contains(e.target) && !menuToggle.contains(e.target)) {
            navLinks.classList.remove('active');
        }
    });
}

// ===== زر تغيير اللغة =====
const langBtn = document.getElementById('lang-btn');

langBtn.addEventListener('click', () => {
  if (currentLang === 'ar') {
    setLanguage('en');
    langBtn.innerHTML = 'AR';
  } else {
    setLanguage('ar');
    langBtn.innerHTML = 'EN';
  }
});

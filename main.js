/* ================= main.js ================= */
/* الحاجات المشتركة لجميع صفحات الموقع */

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

// ===== إدارة اللغة (تغيير الاتجاه + الحفظ بين الصفحات) =====
function applyLangMeta(langCode) {
    document.documentElement.lang = langCode;
    document.documentElement.dir = (langCode === 'ar') ? 'rtl' : 'ltr';
    try { localStorage.setItem('gw_lang', langCode); } catch (e) {}
}

function getSavedLang() {
    try { return localStorage.getItem('gw_lang'); } catch (e) { return null; }
}

const langBtn = document.getElementById('lang-btn');
if (langBtn) {
    langBtn.addEventListener('click', () => {
        if (typeof currentLang === 'undefined' || typeof setLanguage !== 'function') return;
        const next = (currentLang === 'ar') ? 'en' : 'ar';
        setLanguage(next);
        applyLangMeta(next);
        langBtn.innerHTML = (next === 'ar') ? 'EN' : 'AR';
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const saved = getSavedLang();
    if (saved && typeof currentLang !== 'undefined' && saved !== currentLang && typeof setLanguage === 'function') {
        setLanguage(saved);
        applyLangMeta(saved);
        if (langBtn) langBtn.innerHTML = (saved === 'ar') ? 'EN' : 'AR';
    }
});

// script.js - ملف JavaScript الموحد

document.addEventListener('DOMContentLoaded', function() {
    'use strict';

    // ========== 1. القائمة العلوية للجوال ==========
    const menuToggle = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');
    
    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', function() {
            navLinks.classList.toggle('active');
        });

        // إغلاق القائمة عند النقر على رابط
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
            });
        });
    }

    // ========== 2. تهيئة السلايدر (تضاعف العناصر) ==========
    const sliderTrack = document.querySelector('.slider-track');
    if (sliderTrack) {
        // مضاعفة العناصر 3 مرات لضمان السلاسة
        const items = sliderTrack.innerHTML;
        sliderTrack.innerHTML = items + items + items;
    }

    // ========== 3. الدليل التفاعلي ==========
    const steps = document.querySelectorAll('.step-item');
    const dots = document.querySelectorAll('.dot');
    const stepImg = document.getElementById('current-step-img');
    const prevBtn = document.getElementById('prevStep');
    const nextBtn = document.getElementById('nextStep');
    
    if (steps.length && nextBtn) {
        let currentStep = 0;

        const images = [
            "https://raw.githubusercontent.com/greatwishes/myapp/main/icons/playprotect1.png",
            "https://raw.githubusercontent.com/greatwishes/myapp/main/icons/playprotect5.png",
            "https://raw.githubusercontent.com/greatwishes/myapp/main/icons/checked.png"
        ];

        function goToStep(stepIndex) {
            // إخفاء الخطوة الحالية
            steps[currentStep].classList.remove('visible');
            dots[currentStep].classList.remove('active');
            
            // تحديث إلى الخطوة الجديدة
            currentStep = stepIndex;
            
            // إظهار الخطوة الجديدة
            steps[currentStep].classList.add('visible');
            dots[currentStep].classList.add('active');
            
            // تحديث الصورة
            if (stepImg && images[currentStep]) {
                stepImg.src = images[currentStep];
            }
            
            // تحديث الأزرار
            updateButtons();
        }

        function updateButtons() {
            if (prevBtn) {
                prevBtn.disabled = currentStep === 0;
            }
            if (nextBtn) {
                nextBtn.textContent = currentStep === steps.length - 1 ? 'إنهاء' : 'التالي';
            }
        }

        nextBtn.addEventListener('click', function() {
            if (currentStep < steps.length - 1) {
                goToStep(currentStep + 1);
            }
        });

        if (prevBtn) {
            prevBtn.addEventListener('click', function() {
                if (currentStep > 0) {
                    goToStep(currentStep - 1);
                }
            });
        }
    }

    // ========== 4. التمرير السلس للروابط ==========
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === '#') return;
            
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // ========== 5. تحديث الرابط النشط عند التمرير ==========
    const sections = document.querySelectorAll('section[id], header[id]');
    
    function updateActiveNavLink() {
        const scrollPosition = window.scrollY + 100;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionBottom = sectionTop + section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                document.querySelectorAll('.nav-links a').forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }

    window.addEventListener('scroll', updateActiveNavLink);
    updateActiveNavLink();
});

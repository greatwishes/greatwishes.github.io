// script.js - ملف JavaScript الموحد والمطور

document.addEventListener('DOMContentLoaded', function() {
    'use strict';

    // ========== 1. القائمة العلوية للجوال ==========
    const menuToggle = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');
    
    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            // Animating the hamburger icon
            const spans = this.querySelectorAll('span');
            spans.forEach(span => span.classList.toggle('active'));
        });

        // Close menu when clicking on a link
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
    class GuideSteps {
        constructor() {
            this.steps = document.querySelectorAll('.step-item');
            this.dots = document.querySelectorAll('.dot');
            this.stepImg = document.getElementById('current-step-img');
            this.prevBtn = document.getElementById('prevStep');
            this.nextBtn = document.getElementById('nextStep');
            this.currentStep = 0;
            
            this.images = [
                "https://raw.githubusercontent.com/greatwishes/myapp/main/icons/playprotect1.png",
                "https://raw.githubusercontent.com/greatwishes/myapp/main/icons/playprotect5.png",
                "https://raw.githubusercontent.com/greatwishes/myapp/main/icons/checked.png"
            ];
            
            if (!this.steps.length || !this.nextBtn) return;
            
            this.init();
        }

        init() {
            this.nextBtn.addEventListener('click', () => this.next());
            this.prevBtn.addEventListener('click', () => this.prev());
            this.updateButtons();
        }

        next() {
            if (this.currentStep < this.steps.length - 1) {
                this.goToStep(this.currentStep + 1);
            }
        }

        prev() {
            if (this.currentStep > 0) {
                this.goToStep(this.currentStep - 1);
            }
        }

        goToStep(stepIndex) {
            // Remove current classes
            this.steps[this.currentStep].classList.remove('visible');
            this.dots[this.currentStep].classList.remove('active');
            
            // Update to new step
            this.currentStep = stepIndex;
            
            // Add new classes
            this.steps[this.currentStep].classList.add('visible');
            this.dots[this.currentStep].classList.add('active');
            
            // Update image
            if (this.stepImg && this.images[this.currentStep]) {
                this.stepImg.src = this.images[this.currentStep];
                this.stepImg.alt = `دليل التثبيت - الخطوة ${this.currentStep + 1}`;
            }
            
            this.updateButtons();
        }

        updateButtons() {
            if (this.prevBtn) {
                this.prevBtn.disabled = this.currentStep === 0;
            }
            if (this.nextBtn) {
                this.nextBtn.textContent = this.currentStep === this.steps.length - 1 ? 'إنهاء' : 'التالي';
            }
        }
    }

    // Initialize guide
    new GuideSteps();

    // ========== 4. Smooth scrolling for anchor links ==========
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
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

    // ========== 5. Active nav link on scroll ==========
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
    updateActiveNavLink(); // Call initially
});

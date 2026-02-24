/* ================= home-features.js ================= */
/* خاص بالصفحة الرئيسية فقط: السلايدر والدليل */

// --- أولاً: نظام دليل التثبيت التفاعلي ---
const steps = document.querySelectorAll('.step-item');
const progressBar = document.querySelector('.progress-bar');
let currentStep = 0;
let autoPlayInterval;

if (steps.length > 0) {
    const updateGuide = (nextIndex) => {
        steps[currentStep].classList.remove('visible');
        steps[currentStep].classList.add('exit');
        let oldStep = currentStep;

        currentStep = (nextIndex + steps.length) % steps.length;

        setTimeout(() => {
            steps[currentStep].classList.remove('exit');
            steps[currentStep].classList.add('visible');
            if (oldStep !== currentStep) steps[oldStep].classList.remove('exit');
        }, 50);

        if (progressBar) {
            const progressPercent = ((currentStep + 1) / steps.length) * 100;
            progressBar.style.width = `${progressPercent}%`;
        }
    };

    const startAutoPlay = () => { autoPlayInterval = setInterval(() => updateGuide(currentStep + 1), 5000); };
    const resetTimer = () => { clearInterval(autoPlayInterval); startAutoPlay(); };

    document.querySelectorAll('.next-btn').forEach(btn => btn.onclick = () => { updateGuide(currentStep + 1); resetTimer(); });
    document.querySelectorAll('.prev-btn').forEach(btn => btn.onclick = () => { updateGuide(currentStep - 1); resetTimer(); });

    updateGuide(0);
    startAutoPlay();
}

// --- ثانياً: نظام السلايدر الـ 3D المطور ---
const sliderContainer = document.querySelector('.slider-container');
const sliderCards = document.querySelectorAll('.slider-track a');

if (sliderContainer && sliderCards.length > 0) {
    const updateActiveCard = () => {
        const containerRect = sliderContainer.getBoundingClientRect();
        const containerCenterX = containerRect.left + containerRect.width / 2;
        
        sliderCards.forEach((card) => {
            const cardRect = card.getBoundingClientRect();
            const cardCenterX = cardRect.left + cardRect.width / 2;
            const distance = Math.abs(containerCenterX - cardCenterX);
            if (distance < 100) card.classList.add('active');
            else card.classList.remove('active');
        });
        requestAnimationFrame(updateActiveCard);
    };
    requestAnimationFrame(updateActiveCard);
}

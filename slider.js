// نسخ عناصر الشريط لعمل تأثير لا نهائي
const sliderTrack = document.querySelector('.slider-track');
const slides = Array.from(sliderTrack.children);
slides.forEach(slide => {
    const clone = slide.cloneNode(true);
    sliderTrack.appendChild(clone);
});

// إعداد السرعة
let scrollAmount = 0;
const speed = 1; // زيادة الرقم لتسريع الحركة

function animateSlider() {
    scrollAmount += speed;
    if (scrollAmount >= sliderTrack.scrollWidth / 2) {
        scrollAmount = 0;
    }
    sliderTrack.style.transform = `translateX(-${scrollAmount}px)`;
    requestAnimationFrame(animateSlider);
}

animateSlider();

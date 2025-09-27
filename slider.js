const sliderTrack = document.querySelector('.slider-track');
const slides = Array.from(sliderTrack.children);

// نسخ الصور للتكرار
slides.forEach(slide => {
    sliderTrack.appendChild(slide.cloneNode(true));
});

let scrollAmount = 0;
const speed = 1; // تعديل السرعة حسب الحاجة

function animateSlider() {
    scrollAmount += speed;

    // طول الشريط الأصلي
    const originalWidth = sliderTrack.scrollWidth / 2;

    if (scrollAmount >= originalWidth) {
        scrollAmount = 0;
    }

    sliderTrack.style.transform = `translateX(-${scrollAmount}px)`;
    requestAnimationFrame(animateSlider);
}

animateSlider();

const sliderTrack = document.querySelector('.slider-track');
const slides = Array.from(sliderTrack.children);

// تكرار الصور لتجنب الفراغ
slides.forEach(slide => sliderTrack.appendChild(slide.cloneNode(true)));

let scroll = 0;
const speed = 0.5; // تعديل السرعة حسب الرغبة

function animateSlider() {
    scroll += speed;
    if(scroll >= sliderTrack.scrollWidth / 2) scroll = 0; // إعادة التمرير عند نصف الشريط
    sliderTrack.style.transform = `translateX(-${scroll}px)`;
    requestAnimationFrame(animateSlider);
}

animateSlider();

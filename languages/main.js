// ===== دليل التثبيت التفاعلي =====
var steps = document.querySelectorAll('#interactive-guide .step-item');
var currentStep = 0;
var intervalTime = 5000;
var autoPlay;

function showStep(index) {
  steps.forEach(s => s.classList.remove('visible'));
  steps[index].classList.add('visible');
}

function nextStep() {
  currentStep = (currentStep + 1) % steps.length;
  showStep(currentStep);
}

function prevStep() {
  currentStep = (currentStep - 1 + steps.length) % steps.length;
  showStep(currentStep);
}

steps.forEach(step => {
  var nextBtn = step.querySelector('.next-btn');
  var prevBtn = step.querySelector('.prev-btn');
  if (nextBtn) nextBtn.addEventListener('click', () => { 
    clearInterval(autoPlay); 
    nextStep(); 
    autoPlay = setInterval(nextStep, intervalTime); 
  });
  if (prevBtn) prevBtn.addEventListener('click', () => { 
    clearInterval(autoPlay); 
    prevStep(); 
    autoPlay = setInterval(nextStep, intervalTime); 
  });
});

showStep(currentStep);
autoPlay = setInterval(nextStep, intervalTime);

// ===== قائمة الهاتف =====
const menuToggle = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', e => {
  e.stopPropagation();
  navLinks.classList.toggle('active');
});

document.addEventListener('click', e => {
  if (!navLinks.contains(e.target) && navLinks.classList.contains('active')) {
    navLinks.classList.remove('active');
  }
});

navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
  });
});

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

// ===== السلايدر =====
const sliderContainer = document.querySelector('.slider-container');
const sliderTrack = document.querySelector('.slider-track');
let scrollSpeed = 1; // سرعة الحركة
let isDragging = false;
let startX, scrollLeft;

// الحركة الأوتوماتيكية
function autoScroll() {
  if (!isDragging) {
    sliderContainer.scrollLeft += scrollSpeed;
    // إذا وصل للنهاية أو البداية، ارجع
    if (sliderContainer.scrollLeft >= sliderTrack.scrollWidth - sliderContainer.clientWidth || sliderContainer.scrollLeft <= 0) {
      scrollSpeed *= -1; // قلب الاتجاه
    }
  }
}
let scrollInterval = setInterval(autoScroll, 20);

// السحب بالماوس
sliderContainer.addEventListener('mousedown', e => {
  isDragging = true;
  startX = e.pageX - sliderContainer.offsetLeft;
  scrollLeft = sliderContainer.scrollLeft;
  sliderContainer.classList.add('dragging');
});
sliderContainer.addEventListener('mouseleave', () => { isDragging = false; sliderContainer.classList.remove('dragging'); });
sliderContainer.addEventListener('mouseup', () => { isDragging = false; sliderContainer.classList.remove('dragging'); });
sliderContainer.addEventListener('mousemove', e => {
  if (!isDragging) return;
  e.preventDefault();
  const x = e.pageX - sliderContainer.offsetLeft;
  const walk = (x - startX) * 2; // المسافة المقطوعة * عامل تكبير
  sliderContainer.scrollLeft = scrollLeft - walk;
});

// السحب باللمس
sliderContainer.addEventListener('touchstart', e => {
  isDragging = true;
  startX = e.touches[0].pageX - sliderContainer.offsetLeft;
  scrollLeft = sliderContainer.scrollLeft;
});
sliderContainer.addEventListener('touchend', () => { isDragging = false; });
sliderContainer.addEventListener('touchmove', e => {
  if (!isDragging) return;
  const x = e.touches[0].pageX - sliderContainer.offsetLeft;
  const walk = (x - startX) * 2;
  sliderContainer.scrollLeft = scrollLeft - walk;
});

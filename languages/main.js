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

// فتح / غلق القائمة عند الضغط على زر القائمة
menuToggle.addEventListener('click', e => {
  e.stopPropagation();
  navLinks.classList.toggle('active');
});

// إغلاق القائمة عند الضغط خارجها
document.addEventListener('click', e => {
  if (!navLinks.contains(e.target) && navLinks.classList.contains('active')) {
    navLinks.classList.remove('active');
  }
});

// إغلاق القائمة عند الضغط على أي رابط داخلها
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

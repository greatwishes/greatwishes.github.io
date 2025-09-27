const steps = document.querySelectorAll('#interactive-guide .step-item');
let currentStep = 0;

// اظهار الخطوة الأولى
steps[currentStep].classList.add('visible');

// الانتقال للخطوة التالية عند الضغط على الزر
steps.forEach((step, index) => {
  const btn = step.querySelector('.next-btn');
  if(btn){
    btn.addEventListener('click', () => {
      step.classList.remove('visible');
      step.classList.add('exit-left');
      currentStep++;
      if(currentStep < steps.length){
        steps[currentStep].classList.add('visible');
      }
    });
  }
});

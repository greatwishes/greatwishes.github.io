// fade.js
function fadeOutInAll(callback) {
  const textElements = document.querySelectorAll('h1, h2, h3, h4, h5, h6, p, span, a, button, li');
  
  textElements.forEach(el => el.classList.add('fade-effect', 'fade-out'));

  setTimeout(() => {
    callback(); // هنا تغير اللغة
    textElements.forEach(el => el.classList.remove('fade-out'));
  }, 400); // مدة الفادي
}

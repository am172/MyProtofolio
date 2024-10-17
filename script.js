function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
const toggleButton = document.getElementById('theme-toggle');
const body = document.body;
const themeIcon = document.getElementById('theme-icon');

toggleButton.addEventListener('click', () => {
  body.classList.toggle('dark-mode');

  // تغيير الأيقونة بناءً على الحالة
  if (body.classList.contains('dark-mode')) {

    themeIcon.src = './assets/lamp-icon.png'; // أيقونة المصباح لوضع النهار

    
  } else {
    themeIcon.src = './assets/night-icon.png'; // أيقونة الشمس لوضع الليل
  }
});

document.addEventListener('DOMContentLoaded', function() {
  const navButton = document.querySelector('.navbutton');
  const menu = document.getElementById('navigation');
  let isMenuOpen = false;

  // Функция для открытия/закрытия меню
  function toggleMenu() {
    if (isMenuOpen) {
      // Анимация закрытия
      menu.style.transform = 'translateX(-100%)';
      setTimeout(() => {
        menu.style.display = 'none';
      }, 300); // Совпадает с длительностью transition
    } else {
      // Анимация открытия
      menu.style.display = 'block';
      setTimeout(() => {
        menu.style.transform = 'translateX(0)';
      }, 10);
    }
    
    navButton.classList.toggle('moved');
    isMenuOpen = !isMenuOpen;
  }

  // Обработчик клика по кнопке
  navButton.addEventListener('click', function(e) {
    e.stopPropagation();
    toggleMenu();
  });

  // Закрытие меню при клике вне его области
  document.addEventListener('click', function() {
    if (isMenuOpen) {
      toggleMenu();
    }
  });

  // Предотвращаем закрытие при клике внутри меню
  menu.addEventListener('click', function(e) {
    e.stopPropagation();
  });

  // Инициализация - меню закрыто
  menu.style.display = 'none';
});
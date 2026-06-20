const menuButton = document.querySelector('.menu-button');
const navigation = document.querySelector('.site-nav');

if (menuButton && navigation) {
  const setMenuState = (isOpen) => {
    navigation.classList.toggle('open', isOpen);
    menuButton.setAttribute('aria-expanded', String(isOpen));
    menuButton.textContent = isOpen ? 'Close' : 'Menu';
  };

  menuButton.addEventListener('click', () => {
    setMenuState(!navigation.classList.contains('open'));
  });

  navigation.addEventListener('click', (event) => {
    if (event.target.closest('a')) setMenuState(false);
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && navigation.classList.contains('open')) {
      setMenuState(false);
      menuButton.focus();
    }
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 820) setMenuState(false);
  });
}

document.querySelectorAll('[data-year]').forEach((node) => {
  node.textContent = new Date().getFullYear();
});

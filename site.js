/* Progressive enhancement: all navigation links remain visible without JavaScript. */
(() => {
  const button = document.querySelector('.nav-toggle');
  const navigation = document.getElementById('primary-navigation');
  if (!button || !navigation) return;

  function setOpen(open) {
    button.setAttribute('aria-expanded', String(open));
    navigation.classList.toggle('is-open', open);
  }

  button.hidden = false;
  document.documentElement.classList.add('nav-enhanced');
  button.addEventListener('click', () => {
    setOpen(button.getAttribute('aria-expanded') !== 'true');
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && button.getAttribute('aria-expanded') === 'true') {
      setOpen(false);
      button.focus();
    }
  });
  navigation.addEventListener('click', (event) => {
    if (event.target.closest('a')) setOpen(false);
  });
  window.matchMedia('(min-width: 641px)').addEventListener('change', () => setOpen(false));
})();

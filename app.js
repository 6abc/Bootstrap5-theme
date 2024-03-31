(() => {
  'use strict';

  const storedTheme = localStorage.getItem('theme');

  const getPreferredTheme = () => {
    if (storedTheme) {
      return storedTheme;
    }

    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  };

  const setTheme = theme => {
    if (theme === 'auto' && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      document.documentElement.setAttribute('data-bs-theme', 'dark');
    } else {
      document.documentElement.setAttribute('data-bs-theme', theme);
    }
  };

  const showActiveTheme = theme => {
    // Update the active theme icon
    const activeThemeIcon = document.querySelector('.theme-icon-active');
    const btnToActive = document.querySelector(`[data-bs-theme-value="${theme}"]`);
    const iconOfActiveBtn = btnToActive.querySelector('i').dataset.themeIcon;

    // Remove active class from all buttons
    document.querySelectorAll('[data-bs-theme-value]').forEach(element => {
      element.classList.remove('active');
    });

    // Add active class to the clicked button
    btnToActive.classList.add('active');

    // Update the active theme icon
    activeThemeIcon.classList.remove(activeThemeIcon.dataset.iconActive);
    activeThemeIcon.classList.add(iconOfActiveBtn);
    activeThemeIcon.dataset.iconActive = iconOfActiveBtn;
  };

  // Listen for changes in color scheme preference
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
    if (storedTheme !== 'light' || storedTheme !== 'dark') {
      setTheme(getPreferredTheme());
    }
  });

  window.addEventListener('DOMContentLoaded', () => {
    // Set the theme based on preference
    setTheme(getPreferredTheme());

    // Show active theme icon
    showActiveTheme(getPreferredTheme());

    // Toggle theme when a button is clicked
    document.querySelectorAll('[data-bs-theme-value]').forEach(toggle => {
      toggle.addEventListener('click', () => {
        const theme = toggle.getAttribute('data-bs-theme-value');
        localStorage.setItem('theme', theme);
        setTheme(theme);
        showActiveTheme(theme, true);
      });
    });
  });
})();

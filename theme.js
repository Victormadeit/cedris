// Universal theme toggle functionality for Cedris website
// This script handles dark/light theme switching and persistence

// Apply theme IMMEDIATELY to prevent flash
(function() {
  const savedTheme = localStorage.getItem('theme') || 'dark';
  document.documentElement.setAttribute('data-theme', savedTheme);
})();

(function() {
  'use strict';
  
  // Initialize theme on page load
  function initTheme() {
    const body = document.body;
    const savedTheme = localStorage.getItem('theme') || 'dark';
    
    // Apply saved theme to body as well
    body.setAttribute('data-theme', savedTheme);
    document.documentElement.setAttribute('data-theme', savedTheme);
    // Remove initial no-transition class after first frame
    requestAnimationFrame(() => document.documentElement.classList.remove('theme-init'));
    
    // Update toggle button if it exists
    const themeToggle = document.getElementById('themeToggle');
    if (themeToggle) {
      updateThemeToggle(savedTheme, themeToggle);
      
      // Add click event listener
      themeToggle.addEventListener('click', function() {
        const currentTheme = body.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        body.setAttribute('data-theme', newTheme);
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateThemeToggle(newTheme, themeToggle);
        
        console.log(`Theme switched to: ${newTheme}`);
      });
    }
  }
  
  function updateThemeToggle(theme, toggleButton) {
    const themeIcon = toggleButton.querySelector('.theme-icon');
    const themeText = toggleButton.querySelector('.theme-text');
    
    if (theme === 'light') {
      themeIcon.textContent = '☀️';
      themeText.textContent = 'Light';
    } else {
      themeIcon.textContent = '🌙';
      themeText.textContent = 'Dark';
    }
  }
  
  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initTheme);
  } else {
    initTheme();
  }
})();

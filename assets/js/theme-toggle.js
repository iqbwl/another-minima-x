// Main theme toggle functionality
(function () {
    const THEME_KEY = 'theme-preference';

    // Get initial theme
    function getInitialTheme() {
        const savedTheme = localStorage.getItem(THEME_KEY);
        if (savedTheme) {
            return savedTheme;
        }
        // Default to light mode
        return 'light';
    }

    // Apply theme to button
    function updateButton(theme) {
        const themeToggle = document.getElementById('theme-toggle');
        if (themeToggle) {
            if (theme === 'dark') {
                themeToggle.classList.add('dark-mode');
            } else {
                themeToggle.classList.remove('dark-mode');
            }
        }
    }

    // Apply theme
    function applyTheme(theme) {
        if (theme === 'dark') {
            document.documentElement.setAttribute('data-theme', 'dark');
        } else {
            document.documentElement.removeAttribute('data-theme');
        }
        updateButton(theme);
    }

    // Toggle theme
    function toggleTheme() {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

        applyTheme(newTheme);
        localStorage.setItem(THEME_KEY, newTheme);
    }

    // Initialize when DOM is ready
    function init() {
        const initialTheme = getInitialTheme();
        updateButton(initialTheme);

        const themeToggle = document.getElementById('theme-toggle');
        if (themeToggle) {
            themeToggle.addEventListener('click', toggleTheme);
        }
    }

    // Run init when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();

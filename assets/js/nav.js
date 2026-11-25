// Accessible navigation: mobile menu drawer & dropdowns
(function () {
  function initNav() {
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('site-nav-menu');
    const header = document.querySelector('.site-header');
    const dropdowns = Array.from(document.querySelectorAll('.site-nav .dropdown'));

    function closeDropdown(dropdown) {
      dropdown.classList.remove('is-open');
      const btn = dropdown.querySelector('.dropbtn');
      if (btn) btn.setAttribute('aria-expanded', 'false');
    }

    function closeAllDropdowns(except) {
      dropdowns.forEach((dd) => {
        if (dd !== except) closeDropdown(dd);
      });
    }

    function setMobileMenu(open) {
      if (!navToggle || !navMenu) return;
      navMenu.classList.toggle('is-open', open);
      navToggle.setAttribute('aria-expanded', String(open));
      navToggle.setAttribute('aria-label', open ? 'Close navigation menu' : 'Open navigation menu');
      if (!open) {
        closeAllDropdowns();
      }
    }

    if (navToggle && navMenu) {
      navToggle.addEventListener('click', () => {
        const isOpen = navMenu.classList.contains('is-open');
        setMobileMenu(!isOpen);
      });

      // Close mobile menu when a link inside it is clicked
      navMenu.querySelectorAll('a[href]').forEach((link) => {
        link.addEventListener('click', () => {
          setMobileMenu(false);
        });
      });
    }

    // Dropdown click/tap toggle
    dropdowns.forEach((dropdown) => {
      const btn = dropdown.querySelector('.dropbtn');
      if (!btn) return;

      btn.addEventListener('click', (event) => {
        event.stopPropagation();
        const willOpen = !dropdown.classList.contains('is-open');
        closeAllDropdowns(dropdown);
        dropdown.classList.toggle('is-open', willOpen);
        btn.setAttribute('aria-expanded', String(willOpen));
      });
    });

    // Close on Escape key and restore focus to trigger
    document.addEventListener('keydown', (event) => {
      if (event.key !== 'Escape') return;

      const openDropdown = dropdowns.find((dd) => dd.classList.contains('is-open'));
      if (openDropdown) {
        const btn = openDropdown.querySelector('.dropbtn');
        closeDropdown(openDropdown);
        if (btn) btn.focus();
        return;
      }

      if (navMenu && navMenu.classList.contains('is-open')) {
        setMobileMenu(false);
        if (navToggle) navToggle.focus();
      }
    });

    // Close on outside click
    document.addEventListener('click', (event) => {
      if (header && !header.contains(event.target)) {
        closeAllDropdowns();
        if (navMenu && navMenu.classList.contains('is-open')) {
          setMobileMenu(false);
        }
      }
    });

    // Reset mobile menu state when resizing to desktop
    const desktopMedia = window.matchMedia('(min-width: 768px)');
    const handleMediaChange = (e) => {
      if (e.matches) {
        setMobileMenu(false);
      }
    };
    if (desktopMedia.addEventListener) {
      desktopMedia.addEventListener('change', handleMediaChange);
    } else if (desktopMedia.addListener) {
      desktopMedia.addListener(handleMediaChange);
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initNav);
  } else {
    initNav();
  }
})();

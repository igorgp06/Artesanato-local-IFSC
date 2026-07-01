document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.querySelector('.menu-toggle');
    const navbarLinks = document.querySelector('.navbar-links');
    const overlay = document.querySelector('.menu-overlay');
    const navLinks = document.querySelectorAll('.nav-link');

    if (!toggleButton || !navbarLinks || !overlay) {
        return;
    }

    const toggleIcon = toggleButton.querySelector('i');

    function openMenu() {
        navbarLinks.classList.add('active');
        overlay.classList.add('active');
        document.body.classList.add('menu-open');
        toggleButton.setAttribute('aria-expanded', 'true');
        toggleButton.setAttribute('aria-label', 'Fechar menu');

        if (toggleIcon) {
            toggleIcon.classList.remove('bi-list');
            toggleIcon.classList.add('bi-x-lg');
        }
    }

    function closeMenu() {
        navbarLinks.classList.remove('active');
        overlay.classList.remove('active');
        document.body.classList.remove('menu-open');
        toggleButton.setAttribute('aria-expanded', 'false');
        toggleButton.setAttribute('aria-label', 'Abrir menu');

        if (toggleIcon) {
            toggleIcon.classList.remove('bi-x-lg');
            toggleIcon.classList.add('bi-list');
        }
    }

    function toggleMenu() {
        const menuIsOpen = navbarLinks.classList.contains('active');
        menuIsOpen ? closeMenu() : openMenu();
    }

    function setActiveLink() {
        const currentPage = window.location.pathname.split('/').pop() || 'index.html';

        navLinks.forEach((link) => {
            const linkPage = link.getAttribute('href').split('/').pop();
            link.classList.toggle('active', linkPage === currentPage);
        });
    }

    toggleButton.addEventListener('click', toggleMenu);
    overlay.addEventListener('click', closeMenu);

    navLinks.forEach((link) => {
        link.addEventListener('click', closeMenu);
    });

    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            closeMenu();
        }
    });

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            closeMenu();
        }
    });

    setActiveLink();
});

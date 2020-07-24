(function (window) {
    'use-strict';

    const slotLandingContainer = document.querySelector('[data-slot-landing]');
    const mobileMenu = document.querySelector('[data-mobile-menu]');
    const navElement = document.querySelector('[data-main-nav]');
    const buttonScrollUp = document.querySelector('[data-scroll-up]');
    const ButtonScrollDown = document.querySelector('[data-scroll-down]');
    let menuItemSize;
    let navElementSize;
    let currentMenuItem = 0;

    function toggleMobileMenu() {
        slotLandingContainer.classList.toggle('mobile-menu-open');
    }

    function calculateElementsSize() {
        console.log('resized');
    }

    function navScroll(e) {
        
    }

    mobileMenu.addEventListener('click', toggleMobileMenu);
    buttonScrollUp.addEventListener('click', navScroll);
    ButtonScrollDown.addEventListener('onmousedown', navScroll);
    window.addEventListener('resize', calculateElementsSize)
})(window);
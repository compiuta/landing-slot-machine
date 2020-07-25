(function (window) {
    'use-strict';

    const slotLandingContainer = document.querySelector('[data-slot-landing]');
    const mobileMenu = document.querySelector('[data-mobile-menu]');
    const navElement = document.querySelector('[data-main-nav]');
    const buttonScrollUp = document.querySelector('[data-scroll-up]');
    const buttonScrollDown = document.querySelector('[data-scroll-down]');
    const navModal = document.querySelector('[data-nav-modal]');
    const slotItems = [
        'diamond-active',
        'seven-active',
        'triple-bar-active',
        'double-bar-active',
        'single-bar-active',
        'cherry-active'
    ];
    const numberOfMenuItems = 6;
    let navElementSize;
    let menuItemSize;
    let currentMenuItem = 0;

    function toggleMobileMenu() {
        slotLandingContainer.classList.toggle('mobile-menu-open');
    }

    function calculateElementsSize() {
        navElementSize = navElement.offsetHeight;
        menuItemSize = navElementSize / numberOfMenuItems;
    }

    function resizeElements() {
        calculateElementsSize();
        navElement.style.top = `-${currentMenuItem * menuItemSize}px`;
    }

    function toggleSliderButtons() {
        if (currentMenuItem === 0) {
            buttonScrollUp.classList.add('disable-button');
        } else {
            buttonScrollUp.classList.remove('disable-button');
        }

        if (currentMenuItem === (numberOfMenuItems - 1)) {
            buttonScrollDown.classList.add('disable-button');
        } else {
            buttonScrollDown.classList.remove('disable-button');
        }
    }

    function toggleCurrentMenuItem() {
        navElement.classList.toggle(slotItems[currentMenuItem]);
        navModal.classList.toggle(slotItems[currentMenuItem]);
    }

    function navScroll(e) {
        const clickedButton = e.currentTarget;

        toggleCurrentMenuItem();

        if (clickedButton.classList.contains('scroll-button-down')) {
            currentMenuItem += 1;
        } else {
            currentMenuItem -= 1;
        }

        toggleCurrentMenuItem();
        toggleSliderButtons();
        navElement.style.top = `-${currentMenuItem * menuItemSize}px`;
    }

    mobileMenu.addEventListener('click', toggleMobileMenu);
    buttonScrollUp.addEventListener('click', navScroll);
    buttonScrollDown.addEventListener('click', navScroll);
    window.addEventListener('resize', resizeElements);

    calculateElementsSize();
    toggleSliderButtons();
})(window);
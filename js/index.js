<<<<<<< HEAD
const burger = document.getElementById('burger');
const sideMenu = document.getElementById('sideMenu');
const overlay = document.getElementById('overlay');


burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    const isOpen = sideMenu.classList.toggle('active');
    overlay.classList.toggle('active');
    burger.setAttribute('aria-expanded', isOpen);
});

overlay.addEventListener('click', () => {
    burger.classList.remove('active');
    sideMenu.classList.remove('active');
    overlay.classList.remove('active');
    burger.setAttribute('aria-expanded', 'false');

});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && sideMenu.classList.contains('active')) {
        burger.classList.remove('active');
        sideMenu.classList.remove('active');
        overlay.classList.remove('active');
        burger.setAttribute('aria-expanded', 'false');
        burger.blur();
    }
});


const scrollToTopBtn = document.getElementById('scrollToTopBtn');

window.addEventListener('scroll', function () {

    if (window.scrollY > 300) {
        scrollToTopBtn.classList.add('visible');
    } else {
        scrollToTopBtn.classList.remove('visible');
    }


    let scrollPoint = 350;

    if (window.innerWidth <= 576) {
        scrollPoint = 150;
    } else if (window.innerWidth <= 1023) {
        scrollPoint = 100;
    }


    if (window.scrollY > scrollPoint) {
        document.body.classList.add('scrolled');
    } else {
        document.body.classList.remove('scrolled');
    }
});

scrollToTopBtn.addEventListener('click', function () {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

window.addEventListener('load', function () {
    const preloader = document.getElementById('preloader');
    if (preloader) {
        preloader.classList.add('preloader--hidden');
    }
});
=======
const burger = document.getElementById('burger');
const sideMenu = document.getElementById('sideMenu');
const overlay = document.getElementById('overlay');


burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    const isOpen = sideMenu.classList.toggle('active');
    overlay.classList.toggle('active');
    burger.setAttribute('aria-expanded', isOpen);
});

overlay.addEventListener('click', () => {
    burger.classList.remove('active');
    sideMenu.classList.remove('active');
    overlay.classList.remove('active');
    burger.setAttribute('aria-expanded', 'false');

});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && sideMenu.classList.contains('active')) {
        burger.classList.remove('active');
        sideMenu.classList.remove('active');
        overlay.classList.remove('active');
        burger.setAttribute('aria-expanded', 'false');
        burger.blur();
    }
});


const scrollToTopBtn = document.getElementById('scrollToTopBtn');

window.addEventListener('scroll', function () {

    if (window.scrollY > 300) {
        scrollToTopBtn.classList.add('visible');
    } else {
        scrollToTopBtn.classList.remove('visible');
    }


    let scrollPoint = 350;

    if (window.innerWidth <= 576) {
        scrollPoint = 150;
    } else if (window.innerWidth <= 1023) {
        scrollPoint = 100;
    }


    if (window.scrollY > scrollPoint) {
        document.body.classList.add('scrolled');
    } else {
        document.body.classList.remove('scrolled');
    }
});

scrollToTopBtn.addEventListener('click', function () {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

window.addEventListener('load', function () {
    const preloader = document.getElementById('preloader');
    if (preloader) {
        preloader.classList.add('preloader--hidden');
    }
});
>>>>>>> 9a947a4187919816fe3d22ffb219c04f3c8bafb6

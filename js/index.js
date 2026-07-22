import { studyOrganizationsData } from './study-data.js';
import { supportOrganizationsData } from './support-data.js';
import { helpOrganizationsData } from './help-data.js';

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

function openModal(data) {
    const modalEl = document.getElementById('modal');
    if (!modalEl) return;

    const titleEl = document.getElementById('modalTitle');
    const fullnameEl = document.getElementById('modalFullname');
    const infoEl = document.getElementById('modalInfo');
    const professionsEl = document.getElementById('modalProfessions');
    const linkEl = document.getElementById('modalLink');
    const socialEl = document.getElementById('modalSocial');
    const metroEl = document.getElementById('modalMetro');

    if (titleEl) titleEl.textContent = data.title;
    if (fullnameEl) fullnameEl.textContent = data.fullname;
    if (infoEl) infoEl.innerHTML = data.info;
    if (professionsEl) professionsEl.innerHTML = data.professions;
    if (linkEl) linkEl.href = data.link;
    if (socialEl) socialEl.innerHTML = data.social;
    if (metroEl) metroEl.innerHTML = data.metro;

    modalEl.classList.add('modal--active');

    // Блокируем скролл body
    const scrollY = window.scrollY;
    document.body.style.position = 'fixed';
    document.body.style.top = `-${scrollY}px`;
    document.body.style.width = '100%';
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    const modalEl = document.getElementById('modal');
    if (modalEl) {
        modalEl.classList.remove('modal--active');
    }

    // Восстанавливаем скролл body
    const scrollY = document.body.style.top;
    document.body.style.position = '';
    document.body.style.top = '';
    document.body.style.width = '';
    document.body.style.overflow = '';
    window.scrollTo(0, parseInt(scrollY || '0') * -1);
}

// Крестик
const modalCloseBtn = document.getElementById('modalClose');
if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', closeModal);
}

// Оверлей
const modalOverlayEl = document.getElementById('modalOverlay');
if (modalOverlayEl) {
    modalOverlayEl.addEventListener('click', closeModal);
}

// Escape
document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && document.getElementById('modal')?.classList.contains('modal--active')) {
        closeModal();
    }
});

let currentData;
if (window.location.pathname.includes('study')) {
    currentData = studyOrganizationsData;
} else if (window.location.pathname.includes('support')) {
    currentData = supportOrganizationsData;
} else if (window.location.pathname.includes('help')) {
    currentData = helpOrganizationsData;
}

document.querySelectorAll('.info-card').forEach(card => {
    card.addEventListener('click', function () {
        const titleElement = card.querySelector('.info-title');
        if (!titleElement) return;

        const cardTitle = titleElement.textContent.trim();
        const data = currentData[cardTitle];

        if (data) {
            openModal(data);
        }
    });
});

// SimpleBar — если используется
const modalContent = document.getElementById('modalContent');
if (modalContent && typeof SimpleBar !== 'undefined') {
    new SimpleBar(modalContent);
}
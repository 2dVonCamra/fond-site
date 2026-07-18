import { organizationsData } from './data.js';

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



// Функция открытия модального окна
function openModal(data) {
    document.getElementById('modalTitle').textContent = data.title;
    document.getElementById('modalFullname').textContent = data.fullname;
    document.getElementById('modalInfo').innerHTML = data.info;
    document.getElementById('modalProfessions').innerHTML = data.professions;
    document.getElementById('modalLink').href = data.link;
    document.getElementById('modalSocial').innerHTML = data.social;
    document.getElementById('modalMetro').innerHTML = data.metro;
    document.getElementById('modal').classList.add('modal--active');
    document.body.style.overflow = 'hidden';
}

// Закрытие
const modalCloseBtn = document.getElementById('modalClose');
if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', closeModal);
}
document.getElementById('modalOverlay').addEventListener('click', closeModal);
document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeModal();
});

function closeModal() {
    document.getElementById('modal').classList.remove('modal--active');
    document.body.style.overflow = '';
}

// Вешаем обработчик на все карточки
document.querySelectorAll('.info-card').forEach(card => {
    card.addEventListener('click', function () {
        const titleElement = card.querySelector('.info-title');
        console.log('Найденный элемент заголовка:', titleElement);

        if (!titleElement) {
            console.log('ОШИБКА: Элемент .info-title не найден внутри карточки!');
            return;
        }

        const cardTitle = titleElement.textContent.trim();
        console.log('Текст заголовка после trim():', cardTitle);
        console.log('Все ключи в объекте:', Object.keys(organizationsData));
        console.log('Ищем ключ:', cardTitle);

        const data = organizationsData[cardTitle];
        console.log('Найденные данные:', data);

        if (data) {
            openModal(data);
        } else {
            console.log('ОШИБКА: Данные для этого ключа не найдены!');
        }
    });
});
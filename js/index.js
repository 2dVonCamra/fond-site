
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

const organizationsData = {
    'Морская техническая академия': {
        title: 'Морская техническая академия имени адмирала Д.Н. Сенявина',
        fullname: 'Полное наименование: Санкт-Петербургское государственное автономное профессиональное образовательное учреждение "Морская техническая академия имени адмирала Д.Н. Сенявина" (СПб МТА им. адмирала Д.Н. Сенявина)',
        info: `
            <p><strong>Адрес:</strong> 198260, Санкт-Петербург, проспект Народного Ополчения, дом 189, корпус 1, литера А, Б</p>
            <p><strong>Телефон:</strong> <a href="tel:+78126208708">(812) 620-87-08</a></p>
            <p><strong>Электронная почта:</strong> info.spbmta@obr.gov.spb.ru</p>
            <p><strong>Режим работы:</strong> Пн-Пт 7.30-18.00</p>
        `,
        professions: `
            <h3>Доступные профессии:</h3>
            <p>Печник</p>
            <p><strong>Дополнительный адрес:</strong> 198261, Санкт-Петербург, улица Стойкости, дом 36, корпус 2</p><p><strong>Телефон:</strong> <a href="tel:+78127558377">(812) 755-83-77</a></p>
        `,
        link: 'https://spbmta.ru/',
        social: '<a href="#">ВКонтакте</a> <a href="#">MAX</a>',
        metro: '<p><span class="card__metro-line card__metro-line--red"></span> м. пр. Ветеранов</p>'
    },
    'Лицей сервиса и индустриальных тех.': {
        title: 'Лицей сервиса и индустриальных технологий',
        fullname: 'Полное наименование: Санкт-Петербургское государственное бюджетное профессиональное образовательное учреждение «Лицей сервиса и индустриальных технологий» (СПб ГБПОУ ЛСИТ)',
        info: `
         <p><strong>Адрес:</strong> 195267, Санкт-Петербург, ул. Ушинского, д. 16</p>
            <p><strong>Телефон:</strong> <a href="tel:+78125317070">(812) 531-70-70</a></p>
            <p><strong>Электронная почта:</strong> info@lsit.ru</p>
            <p><strong>Режим работы:</strong> Пн-Пт 8.00-18.00</p>
        `,
        professions: `
            <h3>Доступные профессии:</h3>
            <p>Повар</p>
            <p>Изготовитель художественных изделий из кожи</p>
            <p>Столяр</p>
            <p>Слесарь-Ремонтник</p>
            <p> Горничная</p>
            <p>Швея</p>
            <p><strong>Дополнительный адрес:</strong>195269, город Санкт-Петербург, улица Учительская, дом 21, лит. А.</p><p><strong>Телефон:</strong> <a href="tel:+78122463218">(812)246-32-18</a></p>
            <p><strong>Дополнительный адрес:</strong>195297, город Санкт-Петербург, Светлановский проспект, дом 111, корпус 2, лит. А.</p><p><strong>Телефон:</strong> <a href="tel:+78122463214">(812)246-32-14</a></p>
        `,
        link: 'https://lsit.ru/',
        social: '<a href="#">ВКонтакте</a>',
        metro: '<p><span class="card__metro-line card__metro-line--red"></span> м. Гражданский проспект</p>'
    },
    'Колледж метростроя': {
    title: 'Колледж метростроя',
    fullname: 'Санкт-Петербургское государственное бюджетное профессиональное образовательное учреждение "Колледж метростроя"',
    info: `
        <p><strong>Адрес:</strong> 195276, г. Санкт-Петербург, ул. Демьяна Бедного, д. 21, л. А</p>
        <p><strong>Телефон:</strong> <a href="tel:+78125581228">(812) 558-12-28</a></p>
        <p><strong>Электронная почта:</strong> kolm@obr.gov.spb.ru</p>
        <p><strong>Режим работы:</strong> Пн-Пт 9.00-17.00</p>
       
    `,
    professions: `
        <h3>Доступные профессии:</h3>
        <p>Слесарь по ремонту автомобилей</p>
         <p><strong>Дополнительный адрес:</strong> 194352, Санкт-Петербург, Придорожная аллея д.7 лит. А.</p>
        <p><strong>Телефон:</strong> <a href="tel:+78125175641">(812) 517-56-41</a>, <a href="tel:+78125179393">(812) 517-93-93</a></p>

    `,
    
    link: 'https://www.colm.spb.ru/',
    social: '<a href="#">ВКонтакте</a>',
    metro: '<p><span class="card__metro-line card__metro-line--red"></span> м. Гражданский пр.</p><p><span class="card__metro-line card__metro-line--blue"></span> м. пр. Просвещения</p>'
},

};

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
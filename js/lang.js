
const langArr = {
    en:{
        'header__home':'Home',
        'header__about':'About me',
        'header__skills':'Skills',
        'header__portfolio':'Portfolio',
        'header__contacts':'Contacts',
        'home__name': 'Denis <br> Novik',
        'home__about':'UX | UI designer <br> 24 years old, Minsk',
        'about__inner-text1':"Hi, I'm Denis – UX/UI designer from Minsk. <br> I'm interested in design and everything connected with it.",
        'about__inner-text2':`I'm studying at courses "Web and mobile design <br> interfaces" in IT-Academy.`,
        'about__inner-text3':'Ready to implement excellent projects<br> with wonderful people.',
        'skills__inner-title':'Skills',
        'skills__inner-text':'I work in such programs as',
        'portfolio__inner-title':'Portfolio',
        'portfolio__inner-text1':'Online fashion store - Homepage',
        'portfolio__inner-text2':'Reebok Store - Concept',
        'portfolio__inner-text3':'Braun Landing Page - Concept',
        'contacts__title':'Contacts',
        'contacts__text':'Want to know more or just chat? <br>You are welcome!',
        'contacts__btnText':'Send message',
        'contacts__footer-text':'Like me on <br>LinkedIn, Instagram, Behance, Dribble',
        'message__button':'Send',
        'message__name':'Your name',
        'message__text':'Message',
    },
    ru:{
        'header__home':'Главная',
        'header__about':'Обо мне',
        'header__skills':'Навыки',
        'header__portfolio':'Портфолио',
        'header__contacts':'Контакты',
        'home__name':'Денис <br> Новик',
        'home__about':'UX | UI дизайнер <br> 24 года, г. Минск',
        'about__inner-text1':'Привет, я Денис – UX/UI дизайнер из Минска.<br>Я интересуюсь дизайном и всем, что с ним связано.',
        'about__inner-text2':'Я учусь на курсах "Веб- и мобильный дизайн интерфейсов" <br>  в IT-Академии.',
        'about__inner-text3':'Готов реализовать отличные проекты<br> с замечательными людьми.',
        'skills__inner-title':'Навыки',
        'skills__inner-text':'Я работаю в таких программах, как',
        'portfolio__inner-title':'Портфолио',
        'portfolio__inner-text1':'Интернет-магазин модной одежды - Главная страница',
        'portfolio__inner-text2':'Концепция магазина Reebok',
        'portfolio__inner-text3':'Концепция страницы Braun',
        'contacts__title':'Контакты',
        'contacts__text':'Хотите узнать больше или просто поболтать? <br>Добро пожаловать!',
        'contacts__btnText':'Отправить сообщение',
        'contacts__footer-text':'Следите за мной в<br>LinkedIn, Instagram, Behance, Dribble',
        'message__button':'Отправить',
        'message__name':'Ваше имя',
        'message__text':'Сообщение',
    },
};

const langEn = document.querySelector('.btnEn');
const langRu = document.querySelector('.btnRu');

langEn.addEventListener('click', setLang.bind(null, 'en'));
langRu.addEventListener('click', setLang.bind(null, 'ru'));

function setLang(lang) {
  if (!langArr.hasOwnProperty(lang)) return;
  if (window.hasOwnProperty('localStorage'))
    window.localStorage.setItem('lang', lang);
  for (let key in langArr[lang]) {
    let elem = document.querySelector('.lng-' + key);
    if (elem) {
      elem.innerHTML = langArr[lang][key];
    }
  }
}
let lang = window.hasOwnProperty('localStorage') || 'en';
setLang(lang);




let popup = document.getElementById('mypopup'),
    popupToggle = document.getElementById('myBtn'),
    popupClose = document.querySelector('.closeMenu'),
    home = document.getElementById('home'),
    about = document.getElementById('about'),
    skills = document.getElementById('skills'),
    portfolio = document.getElementById('portfolio'),
    contacts = document.getElementById('contacts'),
    images__img = document.querySelector('.images__img-phone'),
    header__home = document.querySelector('.lng-header__home'),
    header__about = document.querySelector('.lng-header__about'),
    header__skills = document.querySelector('.lng-header__skills'),
    header__portfolio = document.querySelector('.lng-header__portfolio'),
    header__contacts = document.querySelector('.lng-header__contacts'),
    header__btnMenu = document.querySelector('.header__btnMenu'),
    contacts__btn = document.querySelector('.contacts__btn'),
    message = document.getElementById('message'),
    header = document.querySelector('.header'),
    images__imgMax = document.querySelector('.images__img-max'),
    images__imgPhone = document.querySelector('.images__img-phone'),
    bodY = document.body,
    visibility;

    visibility = function () {
        if(($(window).width() < 480)){
            popup.style.display = "none";
            popupClose.style.display = "none";
            popupToggle.style.display = "block";
            home.style.display = "block";
            about.style.display = "block";
            skills.style.display = "block";
            portfolio.style.display = "block";
            contacts.style.display = "block";
            images__imgMax.style.display = "none";
            images__imgPhone.style.display = "block";
            console.log('max');
        } else {
            popup.style.display = "block";
            popupClose.style.display = "none";
            popupToggle.style.display = "none";
            home.style.display = "block";
            about.style.display = "block";
            skills.style.display = "block";
            portfolio.style.display = "block";
            contacts.style.display = "block";
            images__imgMax.style.display = "block";
            images__imgPhone.style.display = "none";
            console.log('min');
        }
    }

popupToggle.onclick = function () {
    popup.style.display = "block";
    popupClose.style.display = "block";
    home.style.display = "none";
    about.style.display = "none";
    skills.style.display = "none";
    portfolio.style.display = "none";
    contacts.style.display = "none";
    images__img.style.display = "none";
    popupToggle.style.display = "none";
}

popupClose.onclick = function () {
    popup.style.display = "none";
    popupClose.style.display = "none";
    popupToggle.style.display = "block";
    home.style.display = "block";
    about.style.display = "block";
    skills.style.display = "block";
    portfolio.style.display = "block";
    contacts.style.display = "block";
    images__img.style.display = "block";
}


header__home.onclick = visibility;
header__about.onclick = visibility;
header__skills.onclick = visibility;
header__portfolio.onclick = visibility;
header__contacts.onclick = visibility;


contacts__btn.onclick = function () {
    message.style.display = "block";
}


jQuery(function ($) {
    $(document).mouseup(function (e) {
        let message = $("#message");
        if (!message.is(e.target)
            && message.has(e.target).length === 0) {
            message.hide();
        }
    });
});

$(document).on('keyup', function (e) {
    if (e.key == "Escape") {
        $("#message").hide();
    }
});
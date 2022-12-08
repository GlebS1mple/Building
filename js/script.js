
const swiper = new Swiper('.swiper', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    spaceBetween: 30,
    slidesPerView: 3,
    slideToClickedSlide: false,
    watchOverflow: true,
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        650: {
            slidesPerView: 1.5,
        },
        767: {
            slidesPerView: 2,
        },
        992: {
            slidesPerView: 3,
        },
    }
});

let select = function () {
    let choose = document.querySelectorAll(".choose__sub");
    let chooseItem = document.querySelectorAll(".select__item");
    let chooseBlock = document.querySelectorAll(".choose__block");

    choose.forEach(item => { item.addEventListener("click", selectToggle) });
    choose.forEach(item => { item.addEventListener("click", arrowChange) });
    chooseItem.forEach(item => { item.addEventListener("click", selectChoose) });


    function selectToggle() {
        this.parentElement.classList.toggle("choose__active");
    }
    function arrowChange() {
        currentArrow = this.closest(".choose__block").querySelector(".choose__arrow");
        currentArrow.classList.toggle("choose__activearrow");
    }

    function selectChoose() {
        let text = this.innerText;
        let select = this.closest(".choose__block");
        currentText = select.querySelector(".choose__name");
        currentText.innerText = text;
        select.classList.remove("choose__active");
        currentArrow = this.closest(".choose__block").querySelector(".choose__arrow");
        currentArrow.classList.toggle("choose__activearrow");
    }
}
select();

const Burger = document.querySelector(".header__burgimg");
const menu = document.querySelector(".header__list");
const close = document.querySelector(".header__close");
const body = document.querySelector("body");

Burger.addEventListener("click", function () {
    body.classList.toggle("lock");
    menu.classList.toggle("active");
    Burger.classList.toggle("active");
});

close.addEventListener("click", function () {
    body.classList.toggle("lock");
    menu.classList.toggle("active");
    Burger.classList.toggle("active");
});

const spoilerTitles = document.querySelectorAll(".footer__sptitle");

spoilerTitles.forEach(item => { item.addEventListener("click", spoilerToggle) });
spoilerTitles.forEach(item => { item.addEventListener("click", arrowChangeSpoiler) });
function spoilerToggle() {
    this.nextElementSibling.classList.toggle("spoiler__active");
}
function arrowChangeSpoiler() {

    currentArrow = this.querySelector(".footer__arrow");
    currentArrow.classList.toggle("footer__activearrow");
}
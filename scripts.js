let cart_dropdown = document.querySelector(".cart_dropdown");
let cart = document.querySelector(".cart")
const toggle = () => cart_dropdown.classList.toggle('active');
window.addEventListener("click", function (e) {
    if (!cart.contains(e.target)) cart_dropdown.classList.remove('active');
});

// --------------SLICK SLIDER-----------
$(document).ready(function () {
    $('.product-slider').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        prevArrow: "<button type='button' class='slick-prev slick-arrow'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
        nextArrow: "<button type='button' class='slick-next slick-arrow'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
        dots: true
    });
});
//---------------TAB SELECT PRODUCT-SLIDER-------------
const tabs = document.querySelectorAll('[data-tab-target]')
const tabContents = document.querySelectorAll('[data-tab-content]')
tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.tabTarget)
        tabContents.forEach(tabContent => {
            tabContent.classList.remove('active')
        })
        target.classList.add('active')
    })
})

const menutabs = document.querySelectorAll('[menu-tab-target]')
const menutabContents = document.querySelectorAll('[menu-tab-content]')
menutabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.tabTarget)
        menutabContents.forEach(tabContent => {
            tabContent.classList.remove('active')
        })
        target.classList.add('active')
    })
})
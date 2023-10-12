let cart_dropdown = document.querySelector(".cart_dropdown");
let cart = document.querySelector(".cart")
const toggle = () => cart_dropdown.classList.toggle('active');
window.addEventListener("click", function (e) {
    if (!cart.contains(e.target)) cart_dropdown.classList.remove('active');
});

// --------------SLICk SLIDER-----------
$(document).ready(function () {
    $('.product-slider').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        prevArrow: "<button type='button' class='slick-prev slick-arrow'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
        nextArrow: "<button type='button' class='slick-next slick-arrow'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
        dots: true
    });
});
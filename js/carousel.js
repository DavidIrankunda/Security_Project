$(document).ready(function () {
    $('.logo-slider').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
        arrows: true,
        dots: false,
        pauseOnHover: true,
        infinite: true,
        prevArrow: $('.logo-slider-container .left-arrow'),
        nextArrow: $('.logo-slider-container .right-arrow'),
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 5,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 4,
                },
            },
            {
                breakpoint: 520,
                settings: {
                    slidesToShow: 3,
                },
            },
        ],
    });

    // Pause slider on click
    $('.logo-slider .slide').on('click', function () {
        $('.logo-slider').slick('slickPause');
    });

    // Infinite slide-up animation
    $('.logo-slider .slick-track').css({
        transition: 'transform 0.5s ease-in-out',
    });
});

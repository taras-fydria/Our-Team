;(function ($) {
    const slider = $('.ba-team-slider'),
    prevLeft = $('.ba-team-slider__prev'),
    arrowRight = $('.ba-team-slider__next');
slider.slick({
    dots: true,
    infinite: true,
    // arrows: false,
    prevArrow: '.ba-team-slider__prev',
    nextArrow: '.ba-team-slider__next',
});


})(jQuery);
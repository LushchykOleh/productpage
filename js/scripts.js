$(document).ready(function () {
    $('.mobile-menu').on('click', function () {
        $('.navigation .nav-box').slideToggle();
    })
});

$(window).resize(function () {
    const windowWidth = $(window).outerWidth();
    if(windowWidth > 768){
        $('.navigation .nav-box').attr('style');
    }
})
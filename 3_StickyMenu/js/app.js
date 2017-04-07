$(document).ready(function() {
    var nav = $('nav'),
    menu = nav.find('ul', '.menu'),
    topMenu = menu.offset().top;

    $(window).on('scroll', function(){
        scroll = $(this).scrollTop();
        if (scroll > topMenu) {
            menu.addClass('sticky')
        } else {
            menu.removeClass('sticky')
        }
    }).on('resize', function(){
        var dist = $('.menu').offset().top;
        if (menu.hasClass('sticky')) {
            topMenu = $('nav').offset().top;
		} else {
            topMenu  = dist;
        }
    });

});

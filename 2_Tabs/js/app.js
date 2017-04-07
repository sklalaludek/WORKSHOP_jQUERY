$(document).ready(function() {

    var tabs = $('li', '.tabs');
    var divs = $('div', '.tabs');

    tabs.on('click', function() {
        var tab1 = tabs.first(),
            tab2 = tabs.eq(1),
            tab3 = tabs.eq(2),
            tab4 = tabs.last();

        if ($(this).is(tab1)) {
            divs.first().slideToggle();
        } else if ($(this).is(tab2)) {
            divs.eq(1).slideToggle();
        } else if ($(this).is(tab3)) {
            divs.eq(2).slideToggle();
        } else {
            divs.last().slideToggle();
        }
    });

});

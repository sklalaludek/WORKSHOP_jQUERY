$(document).ready(function() {
    var buttons = $('button');

    function animateBar(number, color,  width){
        var myDiv = $('#bar' + number);
        var mySpan = myDiv.find('span');

        mySpan.removeClass();
        mySpan.addClass(color);

        mySpan.animate({
            width: width
        }, 1000);
    }

    buttons.on('click', function(event){
        var myButton = $(this);
        var myNumber = myButton.data('number');
        var myColor = myButton.data('color');
        var myWidth = myButton.data('width');

        animateBar(myNumber, myColor, myWidth);
    });

});

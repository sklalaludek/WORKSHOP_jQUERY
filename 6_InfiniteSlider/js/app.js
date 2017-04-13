$(document).ready(function() {

    function sliderGallery(){
        var prev = $('#prevPicture'),
        next = $('#nextPicture'),
        slides = $('.slider ul'),
        allLi = $('.slider li'),
        imgW = allLi.eq(0).width(),
        index = 0;

        /*clones*/
        var firstEl = allLi.first().clone(true);
        var lastEl = allLi.last().clone(true);
        firstEl.appendTo(slides);
        lastEl.prependTo(slides);


        slides.css('width', imgW*8 + 40);
        slides.css('left', '-400px');

        next.on('click', function(){
            index++;

            slides.animate({left: '-=' + imgW}, 200, function(){
                if(index >= allLi.length) {
                    slides.animate({left : '-400px'});
                    index = 0;
                }
            });
        });
        prev.on('click', function(){
            index--;

            slides.animate({left: '+=' + imgW}, 200, function(){
                if(index < 0) {
                    slides.animate({left : '-2400px'})
                    index = allLi.length-1;
                }
            });
        });
    }

    sliderGallery();

});

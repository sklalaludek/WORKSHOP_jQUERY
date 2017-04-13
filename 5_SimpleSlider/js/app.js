$(document).ready(function() {

    function sliderGallery(){
        var prev = $('#prevPicture'),
        next = $('#nextPicture'),
        slides = $('.slider ul'),
        allLi = $('.slider li'),
        imgW = allLi.eq(0).width(),
        index = 0;

        slides.css('width', imgW*6);

        next.on('click', function(){
            index++;
            if(index > allLi.length) {
                index = 1;
            }
            slides.animate({left: '-=' + imgW}, 200);
        });
        prev.on('click', function(){
            index--;
            if(index < allLi.length - 1) {
                index = 1;
            }
            slides.animate({left: '+=' + imgW}, 200);
        });
    }

    sliderGallery();
});

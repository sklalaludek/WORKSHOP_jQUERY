$(document).ready(function() {

    var questions = $('h1', '.QA');
    var answers = $('p', '.QA');

    questions.on('click', function(){
        $(this).next().slideToggle(600);
        answers.not($(this).next()).slideUp(600);
    });

});

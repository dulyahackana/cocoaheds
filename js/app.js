$( document ).ready(function() {

  $('.menuItem_button, .register').on('click', function () {
    window.open('https://cocoaheadsmsk.timepad.ru/event/258010/');
  });


  $('.mark').click(function(event){
    $('html, body').animate({
        scrollTop: $('section' + $.attr(event.currentTarget, 'to')).offset().top
    }, 500);
  });

  $('.link').click(function(event){
    $('html, body').animate({
        scrollTop: $('.timetableItemWrapper').eq($.attr(event.currentTarget, 'to')).offset().top
    }, 500);
  });

});

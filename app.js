$(document).ready(function(){
  console.log('document is ready');

  $('button').on('click', function (){
    //created thisColor variable to specify color when appending to the DOM
    var thisColor = $(this).attr('data-color');
    $('.container').append('<div class="color-cube  '+ thisColor + '"></div>');
});
});

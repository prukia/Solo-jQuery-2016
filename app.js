var red = 0;
var yellow = 0;
var blue = 0;
var green = 0;
var thisColor = 0;

$(document).ready(function(){
  console.log('document is ready');
  $('button').on('click', function (){
    //created thisColor variable to specify color when appending to the DOM
    var thisColor = $(this).data('color');
    counter();
    $('.container').append('<div class="color-cube  '+ thisColor + '"></div>');
    $('p').children('span#red').text(red);
    $('p').children('span#yellow').text(yellow);
    $('p').children('span#blue').text(blue);
    $('p').children('span#green').text(green);
    console.log($('p').children('span#red').text());

//created function to check for what color button is being clicked
//could use switches too.
    function counter(){
      if(thisColor == 'red'){
        red++;
      }else if (thisColor == 'yellow'){
        yellow++;
      }else if (thisColor == 'blue') {
        blue++;
      }else if (thisColor == 'green') {
        green++;
      }
    }
  });
});

// alert ('clickplay!')

//global-ish variables
var currentColor="";
var playArray =[];
//hide submit buttons on load will appear when start button is pushed
var submits =$('.submit');
submits.hide();

//WORKS DO NOT TOUCH
//Start Button, starts game
$("#start").click(function(event) {

      codeMaker();
      var displayCodeToBreak = $('.codeToBreak');
      for (var i= 0; i < 4; i ++ ) {
         displayCodeToBreak.eq(i).addClass(codeToBreak[i]);
      }
      var firstRound = $('#1');
      firstRound.children().children().addClass('playable');
      var playable =$('.playable');
      playable.click(function(event){
        //console.log( $(this) );
        var clearColors = $(this).removeClass('red yellow orange green blue purple')
        var addColor =$(this).addClass(currentColor);
      });
      var submit1 =$('.playable.submit');
      submit1.show();
      //remove comment when not testing
      displayCodeToBreak.hide();
});

//WORKS DO NOT TOUCH
//give up button works- shows answer
$("#give-up").click(function(event) {
//  alert ("clicked");
  var displayCodeToBreak = $('.codeToBreak')
  displayCodeToBreak.fadeIn('slow');
  var submits =$('.submit');
  submits.hide();
  });


  //click on peg box to choose color
  var box = $('.select');
  box.click(function(event){
    //http://stackoverflow.com/questions/964119/how-to-get-the-class-of-the-clicked-element
    //console.log ($(this).attr("color"));
    currentColor =$(this).attr("color");
    //console.log(currentColor);
  });

  //click on board to add color
  var playable =$('.playable');
  playable.click(function(event){
    //console.log( $(this) );
    var clearColors = $(this).removeClass('red yellow orange green blue purple')
    var addColor =$(this).addClass(currentColor);
  });


  //click submit to submit colors
  //only works on first row right now
  var submit =$('.submit');
  submit.click(function(){
    console.log( $(this)) ;
    var getPlays = $('td div');
    getPlays.removeClass("playable");
    for (z=4; z<8;z++){
    getOne = getPlays.eq(z);
    getColor = getOne.attr('class');
    console.log(getOne.attr('class'));
    playArray.push(getColor);
    }

    console.log(playArray);
    var cccpShow= $('.cccp');
    var cccpValue = testCodeCCCP(playArray);
    cccpShow.text(cccpValue);
    var ccwpShow =$('.ccwp');
    var ccwpValue = testCodeCCWP(playArray);
    ccwpShow.text(ccwpValue);
    if (cccpValue===4){
      alert('you won!')
      var displayCodeToBreak = $('.codeToBreak')
      displayCodeToBreak.fadeIn('slow');
      var submits =$('.submit');
      submits.hide();
    }

  });

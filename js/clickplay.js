//adding something to try to get github pages to update
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
      //remove comment when not testing
      displayCodeToBreak.hide();
      var roundNumber =1;
      playRound(roundNumber);
      checkPlay(roundNumber);

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

  function checkPlay(roundNumber){
  console.log('I am totally in here dude')
  console.log(roundNumber);
  var jQueryArrayColorGrabStart = (roundNumber*4)+(roundNumber-1);
  var jQuearyArrayColorGrabEnd = jQueryArrayColorGrabStart+4;
  var submit =$('.submit');
  submit.click(function(){
    console.log( $(this)) ;
    submit.hide();
    var getPlays = $('td div');
    getPlays.removeClass("playable").unbind('click');
    for (z = jQueryArrayColorGrabStart; z < jQuearyArrayColorGrabEnd; z++){
    getOne = getPlays.eq(z);
    getColor = getOne.attr('class');
    console.log(getOne.attr('class'));
    playArray.push(getColor);
    }
    // var roundClass = '#'+roundNumber;
    // console.log(roundClass)
    console.log(playArray);
    var cccpShow= $('.roundClass.cccp');
    var cccpValue = testCodeCCCP(playArray);
    cccpShow.text(cccpValue).removeClass('roundClass');
    var ccwpShow =$('.roundClass.ccwp');
    var ccwpValue = testCodeCCWP(playArray);
    ccwpShow.text(ccwpValue).removeClass('roundClass');
    if (cccpValue===4){
      alert('you won!')
      var displayCodeToBreak = $('.codeToBreak')
      displayCodeToBreak.fadeIn('slow');
      var submits =$('.submit');
      submits.hide();
      return;
    } else if (roundNumber > 11){
      alert ('you lost');
      var displayCodeToBreak = $('.codeToBreak')
      displayCodeToBreak.fadeIn('slow');
      var submits =$('.submit');
      // submits.hide();
      return;
    } else {
      roundNumber = roundNumber + 1;
      playArray =[];
      playRound(roundNumber);
    }
  });
}

  function playRound(roundNumber) {
    var roundNumber = roundNumber;
    var roundClass = '#'+roundNumber;
    console.log(roundClass);
    var $playableRow = $(roundClass);
    $playableRow.children().addClass('roundClass');
    $playableRow.children().children().addClass('playable');

    var $submitButton =$('.playable.submit');
    $submitButton.removeClass('playable red orange yellow green blue purple');
    var playable =$('.playable');
    playable.click(function(event){
      //console.log( $(this) );
      var clearColors = $(this).removeClass('red yellow orange green blue purple')
      var addColor =$(this).addClass(currentColor);
    });

  $submitButton.show();
  checkPlay(roundNumber);

  }

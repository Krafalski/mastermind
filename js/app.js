//////////////////jQuery/////////////////////////
//global-ish variables
var currentColor="";
var playArray =[];

//hide submit buttons on load will appear when start button is pushed
var submits =$('.submit');
submits.hide();

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
  var addColor =$(this).addClass(currentColor);
});

//click submit to submit colors
//only works on first row right now
var submit =$('.submit');
submit.click(function(){
  console.log( $(this)) ;
  var getPlays = $('td div');
  //console.log(getPlays);
  getPlays.removeClass("playable");
  for (z=4; z<8;z++){
  getOne = getPlays.eq(z);
  getColor = getOne.attr('class');
  //console.log(getColor.length);
  //console.log(getPlays.eq(4).getClass("color"));
  console.log(getOne.attr('class'));
  playArray.push(getColor);
  }

  console.log(playArray);
  //instead of console log- change the text in cccp and ccwp
  var cccpShow= $('.cccp');
  var cccpValue = testCodeCCCP(playArray);
  cccpShow.text(cccpValue);
  //console.log(testCodeCCCP(playArray));
  var ccwpShow =$('.ccwp');
  var ccwpValue = testCodeCCWP(playArray);
  ccwpShow.text(ccwpValue);
  //console.log(testCodeCCWP(playArray));
  //console.log(codeMaker());
  if (cccpValue===4){
    alert('you won!')
    var displayCodeToBreak = $('.codeToBreak')
    displayCodeToBreak.fadeIn('slow');
    var submits =$('.submit');
    submits.hide();
  }

});





//var board = $("['tr '['div']")
//WORKS DO NOT TOUCH
$("#start").click(function(event) {

      //alert("button works!");
      codeMaker();
      var displayCodeToBreak = $('.codeToBreak');
      for (var i= 0; i < 4; i ++ ) {
         displayCodeToBreak.eq(i).addClass(codeToBreak[i]);
      }
      var submits =$('.submit');
      submits.show();
      //remove comment when not testing
      displayCodeToBreak.hide();
});

//WORKS DO NOT TOUCH
$("#give-up").click(function(event) {
//  alert ("clicked");
  var displayCodeToBreak = $('.codeToBreak')
  displayCodeToBreak.fadeIn('slow');
  var submits =$('.submit');
  submits.hide();
  });

// //Build the board - works, except for submit and playable??
// $( document ).ready(function() {
//   // Handler for .load() called.
//   console.log ('loaded!');
// var table = $('table').addClass('doIT');
// var tbody = $('<tbody>');
// //table.append(tbody);
// for (var i=1; i<=10; i++){
// var row =$('<tr>').attr('id',i)
// table.append(row);
// //tbody.append(row);
//   for (var j=0; j<8; j++){
//     if (j===0){
//       var cell = $('<td>').attr('round', i).addClass('cccp')
//       row.append(cell);
//       cell.append('cccp');
//     } else if (j===1){
//       var cell = $('<td>').attr('round', i).addClass('ccwp')
//       row.append(cell);
//       cell.append('ccwp');
//     } else if (j===6){
//       var cell = $('<td>')
//       var div = $('<div>').attr('round', i).addClass('submit');
//       row.append(cell);
//       cell.append(div);
//       div.append('submit');
//     }
//     else if (j===7){
//       var cell = $('<td>');
//       row.append(cell);
//     }
//     else{
// var cell = $('<td>')
// var div = $('<div>').attr('round', i);//.addClass("playable");
// row.append(cell);
// cell.append(div);
// }
// }};})



//allow user to enter name (this is mostly for 2 player game) - add later
//computer chooses an array via codeMaker(), which is currently called in playGame()

//The folowing step should serve as a template for other gameplay...maybe?


// START HERE:
//access a div
//change the color


//display the colors in the divs
//those divs stay hidden
///but go in the computer row

////////GOAL: get divs to change colors//////////
//be able to click in the peg-box on a color and grab the color id
//then when clicking on a div on the board, that div will change colors

//worry about gameplay a little later...

//wondering- what will happen if same box is clicked
//wondering-what should happen if same box is clicked
//would be cool if you could change the color- if that is the case the old id would have to be removed or else multiple ones could be stored? maybe?

////////GOAL: control which row can be played//////////
//neccessary to create the correct array

////////GOAL: get an array of colors from clicks//////////


//player makes play in first row only
//activate first row for first play
//other rows should be unavailable?? somehow?
//each play goes to an array
//once each play is in the array


////////GOAL: update cccp and ccwp divs//////////
//self explainitory, there will be values and they need to go in the divs

////////GOAL: update and display round//////////

////////GOAL: create scoring system and display current score//////////

////////GOAL: create win state to display & end round //////////
//some sort of display message
//freeze the rest of the board
//make sure score is updated/set
//display the computer play

////////GOAL: get next line available for play//////////
//lock out played line from being played, and somehow follow above steps to get


////////GOAL: lose state when out of turns //////////
//display computer playe
//an message of you lost?
//allow player to start again

////////GOAL: start again //////////
//clear previous board and data
//no moves available onl start button working
//go to start gameplay

////////GOAL: change reset to give up //////////
//if give up show computer hand
//no more clicks, no more anything- only start button available

////////GOAL: two player game //////////
//add a second player
//set up some game play that would allow each player to play 1-3 rounds each, tally their scores and then select the winner
//other aspects of gameplay should be the same

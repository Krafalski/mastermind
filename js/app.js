//alert('js app linked!');


//game in console almost works need to fix it//
//need to put things in objects - right now everything is just floating around, mostly working-ish
//except this one thing where the codeToBreak is being changed to nulls????
//need to start writing jQuery//
//need to get jQuery and game logic to play nice//


//an array of colors
var colors = ['red','orange','yellow','green','blue', 'violet'];

//after each play, each play will be added as an array
var playerPlays = [];
var codeToBreak=[];

//for testing
codeToBreak =["orange", "yellow", "orange", "violet"];

//generates the code to break
var codeMaker = function (){
  codeToBreak=[];
  var colorChoice;
  for (var i=0; i<4; i++){
  colorChoice= Math.floor(Math.random()*6);
  //console.log(colorChoice);
  codeToBreak.push(colors[colorChoice]);
  //console.log(colors[colorChoice])
  }
 //console.log(codeToBreak);
 return codeToBreak;
};

//default testCodeBreak - for testing
var testCodeBreak =  ["yellow", "orange", "orange", "blue"];

//tests the testCodeBreak against the codeToBreak
//CCCP -correct color, correct position
//how to test, rund codeMaker(), then testCodeCCP(testCodeBreak)
var testCodeCCCP = function(testCodeBreak){
   var cccp = 0;
   //console.log(testCodeBreak + " this is what is getting passed into the function ")
   var testIt = testCodeBreak;
   //console.log (testIt + " value of testIt")
   for (var q = 0; q < 4; q++){
     //change default testCodeBreak to real testCodeBreak later
    //  console.log (testCodeBreak[q] +
    //  " testCodeBreak "+ codeToBreak[q] + " code to break");
     if ( testIt[q] === codeToBreak[q]){
       cccp=cccp+1;
     }
   }
   //console.log ( cccp + " correct color, correct position");
   return cccp;
}


//****NEW**** CCWP check **** Thanks Dan DiIorio for the assistance!!!!! ****
var testCodeCCWP = function (testCodeBreak){
  var ccwp = 0;
  var checkFor = testCodeBreak;
  var checkAgainst = codeToBreak;
  var removed=[];
//remove CCCPs
 for (var k =0; k< checkFor.length; k++){
   if (checkFor[k]===checkAgainst[k]){
     removed = checkFor.splice(k,1);
     removed = checkAgainst.splice(k,1);
   }
 }
//test ccwp now:
    for (var i=0; i < checkFor.length; i++){
      for (var j=0; j < checkAgainst.length; j++){
        if ((checkFor[i] !== null) && (checkAgainst[j] !== null) && (i !== j)){
          if (checkFor[i] === checkAgainst[j]){
            checkFor[i] = null;
            checkAgainst[j] = null;
            ccwp++;
            console.log(codeToBreak + "is something happening to codeToBreak in here?")
          }
        }
      }
    }
     //console.log (ccwp +" correct color, wrong position");
     return ccwp;
}

//play game
 var playGame = function (){
   var round = 0; //up to 10
   //clear stuffs from previous round
   // generate code only reset at very begining of turn
   codeMaker();
   //for testing:
   console.log(codeToBreak + " starting codeToBreak");
   //check round number - must be less than 10 else game is over.
   while (round < 2 || cccp === 4){
     var cccp=0;
     var ccwp=0;
     // ask for input
   //input version one- type array perfectly - returns it as a string...try version two
   //var testCodeBreak = prompt ("enter your color array") - does not work in console
   //input version two - enter one string at a time for a max of four to test - this will become clearer if I need this when I get to jQuery
   //needs to reset every turn
   var testCodeBreak = [];
   while (testCodeBreak.length < 4){
     var grabInput = "";
     grabInput = prompt("give me a color: red, orange, yellow, green, blue, or violet");
     testCodeBreak.push(grabInput);
   }
   console.log (testCodeBreak)
   //test for win state by running cccp, if cccp = 4 win!
   cccp = testCodeCCCP(testCodeBreak);
   if (cccp === 4){
     return console.log("WIN!");
   }
   console.log (cccp + " pegs are the correct color and correct position");

   //test inputs with cccp and ccwp
   ccwp = testCodeCCWP(testCodeBreak);
   console.log( ccwp + " pegs are the correct color, but wrong positon")
   //increment round number
   round ++;
  }
  console.log ("sorry, you lost " + round);
 }


//nested loop visualization
// var nestedLoop = function() {
//   for (i=0; i<4; i++){
//     for(j=0; j<4; j++){
//       //both start at 0, j loops first, then i increments
//       console.log ("the value of i is "+ i +
//       " the value of j is " + j);
// }}};


//an object for the colors?
//do I even need this?
//nothing is happening to these...
//or does it?

//need to draw out the flow on very very large paper


//////////////////jQuery/////////////////////////

$("#start").click(function(event) {

      alert("button works!");
      playGame();

});


//start game
//allow user to enter name (this is mostly for 2 player game)
//computer chooses an array

//The folowing step should serve as a template for other gameplay...maybe?
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

//wondering how to put the pegs in each positon of the array to be compared
//should it just be left to right -the end?
//that might be the way it has to start

//otherwise create if elses (or switch?) to determine placement of postion in array
//by using splice????
//maybe the array has to be not empty but full of nulls? and replace the position???

//wondering
//make the array 5 long and the 5th thing is a submit of some sort
//check the array for the submit if...submit true then do next stuff???
//pop that submit off before comparison

////////GOAL: get an array to be properly compared to computer play///////
//how to create the comparision between clicks array to computer array

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

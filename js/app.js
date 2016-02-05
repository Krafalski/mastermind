//alert('js app linked!');

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
   console.log(codeToBreak);
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
// }}}


//for console gameplay testing
//var testCodeBreak = prompt("testCodeBreak the colors in an array, don't forget to put quotes around each color and commas in between");

//an object for the colors?
//do I even need this?
//nothing is happening to these...
//or does it?

//need to draw out the flow on very very large paper


//////////////////jQuery/////////////////////////

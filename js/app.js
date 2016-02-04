//alert('js app linked!');

//an array of colors
var colors = ['red','orange','yellow','green','blue', 'violet'];

//after each play, each play will be added as an array
var playerPlays = [];
var codeToBreak=[];

//generates the code to break
var codeMaker = function (){
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

//default guess - for testing
var defaultGuess = ["yellow", "orange", "orange", "blue"];

//tests the guess against the codeToBreak
//CCCP -correct color, correct position
var testCodeCCCP = function(codeToBreak){
   var cccp = 0;
   var testIt = codeToBreak;
   for (i=0; i<4; i++){
     //change default guess to real guess later
     console.log (defaultGuess[i] +
     " guess "+ codeToBreak[i] + " code to break")
     if ( defaultGuess[i] === codeToBreak[i]){
       cccp=cccp+1
     }
     console.log ("CCCP score is " + cccp)
   }
}

//tests the guess agains the codeToBreak
//CCWP - correct color, wrong position

// var testCodeCCWP = function(codeToBreak){
//    var ccwp = 0;
//    var testIt = codeToBreak;
//    for (i=0; i<4; i++){
//      for(j=0; j<4; j++){
//      //change default guess to real guess later
//      console.log (defaultGuess[i] +
//      " guess "+ codeToBreak[i] + " code to break")
//      if ( defaultGuess[i] === codeToBreak[i]){
//        cccp=cccp+1
//      }
//      console.log ("CCCP score is " + cccp)
//   } }
// }

//nested loop visualization
var nestedLoop = function() {
  for (i=0; i<4; i++){
    for(j=0; j<4; j++){
      //both start at 0, j loops first, then i increments
      console.log ("the value of i is "+ i +
      " the value of j is " + j);
}}}

//nested loop visualization with condition that positon doesn't match
var nestedLoopCCWPprep = function() {
  for (i=0; i<4; i++){
    for(j=0; j<4; j++){
      //both start at 0, j loops first, then i increments
      if(i!==j){
      console.log ("the value of i is "+ i +
      " the value of j is " + j);
}}}}

//for console gameplay testing
//var guess = prompt("guess the colors in an array, don't forget to put quotes around each color and commas in between");

//an object for the colors?
//do I even need this?
//nothing is happening to these...
//or does it?

//need to draw out the flow on very very large paper

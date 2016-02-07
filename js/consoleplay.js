//moved jQuery to separate document so that the game can be played in the console
alert('Play game in the console by typing playGame()');
var round = 1;

//an array of colors
var colors = [ 'red', 'orange', 'yellow', 'green', 'blue', 'violet' ];

//generates the code to break
var codeMaker = function (){
  codeToBreak=[];
  var colorChoice;
  for ( var i=0 ; i < 4 ; i++ ){
  colorChoice= Math.floor( Math.random() * 6 );
  codeToBreak.push( colors [ colorChoice ] );
  }
 console.log( codeToBreak );//remove for game play
 return codeToBreak;
};

//gets input for the console game play
function getInput(){
  var testCodeBreak=[];
  while ( testCodeBreak.length < 4 ){
    tellMeInput = testCodeBreak.length + 1;
    var grabInput = '';
    grabInput = prompt( 'Please input 4 colors, one at a time, left to right. This is color ' + tellMeInput + ' of 4. Choose: red, orange, yellow, green, blue, or violet' );
    if ( grabInput === null ) {
        testCodeBreak = null;
       alert( 'You chose to quit.' );
       return;}
  testCodeBreak.push( grabInput );
  }
  alert ("Thanks for the input! Now let me run your code. See you in the console!")
  return testCodeBreak;
}

//plays rounds until win state (pegs correctly guessed) or lose state (10 rounds have been played)
function keepPlaying(round){
  var testCodeBreak=[];
  testCodeBreak = getInput();
  console.log( testCodeBreak );//for game play
  console.log ( "\n Is the code you played this is round " + round + " out of 10" );
  return testCodeBreak;
 }

//tests the testCodeBreak against the codeToBreak: CCCP -correct color, correct position
var testCodeCCCP = function(testCodeBreak, codeToBreak){
   var cccp = 0;
   var testIt = testCodeBreak;
   var testAgainst = codeToBreak;
   for (var q = 0 ; q < 4 ; q++ ){
     if ( testIt[q] === testAgainst[q] ){
       cccp=cccp+1;
     }
   }
   return cccp;
}

//******** CCWP check **** Thanks Dan DiIorio for the assistance!!!!! ****
//tests the testCodeBreak against the codeToBreak: CCWP -correct color, wrong position
var testCodeCCWP = function (testCodeBreak, codeToBreak){
  var ccwp = 0;
  //need to generate new arrays or else the original array will be manipulated as well
  var checkFor = [];
  var checkAgainst = [];
  for ( var i = 0 ; i < testCodeBreak.length ; i++ ) {
    checkFor.push(testCodeBreak[i]);
    checkAgainst.push(codeToBreak[i]);
  }
//remove CCCPs
 for (var k =0; k< checkFor.length; k++){
   if (checkFor[k]===checkAgainst[k]){
    checkFor.splice(k,1);
    checkAgainst.splice(k,1);
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
  return ccwp;
}

//play game
var playGame = function (){
  var round = 1;
  var codetoBreak =[];
  codeToBreak= codeMaker();
  console.log ("Computer code is: " + "[ ?????, ?????, ?????, ????? ]");//for game play
  while ( cccp !== 4 && round <= 10 ) {
  testCodeBreak = keepPlaying(round);
  cccp = testCodeCCCP(testCodeBreak, codeToBreak);//return number between 0-4

  //win state
  if (cccp === 4){
    return console.log("WIN!");

  } else if (testCodeBreak !== null) {
    console.log (cccp + " pegs are the correct color and correct position");//for game play
    ccwp = testCodeCCWP(testCodeBreak, codeToBreak);//returns a number between 0-4
    console.log( ccwp + " pegs are the correct color, but wrong positon");//for game play
    round ++;
  } else { return console.log("you quit") }

  }
  //lose after 10 rounds and cccp does not equal 4
  return console.log ("sorry, you lost.");
}



//an object for the colors...object litral for game play
//was testing the pieces...maybe should have built the objects first and tested the pieces within.
//out of time to change it

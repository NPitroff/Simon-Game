// var to hold the color options
var buttonColors = ["red", "blue", "green", "yellow"];
// array to hold the game pattern
var gamePattern = [];

function nextSequence(){
  // var to generate a random number
  var randomNumber = Math.floor(Math.random()*4);
  console.log(randomNumber);
  // var to pick a random element from the array
  var randomChosenColor = buttonColors[randomNumber]
  console.log("Random Chosen Color is "+randomChosenColor);

  // var to push into the gamePattern array
  gamePattern.push(randomChosenColor);
  console.log("The Game Pattern Is "+gamePattern);
  // select the button with the same id as the random Color
  $("#"+randomChosenColor).fadeOut(100).fadeIn(100);
}

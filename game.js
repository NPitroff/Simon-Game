// var to hold the color options
var buttonColors = ["red", "blue", "green", "yellow"];
// array to hold the game pattern
var gamePattern = [];
// array for the user pattern
var userClickedPattern = [];

function nextSequence(){
  // var to generate a random number
  var randomNumber = Math.floor(Math.random()*4);
  console.log("The Random Number is "+randomNumber);
  // var to pick a random element from the array
  var randomChosenColor = buttonColors[randomNumber]
  console.log("Random Chosen Color is "+randomChosenColor);
  // var to push into the gamePattern array
  gamePattern.push(randomChosenColor);
  console.log("The Game Pattern Is "+gamePattern);
  // select the button with the same id as the random Color
  $("#"+randomChosenColor).fadeOut(100).fadeIn(100);
    // call playSound for randomChosenColor
  playSound(randomChosenColor);
}
// detect when a button is clicked
$(".btn").click(function(e){
  console.log(e);
  var userChosenColor = $(this).attr('id');
  console.log("The userChosenColor is "+userChosenColor);
  userClickedPattern.push(userChosenColor);
  console.log(userClickedPattern);
  // // show button click
  // $("#"+userChosenColor).fadeOut(100).fadeIn(100);
  // call playSound() for the userChosenColor
  playSound(userChosenColor);
})

// add sounds to button clicks and playbacks
function playSound(name){
  // var to hold the correct sound
  var audio = new Audio("sounds/"+ name + ".mp3");
  // play selected audio file
  audio.play();
}
// function to show a button click
function animatePress(currentColor){
  $(".btn").addClass(".pressed");

  setTimeout(function(){
    $("btn").removeClass(".pressed");
  }, 500);
}

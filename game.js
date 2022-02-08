// var to hold the color options
var buttonColors = ["red", "blue", "green", "yellow"];
// array to hold the game pattern
var gamePattern = [];
// array for the user pattern
var userClickedPattern = [];
// var to detect if the keypress has already been hit
var started = false;
// variable to store the level
var level = 0;

// detect when a key has been pressed
$(document).keypress(function(){
  // if statement to detect start of game
  if (!started) {
    // change the h1 to show the level
    $("#level-title").html("Level "+level);
    // call nextSequence() to start the game
    nextSequence();
    started = true;
  }
});

// detect when a button is clicked
$(".btn").click(function(e){
  // console.log(e);
  var userChosenColor = $(this).attr('id');
  // console.log("The userChosenColor is "+userChosenColor);
  userClickedPattern.push(userChosenColor);
  // console.log(userClickedPattern);
  // call to play sound
  playSound(userChosenColor);
  // call function to animate press
  animatePress(userChosenColor);
  // call to check the answers
  checkAnswer(userClickedPattern.length-1);
})

// function to check the user answer
function checkAnswer(currentLevel){
  //check if user array matches against game array
  if(gamePattern[currentLevel] === userClickedPattern[currentLevel]){
  console.log("success");
  // statement to add to the sequence
  if(userClickedPattern.length === gamePattern.length){
    // call next color after delay
    setTimeout(function(){
      nextSequence();
    }, 1000)
  }
  // else statement for wrong answer
} else {
  console.log("wrong");
  }
}

// add to the sequence
function nextSequence(){
  // increase the count of level for every nextSequence()
  level++
  // var to generate a random number
  var randomNumber = Math.floor(Math.random()*4);
  //console.log("The Random Number is "+randomNumber);
  // var to pick a random element from the array
  var randomChosenColor = buttonColors[randomNumber]
  console.log("Random Chosen Color is "+randomChosenColor);
  // var to push into the gamePattern array
  gamePattern.push(randomChosenColor);
  console.log("The Game Pattern Is "+gamePattern);
  // select the button with the same id as the random Color
  $("#"+randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);
    // call playSound for randomChosenColor
  playSound(randomChosenColor);
}



// add sounds to button clicks and playbacks
function playSound(name){
  // var to hold the correct sound
  var audio = new Audio("sounds/"+ name + ".mp3");
  // play selected audio file
  audio.play();
}

// function to show a button click
function animatePress(currentColor){
  $("."+currentColor).addClass("pressed");
  console.log("Add pressed to "+currentColor);
  // set timeout to remove class
  setTimeout(function(){
    $("."+currentColor).removeClass("pressed");
  }, 100);
}

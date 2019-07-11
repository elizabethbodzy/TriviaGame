var time = 30;

var intervalId;

var correctAnswers = 0;
var incorrectAnswers = 0;
var notAnswered = 0;

var questions = [{
    question: "What brand of golf ball does George pull out of the whale's blow hole?",
    answerOptions: ["Titleist", "Ping", "Callaway", "TaylorMade"],
    answer: 0
}, { 
    question: "In the 'Alternate Side', who is the guy that moves the cars from one side of the street to the other, so that people don't get parking tickets?",
    answerOptions: ["Sam", "Sid", "Seth", "Sean"],
    answer: 1
}, {
    question: "Who or what is called 'Golden Boy'?",
    answerOptions: ["George's Hat", "Jerry's T-shirt", "Jerry's Hat", "George's Dog"],
    answer: 1
}, {
    question: "In 'The Cigar Store Indian', what type of sandwich does Kramer, Jerry, and Elaine get on the subway?",
    answerOptions: ["Philly Cheesesteak", "Reuben", "Gyro", "Panini"],
    answer: 2
}, {
    question: "What food was thrown at George at the end of the episode where the gang goes to the Hamptons?",
    answerOptions: ["Tomato", "Spaghetti", "Lobster", "Eggs"],
    answer: 0
}, {
    question: "What is Kramer's first name?",
    answerOptions: ["Conrad", "Kramer", "Collin", "Cosmo"],
    answer: 3
}, {
    question: "What is Tim Whately's profession?",
    answerOptions: ["Doctor", "Dentist", "Psychologist", "Teacher"],
    answer: 1
}];

//function for timer
function run() {
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
  }

  //function to stop
  function stop() {
    clearInterval(intervalId);
  }
//start button is clicked, button then is hidden
$("#start").on("click", function() {
    $(this).hide(); //in order to hide start button after it is first clicked

    $("#timer").html("<h2> Time Remaining: 30 Seconds </h2>");

    run();

//timer begins counting down
//questions appear with 4 answer choices below
//only one answer can be chosen for each question
//pressing done button ends game 
//if timer runs out, game ends
//after done is pressed or timer runs out score is displayed


})



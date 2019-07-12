var time = 30;
var timerRunning = false;

var intervalId;

var correctAnswers = 0;
var incorrectAnswers = 0;
var notAnswered = 0;

var questions = [{
    //index0
    question: "What brand of golf ball does George pull out of the whale's blow hole?",
    answerOptions: ["Titleist", "Ping", "Callaway", "TaylorMade"],
    correctAnswer: 0
}, {//index1
    question: "In the 'Alternate Side', who is the guy that moves the cars from one side of the street to the other, so that people don't get parking tickets?",
    answerOptions: ["Sam", "Sid", "Seth", "Sean"],
    correctAnswer: 1
}, {//index2
    question: "Who or what is called 'Golden Boy'?",
    answerOptions: ["George's Hat", "Jerry's T-shirt", "Jerry's Hat", "George's Dog"],
    correctAnswer: 1
}, {//index3
    question: "In 'The Cigar Store Indian', what type of sandwich does Kramer, Jerry, and Elaine get on the subway?",
    answerOptions: ["Philly Cheesesteak", "Reuben", "Gyro", "Panini"],
    correctAnswer: 2
}, {//index4
    question: "What food was thrown at George at the end of the episode where the gang goes to the Hamptons?",
    answerOptions: ["Tomato", "Spaghetti", "Lobster", "Eggs"],
    correctAnswer: 0
}, {//index5
    question: "What is Kramer's first name?",
    answerOptions: ["Conrad", "Kramer", "Collin", "Cosmo"],
    correctAnswer: 3
}, {//index6
    question: "What is Tim Whately's profession?",
    answerOptions: ["Doctor", "Dentist", "Psychologist", "Teacher"],
    correctAnswer: 1
}];

//start button is clicked, button then is hidden
$("#start").on("click", function () {
    $(this).hide(); //in order to hide start button after it is first clicked

    //timer updates time remaining text and begins counting down
    $("#timer").html("<h2> Time Remaining: 30 Seconds </h2>");
    run();

    //questions appear with 4 answer choices below
    $("#q1").html("<h3>" + questions[0].question + "</h3>");
    //only one answer can be chosen for each question
    $("#a1").html("<input type='radio' name='a1' value='0'>" + questions[0].answerOptions[0] +
    "<input type='radio' name='a1' value='1'>" + questions[0].answerOptions[1] +
    "<input type='radio' name='a1' value='2'>" + questions[0].answerOptions[2] +
    "<input type='radio' name='a1' value='3'>" + questions[0].answerOptions[3]
    );

    //repeat for following questions
    $("#q2").html("<h3>" + questions[1].question + "</h3>");
    $("#a2").html("<input type='radio' name='a1' value='0'>" + questions[1].answerOptions[0] +
    "<input type='radio' name='a2' value='1'>" + questions[1].answerOptions[1] +
    "<input type='radio' name='a2' value='2'>" + questions[1].answerOptions[2] +
    "<input type='radio' name='a2' value='3'>" + questions[1].answerOptions[3]
    );

    $("#q3").html("<h3>" + questions[2].question + "</h3>");
    $("#a3").html("<input type='radio' name='a3' value='0'>" + questions[2].answerOptions[0] +
    "<input type='radio' name='a3' value='1'>" + questions[2].answerOptions[1] +
    "<input type='radio' name='a3' value='2'>" + questions[2].answerOptions[2] +
    "<input type='radio' name='a3' value='3'>" + questions[2].answerOptions[3]
    );

    $("#q4").html("<h3>" + questions[3].question + "</h3>");
    $("#a4").html("<input type='radio' name='a4' value='0'>" + questions[2].answerOptions[0] +
    "<input type='radio' name='a4' value='1'>" + questions[3].answerOptions[1] +
    "<input type='radio' name='a4' value='2'>" + questions[3].answerOptions[2] +
    "<input type='radio' name='a4' value='3'>" + questions[3].answerOptions[3]
    );

    $("#q5").html("<h3>" + questions[4].question + "</h3>");
    $("#a5").html("<input type='radio' name='a5' value='0'>" + questions[4].answerOptions[0] +
    "<input type='radio' name='a5' value='1'>" + questions[4].answerOptions[1] +
    "<input type='radio' name='a5' value='2'>" + questions[4].answerOptions[2] +
    "<input type='radio' name='a5' value='3'>" + questions[4].answerOptions[3]
    );

    $("#q6").html("<h3>" + questions[5].question + "</h3>");
    $("#a6").html("<input type='radio' name='a6' value='0'>" + questions[5].answerOptions[0] +
    "<input type='radio' name='a3' value='1'>" + questions[5].answerOptions[1] +
    "<input type='radio' name='a3' value='2'>" + questions[5].answerOptions[2] +
    "<input type='radio' name='a3' value='3'>" + questions[5].answerOptions[3]
    );

    $("#q7").html("<h3>" + questions[6].question + "</h3>");
    $("#a7").html("<input type='radio' name='a7' value='0'>" + questions[6].answerOptions[0] +
    "<input type='radio' name='a7' value='1'>" + questions[6].answerOptions[1] +
    "<input type='radio' name='a7' value='2'>" + questions[6].answerOptions[2] +
    "<input type='radio' name='a7' value='3'>" + questions[6].answerOptions[3]
    );

    //pressing submit button 
    $("#submit").html("<button id='done'> Done </button>")

    //clicking submit ends game
    //if timer runs out, game ends
   
   
    //after done is pressed or timer runs out score is displayed

});


//function for timer
function run() {
        clearInterval(intervalId);
        intervalId = setInterval(decrement, 1000);
        
    
}

function decrement() {

    //  Decrease number by one.
    time--;

    //  Show the number in the #timer tag.
    $("#timer").html("<h2> Time Remaining: " + time + " Seconds</h2>");

    //Once the number hits zero
    if (time === 0) {
    //run the stop function
    stop();
   
    }
}
    //function to stop
    function stop() {
        clearInterval(intervalId);
        
    }

    





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
    $("#a4").html("<input type='radio' name='a4' value='0'>" + questions[3].answerOptions[0] +
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
    $("#submit").html("<button id='done'> Done </button>");
    $("#done").on("click", function () {
        //count score results - correct, incorrect, not answered
        countTotal();

        //then display the results
        displayTotal();
    });
});

function displayTotal() {
    //update the text for finishedMessage
    $("#finishedMessage").html("<h3> Time's Up! </h3");
    $("#answersCorrect").html("Correct Answers: " + correctAnswers);
    $("#answersIncorrect").html("Incorrect Answers: " + incorrectAnswers);
    $("#notAnswered").html("Not Answered: " + notAnswered);

    //hide the questions originally showed
    $("#timer").hide();
    $("#q1").hide();
    $("#a1").hide();
    $("#q2").hide();
    $("#a2").hide();
    $("#q3").hide();
    $("#a3").hide();
    $("#q4").hide();
    $("#a4").hide();
    $("#q5").hide();
    $("#a5").hide();
    $("#q6").hide();
    $("#a6").hide();
    $("#q7").hide();
    $("#a7").hide();
    $("#submit").hide();
}

function countTotal() {
    //check value of box that was chosen/checked
    var userAnswer1 = $("input[name='a1']:checked").val();
    var userAnswer2 = $("input[name='a1']:checked").val();
    var userAnswer3 = $("input[name='a1']:checked").val();
    var userAnswer4 = $("input[name='a1']:checked").val();
    var userAnswer5 = $("input[name='a1']:checked").val();
    var userAnswer6 = $("input[name='a1']:checked").val();
    var userAnswer7 = $("input[name='a1']:checked").val();

    //if the answer that the user chooses is equal to the correct answer, add points to correct answer
    if (userAnswer1 === questions[0].correctAnswer) {
        correctAnswers++;
    } else if (userAnswer1 === undefined) { //if the user does not select an answer
        notAnswered++;
    } else {
        incorrectAnswers++;
    }

    if (userAnswer2 === questions[1].correctAnswer) {
        correctAnswers++;
    } else if (userAnswer2 === undefined) {
        notAnswered++;
    } else {
        incorrectAnswers++;
    }

    if (userAnswer3 === questions[2].correctAnswer) {
        correctAnswers++;
    } else if (userAnswer3 === undefined) {
        notAnswered++;
    } else {
        incorrectAnswers++;
    }

    if (userAnswer4 === questions[3].correctAnswer) {
        correctAnswers++;
    } else if (userAnswer4 === undefined) {
        notAnswered++;
    } else {
        incorrectAnswers++;
    }

    if (userAnswer5 === questions[4].correctAnswer) {
        correctAnswers++;
    } else if (userAnswer5 === undefined) {
        notAnswered++;
    } else {
        incorrectAnswers++;
    }

    if (userAnswer6 === questions[5].correctAnswer) {
        correctAnswers++;
    } else if (userAnswer6 === undefined) {
        notAnswered++;
    } else {
        incorrectAnswers++;
    }

    if (userAnswer7 === questions[6].correctAnswer) {
        correctAnswers++;
    } else if (userAnswer7 === undefined) {
        notAnswered++;
    } else {
        incorrectAnswers++;
    }
}
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
        countTotal();
        displayTotal();
    }
}
//function to stop
function stop() {
    clearInterval(intervalId);
}


    



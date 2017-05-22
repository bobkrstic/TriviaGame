
var questionNumber = 0; 
var correct = 0;
var quizStage;
var choiceA;
var choiceB;
var choiceC;

var question; 
var choice;
var choices;

var intervalId;
var qInterval;
var clockRunning = false;
var time = 0;
var qTime = 0; 

var allQuestions = [
    [ "Who was the first president of USA?", "Washington", "Carter", "Kennedy", "A" ],
	[ "Who was the first man to walk on the moon?", "Aldrin", "Armstrong", "Clinton", "B" ],
	[ "What is the circumference of the earth?", "25401", "21901", "24901", "C" ],
	[ "Who's is the president of Columbia now?", "Juan Manuel Santos", "Pablo Gaviria Escobar", "Enrique Peña Nieto", "A" ]
];

function beginning() {
	$("#quizStage").html("Press the buton to start the quiz!");
	$("#quiz").html("<button class='startButton' onclick='startQuiz(), quizTime()'>Start Quiz</button>");
}

function startQuiz(){

	$("#correctAnswer").text("Good Luck!");
	$("#imageHolder").empty();
	
	if(questionNumber >= allQuestions.length){
		//endQuiz();
	$("#quiz").html("<h2>You guessed " + correct + " out of " + allQuestions.length + " questions correct</h2>");
	$("#quizStage").html("The Quiz is now over!");
	if (correct > 3) {
		$("#correctAnswer").text("YOU ROCK");
	}
	questionNumber = 0;
	correct = 0;
	return false;
	}

	//questionTime();

	$("#quizStage").html("Question "+ (questionNumber + 1) + " of " + allQuestions.length);
	question = allQuestions[questionNumber][0];
	choiceA = allQuestions[questionNumber][1];
	choiceB = allQuestions[questionNumber][2];
	choiceC = allQuestions[questionNumber][3];
	$("#quiz").html("<h3>" + question + "</h3>");

	$("#quiz").append("<input type='radio' name='choices' value='A'> " + choiceA + "<br>");
	$("#quiz").append("<input type='radio' name='choices' value='B'> " + choiceB + "<br>");
	$("#quiz").append("<input type='radio' name='choices' value='C'> " + choiceC + "<br><br>");

	$("#quiz").append("<button onclick='checkIfAnswerCorrect()'>Submit Answer</button>");
}


function checkIfAnswerCorrect(){
	
	choices = document.getElementsByName("choices");
	for(var i=0; i<choices.length; i++){
		if(choices[i].checked){
			choice = choices[i].value;
		}
	}
	if(choice == allQuestions[questionNumber][4]){
		correct++;
		$("#correctAnswer").text("Good Job!");
		$("#imageHolder").append("<img src='assets/images/okSign.jpg' width='98px' height='88px'/>");
	} else {
		$("#imageHolder").append("<img src='assets/images/wrongAnswer.jpg' width='98px' height='88px'/>");
		$("#correctAnswer").text("Correct Answer is: " + allQuestions[questionNumber][4]);
	}

	questionNumber++;
	setTimeout(startQuiz, 3000);

	// if(questionNumber >= allQuestions.length){
	// 	endQuiz();
	// }

}

window.addEventListener("load", beginning, false);

function endQuiz() {
	$("#quiz").html("<h2>You guessed " + correct + " out of " + allQuestions.length + " questions correct</h2>");
	$("#quizStage").html("The Quiz is now over!");
	if (correct > 3) {
		$("#correctAnswer").text("YOU ROCK");
	}
	questionNumber = 0;
	correct = 0;
	return false;
	//stop();
}


	function quizTime() {
		time = 25;
		$("#displayQuizTime").html("00:00");
		start();
	}

	// function questionTime() {
	// 	qTime = 5;
	// 	$("#timePerQuestion").html(qTime);
	// 	startQtime();
	// }

	// function startQtime() {
	// 	qInterval = setInterval(countQtime, 1000);
	// }

	// function countQtime() {
	// 	qTime--;
	// 	$("#timePerQuestion").html(qTime);
	// 	if (qTime == 0)
	// 	{
	// 		stopQtime();
	// 	}
	// 	// 	questionNumber++;
	// 	// }
	// 	// if (qTime == 0 && questionNumber == 4) {
	// 	// 	stopQtime();
	// 	// 	endQuiz();
	// 	// }
	// }	

	// function stopQtime () {
	// 	clearInterval(qInterval);
	// 	//questionNumber++;
	// 	//startQuiz();
	// 	//setTimeout(startQuiz, 3000)
	// }

	function start() {
	  intervalId = setInterval(count, 1000);
	}

	function stop() {
	 
	  clearInterval(intervalId);
	  endQuiz();
	}

	function count() {
	  time--;
	  var converted = timeConverter(time);
	  $("#displayQuizTime").html(converted);
	  if (time === 0)
	  {
	    stop();
	  }
	}

	function timeConverter(t) {

	  var minutes = Math.floor(t / 60);
	  var seconds = t - (minutes * 60);

	  if (seconds < 10) {
	    seconds = "0" + seconds;
	  }

	  if (minutes === 0) {
	    minutes = "00";
	  }
	  else if (minutes < 10) {
	    minutes = "0" + minutes;
	  }

	  return minutes + ":" + seconds;
	}



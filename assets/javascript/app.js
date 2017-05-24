
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
var time;
var qTime = 0; 

var allQuestions = [
    [ "Who was the first president of USA?", "Washington", "Carter", "Kennedy", "A" ],
	[ "Who was the first man to walk on the moon?", "Aldrin", "Armstrong", "Clinton", "B" ],
	[ "What is the circumference of the earth?", "25401", "21901", "24901", "C" ],
	[ "Who's is the president of Columbia now?", "Juan Manuel Santos", "Pablo Gaviria Escobar", "Enrique Peña Nieto", "A" ],
	[ "What is the capitol of Serbia?", "Stockholm", "Sofia", "Belgrade", "C"]
];

function beginning() {
	$("#quizStage").html("Press the buton to start the quiz!");
	$("#quiz").html("<button class='startButton' onclick='startQuiz(), quizTime()'>Start Quiz</button>");
}

function startQuiz(){

	if (time === 0)
	{
	   stop();
	}

	$("#correctAnswer").text("Good Luck!");
	$("#imageHolder").empty();
	
	if(questionNumber >= allQuestions.length){
	
	clearInterval(intervalId);
	$("#quiz").html("<h2>You guessed " + correct + " out of " + allQuestions.length + " questions correct</h2>");
	$("#quizStage").html("The Quiz is now over!");
	$("#quiz").append("<button class='btn' class='startButton' onclick='startQuiz(), quizTime()'>Restart Quiz</button>");
	
	if (correct >= 3) {
		$("#correctAnswer").html($("<h4 class='youRock'>YOU ROCK! YOU RULE!</h4>").hide().fadeIn(3000));
		$("#imageHolder").append($("<img src='assets/images/youRock.JPEG' width='127px' height='107px' class='youRockImg'/>").hide().fadeIn(3000));
	} else {
		$("#correctAnswer").text("THANK YOU FOR PLAYING!");
		$("#imageHolder").append("<img src='assets/images/betterLuck.JPEG' width='128px' height='108px'/>");

	}

	questionNumber = 0;
	correct = 0;
	return false;
	}

	questionTime();

	$("#quizStage").html("Question "+ (questionNumber + 1) + " of " + allQuestions.length);
	question = allQuestions[questionNumber][0];
	choiceA = allQuestions[questionNumber][1];
	choiceB = allQuestions[questionNumber][2];
	choiceC = allQuestions[questionNumber][3];
	$("#quiz").html($("<h3 class='questionText'>" + question + "</h3>").hide().fadeIn(2000));

	$("#quiz").append($("<input id='clickO' type='radio' name='choices' value='A'> " + choiceA + "<br>").hide().fadeIn(2000));
	$("#quiz").append($("<input id='click1' type='radio' name='choices' value='B'> " + choiceB + "<br>").hide().fadeIn(2000));
	$("#quiz").append($("<input id='click2' type='radio' name='choices' value='C'> " + choiceC + "<br><br>").hide().fadeIn(2000));

	$("#quiz").append($("<button class='subBtn' onclick='checkIfAnswerCorrect()'>Submit Answer</button>").hide().fadeIn());
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
		$("#imageHolder").append("<img src='assets/images/okSign.jpg' width='127px' height='107px' class='imgShad'/>");
		$(".subBtn").hide();
		document.getElementById("clickO").disabled = true;
		document.getElementById("click1").disabled = true;
		document.getElementById("click2").disabled = true;
		stopQtime();

	} else {
		$("#imageHolder").append("<img src='assets/images/wrongAnswer.jpg' width='127px' height='107px'/>");
		// $("#correctAnswer").html("Correct Answer is: " + allQuestions[questionNumber][4]);
		$("#correctAnswer").html("<h3 class='whenWrongAnswer'>Correct Answer is: " + allQuestions[questionNumber][4] + "</h3>");
		$(".subBtn").hide();
		document.getElementById("clickO").disabled = true;
		document.getElementById("click1").disabled = true;
		document.getElementById("click2").disabled = true;
		stopQtime();
	}

	questionNumber++;
	setTimeout(startQuiz, 5000);
}


function endQuiz() {
	$("#quiz").html("<h2>You guessed " + correct + " out of " + allQuestions.length + " questions correct</h2>");
	$("#quizStage").html("The Quiz is now over!");
	$("#quiz").append("<button class='btn' class='startButton' onclick='startQuiz(), quizTime()'>Restart Quiz</button>");

	if (correct >= 3) {
		$("#correctAnswer").text("YOU ROCK!");
	    $("#imageHolder").append("<img src='assets/images/youRock.JPEG' width='127px' height='107px'/>");

	} else {
		$("#correctAnswer").text("THANK YOU FOR PLAYING!");
		$("#imageHolder").append("<img src='assets/images/betterLuck.JPEG' width='128px' height='108px'/>");

	}
	stopQtime();
	questionNumber = 0;
	correct = 0;
	return false;
}


	function quizTime() {
		time = 60;
		$("#displayQuizTime").html("01:00");
		start();
	}

	function questionTime() {
		qTime = 10;
		$("#timePerQuestion").html(qTime);
		startQtime();
	}

	function startQtime() {
		qInterval = setInterval(countQtime, 1000);
	}


	function countQtime() {
		qTime--;
		$("#timePerQuestion").html(qTime);

		if (time === 0)
		{
	       stop();
	    }

		if (qTime == 0)
		{
			stopQtime();
			$("#correctAnswer").html("<h3 class='whenWrongAnswer'>Correct Answer is: " + allQuestions[questionNumber][4] + "</h3>");
			$("#imageHolder").append($("<img src='assets/images/timesUP.png' width='128px' height='108px'/>").hide().fadeIn(2000));
			// $("#imageHolder").append($("<img src='https://github.com/bobkrstic/TriviaGame/assets/images/timesUp.png' width='128px' height='108px'/>").hide().fadeIn(2000));
			document.getElementById("clickO").disabled = true;
			document.getElementById("click1").disabled = true;
			document.getElementById("click2").disabled = true;
			questionNumber++;
			$(".subBtn").hide();
			setTimeout(startQuiz, 5000);
		}
	}	

	function stopQtime () {
		clearInterval(qInterval);
	}

	function start() {
	  intervalId = setInterval(count, 1000);
	}

	function stop() {
	  clearInterval(intervalId);
	  stopQtime();
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


window.addEventListener("load", beginning, false);


// -----------------------------------------------------END OF JAVASCRIPT------------------------------------//




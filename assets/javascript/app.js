
var questionNumber = 0; 
var test;
var test_status;
var question; 
var choice;
var choices;
var chA;
var chB;
var chC;
var correct = 0;


// need function ready here


var allQuestions = [
    [ "Who was the first president of USA?", "Washington", "Carter", "Kennedy", "A" ],
	[ "Who was the first man to walk on the moon?", "Aldrin", "Armstrong", "Clinton", "B" ],
	[ "What is the circumference of the earth?", "25401", "21901", "24901", "C" ],
	[ "Who's is the president of Columbia now?", "Juan Manuel Santos", "Pablo Gaviria Escobar", "Enrique Peña Nieto", "A" ]
];

function startQuiz(){
	// test = document.getElementById("test");
	// test = $("#test");
	if(questionNumber >= allQuestions.length){
		// test.innerHTML = "<h2>You got "+correct+" of "+allQuestions.length+" questions correct</h2>";
		$("#test").html("<h2>You got "+correct+" of "+allQuestions.length+" questions correct</h2>");
		document.getElementById("test_status").innerHTML = "Test Completed";
		questionNumber = 0;
		correct = 0;
		return false;
	}
	$("#test_status").html("Question "+(questionNumber+1)+" of "+allQuestions.length);
	question = allQuestions[questionNumber][0];
	chA = allQuestions[questionNumber][1];
	chB = allQuestions[questionNumber][2];
	chC = allQuestions[questionNumber][3];
	$("#test").html("<h3>"+question+"</h3>");

	$("#test").append("<input type='radio' name='choices' value='A'> "+chA+"<br>");
	$("#test").append("<input type='radio' name='choices' value='B'> "+chB+"<br>");
	$("#test").append("<input type='radio' name='choices' value='C'> "+chC+"<br><br>");

	$("#test").append("<button onclick='checkAnswer()'>Submit Answer</button>");
	// var button = $("<button>");
	// button.attr("class", "buttonClass");
}
function checkAnswer(){
	// this will create an array of choices choices[0,1,2]
	choices = document.getElementsByName("choices");
	for(var i=0; i<choices.length; i++){
		if(choices[i].checked){
			choice = choices[i].value;
		}
	}
	if(choice == allQuestions[questionNumber][4]){
		correct++;
	}
	questionNumber++;
	startQuiz();
}
window.addEventListener("load", startQuiz, false);

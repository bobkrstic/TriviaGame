
window.onload = function() {
  $("#start").on("click", start);
  
};


var intervalId;


var clockRunning = false;

var time = 0;

  time = 5;
 

  $("#display").html("00:05");


function start() {
  intervalId = setInterval(count, 1000);

}

function stop() {

  console.log("stopping");
  clearInterval(intervalId);

}

function count() {
  time--;
  var converted = timeConverter(time);
  $("#display").html(converted);
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

var countDownDate = new Date("June 03, 2024 00:00:00").getTime();

var countdownfunction = setInterval(function() {

  var now = new Date().getTime();
var distance = countDownDate - now;

 var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("amx").innerHTML = //days + "D "
  + hours + "H " + minutes + "M " + seconds + "S ";

 if (distance < 0) {
    clearInterval(countdownfunction);
    document.getElementById("amx").innerHTML = "HAPPIEST BIRTHDAY FARHEEN";
    window.location = "https://luckyyarish.github.io/Keep-Dragging/";
}

}, 1000);


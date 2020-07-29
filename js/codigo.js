$(document).ready(function()
      {
         $("#modal1").modal("show");
      });
      
var video = document.getElementById("myVideo");

var btn = document.getElementById("myBtn");

function myFunction() {
  if (video.paused) {
    video.play();
    btn.innerHTML = "Pause";
  } else {
    video.pause();
    btn.innerHTML = "Play";
  }
}
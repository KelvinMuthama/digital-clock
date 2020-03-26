start.onclick = function timeFunc() {
  let seconds = 1;
  let minutes = 0;
  let hours = 0;

  let timer = setTimeout(function increase() {
    let sec = "0" + seconds;
    if (seconds < 10) {
      document.getElementById("second").innerHTML = sec;
    } else {
      document.getElementById("second").innerHTML = seconds;
    }

    timer = setTimeout(increase, 1000);
    seconds++;
    if (seconds === 60) {
      minutes++;
      if (minutes < 10) {
        document.getElementById("minute").innerHTML = "0" + minutes;
      } else {
        document.getElementById("minute").innerHTML = minutes;
      }

      seconds = 0;
    }

    if (minutes === 60) {
      hours++;
      if (hours < 10) {
        document.getElementById("hour").innerHTML = "0" + hours;
      } else {
        document.getElementById("hour").innerHTML = hours;
      }

      minutes = 0;
    }
    start.style.pointerEvents = "none";

    // stop button
    let stop = document.getElementById("stop");

    stop.addEventListener("click", function() {
      clearTimeout(timer);
      stop.style.pointerEvents = "none";
    });

    // reset button
    let reset = document.getElementById("reset");
    reset.addEventListener("click", function() {
      clearTimeout(timer);
      document.getElementById("second").innerHTML = "00";
      document.getElementById("minute").innerHTML = "00";
      document.getElementById("hour").innerHTML = "00";

      start.style.pointerEvents = "auto";
      stop.style.pointerEvents = "auto";
    });
  }, 1000);
};

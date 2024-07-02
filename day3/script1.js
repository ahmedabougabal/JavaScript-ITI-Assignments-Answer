var interval;
function startClock() {
  interval = setInterval(function () {
    var myDate = new Date();
    document.getElementById("clock").innerHTML = myDate.toLocaleTimeString();
  }, 1000);
};


function stopClock() {
  clearInterval(interval);
}



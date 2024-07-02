// document.querySelectorAll("img").forEach(img => {
//   img.style.opacity = 1;
// });


function changeOpacity(el) {
  el.style.opacity = "1";
  clearInterval(el.interval);
  el.interval = setInterval(function () {
    var op = parseFloat(el.style.opacity);
    if (op > 0.3) {
      el.style.opacity = op - 0.01;
    } else {
      clearInterval(el.interval);
    }
  }, 10);
}

function revert(el) {
  clearInterval(el.interval);
  el.interval = setInterval(function () {
    var op = parseFloat(el.style.opacity);
    if (op < 1) {
      el.style.opacity = op + 0.01;
    } else {
      clearInterval(el.interval);
    }
  }, 10);
}


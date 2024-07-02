/**
 * Make an array of colors and set of spans
 *  and a button with the text change 
 * Color and Background colors and when click
 *  in this button change the color and 
 * the background color randomly 
 */

var paras = document.getElementsByTagName("p");
var colors = ["red", "blue", "green", "yellow", "orange", "purple", "pink", "brown", "cyan", "magenta"];
var btn = document.getElementById("btn");
btn.addEventListener("click", function () {
  for (var i = 0; i < paras.length; i++) {
    var randCol = colors[Math.floor(Math.random() * colors.length)];
    var backCol = colors[Math.floor(Math.random() * colors.length)];
    paras[i].style.color = randCol;
    paras[i].style.backgroundColor = backCol;
  }
})










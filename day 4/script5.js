// Make an array that contains collection of 
// colors and then in page 
//load make a color of three paragraphs 
//randomly from the array


var paras = document.querySelectorAll("p");
var colors = ["red", "blue", "green", "yellow", "orange", "purple", "pink", "brown", "cyan", "magenta"];

function color() {
  paras.forEach(p => {
    var randomColor = Math.floor(Math.random() * colors.length);
    p.style.backgroundColor = colors[randomColor];
  })
}



// var colors = ["red", "blue", "green", "yellow", "orange", "purple", "pink", "brown", "cyan", "magenta"];
// var randomColor = Math.floor(Math.random() * colors.length);



// for (var i = 0; i < paras.length; i++) {
//   paras[i].style.color = Math.floor(Math.random() * colors.length)
// }




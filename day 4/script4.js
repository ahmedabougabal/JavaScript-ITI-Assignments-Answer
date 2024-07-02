// Make a bank of questions say 10 
// question and two buttons next and 
// previous when click on the next 
// navigate to the next question and when 
// click on the previous one go to the 
// previous question. 


var questions = [
  "who are u ?",
  "how old r u",
  "what is your n",
  "where do u work",
  "how much do u",
  "who is ur father",
  "who is ur mother",
  "what are ur homies",
  "do u play gta v",
  "hangout maybe?",
]
divOne = document.getElementById("exam");
var firstBtn = document.getElementById("btn-1");
var secondBtn = document.getElementById("btn-2");
var displayButton = document.getElementById("btn-0");
var index = 0;

function display() {
  divOne.innerText = questions[0];
}

function next() {
  if (index < questions.length - 1) {
    index++;
    divOne.innerText = questions[index];
  } else {
    divOne.innerText = "end of questions";
  }
}

function prev() {
  if (index > 0) {
    index--;
    divOne.innerText = questions[index];
  } else {
    divOne.innerText = "start of questions";
  }
}

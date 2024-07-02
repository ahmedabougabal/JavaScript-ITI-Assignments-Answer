var input = prompt("please enter a sentence");
function countChar() {
  var sum = 0;
  var size = input.length;
  for (var i = 0; i < size; i++) {
    if (input[i] === 'A' || input[i] === 'a') {
      sum++;
    }
  }
  alert("count of the letter 'a'/'A' is " + sum);
}

countChar()
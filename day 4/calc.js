var displayInp = document.getElementById("display");

var currentInput = '';

function key(pressed) {
  var value = pressed.innerText;
  // console.log(value)
  if (value === 'C') {
    currentInput = '';
    displayInp.value = currentInput;
  } else if (value === '=') {
    try {
      currentInput = eval(currentInput);
      displayInp.value = currentInput;
    } catch (error) {
      displayInp.innerText = "ERROR"
      currentInput = '';
    }
  } else {
    currentInput += value;
    displayInp.value = currentInput;
  }
}


//Make a function that accept array and character then remove this character from the array

function arrTune(arr, char) {
  var newArr = []
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] !== char && arr[i] !== ',') {
      newArr.push(arr[i]);
    }
  }
  alert("modified array is " + newArr.join(''))
}


var arr = "hello, this is abou gabal";
var char = 'h';
arrTune(arr, char);




function checkForRepeat(arr, num) {
  if (arr instanceof Array) {
    for (var i = 0; i < arr.length; i++) {
      if (arr.includes(num)) {
        alert("number is found");
        break;
      } else {
        alert("number is not found");
        break;
      }
    }
  } else {
    alert("sorry, this is not an array");
  }
}
var test = [1, 6, 54, 23, 15, 78, 90];
alert(checkForRepeat(test, 900));

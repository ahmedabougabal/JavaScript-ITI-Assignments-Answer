// Make function that accepts array and return the maximum number in the array.

function calcMax(arr) {
  if (arr instanceof Array) {
    alert("max num is " + Math.max(...arr));
  } else {
    alert("sorry this isnot an array");
  }
}

var arr = [1, 65, 34, 76, 23, 8, 69, 40, 90, 1000];
calcMax(arr);
// use the spread operator '...arr' to pass the arr to func
// operator spreads the array elements as individual arguments to the Math.max function
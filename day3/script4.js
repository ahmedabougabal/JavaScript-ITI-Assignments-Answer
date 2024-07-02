//* queryString : '?uname=ahmed&pass=fsdfsdfsdfs'
// my solution
var queryString = window.location.search;
var userName = "";
for (var i = queryString.indexOf('=') + 1;
  i < queryString.length; i++) {
  if (queryString[i] !== '&') {
    userName += queryString[i];
  } else {
    break;
  }
}
console.log("console test: " + userName);

document.write("welcome" + " " + userName)



// stack overflow solution
// var queryString = window.location.search;
// var urlParams = new URLSearchParams(queryString);
// var uname = urlParams.get('uname');

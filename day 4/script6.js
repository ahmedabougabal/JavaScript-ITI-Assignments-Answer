var uname = document.getElementById("username");
var form = document.querySelector("form");
function styleBorder() {
  uname.style.border = "solid 1px blue";
}

function revertBorder() {
  uname.style.border = "1px solid black";
}

var spanError = document.getElementById("err");
function unameCheck() {
  if (uname.value.length === 0 || uname.value.length < 3) {
    spanError.style.display = "inline";
    uname.style.border = "2px solid red";
  } else {
    spanError.style.display = "none";
    uname.style.border = "1px solid red";
  }
}

var p1 = document.getElementById("password1");
var p2 = document.getElementById("password2");

if (form) {
  form.addEventListener("submit", function (event) {
    if (p1.value !== p2.value) {
      event.preventDefault();
      alert("plz correct the validation errors first");
      alert("passwords don't match");
    }
  });
}

var divOne = document.getElementById("done");

var queryString = window.location.search;
var userName = "";
for (var i = queryString.indexOf("=") + 1; i < queryString.length; i++) {
  if (queryString[i] !== "&") {
    userName += queryString[i];
  } else {
    break;
  }
}
divOne.textContent = "welcome " + userName;






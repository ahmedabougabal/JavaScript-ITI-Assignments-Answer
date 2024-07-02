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
    spanError.textContent = "invalid name ";
    uname.style.border = "2px solid red";
  } else {
    spanError.style.display = "none";
    // uname.style.border = "1px solid red";
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
// acquire username from the query string using for loop
var queryString = window.location.search;
var userName = "";
for (var i = queryString.indexOf("=") + 1; i < queryString.length; i++) {
  if (queryString[i] !== "&") {
    userName += queryString[i];
  } else {
    break;
  }
}


//* moved to app2.js to prevent conflicts
// var textBox1 = document.getElementById("box1");
// textBox1.setAttribute("value", userName);
// divOne.textContent = "welcome " + userName;

//* moved to app2.js to prevent conflicts
// gettin the password from the query string using URLsearchParam
var param = new URLSearchParams(queryString);
var passkey = param.get("password1");
// var textBox2 = document.getElementById("box2");
// textBox2.setAttribute("value", passkey);


//* moved to app2.js to prevent conflicts
// function saveData() {
//   var userToBeSaved = textBox1.value;
//   var passToBeSaved = textBox2.value;
//   localStorage.setItem("fullName", userToBeSaved);
//   localStorage.setItem("password", passToBeSaved);
// }

function deleteData() {
  localStorage.removeItem("fullName");
}

//! Can you use session storage in the previous assignment? Why? 
//* yes i can, this can be decided based on the business logic of my system/website.

//! What’s the difference between local storage and session storage? 
//* local storage is best used when storing credentials on the host device is crucial, while
//* session storage is temporary and session dependent that when a tab is closed, all info stored to that tab
//* storage is lost. 


//*! Can you access local storage and session storage in another page than the page that created it (on the same site)? 
//* local : yes , session : no


// question 2

var checkBox = document.getElementById("myCheckbox");

// function rememberUser(){}

checkBox.addEventListener("click", function () {
  if (checkBox.checked) {
    localStorage.setItem("fullName", uname);
    localStorage.setItem("Password", passkey);
  } else {
    if (localStorage.getItem("fullName") === userName) {
      localStorage.removeItem("fullName");
      localStorage.removeItem("Password");
    }
  }
});

// *question 3
// !JSON OBJ
// var person = [
//   {
//     "ID": 999,
//     "name": "abou gabal",
//     "age": "24",
//     "address": {
//       "state": "mansoura",
//       "country": "egypt"
//     },
//     "skills": ["bodybuilding", "basketball",
//       "coding"],
//     "isLeader": true
//   }
// ]

var students = [
  {
    "ID": 999,
    "name": "abou gabal",
    "age": "24",
    "address": {
      "state": "mansoura",
      "country": "egypt"
    },
    "skills": ["bodybuilding", "basketball",
      "coding"],
    "isLeader": true
  },
  {
    "ID": 99392,
    "name": "ahmed fathy",
    "age": "23",
    "address": {
      "state": "belbis",
      "country": "ksa"
    },
    "skills": ["joking", "football",
      "faceSlam"],
    "isLeader": true
  },
  {
    "ID": 94399,
    "name": "mahmoud",
    "age": "24",
    "address": null,
    "skills": ["running", "cleaning dishes",
      "walking"],
    "isLeader": false
  }

]










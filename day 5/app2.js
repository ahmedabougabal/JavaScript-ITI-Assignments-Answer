var textBox1 = document.getElementById("box1");
textBox1.setAttribute("value", userName);
// divOne.textContent = "welcome " + userName;

// gettin the password from the query string using URLsearchParam
var param = new URLSearchParams(queryString);
var passkey = param.get("password1");
var textBox2 = document.getElementById("box2");
textBox2.setAttribute("value", passkey);





function saveData() {
  var userToBeSaved = textBox1.value;
  var passToBeSaved = textBox2.value;
  localStorage.setItem("fullName", userToBeSaved);
  localStorage.setItem("password", passToBeSaved);
}

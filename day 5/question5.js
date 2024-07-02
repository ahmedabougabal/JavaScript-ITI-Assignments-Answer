var inputTextBox = document.getElementById("text");
var myTextBox = document.getElementById("result");
var select = document.getElementById("selectId");


// fetch(get) user data from API using ajax
let convertedData;
function loadData() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (xhttp.readyState == 4 && xhttp.status == 200) {
      convertedData = JSON.parse(this.responseText);
      select.innerHTML = ''; // clear existing options
      for (var i = 0; i < convertedData.data.length; i++) {
        var user = convertedData.data[i];
        var option = document.createElement("option");
        if (inputTextBox.value == user.id) {
          myTextBox.value = user.first_name + " , id is " + user.id;
        }
        option.value = user.id;
        option.textContent = user.first_name + user.last_name;
        select.appendChild(option);
      }
    }
  }
  xhttp.open("GET", "https://reqres.in/api/users");
  xhttp.send(); // send the request 
}

var p1 = document.getElementById("firstName");
var p2 = document.getElementById("secondName");
var userImage = document.getElementById("userImage");
function dispNameImg() {
  // var selectedId = select.value;
  //* find is a built in function for arrays that 
  //* searches the array for the first element that satisfies a given condition.
  var user = convertedData.data.find(function (user) {
    return user.id == select.value;
  });
  if (user) {
    p1.textContent = "first name : " + user.first_name;
    p2.textContent = "last name : " + user.last_name;
    userImage.setAttribute("src", user.avatar);
  }
}



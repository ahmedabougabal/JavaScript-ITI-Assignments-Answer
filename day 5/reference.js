//JSON ==> JavaScript Object Notation

// var persons = [
//     {
//         "firstName": "Abanoub",
//         "lastName": "Nabil",
//         "age": 32,
//         "isTechLead": true,
//         "address": {
//             "state": {
//                 "stateName": "Egypt",
//                 "statePrefix": 20
//             },
//             "city": "Assiut",
//             "postalCode": 71111
//         },
//         "phones": [123, 456, 789]
//     },
//     {
//         "firstName": "Ahmed",
//         "lastName": "Mohamed",
//         "age": 25,
//         "isTechLead": false,
//         "address": {
//             "state": {
//                 "stateName": "Egypt",
//                 "statePrefix": 20
//             },
//             "city": "Cairo",
//             "postalCode": 89876
//         },
//         "phones": [888, 777, 555]
//     }
// ]


// console.log("first name is ", person.firstName);
// console.log("last name is ", person["lastName"]);
// console.log("state is ", person["address"]["state"]);
// console.log("state is ", person.address.state);
// for (var i = 0; i < person.phones.length; i++) {
//     console.log("phone number is", person.phones[i]);
// }
// console.log("state name is ",person.address.state.stateName)

// for (var i = 0; i < persons.length; i++) {
//     for (var j = 0; j < persons[i].phones.length; j++) {
//         console.log("perosn ",i+1 ,persons[i].phones[j])
//     }
// }

//*AJAX ==> Asynchrounos JavaScript and XML
//* IS not programming language
//* combination of
//*- XMLHttpRequest 
//*- DOM manuplation

//==>new XMLHttpRequest ===> create to a new object to send data to server
//==>abort() ===> cancel to the current request
//==>getAllResponseHeaders() ==> Return header information
//open(method,url,async) ==>specifies to the request
//send()  ==>Send the request to the server
//setRequestHeader() ==> Add a label/value pair to the header of the request

//readyState  ===> 0==>4
//0===>Request not intialized
//1===>Server connection established
//2===>Request recieved
//3===>Processing to the request
//4===>Request finished and response is ready

//responseText ==>returns the response data as a string

//===>from string to ===>JSON we use ===>JSON.parse(obj);
//===>from JSON ===>to string we use ===>JSON.stringfy(obj)

//Status ===> number 
//404 ===>not found
//403 ===>forbidden
//500  ==>internal server error
//200 ==>ok ==>GET
//201 ==>created ==>POST



//Implmention to ajax with examples

function loadData() {
  var xhttp = new XMLHttpRequest();

  xhttp.onreadystatechange = function () {
    if (xhttp.readyState == 4 && xhttp.status == 200) {
      var convertedData = JSON.parse(this.responseText);
      document.getElementById("firstTitle").innerHTML = convertedData[0].title
    }
  }
  xhttp.open("GET", "https://jsonplaceholder.typicode.com/posts", true);
  xhttp.send();
}

//CRUD
//Create ==>POST
//Read ==>GET
//UPDATE ==>UPDATE
//DELETE ==>DELETE


function saveData() {
  var xhttp = new XMLHttpRequest();

  var data = {
    "userId": 100,
    "id": 90,
    "title": "This is new title",
    "body": "This is new body"
  }
  xhttp.onreadystatechange = function () {
    if (xhttp.readyState == 4 && xhttp.status == 201) {
      var convertedData = JSON.parse(this.responseText);
      console.log(convertedData);
    }
  };
  xhttp.open("POST", "https://jsonplaceholder.typicode.com/posts", true);
  xhttp.send(JSON.stringify(data));
}


//*Web storage 
//*Local storage
//*Session storage

var txtName = document.getElementById("txtName");
function savaData() {
  var fullName = txtName.value;

  localStorage.setItem("fullName", fullName);

  var object = {
    "firstName": "Ahmed",
    "lastName": "Mohamed",
    "age": 30
  }

  localStorage.setItem("person", JSON.stringify(object))

}

function getData() {
  var fullName = localStorage.getItem("fullName");
  var person = JSON.parse(localStorage.getItem("person"));

  txtName.value = person.firstName;
}

function deleteData() {
  localStorage.removeItem("fullName");
}

function savaData() {
  var fullName = txtName.value;

  sessionStorage.setItem("fullName", fullName);

  var object = {
    "firstName": "Ahmed",
    "lastName": "Mohamed",
    "age": 30
  }

  sessionStorage.setItem("person", JSON.stringify(object))

}

function getData() {
  var fullName = sessionStorage.getItem("fullName");
  var person = JSON.parse(sessionStorage.getItem("person"));

  txtName.value = person.firstName;
}

function deleteData() {
  sessionStorage.removeItem("fullName");
}

function deleteAllValues() {
  localStorage.clear();
  sessionStorage.clear();
}
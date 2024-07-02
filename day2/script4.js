// //* parse int (converts a string to an integer)
// var input = prompt("please enter the date in the format (DD - MM - YYYY)");
// //! substr is deprecated, use substring instead.
// var input_day = parseInt(input.substr(0, 2));
// var days = [];
// for (var i = 0; i <= 31; i++) {
//   days.push(i);
// }

// var input_months = parseInt(input.substr(5, 2));
// var months = [];
// for (var i = 0; i <= 11; i++) {
//   months.push(i);
// }

// var input_years = parseInt(input.substr(10, 15));
// var years = [];
// for (var i = 1960; i <= 2024; i++) {
//   years.push(i);
// }

// function userInput() {
//   if (days.includes((input_day)) && months.includes((input_months))
//     && years.includes((input_years))) {
//     var myDate = new Date(input_years, input_months, input_day);
//     var year = myDate.getFullYear();
//     var day = myDate.getDate();
//     var month = myDate.getMonth();
//     alert(year + "-" + day + "-" + month);
//   }
//   else {
//     alert("wrong date format");
//   }
// }


// Show prompt that ask user to enter the date of today and tell user to 
// enter the date in the following format (DD–MM–YYYY) 
// ex. 22–01–1999, and then create function that take user input as 
// a parameter and ensure that the string is entered in this format 
// (that user entered string is 10 characters and contains (-) after the
//  second character and after fifth character). 
//  If the user input was correct: make the function create new date object, 
//  and initialize it with Day, Month, year values 
//  (using date constructor: Date(y,m,d)) and then show alert to the user 
//  with the date in date string format. If user input wasn't correct, 
//  show alert saying "Wong Date Format". Create button “show date” that
//   calls the function. (use string functions).

function showDate() {
  var inp = prompt("enter the date u wish");
  userInput(inp);
}
//* required format (DD–MM–YYYY) 
function userInput(inp) {
  if (inp.length === 10 && inp.charAt(2) === '-' && inp.charAt(5) === '-') {
    var day = parseInt(inp.slice(0, 2));
    var month = parseInt(inp.slice(3, 5)) - 1;
    var year = parseInt(inp.slice(6, 10));
    if (day && month && year) {
      var myDate = new Date(year, month, day);
      if (myDate.getFullYear() === year && myDate.getMonth() === month
        && myDate.getDate() === day) {
        alert(myDate.toDateString());
      } else {
        alert("invalid format");
      }
    } else {
      alert("invalid format");
    }
  } else {
    alert("invalid format");
  }
}


// Full Name should be characters only (without numbers or special characters) and has the following structure: 

// Characters (alphabetic only) more than 3. 

// Then one space. 

// And finally some other characters (alphabetic only) more than 3  

// This pattern may be repeated, so it can contain other spaces but after each space 
//must be 3 alphabetic characters at least (like full name, each part is 3 letters at least, 
//and separated by a space).

// And shouldn’t start or end with spaces or special characters. 

var userName = prompt("please enter your name ");
var reg = /^([a-zA-Z]{3,})(\s[a-zA-Z]{3,})*$/
var result1 = reg.test(userName);
if (result1) {
  console.log("true");
} else {
  console.log("false");
}


// Email must be from Egypt (.eg domain), for example name@domain.com.eg 
// (.com.eg, .net.eg, .edu.eg or .org.eg [.eg is a must], don’t allow any other domains). 

var email = prompt("PLEASE ENTER YOUR EMAIL");
var pattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.(com|net|edu|org).eg$/
var result2 = pattern.test(email);
if (result2) {
  console.log("true");
} else {
  console.log("false");
}












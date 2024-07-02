// question 1
// alert("welcome to my site");

// var hisName = prompt("please enter your name");

// function display(){
//   alert("welcome" + " " + hisName);
// }

// display();


//question 2
// var result = function(num1, num2){
//   return num1 + num2;
// }
// var num1 =parseInt( prompt("enter the first num"));
// var num2= parseInt( prompt("enter the second num"));

// alert(result(num1,num2));



// question 5
// function checkForWord(){
//     // var input1 = prompt("please enter a string");
//     // var input2 = prompt("please enter a word");
//     // if(input1.includes(input2)){
//     //     alert("found");
//     //   } else{
//     //       alert("not found");
//     //     }
//     //   }
      



  // question 6

  function temp(){
    var preference = prompt("convert to c or f ?")
    var input = parseFloat(prompt("enter the temp"));
    if(preference === "c" || preference === "clesius" ){
      console.log(input*(9/5)+32);
    }else if(preference.toLowerCase() ==="f"|| preference === "fahrenhite"){
      console.log((input-32)*(5/9));
    }
    else {
      console.log("invalid")
    }
  }
  temp();

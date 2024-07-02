var pass = document.getElementById("password");
var btn = document.createElement("button");
btn.setAttribute('class', 'show');
btn.innerHTML = "show password";
var divOne = document.getElementById("one");
divOne.appendChild(btn);
btn.addEventListener("click", function () {
  if (pass.getAttribute("type") == "password") {
    pass.setAttribute("type", "text");
  } else {
    pass.setAttribute("type", "password");
  }
})



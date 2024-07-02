function showTip() {
  var arr = new Array(
    "JavaScript enhances web pages and creates interactive UIs.",
    "It manipulates the DOM to dynamically change web content.",
    "JavaScript is crucial in web development, along with HTML and CSS.",
    "Frameworks like React and Angular help build complex apps.",
    "JavaScript supports event-driven programming for interactivity.",
    "Use callbacks, promises, and async/await for asynchronous code.",
    "JavaScript works on both client and server sides, thanks to Node.js.",
    "ES6 added arrow functions, template literals, and destructuring.",
    "JavaScript has many libraries available through npm.",
    " Understanding the event loop is key for performance optimization."
  );
  var randNum = Math.floor(Math.random() * arr.length);
  alert(arr[randNum]);
}
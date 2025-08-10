// document object model

// Example of DOM manipulation
// document.body.innerHTML = "<h1>Hello, World!</h1>"; // to add a button by js in webpage
document.title = "DOM Example";

console.log(typeof document.body); // "object"
console.log(document.body.innerHTML)
// document.body.innerHTML = "<button>Hello, World!</button>";

document.querySelector("button").innerHTML = "First !"; // changing 1st button text
document.querySelector(".bb").innerHTML = "Second !"; // changing button text using class selector
document.querySelector("#c").innerHTML = "Third !"; // changing button text using id selector


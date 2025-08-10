console.log("Welcome to JS"); // print in console

// vriables
let a = 5; // variable declaration
a = 20; // variable reassignment
let b = 10.0;
let c = "Pk";
console.log(a, b, c);

const d = 50; // constant declaration
// d = 60; // Uncommenting this line will cause an error because 'd' is a constant
console.log(d);


// data types
let num = 42; // number
let str = "Hello, World!"; // string
let bool = true; // boolean
let arr = [1, 2, 3]; // array
let obj = { key: "value" }; // object
let func = function () { return "I am a function"; }; // function   
let undef; // undefined
let nul = null; // null
// console.log(num, str, bool, arr, obj, func(), undef, nul);


// operators
let x = 10;
let y = 5;
let sum = x + y; // addition
let diff = x - y; // subtraction
let prod = x * y; // multiplication
let quot = x / y; // division
let mod = x % y; // modulus
let inc = x++; // increment
let dec = y--; // decrement
console.log("Sum: " + sum);
console.log("Difference: " + diff);
console.log("Product: " + prod);
console.log("Quotient: " + quot);
console.log("Modulus: " + mod);
console.log("Incremented x: " + inc);
console.log("Decremented y: " + dec);


// conditional statements
if (a > b) {
    console.log("a is greater than b");
} else if (a < b) {
    console.log("a is less than b");
}
else {
    console.log("a is equal to b");
}


// for loop
for (let i = 0; i < 5; i++) {
    console.log("Iteration number: " + i);
}

// for of loop
arr = [1, 2, 3, 4, 5];
for (let num of arr) {
    console.log("Number: " + num);
}

// for in loop
let dict = { name: "Pk", age: 25, city: "Pune", "state": "jharkhand" }; // dictionary is object in js
for (let key in dict) {
    console.log("Key: " + key + ", Value: " + dict[key]);
}

// while loop
let i = 0;
while (i < 5) {
    console.log("While loop iteration: " + i);
    i++;
}

// do while loop
let j = 0;
do {
    console.log("Do while loop iteration: " + j);
    j++;
} while (j < 5);


// switch case
let day = 3; // example day
switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid day");
}


// objects
let person = {
    name: "Pk",
    age: 25,
    rating: { // nested object
        stars: 4.5,
        count: 100
    },
    greet: function () { return "Hello, " + this.name; },
    getAge: function f() { return "Your Age is " + this.age; }
};
console.log(person.greet() + " , " + person.getAge()); // calling method of object
console.log("Name: " + person.name); // accessing object property
console.log("rating: " + person.rating.stars + " stars from " + person.rating.count + " reviews"); // accessing nested object property

person.age = 26; // updating value in object
console.log("Updated Age: " + person.age); // accessing updated value in object

person.country = "India"; // adding new key-value pair to object
console.log("New Country: " + person.country); // accessing new key-value pair in object 

delete person.country; // deleting key-value pair from object
console.log("After deletion, country: " + person.country); // accessing deleted key-value pair 


// joson creation from object
let jsonString = JSON.stringify(person); // converting object to JSON string
console.log("JSON String: " + jsonString); // printing JSON string

// parsing JSON string back to object
let jsonObject = JSON.parse(jsonString); // converting JSON string back to object
console.log("Parsed Object: ", jsonObject); // printing parsed object


// arrays
let numbers = [1, 2, 3, 4, 5]; // array declaration
numbers.push(6); // adding element at the end
console.log("Array after push: " + numbers);
numbers.pop(); // removing last element
console.log("Array after pop: " + numbers);
console.log("First element: " + numbers[0]); // accessing array element
console.log("Array length: " + numbers.length); // array length


// functions
function greet(name) {
    return "Hello, " + name + "!";
}
console.log(greet("Pk")); // calling the function

// arrow function
const add = (a, b) => a + b; // arrow function
console.log("Sum using arrow function: " + add(5, 10));


// localStorage
localStorage.setItem("person", person); // setting item in localStorage
localStorage.setItem("person", JSON.stringify(person)); // setting item in localStorage as JSON string
obj = JSON.parse(localStorage.getItem("person")); // getting item from localStorage and parsing it
console.log("Person from localStorage: ", obj); // printing object from localStorage
localStorage.removeItem("person"); // removing item from localStorage


// autoboxing and unboxing
console.log("pk".length); // accessing length property of string (autoboxing)
console.log("pk".toUpperCase()); // calling method on string (autoboxing)
console.log("5" + 5); // string concatenation (type coercion)
console.log(Number("5") + 5); // converting string to number (explicit type conversion)

const obj1 = { name: "Pk", age: 25 }; // object creation
const boj2 = obj1;
const obj3 = { name: "pk", age: 25 };

console.log(obj1 === boj2); // true, same reference
console.log(obj1 === obj3); // false, different reference

// const name = obj3.name; // accessing property of object
const { name, age } = obj3; // destructuring assignment
console.log(name + " " + age); // printing name from destructured object

const obj4 = {
    name, //sort-hand property

    // method : function() {
    //     return "Hello, " + this.name;
    // }

    method() { //sort-hand method
        return "Hello, " + this.name;
    }
}
console.log(obj4.method()); // calling method of object with destructured properties

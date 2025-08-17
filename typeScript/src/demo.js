// js
var x = 2;
var y = 3;
var sum = x + y;
var agejs = 17;
console.log(sum);
// ts
var name1 = "pk"; // default value
var agets;
var address;
var isSingle;
var isSingle2;
var cloth;
var re = /\w+/g;
name1 = "pk";
agets = 25;
address = "pindatand";
isSingle = true;
isSingle2 = true;
isSingle2 = "yes";
cloth = 5;
cloth = 'shirt and pant';
var voting = function (age) {
    if (age > 18 || age === 18) {
        console.log("You are eligible !");
    }
    else {
        console.log("Your age is less Please wait for ".concat(18 - age, " years"));
    }
};
// or 
var votingts = function isValidForVote(age) {
    if (age === void 0) { age = 10; }
    if (age > 18 || age === 18) {
        console.log("You are eligible !");
    }
    else {
        console.log("Your age is less Please wait for ".concat(18 - age, " years"));
    }
};
voting(agejs);
votingts(agets);
// array
// order of type is not fix in array but  you can fix by tuple
var stringArray = ['one', 'two', 'three']; // typeScript understand automaticly as string[]
stringArray[0] = 'pk'; // that's fine
stringArray.push('pk');
// stringArray[0] = 1 // error can't assign number to string[]
// stringArray.push(2) // error
var guitars = ['strat', 'les paul', 5500]; // typeScript understand automaticly as (string | number)[]
guitars[0] = 1;
guitars.push('pk');
// guitars[0] = true // error can't assign boolean to (string | number)[]
var mixedData = ['abc', true, 2003]; // typeScript understand automaticly as (string | number | boolean)[]
mixedData[0] = 1; // all fine
mixedData.push('pk');
mixedData[0] = true;
mixedData = guitars; // correct
// guitars = mixedData // wrong
// tuple
// tuple fix tha type order
var myTuple = ['pk', 23, true];
// myTuple = mixedData // wrong beause it follow a type strictly in tuple
mixedData = myTuple; // correct beacuse array not follow type strictly
// object
var obj; // 'object' type means it can hold any non-primitive ({} | [] | function etc.)
obj = {}; // empty object - ✅ valid
obj = []; // arrays are also objects in JS/TS - ✅ valid
// obj = 'pk'     // ❌ error because 'pk' is a string (primitive, not object)
obj = { name: 'pk', valid: true }; // ✅ valid object
// obj.name = true; // ❌ error (TS doesn't know 'obj' shape, only that it's 'object')
// obj.valid = 'pk' // ❌ error (same reason above)
obj = mixedData; // ✅ no problem because arrays are objects
var userId = "abc123";
userId = 101; // ✅ works
var s = {
    name: 'pk',
    age: 23,
    album: ['abc'],
    isSingle: true
};
// object following the contract
var s2 = {
    name: "Ashish",
    age: 23,
    isSingle: true,
    album: ["abc"]
};
var gs = {
    name: "Pradhuman",
    age: 25,
    isSingle: false,
    album: [],
    degree: "M.Tech"
};
// function using the interface
var represent = function (s2) {
    if (s2.name) {
        return "Hello ".concat(s2.name.toUpperCase()); // use toUpperCase safely (only if 'a' exists)
    }
    else {
        return "Hello !";
    }
};
console.log(represent(s2)); // -> "Hello !" (because 'a' not provided)
// enums (set of named constants) 👉 Used to define a set of named constants (instead of magic numbers or strings).
var grade;
(function (grade) {
    grade[grade["u"] = 0] = "u";
    grade[grade["d"] = 1] = "d";
    grade[grade["c"] = 2] = "c";
    grade[grade["b"] = 3] = "b";
    grade[grade["a"] = 4] = "a"; // = 4
})(grade || (grade = {}));
console.log(grade); // {0: 'u', 1: 'd', 2: 'c', 3: 'b', 4: 'a', u: 0, d: 1, c: 2, b: 3, a: 4}
var grade1;
(function (grade1) {
    grade1[grade1["u"] = 1] = "u";
    grade1[grade1["d"] = 2] = "d";
    grade1[grade1["c"] = 3] = "c";
    grade1[grade1["b"] = 4] = "b";
    grade1[grade1["a"] = 5] = "a"; // = 5
})(grade1 || (grade1 = {}));
console.log(grade); // {0: 'u', 1: 'd', 2: 'c', 3: 'b', 4: 'a', u: 0, d: 1, c: 2, b: 3, a: 4}

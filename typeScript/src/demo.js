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
var obj;
obj = {};
obj = [];
// obj = 'pk' // not correct
obj = { name: 'pk', valid: true };
// obj.name = true; // error
// boj.valid = 'pk' // error
obj = mixedData; // no problem beacause array is also a object
var s1 = {
    name: 'pk',
    age: 23,
    album: ['abc'],
    isSingle: true
};
// let s2: student = { // all field of type student not present so error
//     name: 'pk',
//     age: 23,
//     isSingle: true
// }

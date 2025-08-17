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
var stringArray = ['one', 'two', 'three']; // typeScript understand automaticly as string[]
stringArray[0] = 'pk'; // that's fine
stringArray.push('pk');
// stringArray[0] = 1 // error can't assign number to string[]
// stringArray.push(2) // error
var guitars = ['strat', 'les paul', 5500]; // typeScript understand automaticly as (string | number)[]
guitars[0] = 1;
guitars.push('pk');
// guitars[0] = true // error can't assign boolean to (string | number)[]
var mixedData = ['abc', 1984, true]; // typeScript understand automaticly as (string | number | boolean)[]
mixedData[0] = 1; // all fine
mixedData.push('pk');
mixedData[0] = true;

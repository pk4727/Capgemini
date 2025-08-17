// js
let x = 2;
let y = 3;
const sum = x + y;
const agejs = 17;
console.log(sum);

// ts

let name1: string = "pk"; // default value
let agets: number;
let address: string;
let isSingle: boolean;
let isSingle2: boolean | string;
let cloth: any;
let re: RegExp = /\w+/g

name1 = "pk"
agets = 25
address = "pindatand"
isSingle = true;
isSingle2 = true;
isSingle2 = "yes"
cloth = 5
cloth = 'shirt and pant'

const voting = (age: number) => {
    if (age > 18 || age === 18) {
        console.log("You are eligible !");
    } else {
        console.log(`Your age is less Please wait for ${18 - age} years`);
    }
};

// or 

const votingts = function isValidForVote(age = 10) { // if you not give any default value or type in parameter then it give error
    if (age > 18 || age === 18) {
        console.log("You are eligible !");
    }
    else {
        console.log(`Your age is less Please wait for ${18 - age} years`);
    }
};

voting(agejs);
votingts(agets);


let stringArray = ['one', 'two', 'three'] // typeScript understand automaticly as string[]
stringArray[0] = 'pk' // that's fine
stringArray.push('pk')
// stringArray[0] = 1 // error can't assign number to string[]
// stringArray.push(2) // error


let guitars = ['strat', 'les paul', 5500] // typeScript understand automaticly as (string | number)[]
guitars[0] = 1
guitars.push('pk')
// guitars[0] = true // error can't assign boolean to (string | number)[]


let mixedData = ['abc', 1984, true] // typeScript understand automaticly as (string | number | boolean)[]
mixedData[0] = 1 // all fine
mixedData.push('pk')
mixedData[0] = true


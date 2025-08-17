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


// array
// order of type is not fix in array but  you can fix by tuple

let stringArray = ['one', 'two', 'three'] // typeScript understand automaticly as string[]
stringArray[0] = 'pk' // that's fine
stringArray.push('pk')
// stringArray[0] = 1 // error can't assign number to string[]
// stringArray.push(2) // error

let guitars = ['strat', 'les paul', 5500] // typeScript understand automaticly as (string | number)[]
guitars[0] = 1
guitars.push('pk')
// guitars[0] = true // error can't assign boolean to (string | number)[]

let mixedData = ['abc', true, 2003] // typeScript understand automaticly as (string | number | boolean)[]
mixedData[0] = 1 // all fine
mixedData.push('pk')
mixedData[0] = true

mixedData = guitars // correct
// guitars = mixedData // wrong


// tuple
// tuple fix tha type order
let myTuple: [string, number, boolean] = ['pk', 23, true]

// myTuple = mixedData // wrong beause it follow a type strictly in tuple
mixedData = myTuple // correct beacuse array not follow type strictly


// object
let obj: object
obj = {}
obj = []
// obj = 'pk' // not correct
obj = { name: 'pk', valid: true }
// obj.name = true; // error
// boj.valid = 'pk' // error
obj = mixedData // no problem beacause array is also a object

type student = {
    name: string,
    age: number,
    album: string[],
    address?: string, // not compulsry to write where this type used
    isSingle: boolean
}

let s1: student = {
    name: 'pk',
    age: 23,
    album: ['abc'],
    isSingle: true
}

// let s2: student = { // all field of type student not present so error
//     name: 'pk',
//     age: 23,
//     isSingle: true
// }

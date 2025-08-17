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
let obj: object   // 'object' type means it can hold any non-primitive ({} | [] | function etc.)

obj = {}          // empty object - ✅ valid
obj = []          // arrays are also objects in JS/TS - ✅ valid
// obj = 'pk'     // ❌ error because 'pk' is a string (primitive, not object)
obj = { name: 'pk', valid: true } // ✅ valid object
// obj.name = true; // ❌ error (TS doesn't know 'obj' shape, only that it's 'object')
// obj.valid = 'pk' // ❌ error (same reason above)
obj = mixedData // ✅ no problem because arrays are objects


// user defined type (type alias) 👉 Used to create custom types (aliases) for variables, objects, functions, unions, intersections, etc.
// simple alias
type ID = string | number;

let userId: ID = "abc123";  
userId = 101; // ✅ works

type student = {
    name: string,
    age: number,
    album: string[],     // array of strings
    address?: string,    // optional property (not compulsory where this type is used)
    isSingle: boolean
}

let s: student = {
    name: 'pk',
    age: 23,
    album: ['abc'],
    isSingle: true
}

//  let s1: student = {  // ❌ error because 'album' property is missing (required field)
//     name: 'pk',
//     age: 23,
//     isSingle: true
// }


// Type Aliases => A "type alias" gives a custom name to a type (can be primitive, union, object, etc.)

type stringNumber = string | number       // alias for "string or number"
type stringNumberArray = (string | number)[]   // alias for array of (string | number)

// alias for object type
type guitarist = {
    name?: string,          // optional property (may or may not be present)
    active: boolean,        // required boolean
    albums: stringNumberArray // array of string or number
}

type userId = stringNumber  // alias for user id (can be string or number)
// interface x = stringNumber // ❌ Not supported (interfaces can only describe object/class shapes, not unions or primitives)


// Literal Types => A variable can only hold EXACTLY the values you specify (not any string/number)
let userName: 'Pk' | 'Dk' | 'Kk'  // userName can only be "Pk", "Dk", or "Kk"
userName = 'Kk'  // ✅ valid
// userName = 'Rk' // ❌ error (not allowed)


// interface (similar to type but interfaces are extendable and better for OOP-style code.) 
// 👉 Used to define the shape of objects or classes. It’s like a contract that objects must follow.

interface Student1 {
    name?: string;
    age: number;
    isSingle: boolean;
    album: string[];
}

// object following the contract
let s2: Student1 = {
    name: "Ashish",
    age: 23,
    isSingle: true,
    album: ["abc"]
};

// extending an interface
interface GraduateStudent extends Student1 {
    degree: string;
}

let gs: GraduateStudent = {
    name: "Pradhuman",
    age: 25,
    isSingle: false,
    album: [],
    degree: "M.Tech"
};

// function using the interface
const represent = (s2: Student1) => {
    if (s2.name) {
        return `Hello ${s2.name.toUpperCase()}`;  // use toUpperCase safely (only if 'a' exists)
    } else {
        return "Hello !"
    }
}
console.log(represent(s2)); // -> "Hello !" (because 'a' not provided)


// enums (set of named constants) 👉 Used to define a set of named constants (instead of magic numbers or strings).
enum grade {
    u,  // default value = 0
    d,  // = 1
    c,  // = 2
    b,  // = 3
    a   // = 4
}
console.log(grade); // {0: 'u', 1: 'd', 2: 'c', 3: 'b', 4: 'a', u: 0, d: 1, c: 2, b: 3, a: 4}

enum grade1 {
    u = 1,  // value = 1 next = current + 1
    d,  // = 2
    c,  // = 3
    b,  // = 4
    a   // = 5
}
console.log(grade); // {0: 'u', 1: 'd', 2: 'c', 3: 'b', 4: 'a', u: 0, d: 1, c: 2, b: 3, a: 4}


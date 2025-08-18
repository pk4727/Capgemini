type on = string
type to = string | number
type th = 'hello'

// convert to more or less specific
let a: on = 'hello'
let b = a as to // less specific
let c = a as th // more specific

let d = <on>'hello'
let e = <string | number>'world'

const addConcat = (a: number, b: number, c: 'add' | 'concat'):
    number | string => {
    if (c === 'add') return a + b
    return '' + a + b
}

const add: number = addConcat(2, 3, 'add') as number
const concat: string = addConcat(2, 3, 'concat') as string // this is an error but ts not understand it

// unknown | double casting
(10 as unknown) as string



// -------------------- Index Signature Example --------------------

// Interface with fixed properties (a, b, c)
interface transactionObj {
    a: number;
    b: number;
    c: number;
}


// Extended interface with Index Signature
// Means: any property with a string key must have a number value
interface transactionObj {
    readonly [index: string]: number; // not allow to modify
    a: number; // explicit required property
    b: number;
    c: number;
}

// Object that follows the interface
const todayTransObj: transactionObj = {
    a: -10,
    b: 5,
    c: 50,
    d: 25 // ✅ allowed because of index signature
};
// todayTransObj.a = 5  // Index signature in type 'transactionObj' only permits reading.
console.log(todayTransObj.a);   // -10
console.log(todayTransObj[e]);
console.log(todayTransObj["b"]); // 5 (if index is not then error)


// Using variable as key
let f: string = 'c';
console.log(todayTransObj[f]);  // 50


const todaysNet = (trans: transactionObj): number => {
    let total = 0;
    // "for...in" iterates over object keys
    for (const t in trans) {
        if (typeof trans[t] === 'number') {
            total += trans[t];
        }
    }
    return total;
}
console.log(todaysNet(todayTransObj)); // 45
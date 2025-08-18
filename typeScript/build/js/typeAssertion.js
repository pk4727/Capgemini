// convert to more or less specific
let a = 'hello';
let b = a; // less specific
let c = a; // more specific
let d = 'hello';
let e = 'world';
const addConcat = (a, b, c) => {
    if (c === 'add')
        return a + b;
    return '' + a + b;
};
const add = addConcat(2, 3, 'add');
const concat = addConcat(2, 3, 'concat'); // this is an error but ts not understand it
// unknown | double casting
10;
// Object that follows the interface
const todayTransObj = {
    a: -10,
    b: 5,
    c: 50,
    d: 25 // ✅ allowed because of index signature
};
// todayTransObj.a = 5  // Index signature in type 'transactionObj' only permits reading.
console.log(todayTransObj.a); // -10
console.log(todayTransObj[e]);
console.log(todayTransObj["b"]); // 5 (if index is not then error)
// Using variable as key
let f = 'c';
console.log(todayTransObj[f]); // 50
const todaysNet = (trans) => {
    let total = 0;
    // "for...in" iterates over object keys
    for (const t in trans) {
        if (typeof trans[t] === 'number') {
            total += trans[t];
        }
    }
    return total;
};
console.log(todaysNet(todayTransObj)); // 45
export {};
//# sourceMappingURL=typeAssertion.js.map
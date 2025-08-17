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
export {};
//# sourceMappingURL=typeAssertion.js.map
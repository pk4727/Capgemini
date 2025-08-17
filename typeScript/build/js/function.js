// Function with explicit return type 'number'
const add = (a, b) => {
    return a + b;
};
const sub = function (a, b) {
    return a - b;
};
// Function returning nothing → return type is 'void'
const message = (message) => {
    console.log(message);
};
// Using the functions
console.log(add(5, 2)); // 7
console.log(sub(5, 2)); // 3
message("Hello !"); // Hello !
message(`Sum = ${add(2, 3)}`); // Sum = 5
// all three are same but different way (mul3 is best)
let mul1 = (a, b) => {
    return a * b;
};
let mul2 = function (a, b) {
    return a * b;
};
let mul3 = function (a, b) {
    return a * b;
};
console.log(`mul1 = ${mul1(2, 3)} | mul2 = ${mul2(2, 3)} | mul3 = ${mul3(2, 3)}`);
// optional perameter
let addAll = (a, b, c) => {
    if (c) {
        return a + b + c;
    }
    else {
        return a + b;
    }
};
let sumAll = (a, b, c = 2) => {
    return a + b + c;
};
message(addAll(2, 3, 4));
message(addAll(2, 3));
message(sumAll(2, 3));
// Rest perameters
const total = (...nums) => {
    return nums.reduce((pre, curr) => pre + curr);
};
message(total(1, 2, 3, 4, 5));
const total2 = (a, ...nums) => {
    return a + nums.reduce((pre, curr) => pre + curr);
};
message(total2(1, 2, 3, 4, 5));
const infinite = () => {
    let i = 0;
    while (true) {
        i++;
        message(i);
        if (i > 100)
            break;
    }
};
// infinite()
const isNumber = (value) => {
    return true ? typeof (value) === 'number' : false;
};
message(isNumber(5));
// error (never)
const creatError = (error) => {
    throw new Error(error);
};
const numberOrString = (value) => {
    if (typeof value === 'string')
        return 'string';
    if (isNumber(value))
        return "number";
    return creatError("this should never happen !");
};
message(numberOrString('pk'));
export {};
//# sourceMappingURL=function.js.map
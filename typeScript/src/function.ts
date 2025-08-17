// Function with explicit return type 'number'
const add = (a: number, b: number): number => {
    return a + b;
}

const sub = function (a: number, b: number): number {
    return a - b;
}

// Function returning nothing → return type is 'void'
const message = (message: any): void => {
    console.log(message);
}

// Using the functions
console.log(add(5, 2));                // 7
console.log(sub(5, 2));                // 3
message("Hello !");                    // Hello !
message(`Sum = ${add(2, 3)}`);          // Sum = 5


// function using type aliases

// type mathFunction = (a: number, b: number) => number // this 
interface mathFunction { (a: number, b: number): number } // or this both are same but different behavior

// all three are same but different way (mul3 is best)
let mul1 = (a: number, b: number): number => {
    return a * b;
}

let mul2 = function (a: number, b: number): number {
    return a * b;
}

let mul3: mathFunction = function (a, b) {
    return a * b
}
console.log(`mul1 = ${mul1(2, 3)} | mul2 = ${mul2(2, 3)} | mul3 = ${mul3(2, 3)}`);


// optional perameter
let addAll = (a: number, b: number, c?: number): // c = undefine if not provide
    number => {
    if (c) {
        return a + b + c;
    } else {
        return a + b;
    }
}

let sumAll = (a: number, b: number, c: number = 2): // c = 2 (default value) if not provide
    number => {
    return a + b + c;
}
message(addAll(2, 3, 4));
message(addAll(2, 3));
message(sumAll(2, 3));


// Rest perameters
const total = (...nums: number[]): number => {
    return nums.reduce((pre, curr) => pre + curr)
}
message(total(1, 2, 3, 4, 5));

const total2 = (a: number, ...nums: number[]): number => {
    return a + nums.reduce((pre, curr) => pre + curr)
}
message(total2(1, 2, 3, 4, 5));

const infinite = () => {
    let i: number = 0;
    while (true) {
        i++
        message(i)
        if (i > 100) break
    }
}
// infinite()

// custom type guard
const isNumber = (value: number) => {
    return true ? typeof (value) === 'number' : false;
}
message(isNumber(5));

// error (never type)
const creatError = (error: string): never => {
    throw new Error(error);
}

const numberOrString = (value: number | string): string => {
    if (typeof value === 'string') return 'string'
    if (isNumber(value)) return "number"
    return creatError("this should never happen !")
}
message(numberOrString('pk'));
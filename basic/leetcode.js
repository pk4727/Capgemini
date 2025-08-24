// Note 👉 That’s 6 arguments being passed. But the function definition only has 2 parameters.
// In JavaScript, extra arguments are ignored unless you explicitly handle them (e.g., using arguments object or rest parameters ...args).

// functions.toReversed();  // Reverse the array of functions so that the last function in the original array is applied first (composition rule)
// await promise1; // Since promise1 is already a promise, you just need to wait for its value:


/**
 * @param {number[]} arr
 * @param {Function} fn
 */
var map = function (arr, fn) { // 2635
    let newArr = []
    arr.forEach((item, index) => {
        newArr.push(fn(item, index)); // extra arguments are ignored
    });
    return newArr;
};
// Given an integer array arr and a mapping function fn, return a new array with a transformation applied to each element.
// The returned array should be created such that returnedArray[i] = fn(arr[i], i).

// console.log(map([10, 20, 30], function constant(n, i) { return 42; }))
// console.log(map([1, 2, 3], function plusI(n, i) { return n + i; }))
// console.log(map([1, 2, 3], function plusone(n) { return n + 1; }))  // extra arguments are ignored



/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function (arr, fn) { // 2634
    let newArr = []
    arr.forEach((item, index) => {
        let truth = fn(item, index);
        if (truth) {
            newArr.push(item); // only push those item that are true a/c to function
        }
    });
    return newArr;
};
// filteredArr should only contain the elements from the arr for which the expression fn(arr[i], i) evaluates to a truthy value. 
// A truthy value is a value where Boolean(value) returns true.

// console.log(filter([0, 10, 20, 30], function greaterThan10(n) { return n > 10; }))
// console.log(filter([1, 2, 3], function firstIndex(n, i) { return i === 0; }))
// console.log(filter([-2, -1, 0, 1, 2], function plusOne(n) { return n + 1 }))



/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function (nums, fn, init) { // 2626
    let accum = init;
    nums.forEach(item => {
        accum = fn(accum, item);
    });
    return accum;
};
// This result is achieved through the following operations: val = fn(init, nums[0]), val = fn(val, nums[1]), val = fn(val, nums[2]), ... 
// until every element in the array has been processed. The ultimate value of val is then returned.

reduce([1, 2, 3, 4], function sum(accum, curr) { return accum + curr; })
reduce([1, 2, 3, 4], function sum(accum, curr) { return accum + curr * curr; })
reduce([], function sum(accum, curr) { return 0; })



/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function (functions) { // 2629
    return function (x) {
        functions = functions.toReversed();  // Reverse the array of functions so that the last function in the original array is applied first (composition rule)
        functions.forEach(fun => {
            x = fun(x);   // Update `x` after applying each function
        })
        return x;
    }
};

var compose = function (functions, x) {
    return function (x) {
        for (let i = functions.length - 1; i >= 0; i--) { // Loop through the functions array in reverse order (from the last function to the first function)
            x = functions[i](x);
        }
        return x;
    }
};
// The function composition of [f(x), g(x), h(x)] is fn(x) = f(g(h(x))). 
// The function composition of an empty list of functions is the identity function f(x) = x.

compose([x => x + 1, x => 2 * x], 4) // 65
compose([x => 10 * x, x => 10 * x, x => 10 * x], x = 1) // 1000
compose([], x = 42) // 42



/**
 * @param {...(null|boolean|number|string|Array|Object)} args
 * @return {number}
 */
var argumentsLength = function (...args) { //
    let length = 0;
    args.forEach(ele => {
        length++;
    })
    return length;
};

argumentsLength(1, 2, 3); // 3
argumentsLength([{}, null, "3"]) // 3


/**
 * @param {Function} fn
 * @return {Function}
 */
var once = function (fn) { // 2666
    let funCall = 0;
    let ans;
    return function (...args) {
        if (funCall < 1) {
            ans = fn(...args);
            funCall++
            return ans;
        } else {
            return undefined
        }
    }
};

/**
 * let fn = (a,b,c) => (a + b + c)
 * let onceFn = once(fn)
 *
 * onceFn(1,2,3); // 6
 * onceFn(2,3,6); // returns undefined without calling fn
 */


// =============================== Promise =========================

/**
 * @param {number} millis
 * @return {Promise}
 */
async function sleep(millis) { // 2621
    return new Promise(resolve => {
        setTimeout(resolve, millis)
    });
}
// Given a positive integer millis, write an asynchronous function that sleeps for millis milliseconds. It can resolve any value.



/**
 * @param {Promise} promise1
 * @param {Promise} promise2
 * @return {Promise}
 */
var addTwoPromises = async function (promise1, promise2) { //2723
    const first = await promise1; // Since promise1 is already a promise, you just need to wait for its value:
    const second = await promise2;
    return first + second;
};

var addTwoPromises = async function (promise1, promise2) {
    return Promise.all([promise1, promise2]).then(([a, b]) => a + b)
};

/**
 * addTwoPromises(Promise.resolve(2), Promise.resolve(2))
 *   .then(console.log); // 4
 */



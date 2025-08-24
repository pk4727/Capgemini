// x.sort((a, b) => a.localeCompare(b)); // modified sorting in string

// x.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));    // not case sencetive
// x.sort((a, b) => a[1].localeCompare(b[1]));                          // a/c to any index
// x..sort((a, b) => a.localeCompare(b, undefined, { numeric: true })); // if any number in string then a/c to number

// Object.values(obj).sort((a, b) => a.age - b.age); // ignoring key in [ {} ]
// Object.fromEntries(Object.entries(obj).sort(([, v1], [, v2]) => v1.age - v2.age)); // with key in { {} }




// 🔹 Most Frequently Used (💯 must-know) Properties of string
// Core      → length, charAt
// Searching → includes, indexOf, lastIndexOf, startsWith, endsWith, search, match.
// Extracting → slice, substring, substr.
// Modifying → replace, replaceAll, trim, repeat, toUpperCase, toLowerCase.
// Splitting → split + join.
// Chars     → charCodeAt, codePointAt.
// Advanced  → padStart, padEnd

/*
let str = " Hello, World! JavaScript is awesome. ";
        // 01234567890123456789012345678901234567

// str.length → Number of characters.
console.log(str.length); // 38

// Access character by index:
console.log(str[1]);   // "H" (space)
console.log(str.charAt(1)); // "H"

// at(index) → Get char at index (supports negative)
console.log(str.at(-3)); // "e"

// ---------------------------------------- Searching & Checking ------------------------

// includes(substring) → Check if exists
console.log(str.includes("World")); // true

// startsWith(substring) / endsWith(substring)
console.log(str.startsWith(" Hello")); // true
console.log(str.endsWith("."));        // true


// indexOf(substring) → First occurrence
console.log(str.indexOf("JavaScript")); // 15

// lastIndexOf(substring) → Last occurrence
console.log(str.lastIndexOf("o")); // 33


// search(regex) → Find index using RegExp
console.log(str.search(/World/)); // 8

// match(regex) → Return matches
console.log(str.match(/\w+/g));
// ["Hello", "World", "JavaScript", "is", "awesome"]

// matchAll(regex) → Iterator of all matches
for (let m of str.matchAll(/o/g)) {
    console.log(m.index);
}                               // 5, 9, 33


// slice(start, end) / substring(start, end) / substr(start, length)
console.log(str.slice(1, 6));       // "Hello"
console.log(str.substring(1, 6));   // "Hello"
console.log(str.substr(1, 5));      // "Hello"


// charCodeAt(index) → UTF-16 code
console.log("ABC".charCodeAt(0));   // 65

// codePointAt(index) → Unicode code point
console.log("😀".codePointAt(0));   // 128512


// ----------------------------------- Modifying & Transforming --------------------------------------


// toUpperCase() / toLowerCase()
console.log(str.toUpperCase());         // " HELLO, WORLD! JAVASCRIPT IS AWESOME. "
console.log(str.toLocaleLowerCase())    // " hello, world! javascript is awesome. "


// trim() / trimStart() / trimEnd()
console.log(str.trimStart())    // "Hello, World! JavaScript is awesome. "
console.log(str.trimEnd())      // " Hello, World! JavaScript is awesome."
console.log(str.trim());        // "Hello, World! JavaScript is awesome."


// repeat(n)
console.log("Hi! ".repeat(3)); // "Hi! Hi! Hi!"


// replace(kiya, kis-sai) / replaceAll(replaceWord, replaceBy)
console.log(str.replace("World", "Universe"));  // " Hello, Universe! JavaScript is awesome. "
console.log(str.replaceAll("o", "0"));          // " Hell0, W0rld! JavaScript is awes0me. "


// split(separator) / join(separator)
console.log(str.split(" "));            // ["", "Hello,", "World!", "JavaScript", "is", "awesome.", ""]
console.log(str.split(" ").join("-"));  // "-Hello,-World!-JavaScript-is-awesome.-"


// Strings are iterable
for (let ch of "Hello !") { console.log(ch); } // 'H','e','l', 'l', 'o', ' ', '!'


// padStart(length, char) / padEnd(length, char)
console.log("5".padStart(3, "0")); // "005"
console.log("5".padEnd(3, "*"));   // "5**"

*/



// string sorting

/*

let fruits = ["Bob", "alice", "charlie", "David"]
fruits = fruits.sort();
console.log(fruits); // ["apple", "banana", "cherry", "date"]

// Ignore case while sorting
fruits.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
console.log(fruits); // ["alice", "Bob", "charlie", "David"]


// sort by length
fruits.sort((a, b) => a.length - b.length);
console.log(fruits);
// ["dog", "cat", "elephant", "hippopotamus"]


// sort by 2nd character (index 1)
fruits.sort((a, b) => a[1].localeCompare(b[1]));
console.log(fruits);


// sort by number inside text
let files = ["file20.txt", "file3.txt", "file100.txt", "file1.txt"];
files.sort((a, b) => a.localeCompare(b, undefined, { numeric: true })); // Use localeCompare with { numeric: true }
console.log(files); // ["file1.txt", "file3.txt", "file20.txt", "file100.txt"]

*/



// 🔹 Most Frequently Used (💯 must-know) Properties of array
// Core -> length, [index], [index] = value
// Adding / Removing -> push, pop, unshift, shift, splice, slice, concat, [...spread]
// Searching -> includes, indexOf, lastIndexOf, at, find, findIndex, some, every
// Iteration -> forEach, map, filter, reduce, reduceRight, keys, values, entries
// Sorting -> sort, reverse, toSorted, toReversed
// Flattening / Filling -> flat, flatMap, fill
// Conversion -> join, toString, Array.from, Array.isArray, Array.of
// Copying / Cloning -> copyWithin, structuredClone, with, slice, [...spread]

/*

let arr = ["Alice", "Bob", "Charlie"];

// 🔹 1. arr.length                                                 → Number of elements
console.log(arr.length);  // 3   (because there are 3 elements)


// 🔹 2. arr[index]                                                 → Access element by index (Arrays are zero-based → first element is at index 0.)
console.log(arr[0]); // "Alice"
console.log(arr[1]); // "Bob"
console.log(arr[5]); // undefined


// 🔹 3. arr[index] = value                                         → Update element into array
arr[1] = "David";   // Change "Bob" → "David"
console.log(arr); // ["Alice", "David", "Charlie"]

// You can also add a new element at an unused index
arr[3] = "Eve";
console.log(arr); // ["Alice", "David", "Charlie", "Eve"]


// ------------------------------- 2. Adding / Removing Elements --------------------------------


// 🔹 1. push(item)                                                 → Add to end
arr.push("David");
console.log(arr); // ["Alice", "Bob", "Charlie", "David"]


// 🔹 2. pop()                                                      → Remove last element
arr.pop();
console.log(arr); // ["Alice", "Bob", "Charlie"]   (removed "David")


// 🔹 3. unshift(item)                                              → Add to beginning
arr.unshift("Zara");
console.log(arr); // ["Zara", "Alice", "Bob", "Charlie"]


// 🔹 4. shift()                                                    → Remove first element
arr.shift();
console.log(arr); // ["Alice", "Bob", "Charlie"]   (removed "Zara")


// 🔹 5. splice(startindex, deleteCount, ...itemsReplaceTo)         👉 Add / Remove / Replace at a specific index.

// Remove elements:
arr.splice(1, 1); // Remove 1 element at index 1 ("Bob")
console.log(arr); // ["Alice", "Charlie"]


// Add elements:
arr.splice(1, 0, "Bob", "David");
console.log(arr); // ["Alice", "Bob", "David", "Charlie"]


// Replace elements:
arr.splice(2, 1, "Eve");
console.log(arr); // ["Alice", "Bob", "Eve", "Charlie"]


// 🔹 6. slice(start, end) -> (start inclusive, end exclusive)      → Copy portion (non-destructive)

let sliced = arr.slice(1, 3);
console.log(sliced); // ["Bob", "Eve"]
console.log(arr); // ["Alice", "Bob", "Eve", "Charlie"] (original unchanged)


// 🔹 7. concat(arr2)                                               → Merge arrays
let arr2 = ["abc", "abcd", "dabc", "mkdfsabc"]
let merged = arr.concat(arr2);
console.log(merged); // ["Alice", "Bob", "Eve", "Charlie", "X", "Y"]


// 🔹 8. Spread syntax [...arr, ...arr2]                            → Alternative to concat
let merged2 = [...arr, ...arr2];
console.log(merged2); // ["Alice", "Bob", "Eve", "Charlie", "X", "Y"]


// ------------------------------------------ 3. Searching & Checking---------------------------------


arr = ["Alice", "Bob", "Charlie", "Bob", "David"];

// 🔹 1. includes(item)                                             → Check if element exists
console.log(arr.includes("Bob"));    // true
console.log(arr.includes("Eve"));    // false


// 🔹 2. indexOf(item)                                              → First index of element
console.log(arr.indexOf("Bob"));     // 1  (first "Bob" is at index 1)
console.log(arr.indexOf("Eve"));     // -1 (not found)


// 🔹 3. lastIndexOf(item)                                          → Last index of element
console.log(arr.lastIndexOf("Bob")); // 3  (last "Bob" is at index 3)


// 🔹 4. at(index)                                                  → Get element by index (supports negative)
console.log(arr.at(2));   // 30
console.log(arr.at(-1));  // 50 (last element)


// 🔹 5. find(callback)                                             → First element matching condition
let result = arr.find(name => name.length > 5);
console.log(result); // "Charlie" (first element with length > 5)


// 🔹 6. findIndex(callback)                                        → Index of first match
let index = arr.findIndex(name => name.startsWith("C"));
console.log(index); // 2  ("Charlie" is at index 2)


// 🔹 6. some(callback)                                             → Returns true if any element matches
console.log(arr.some(name => name.startsWith("A"))); // true (Alice)
console.log(arr.some(name => name === "Eve"));       // false


// 🔹 8. every(callback)                                            → Returns true if all elements match
console.log(arr.every(name => typeof name === "string")); // true
console.log(arr.every(name => name.length > 3));          // false (Bob fails)
console.log(arr.every(name => name.includes("abc")));     // true all string contains "abc"


// ------------------------------------------- 4. Iteration ---------------------------------


let numbers = [30, 5, 100, 20]
//🔹 1. forEach(callback)                                           → Loop through array (no return)
numbers.forEach((num, index) => {
    console.log(`Index ${index}: ${num}`);
});
// Index 0: 10
// Index 1: 20
// Index 2: 30
// Index 3: 40


// 🔹 2. map(callback) → returns new array                          → Transform each element
// Original array remains unchanged.

let doubled = numbers.map(num => num * 2);
console.log(doubled); // [20, 40, 60, 80]


// 🔹 3. filter(callback)                                           → Keep elements that match condition
// Creates a new array with only matching elements.
let above20 = numbers.filter(num => num > 20);
console.log(above20); // [30, 40]


// 🔹 4. reduce(callback, initialValue)                             → Accumulate values from left
// Used for sums, products, averages, flattening arrays, etc.
let sum = numbers.reduce( ((acc, num) => acc + num), 0);
console.log(sum); // 100


// 🔹 5. reduceRight(callback, initialValue)                        → Like reduce but from right
let concatRight = arr2.reduceRight((acc, val) => acc + val + " ", "");
console.log(concatRight); // "cba"


// 🔹 6. keys() → Iterator of indexes
for (let key of arr.keys()) {
  console.log(key);
}
// 0, 1, 2, 3, 4


// 🔹 7. values() → Iterator of values
for (let value of arr.values()) {
  console.log(value);
}
// 10, 20, 30, 40, 50


// 🔹 8. entries() → Iterator of [index, value]
for (let [i, v] of arr.entries()) {
  console.log(i, v);
}
// 0 10
// 1 20
// 2 30
// 3 40
// 4 50


// ------------------------------------ 6. Flattening & Filling --------------------------------


let nested = [1, [2, [3, [4]]]];
let arr3 = [1, 2, 3, 4, 5];

// 🔹 1. flat(depth) -> Default depth = 1                           → Flatten nested arrays
console.log(nested.flat());
// [1, 2, [3, [4]]]   (flattened 1 level)

console.log(nested.flat(2));
// [1, 2, 3, [4]]    (flattened 2 levels)

console.log(nested.flat(Infinity));
// [1, 2, 3, 4]      (fully flattened)


// 🔹 2. flatMap(callback)                                         → Map + Flatten in one step
// Runs map() first, then flattens one level deep.
let words = ["hello", "world"];
result = words.flatMap(word => word.split(""));
console.log(result); // ['h','e','l','l','o','w','o','r','l','d']

// Another example: duplicating numbers into arrays.
let expanded = arr3.flatMap(n => [n, n * 2]);
console.log(expanded); // [1, 2, 2, 4, 3, 6, 4, 8, 5, 10]


// 🔹 3. fill(value, start, end)                                   → Fill with static value
// mutate the original arr3 (start: inclusive, end: exclusive)
console.log(arr3.fill(0));       // [0, 0, 0, 0, 0] (all replaced with 0)
console.log(arr3.fill(9, 1, 3)); // [1, 9, 9, 4, 5] (filled 9 from index 1 → 3)


// -------------------------------- 7. Conversion & Joining -------------------------


// 🔹 1. join(separator)                                            → Convert array to string
// Joins elements with a custom separator (default = ,).

console.log(arr.join()); // "Alice,Bob,Charlie"
console.log(arr.join(" - ")); // "Alice - Bob - Charlie"


// 🔹 2. toString()                                                 → Convert to comma-separated string
console.log(arr.toString()); // "Alice,Bob,Charlie"


// 🔹 3. Array.from(iterable)                                       → Convert iterable/string into array
console.log(Array.from("hello"));   // ['h','e','l','l','o']

let set = new Set([1, 2, 3]);
console.log(Array.from(set));   // [1, 2, 3]

doubled = Array.from([1, 2, 3], x => x * 2);
console.log(doubled); // [2, 4, 6]


// 🔹 4. Array.isArray(value)                                       → Check if value is array
console.log(Array.isArray(arr));        // true
console.log(Array.isArray("hello"));    // false
console.log(Array.isArray({}));         // false


// 🔹 5. Array.of(...items)                                         → Create array from arguments
console.log(new Array(5))       // [empty × 5] or
console.log(Array(5));          // [ <5 empty items> ]  ❌ confusing
console.log(Array.of(5));       // [5]
console.log(Array.of(1, 2, 3)); // [1, 2, 3]


// ------------------------------------- 8. Copying & Cloning -------------------------------------


let arr = [10, 20, 30, 40, 50];

// 🔹 1. copyWithin(target, start, end)                                -> Copies part of array inside itself.
// target = where to paste,
// start = from where to copy,
// end = before which index to stop.
console.log(arr.copyWithin(1, 3));    // [10, 40, 50, 40, 50]


// 🔹 2. structuredClone(arr)                                       → Deep copy (modern) Copies arrays/objects deeply (not just references).
let nested = [[1,2], [3,4]];

let deepCopy = structuredClone(nested);
deepCopy[0][0] = 99;

console.log(nested);     // [[1,2], [3,4]]
console.log(deepCopy);   // [[99,2], [3,4]]


// 🔹 3. with(index, value) Returns new array, doesn’t mutate.     → Immutable replace
let newArr = arr.with(2, 999);
console.log(newArr); // [10, 20, 999, 40, 50]
console.log(arr);    // [10, 20, 30, 40, 50] (unchanged)


// 🔹 4. [...arr] or arr.slice() not affect original                → Shallow copy
let clone1 = [...arr];
let clone2 = arr.slice();

console.log(clone1); // [10, 20, 30, 40, 50]
console.log(clone2); // [10, 20, 30, 40, 50]

// */



// array sorting

/*

let nums = [40, 100, 1, 5, 25, 10];

// sort() → Sort array (default: lexicographic) sorts as strings, so "100" comes before "25".
console.log(nums.sort()); // [1, 10, 100, 25, 5, 40]  ❌ not correct numerically but correct lexicographic


nums.sort((a, b) => a - b); // Ascending order [1, 5, 10, 25, 40, 100]
nums.sort((a, b) => b - a); // Descending order [100, 40, 25, 10, 5, 1]
console.log(nums);


// reverse() → Reverse array in place
nums.reverse();
console.log(nums); // [100, 40, 25, 10, 5, 1] to [1, 5, 10, 25, 40, 100]


// toSorted(compareFn) (ES2023) → Immutable sort -> Returns a new sorted array without modifying the original.
console.log(sorted); //  [1, 5, 10, 25, 40, 100]
console.log(nums);   //  [1, 5, 10, 25, 40, 100] (unchanged ✅)


// toReversed() (ES2023) → Immutable reverse -> Returns a new reversed array without modifying the original.
let reversed = nums.toReversed();
console.log(reversed); // [100, 40, 25, 10, 5, 1]
console.log(nums);     //  [1, 5, 10, 25, 40, 100] (unchanged ✅)


nums.sort(() => Math.random() - 0.5); // Shuffle randomly
console.log(nums); // [1, 10, 40, 25, 5, 100] each time a new value


fruits = [
    ["Alice", 25],
    ["Bob", 40],
    ["Charlie", 30]
];
fruits.sort((a, b) => a[1] - b[1]); // sort by 2nd value
console.log(fruits); // [ ["Alice", 25],["Charlie", 30],["Bob", 40] ]


people = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 25 },
    { name: "Charlie", age: 30 },
    { name: "Bob", age: 20 }
];
// people.sort((a, b) => a.age - b.age); // Sort by age
// console.log(people); // [ {name: 'Bob', age: 20}, {name: 'Alice', age: 25}, {name: 'Bob', age: 25}, {name: 'Charlie', age: 30} ]


// First sort by name, then by age
people.sort((a, b) => {
    if (a.name === b.name) {
        return a.age - b.age; // secondary sort by age
    }
    return a.name.localeCompare(b.name); // primary sort by name
});
console.log(people);



*/



// 🔹 Most Frequently Used (💯 must-know) Properties of object

/*

// obj.prop / obj["prop"] → Access a property.
console.log(data.group1);        // [{ name: "Alice", age: 25 }, { name: "Bob", age: 20 }]
console.log(data["group2"]);     // [{ name: "Charlie", age: 30 }, { name: "David", age: 22 }]
console.log(data.group1[0]);        // { name: "Alice", age: 25 }
console.log(data["group2"][0].age);     // 30 of charlie


// obj.prop = value → Set or update a property.
data.group3 = [{ name: "Eve", age: 28 }]; // set
console.log(data); // [ { name: "Eve", age: 28 } ]

data.group1[0].age = 26;   // Update Alice's age
console.log(data.group1[0]); // { name: "Alice", age: 26 }


// delete obj.prop → Remove a property.
delete data.group3;
console.log(data);


// prop in obj → Check if property exists.
console.log("group1" in data); // true
console.log("group3" in data); // false


// Object.hasOwn(obj, prop) (ES2022) → Check if property is an own property (better than hasOwnProperty).
console.log(Object.hasOwn(data, "group1")); // true
console.log(Object.hasOwn(data, "age")); // false
console.log(Object.hasOwn(data.group1[0], "age")); // false (inherited from prototype)


// obj.hasOwnProperty(prop) → Old way to check if the property is on the object itself (not inherited).
console.log(data.hasOwnProperty("group2")); // true
console.log(data.group1[0].hasOwnProperty("age")); // false


// Object.keys(obj) → Returns an array of keys.
console.log(Object.keys(data)); // ["group1", "group2"]


// Object.values(obj) → Returns an array of values.
console.log(Object.values(data)); //  [Array(2), Array(2)]
//        [
//          [ { name: "Alice", age: 26 }, { name: "Bob", age: 20 } ],
//          [ { name: "Charlie", age: 30 }, { name: "David", age: 22 } ]
//        ]


// Object.entries(obj) → Returns an array of [key, value] pairs.
console.log(Object.entries(data));
//        [
//          ["group1", [ { name: "Alice", age: 26 }, { name: "Bob", age: 20 } ]],
//          ["group2", [ { name: "Charlie", age: 30 }, { name: "David", age: 22 } ]]
//        ]


// Object.fromEntries(arr) → Convert [key, value] pairs back into an object.
let entries = Object.entries(data);
let newObj = Object.fromEntries(entries);
console.log(newObj);
//          {
//            group1: [ { name: "Alice", age: 26 }, { name: "Bob", age: 20 } ],
//            group2: [ { name: "Charlie", age: 30 }, { name: "David", age: 22 } ]
//          }

*/



// object sorting :
// In JavaScript, objects are not directly sortable because they are unordered collections.
// To sort your obj by age, you first need to convert it into an array (e.g., using Object.entries),
// sort it, and (optionally) convert it back to an object.

/*

let obj = {
    a: { name: "Alice", age: 25 },
    b: { name: "Bob", age: 20 },
    c: { name: "Bob", age: 25 },
    d: { name: "Charlie", age: 30 }
};

// Convert to array of [key, value] pairs
let objArr = Object.entries(obj)
// console.log(objArr) 
// objArr = [
//     ['a', { name: "Alice", age: 25 }],
//     ['b', { name: "Bob", age: 20 }],
//     ['c', { name: "Bob", age: 25 }],
//     ['d', { name: "Charlie", age: 30 }]
// ]

// sort it by age
let sortedEntries = objArr.sort(([, v1], [, v2]) => v1.age - v2.age);
console.log(sortedEntries)
// objArr = [
//     ['b', { name: "Bob", age: 20 }],
//     ['a', { name: "Alice", age: 25 }],
//     ['c', { name: "Bob", age: 25 }],
//     ['d', { name: "Charlie", age: 30 }]
// ]

// Convert back to object if needed
let sortedObj = Object.fromEntries(sortedEntries);
console.log(sortedObj);
// sortedObj = {
//   b: { name: "Bob", age: 20 },
//   a: { name: "Alice", age: 25 },
//   c: { name: "Bob", age: 25 },
//   d: { name: "Charlie", age: 30 }
// }


// 👉 If you want just a sorted array of values (ignoring keys):
let values = Object.values(obj)
let sortedArr = values.sort((a, b) => a.age - b.age);
console.log();
// sortedArr = [
//     { name: 'Bob', age: 20 },
//     { name: 'Alice', age: 25 },
//     { name: 'Bob', age: 25 },
//     { name: 'Charlie', age: 30 }
// ]


obj = {
    a: 3,
    b: 1,
    c: 2
};

// ✔ Object.keys(obj).sort() →                                                             sort by keys
let sortedByKeys = Object.keys(obj).sort()
// console.log(sortedByKeys); // ['a', 'b', 'c']

sortedByKeys = Object.keys(obj).sort()                                                      // with key
    .reduce((acc, key) => {
        acc[key] = obj[key];
        return acc;
    }, {});
// console.log(sortedByKeys); // ['a': 3, 'b': 1, 'c': 2]



// ✔ Object.values(obj).sort() →                                                           sort by values
let sortedByValue = Object.values(obj).sort()
// console.log(sortedByValue); //  [1, 2, 3]

sortedByValue = Object.entries(obj).sort(([, v1], [, v2]) => v1 - v2)                       // with key
    .reduce((acc, [key, value]) => {
        acc[key] = value;  // keep key + value
        return acc;
    }, {});
// console.log(sortedByValue); //  [ ['a',3], ['b',1], ['c',2] ]



// ✔ Object.entries(obj).sort(([, v1], [, v2]) => v1.property - v2.property) →             sort by property
let arr = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 20 },
    { name: "Charlie", age: 30 }
];
sortedArr = Object.entries(arr).sort(([, v1], [, v2]) => v1.age - v2.age)
console.log(sortedArr); //[Array(2), Array(2), Array(2)] and Array(2)= ["1", {name: 'Bob', age: 20}]

arr = {
    a: { name: "Alice", age: 25 },
    b: { name: "Bob", age: 20 },
    c: { name: "Charlie", age: 30 }
};
let sorted = Object.entries(arr).sort(([, v1], [, v2]) => v1.age - v2.age)
    .reduce((acc, [k, v]) => {
        acc[k] = v;
        return acc;
    }, {});
console.log(sorted); // {b: {…}, a: {…}, c: {…}} and {...} = a: {name: 'Alice', age: 25}

let sortedMap = new Map(Object.entries(arr).sort(([, v1], [, v2]) => v1.age - v2.age));
console.log(sortedMap); // Preserves sorted order {'b' => {…}, 'a' => {…}, 'c' => {…}} and b => {...} = {name: 'Bob', age: 20}


function deepSort(obj, key) {                                                               // nested sort by recursion
    if (Array.isArray(obj)) {
        return obj.sort((a, b) => a[key] - b[key]);
    } else if (typeof obj === "object" && obj !== null) {
        return Object.fromEntries(
            Object.entries(obj).map(([k, v]) => [k, deepSort(v, key)])
        );
    }
    return obj;
}


let data = {
    group1: [
        { name: "Alice", age: 25 },
        { name: "Bob", age: 20 }
    ],
    group2: [
        { name: "Charlie", age: 30 },
        { name: "David", age: 22 }
    ]
};
console.log(deepSort(data, "age"));

// 👉 Execution flow:
//         deepSort(data, "age")
//             data is an object → go to Case 2.
//             Loop over group1, group2.
//         deepSort(group1, "age")
//             group1 is an array → go to Case 1 → sort by age.
//                 → [Bob (20), Alice (25)]
//         deepSort(group2, "age")
//             Same → [David (22), Charlie (30)]
//         Recombine with Object.fromEntries:

*/


/*
// --------------------------------------------------------
📘 JavaScript Strings – Quick Recap


// 🔹 Core
length                → Number of characters
charAt(index)         → Get character
at(index)             → Get character (supports negative)

// 🔹 Searching
includes(substr)      → true / false
indexOf(substr)       → First index
lastIndexOf(substr)   → Last index
startsWith(substr)    → true if begins with
endsWith(substr)      → true if ends with
search(regex)         → Index via RegExp
match(regex)          → Array of matches
matchAll(regex)       → Iterator of matches

// 🔹 Extracting
slice(start, end)     → Substring (preferred)
substring(start, end) → Similar to slice (no negatives)
substr(start, len)    → Legacy (use slice)

// 🔹 Modifying
replace(find, repl)   → Replace first match
replaceAll(find, repl)→ Replace all matches
trim(), trimStart(), trimEnd()
toUpperCase(), toLowerCase()
repeat(n)             → Repeat string

// 🔹 Splitting & Joining
split(separator)      → String → Array
arr.join(separator)   → Array → String

// 🔹 Character Codes
charCodeAt(index)     → UTF-16 code
codePointAt(index)    → Unicode code

// 🔹 Advanced
padStart(len, char)   → Left pad
padEnd(len, char)     → Right pad

----------------------------------------------------------------
📘 JavaScript Arrays – Quick Recap


// 🔹 Core
length                → Number of elements
arr[index]            → Access element
arr[index] = value    → Update element

// 🔹 Adding / Removing
push(item)            → Add to end
pop()                 → Remove last
unshift(item)         → Add to start
shift()               → Remove first
splice(start, del, ...items) → Add / remove / replace
slice(start, end)     → Copy portion (non-destructive)
concat(arr2)          → Merge arrays
[...arr, ...arr2]     → Spread (alternative concat)

// 🔹 Searching & Checking
includes(item)        → true / false
indexOf(item)         → First index
lastIndexOf(item)     → Last index
at(index)             → Get element (supports negative)
find(fn)              → First element matching condition
findIndex(fn)         → Index of first match
some(fn)              → true if any match
every(fn)             → true if all match

// 🔹 Iteration & Transformation
forEach(fn)           → Loop (no return)
map(fn)               → Transform → new array
filter(fn)            → Keep elements
reduce(fn, init)      → Accumulate (sum, etc.)
reduceRight(fn, init) → Accumulate from right
keys()                → Iterator of indexes
values()              → Iterator of values
entries()             → Iterator of [index, value]

// 🔹 Sorting & Reversing
sort(compareFn)       → Sort in place (default: lexicographic)
reverse()             → Reverse in place
toSorted(compareFn)   → Immutable sort (ES2023)
toReversed()          → Immutable reverse (ES2023)

// 🔹 Flattening & Filling
flat(depth)           → Flatten nested arrays
flatMap(fn)           → Map + Flatten
fill(value, start, end) → Fill with static value

// 🔹 Conversion
join(sep)             → Array → String
toString()            → Comma-separated string
Array.from(iterable)  → Convert iterable/string → Array
Array.isArray(val)    → Check if array
Array.of(...items)    → Create array from args

// 🔹 Copying & Cloning
copyWithin(target, start, end) → Copy within itself
structuredClone(arr)           → Deep copy (modern)
[...arr] / arr.slice()         → Shallow copy
with(index, value)             → Return new array w/ replaced element (ES2023)

-----------------------------------------------------------------
📘 JavaScript Objects – Quick Recap


// 🔹 Core
obj.prop / obj["prop"]   → Access
obj.prop = value         → Add / Update
delete obj.prop          → Remove
prop in obj              → Check existence

// 🔹 Checking
Object.hasOwn(obj, key)  → Own property? (modern)
obj.hasOwnProperty(key)  → Own property? (old)

// 🔹 Conversion
Object.keys(obj)         → Array of keys
Object.values(obj)       → Array of values
Object.entries(obj)      → Array of [key, value]
Object.fromEntries(arr)  → Array → Object

// 🔹 Sorting (indirect)
Object.keys(obj).sort()                → Sort keys
Object.values(obj).sort()              → Sort values
Object.entries(obj).sort(([,a],[,b]))  → Sort by value

*/

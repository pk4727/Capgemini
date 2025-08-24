// x.sort((a, b) => a.localeCompare(b)); // modified sorting in string

// x.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));    // not case sencetive
// x.sort((a, b) => a[1].localeCompare(b[1]));                          // a/c to any index
// x..sort((a, b) => a.localeCompare(b, undefined, { numeric: true })); // if any number in string then a/c to number

// Object.values(obj).sort((a, b) => a.age - b.age); // ignoring key in [ {} ]
// Object.fromEntries(Object.entries(obj).sort(([, v1], [, v2]) => v1.age - v2.age)); // with key in { {} }




// string 


// /*

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

// */


// array 


// /*

let nums = [40, 100, 1, 5, 25, 10];
nums.sort((a, b) => a - b); // Ascending order [1, 5, 10, 25, 40, 100]
nums.sort((a, b) => b - a); // Descending order [100, 40, 25, 10, 5, 1]
console.log(nums);


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

// */


// object : 
// In JavaScript, objects are not directly sortable because they are unordered collections.
// To sort your obj by age, you first need to convert it into an array (e.g., using Object.entries),
// sort it, and (optionally) convert it back to an object.


// /*

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

// */


// Core Properties of Objects


// /*

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

// */


"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// object following the contract
let s = {
    name: "Ashish",
    age: 23,
    isSingle: true,
    album: ["abc"]
};
let gs = {
    name: "Pradhuman",
    age: 25,
    isSingle: false,
    album: [],
    degree: "M.Tech"
};
// function using the interface
const represent = (s) => {
    if (s.name) {
        return `Hello ${s.name.toUpperCase()}`; // use toUpperCase safely (only if 'a' exists)
    }
    else {
        return "Hello !";
    }
};
console.log(represent(s)); // -> "Hello !" (because 'a' not provided)
//# sourceMappingURL=function.js.map
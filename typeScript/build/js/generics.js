// -------------------- Generic Basics --------------------
// Simple echo function (non-generic)
let stringEcho = (arg) => arg;
console.log(stringEcho("hello")); // "hello"
// Generic echo function (works with any type)
let stringGeneric = (arg) => arg;
console.log(stringGeneric(123)); // 123
console.log(stringGeneric("hello")); // "hello"
console.log(stringGeneric(true)); // true
// -------------------- isObj Function --------------------
// Check if a value is a plain object (not array, not null)
const isObj = (arg) => {
    return (typeof arg === 'object' && // must be object
        !Array.isArray(arg) && // not an array
        arg !== null // not null
    );
};
console.log(isObj(true)); // false
console.log(isObj('pk')); // false
console.log(isObj([1, 2, 3])); // false
console.log(isObj({ name: 'pk' })); // true
console.log(isObj(null)); // false
// -------------------- isTrue Function --------------------
// Generic function that checks if a value is "truthy"
const isTrue = (arg) => {
    // Case 1: Empty array
    if (Array.isArray(arg) && !arg.length) {
        return { arg, is: false };
    }
    // Case 2: Empty object
    if (isObj(arg) && !Object.keys(arg).length) {
        return { arg, is: false };
    }
    // Fallback: truthy check (!! converts to boolean)
    return { arg, is: !!arg };
};
// -------------------- Test Cases --------------------
console.log(isTrue('pk')); // { arg: 'pk', is: true }
console.log(isTrue(0)); // { arg: 0, is: false }
console.log(isTrue(true)); // { arg: true, is: true }
console.log(isTrue(1)); // { arg: 1, is: true }
console.log(isTrue('')); // { arg: '', is: false }
console.log(isTrue(null)); // { arg: null, is: false }
console.log(isTrue(undefined)); // { arg: undefined, is: false }
console.log(isTrue({})); // { arg: {}, is: false }
console.log(isTrue({ name: 'pk' })); // { arg: { name: 'pk' }, is: true }
console.log(isTrue([])); // { arg: [], is: false }
console.log(isTrue([1, 2, 3])); // { arg: [1, 2, 3], is: true }
console.log(isTrue(NaN)); // { arg: NaN, is: false }
console.log(isTrue(-0)); // { arg: -0, is: false }
// ---------------- Partial ----------------
// `Partial<T>` makes all properties of T optional.
// Useful when updating only part of an object.
const partialAssignment = (assign, propsToUpdate) => {
    return { ...assign, ...propsToUpdate };
};
const assign1 = {
    studId: "cse123",
    title: "final project",
    grade: 0
};
console.log(partialAssignment(assign1, { grade: 95 })); // only updating grade
const assignGraded = partialAssignment(assign1, { grade: 95 });
// ---------------- Required & Readonly ----------------
// `Required<T>` makes all properties mandatory (removes ? optional).
const requiredAssignment = (assign) => {
    return assign;
};
requiredAssignment({ ...assignGraded, verified: true });
// `Readonly<T>` makes all fields immutable
const readonlyAssignment = { ...assignGraded, verified: true };
// readonlyAssignment.grade = 45 // ❌ Error: cannot modify readonly property
// ---------------- Record ----------------
// `Record<K,V>` creates an object with keys of type K and values of type V
const hexColorMap = {
    red: "FF0000",
    green: "00FF00",
    blue: "0000FF"
};
const finalGrade = {
    sara: "A",
    pk: "B",
    // dk: "F" ❌ not allowed because "dk" is not in Student union type
};
const gradeData = {
    sara: { assign1: 45, assign2: 55 },
    pk: { assign1: 56, assign2: 65 }
};
const score = {
    studId: "ki23",
    grade: 85
};
const priview = {
    studId: "k123",
    title: "Final Project"
};
// ---------------- ReturnType & Parameters ----------------
// Function that creates a new assignment
const createNewAssign = (title, points) => {
    return { title, points };
};
const tsAssign = createNewAssign("Utility Types", 100);
console.log(tsAssign);
// Equivalent to: [title: string, points: number]
const assignArgs = ["Generics", 100];
const tsAssign2 = createNewAssign(...assignArgs);
console.log(tsAssign2);
const fetchUsers = async () => {
    const data = await fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => res.json())
        .catch(err => {
        if (err instanceof Error)
            console.log(err.message);
    });
    return data;
};
// Equivalent to User[]
fetchUsers().then(users => console.log(users));
export {};
//# sourceMappingURL=generics.js.map
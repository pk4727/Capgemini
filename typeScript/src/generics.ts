// -------------------- Generic Basics --------------------

// Simple echo function (non-generic)
let stringEcho = (arg: string): string => arg;
console.log(stringEcho("hello")); // "hello"

// Generic echo function (works with any type)
let stringGeneric = <T>(arg: T): T => arg;
console.log(stringGeneric(123));     // 123
console.log(stringGeneric("hello")); // "hello"
console.log(stringGeneric(true));    // true


// -------------------- isObj Function --------------------
// Check if a value is a plain object (not array, not null)
const isObj = <T>(arg: T): boolean => {
    return (
        typeof arg === 'object' && // must be object
        !Array.isArray(arg) &&     // not an array
        arg !== null               // not null
    )
}

console.log(isObj(true));            // false
console.log(isObj('pk'));            // false
console.log(isObj([1, 2, 3]));       // false
console.log(isObj({ name: 'pk' }));  // true
console.log(isObj(null));            // false


// -------------------- isTrue Function --------------------
// Generic function that checks if a value is "truthy"
const isTrue = <T>(arg: T): { arg: T; is: boolean } => {
    // Case 1: Empty array
    if (Array.isArray(arg) && !arg.length) {
        return { arg, is: false };
    }
    // Case 2: Empty object
    if (isObj(arg) && !Object.keys(arg as object).length) {
        return { arg, is: false };
    }
    // Fallback: truthy check (!! converts to boolean)
    return { arg, is: !!arg };
}


// -------------------- Test Cases --------------------
console.log(isTrue('pk'));             // { arg: 'pk', is: true }
console.log(isTrue(0));                // { arg: 0, is: false }
console.log(isTrue(true));             // { arg: true, is: true }
console.log(isTrue(1));                // { arg: 1, is: true }
console.log(isTrue(''));               // { arg: '', is: false }
console.log(isTrue(null));             // { arg: null, is: false }
console.log(isTrue(undefined));        // { arg: undefined, is: false }
console.log(isTrue({}));               // { arg: {}, is: false }
console.log(isTrue({ name: 'pk' }));   // { arg: { name: 'pk' }, is: true }
console.log(isTrue([]));               // { arg: [], is: false }
console.log(isTrue([1, 2, 3]));        // { arg: [1, 2, 3], is: true }
console.log(isTrue(NaN));              // { arg: NaN, is: false }
console.log(isTrue(-0));               // { arg: -0, is: false }


// Utility type

// This TypeScript file demonstrates built-in utility types and their real-world usage:

// Partial<T>: Makes some fields optional (used to update Assignment objects).

// Required<T>: Enforces all fields, including optional ones, must be present.

// Readonly<T>: Creates immutable objects (prevents reassignment).

// Record<K, T>: Defines objects with specific keys (Student) mapped to values (LetterGrade or Grades).

// Pick<T, K> / Omit<T, K>: Selects or excludes certain fields from a type.

// Exclude<T, U> / Extract<T, U>: Removes or filters specific union members.

// NonNullable<T>: Excludes null and undefined from a type.

// ReturnType<T> / Parameters<T>: Extracts function return and parameter types dynamically.

// Awaited<T>: Unwraps a Promise to get its resolved value type (used with async fetch).


// ---------------- Assignment Interface ----------------
interface Assignment {
    studId: string,
    title: string,
    grade: number,
    verified?: boolean // optional property
}

// ---------------- Partial ----------------
// `Partial<T>` makes all properties of T optional.
// Useful when updating only part of an object.
const partialAssignment = (assign: Assignment, propsToUpdate: Partial<Assignment>):
    Assignment => {
    return { ...assign, ...propsToUpdate }
}

const assign1: Assignment = {
    studId: "cse123",
    title: "final project",
    grade: 0
}

console.log(partialAssignment(assign1, { grade: 95 })) // only updating grade
const assignGraded: Assignment = partialAssignment(assign1, { grade: 95 })


// ---------------- Required & Readonly ----------------
// `Required<T>` makes all properties mandatory (removes ? optional).
const requiredAssignment = (assign: Required<Assignment>):
    Assignment => {
    return assign
}

requiredAssignment({ ...assignGraded, verified: true })

// `Readonly<T>` makes all fields immutable
const readonlyAssignment: Readonly<Assignment> = { ...assignGraded, verified: true }
// readonlyAssignment.grade = 45 // ❌ Error: cannot modify readonly property


// ---------------- Record ----------------
// `Record<K,V>` creates an object with keys of type K and values of type V
const hexColorMap: Record<string, string> = {
    red: "FF0000",
    green: "00FF00",
    blue: "0000FF"
}

// Example with stricter keys
type Student = 'sara' | 'pk'
type LetterGragde = "A" | "B" | "C" | "D" | "E"

const finalGrade: Record<Student, LetterGragde> = {
    sara: "A",
    pk: "B",
    // dk: "F" ❌ not allowed because "dk" is not in Student union type
}

// Nested record usage
interface Grades {
    assign1: number,
    assign2: number
}

const gradeData: Record<Student, Grades> = {
    sara: { assign1: 45, assign2: 55 },
    pk: { assign1: 56, assign2: 65 }
}


// ---------------- Pick & Omit ----------------
// `Pick<T, K>` → pick specific properties
type AssignmentResult = Pick<Assignment, "studId" | "grade">
const score: AssignmentResult = {
    studId: "ki23",
    grade: 85
}

// `Omit<T, K>` → remove specific properties
type AssignmentPreview = Omit<Assignment, "grade" | "verified">
const priview: AssignmentPreview = {
    studId: "k123",
    title: "Final Project"
}


// ---------------- Exclude & Extract ----------------
// `Exclude<T,U>` → remove types from T that are assignable to U
type adjustedGrade = Exclude<LetterGragde, "U">

// `Extract<T,U>` → keep only the types in both T and U
type highGrade = Extract<LetterGragde, "A" | "B">


// ---------------- NonNullable ----------------
// Removes null & undefined from a union type
type AllPossibleGrade = "Dave" | "jhon" | null | undefined
type NameOnly = NonNullable<AllPossibleGrade> // "Dave" | "jhon"


// ---------------- ReturnType & Parameters ----------------
// Function that creates a new assignment
const createNewAssign = (title: string, points: number) => {
    return { title, points }
}

// `ReturnType<T>` extracts the return type of a function
type NewAssign = ReturnType<typeof createNewAssign>

const tsAssign: NewAssign = createNewAssign("Utility Types", 100)
console.log(tsAssign)

// `Parameters<T>` extracts function parameter types as a tuple
type AssignParams = Parameters<typeof createNewAssign>
// Equivalent to: [title: string, points: number]

const assignArgs: AssignParams = ["Generics", 100]
const tsAssign2: NewAssign = createNewAssign(...assignArgs)
console.log(tsAssign2)


// ---------------- Awaited ----------------
// For async return values → unwraps the Promise
type User = {
    id: number;
    name: string;
    username: string;
    email: string;
};

const fetchUsers = async (): Promise<User[]> => {
    const data = await fetch(
        "https://jsonplaceholder.typicode.com/users"
    )
        .then(res => res.json())
        .catch(err => {
            if (err instanceof Error) console.log(err.message);
        });

    return data;
};

// `Awaited<T>` → gets the resolved value inside a Promise
type FetchUsersReturnType = Awaited<ReturnType<typeof fetchUsers>>;
// Equivalent to User[]

fetchUsers().then(users => console.log(users))
type Student = {
    name?: string;
    age: number;
    isSingle: boolean;
    album: string[];
}

// object following the contract
let s: Student = {
    name: "Ashish",
    age: 23,
    isSingle: true,
    album: ["abc"]
};

// extending an interface
interface GraduateStudent extends Student {
    degree: string;
}

let gs: GraduateStudent = {
    name: "Pradhuman",
    age: 25,
    isSingle: false,
    album: [],
    degree: "M.Tech"
};

// function using the interface
const represent = (s: Student) => {
    if (s.name) {
        return `Hello ${s.name.toUpperCase()}`;  // use toUpperCase safely (only if 'a' exists)
    } else {
        return "Hello !"
    }
}
console.log(represent(s)); // -> "Hello !" (because 'a' not provided)

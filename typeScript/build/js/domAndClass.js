const img = document.querySelector("img");
// img.src  // error
const img1 = document.querySelector("img");
// img1.src // working
const img2 = document.getElementById("#img");
// img2.src // working
// -------------------- Example 1: Updating year in DOM --------------------
// copyright (not working)
// const year = document.getElementById('year')
// const thisYear = new Date().getFullYear()
// year.setAttribute("dateTime", thisYear)
// year.textContent = thisYear
// Way 1: Using null check
let year; // "year" can be HTMLElement OR null
year = document.getElementById('year'); // get element with id "year"
let thisYear = new Date().getFullYear().toString(); // current year as string
if (year) {
    year.setAttribute("dateTime", thisYear); // set "dateTime" attribute
    year.textContent = thisYear; // set the displayed text
}
// Way 2: Using type assertion (no null check needed)
const year1 = document.getElementById('year'); // force type
const thisYear1 = new Date().getFullYear().toString();
year1.setAttribute("dateTime", thisYear1);
year1.textContent = thisYear1;
// -------------------- Example 2: Class --------------------
class coder {
    name;
    music;
    number;
    age;
    // Property defined without access specifier
    language; // must be assigned in constructor, else error
    // constructor defines and initializes properties
    constructor(language, name, // public & readonly (can’t be changed later)
    music, // public property
    number, // private (only accessible inside class)
    age // protected (accessible inside class + subclasses)
    ) {
        this.name = name;
        this.music = music;
        this.number = number;
        this.age = age;
        // Assign values to properties
        this.name = name;
        this.music = music;
        this.number = number;
        this.age = age;
        this.language = language;
    }
    // public method: can access protected & private inside class
    getAge() {
        return this.age;
    }
    getNo() {
        return this.number;
    }
}
const c = new coder('js', "pk", "rock", 123456789, 23);
console.log(c); // full object
console.log(c.getNo()); // get private number via method
console.log(c.getAge()); // get protected age via method
// -------------------- Example 3: Inheritance --------------------
class tester extends coder {
    computer;
    constructor(language, name, music, number, age, computer) {
        super(language, name, music, number, age); // call parent constructor
        this.computer = computer;
    }
    // Cannot override getNo() here because "number" is private in parent class and Only parent class has access to private members
    // public getNo(): number {
    //     return this.number
    // }
    // Can override getAge() because "age" is protected in parent class
    getAge() {
        return this.age;
    }
}
const t = new tester('js', "pk", "rock", 123456789, 23, 'dell');
console.log(t); // tester object with all properties
console.log(t.getAge()); // works (protected accessible via subclass)
// console.log(t.number)    // ❌ Error: "number" is private, not accessible
console.log(t.getNo()); // works because parent method gives access
class guitarist {
    name; // required by interface
    instrument; // required by interface
    // constructor initializes properties
    constructor(name, inst) {
        this.name = name;
        this.instrument = inst;
    }
    // implementing "play" method from interface
    play(action) {
        return `${this.name} ${action} ${this.instrument}`;
    }
}
// Create a guitarist object
let g = new guitarist('pk', 'guitar');
console.log(g); // prints guitarist object with name & instrument
console.log(g.play('strums')); // "pk strums guitar"
// -------------------- Class with static members --------------------
class peeps {
    name;
    // static property → shared across all instances (not per object)
    static count = 0;
    // static method → can only be called using the class itself
    static getCount() {
        return peeps.count;
    }
    // instance property (unique for each object)
    id;
    // constructor runs every time a new object is created
    constructor(name) {
        this.name = name;
        this.name = name; // set instance property "name"
        this.id = ++peeps.count; // increment static count and assign as ID
    }
}
const p = new peeps('pk'); // id = 1
const q = new peeps('dk'); // id = 2
const r = new peeps('kk'); // id = 3
console.log(p); // peeps { name: 'pk', id: 1 }
console.log(q.id); // 2
console.log(r.id); // 3
console.log(peeps.count); // 3 (shared static counter for all objects)
console.log(peeps.getCount()); // also 3, using static method
// -------------------- Class Definition (getter setter)--------------------
class Bands {
    dataState;
    constructor() {
        this.dataState = [];
    }
    // Getter: allows reading data safely
    get data() {
        return this.dataState;
    }
    // Setter: allows controlled updates with validation
    set data(value) {
        // Check: must be an array AND every element must be a string
        if (Array.isArray(value) && value.every(el => typeof el === 'string')) {
            this.dataState = value;
            return;
        }
        else {
            throw new Error('Param is not an array of strings');
        }
    }
}
const MyBands = new Bands();
MyBands.data = ['Neil Young', 'Led Zep'];
console.log(MyBands.data); // Output: [ 'Neil Young', 'Led Zep' ]
// ✅ Add new band using spread operator → Works
MyBands.data = [...MyBands.data, 'ZZ Top'];
console.log(MyBands.data); // Output: [ 'Neil Young', 'Led Zep', 'ZZ Top' ]

// ❌ Assign invalid array (number included) → Throws error
// MyBands.data = ['Van Halen', 5150]; // Error: Param is not an array of strings

export {};
//# sourceMappingURL=domAndClass.js.map
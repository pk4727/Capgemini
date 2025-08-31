function print(message) {
    console.log(message);
}
/*
interface person {
    name: string;
    age: number;
    contact: number
}

class marks implements person {
    constructor(
        public name: string,
        public age: number,
        public contact: number,
        public mark: number) {
        this.name = name
        this.age = age
        this.contact = contact
        this.mark = mark
    }

}

class student extends marks {
    constructor(
        public name: string,
        public age: number,
        public contact: number,
        public mark: number,
        public collage: string) {
        super(name, age, contact, mark)
        this.collage = collage
    }
    getDetails() {
        const { name, age, contact, mark, collage } = this
        console.log(`${name} kumar, age: ${age}, contact: ${contact} have scored ${mark} marks in ${collage}`)
    }
}
const s1 = new student('pradhuman', 23, 46866948, 87, 'NiT')
s1.getDetails()


function removeDuplicate(arr: number[]): number[] {
    let visited: number[] = []
    arr.forEach(ele => {
        if (!visited.includes(ele)) {
            visited.push(ele)
        }
    });
    return visited
}
print(removeDuplicate([1, 2, 3, 4, 1, 2, 3, 4, 5, 6, 7, 5, 4, 2, 2]))


function flattenNested(arr: any) {
    return arr.flat(Infinity)
}
print(flattenNested([1, 2, [3, 4], 1, [2, 3], [4, 5, [6, 7, 5], 4], 2, 2]))


function reverseNumber(num: number) {
    let res = 0
    let rem = 0
    while (num > 0) {
        rem = num % 10
        res = res * 10 + rem
        num = Math.trunc(num / 10)
    }
    return res
}
print(reverseNumber(1234))

*/
// suggestion
let input;
export { };
/*
// 1
class Animal {
    getType(): string {
        return "Animal"
    }
}

class Lion extends Animal {
    getType(): string {
        return "Lion"
    }
}

input = ['Animal', 'Lion', 'Lion']
input.forEach(obj => {
    if (obj === 'Animal') {
        print(new Animal().getType())
    }
    else if (obj === "Lion")
        print(new Lion().getType())
});


// 2
class Car {
    static count: number = 0
    constructor(curr: number) {
        Car.count += curr
    }

    getCount(): number {
        return Car.count
    }
}

input = [1, 4, 2]
input.forEach(cars => {
    print(new Car(cars).getCount())

})


// 3
class Library {
    private books: number = 0

    addBook(amount: number): void {
        if (amount > 0) {
            this.books += amount
        }
    }

    borrowBook(amount: number): void {
        if (this.books > amount) {
            this.books -= amount
        }
    }

    getBook(): number {
        return this.books
    }
}

input = ["add 10", "borrow 3", "books", "borrow 9", "books"]
const obj = new Library()

input.forEach(operation => {
    const inp: string[] = operation.split(" ")
    if (inp.length > 1) {
        if (inp[0] === 'add') {
            obj.addBook(Number(inp[1]))
        } else if (inp[0] === 'borrow') {
            obj.borrowBook(Number(inp[1]))
        }
    } else {
        print(obj.getBook())
    }
});

*/
// 4
//# sourceMappingURL=prep.js.map
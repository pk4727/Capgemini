function print(message: any): void {
    console.log(message);
}

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
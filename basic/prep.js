function print(message) {
    console.log(message)
}

// 1. Reverse a string without using reverse()

function reverseNumber(num) {
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


function isPalindrome(str) {
    // let rev = str.split("").reverse().join("");
    let rev = reverseString(str)
    return str === rev;
}
print(isPalindrome("madam")); // true


function reverseString(str) {
    const strArr = str.split("")
    let rev = ""
    strArr.forEach(char => {
        rev = char + rev
    });
    return rev
}
print(reverseString("pradhuman"))


function smallestLargest(arr) {
    const largest = Math.max(...arr)
    const smallest = Math.min(...arr)
    return { largest, smallest }
}
print(smallestLargest([1, 2, 6, 9, 0, 3, 4]))


function findDuplicate(arr) {
    let visited = []
    let duplicat = []
    arr.forEach(ele => {
        if (visited.includes(ele) && !duplicat.includes(ele)) {
            duplicat.push(ele)
        }
        else {
            visited.push(ele)
        }
    });
    print(arr.sort((a, b) => a - b))
    return duplicat
}
print(findDuplicate([1, 2, 3, 4, 1, 2, 3, 4, 5, 6, 7, 5, 4, 2, 2]))


function removeDuplicate(arr) {
    let visited = []
    arr.forEach(ele => {
        if (!visited.includes(ele)) {
            visited.push(ele)
        }
    });
    return visited
}
print(removeDuplicate([1, 2, 3, 4, 1, 2, 3, 4, 5, 6, 7, 5, 4, 2, 2]))


function countFrequency(arr) {
    let fre = {}
    arr.forEach(key => {
        fre[key] = (fre[key] | 0) + 1
    });
    return fre
}
print(countFrequency([1, 2, 3, 4, 1, 2, 3, 4, 5, 6, 7, 5, 4, 2, 2]))


function factorial(num) {
    if (num <= 1) {
        return 1
    }
    return num * factorial(num - 1)
}
print(factorial(5))


function flattenNested(arr) {
    return arr.flat(Infinity)
}
print(flattenNested([1, 2, [3, 4], 1, [2, 3], [4, 5, [6, 7, 5], 4], 2, 2]))


function countVoiels(str) {
    return str.match(/[aeiou]/gi).length
}
print(countVoiels('bdjgeysijogy'))


function rotateArrayKsteps(arr, k) {
    const len = arr.length
    k = k % len
    return [...arr.slice(len - k, len), ...arr.slice(0, len - k)];

    for (let i = 0; i < k; i++) {
        arr.unshift(arr.pop())
    }
    return arr
}
print(rotateArrayKsteps([1, 2, 3, 4, 5, 6, 7], 3))


class details {
    constructor(name, age, contact) {
        this.name = name
        this.age = age
        this.contact = contact
    }
    getDetails() {
        return [this.name, this.age, this.contact]
    }
}

class student extends details {
    static collage;
    constructor(name, age, contact, branch, session,collage) {
        super(name, age, contact)
        this.branch = branch
        this.session = session
        this.collage = collage
    }
    getAllDetails() {
        return [this.name, this.age, this.contact, this.branch, this.session]
    }
    static getCollage(obj) {
        return obj.collage
    }
}
const s1 = new student("pk", 23, 8461846168, "AIML", 2025,'NiT')
const student1 = s1.getAllDetails()
print(student1)
print(student.getCollage(s1))


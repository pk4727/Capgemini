function print(message) {
    console.log(message)
}
/*
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


// class
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
    constructor(name, age, contact, branch, session, collage) {
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
const s1 = new student("pk", 23, 8461846168, "AIML", 2025, 'NiT')
const student1 = s1.getAllDetails()
print(student1)
print(student.getCollage(s1))


function checkAnagram(str1, str2) {
    if (str1.length !== str2.length) return false
    str1 = str1.split("").sort()
    str2 = str2.split("").sort()
    for (let index = 0; index < str1.length; index++) {
        if (str1[index] !== str2[index]) {
            return false
        }
    }
    return true
}
print(checkAnagram("pradhu", "upahrd"))

function checkAnagram2(str1, str2) {
    if (str1.length !== str2.length) return false
    str1 = str1.split("").sort()
    str2 = str2.split("").sort()
    const reg = new RegExp('^' + str2 + '$')
    return reg.test(str1)
}
print(checkAnagram2("pradhu", "urpahd"))


function sentenceCase(str) {
    str = str.split(" ")
    let ans = []
    str.forEach(word => {
        const char = String(word[0])
        word = word.replace(char, char.toUpperCase())
        ans.push(word)
    });
    return ans.join(" ")
}
print(sentenceCase("pradhu kumar verma"))


function sentenceCase2(str) {
    return str.split(" ").map(word => word[0].toUpperCase() + word.slice(1)).join(" ")
}
print(sentenceCase2("pradhu kumar verma"));


function mergeSortedArray(arr1, arr2) {
    let ans = [];
    let ai1 = 0, ai2 = 0;
    while (ai1 < arr1.length && ai2 < arr2.length) {
        if (arr1[ai1] < arr2[ai2]) {
            ans.push(arr1[ai1++]);
        } else {
            ans.push(arr2[ai2++]);
        }
    }
    if (ai1 < arr1.length) {
        ans = [...ans, ...arr1.slice(ai1)];
    }
    if (ai2 < arr2.length) {
        ans = [...ans, ...arr2.slice(ai2)];
    }
    return ans;
}
print(mergeSortedArray([1, 2, 3, 6, 8], [4, 5, 7, 9]));


function arrayIntersecion(arr1, arr2) {
    let ans = [];
    arr1.forEach(ele => {
        if (arr2.includes(ele)) {
            ans.push(ele)
        }
    })
    return ans;
}
print(arrayIntersecion([1, 2, 9, 3, 4, 5], [4, 5, 7, 9]));


/*
valid format is:

1234567890          ->  /^\d{10}$/                      or  /^[0-9]{10}$/
(123) 456-7890      ->  /^\(\d{3}\)\s\d{3}\-\d{4}$/     or  /^\(\d{3}\) \d{3}-\d{4}$/
123-456-7890        ->  /^\d{3}\-\d{3}\-\d{4}$/         or  /^\d{3}-\d{3}-\d{4}$/
123.456.7890+       ->  /^\d{3}\.\d{3}\.\d{4}\+$/
91 (123) 456-7890   ->  /^\d{2}\s\(\d{3}\)\s\d{3}\-\d{4}$/ or /^\d{2} \(\d{3}\) \d{3}-\d{4}$/

function validPhone(arr) {
    let ans = { valid: 0, invalid: 0 }
    arr.forEach(number => {
        const len = number.length;
        console.log(len)
        if (/^\d{10}$/.test(number)) {
            ans.valid++
        } else if (/^\(\d{3}\)\s\d{3}\-\d{4}$/.test(number)) {
            ans.valid++
        } else if (/^\d{3}\-\d{3}\-\d{4}$/.test(number)) {
            ans.valid++
        } else if (/^\d{3}\.\d{3}\.\d{4}\+$/.test(number)) {
            ans.valid++
        } else if (/^\d{2} \(\d{3}\) \d{3}-\d{4}$/.test(number)) {
            ans.valid++
        } else {
            ans.invalid++
        }
    });
    return ans
}
let arr = ["1234567890", "123-456-7890", "123 456 7890", "(123) 456 7890", "911234567890"]
console.log(validPhone(arr))

*/


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
// print(reverseNumber(1234))


function isPalindrome(str) {
    // let rev = str.split("").reverse().join("");
    let rev = reverseString(str)
    return str === rev;
}
// print(isPalindrome("madam")); // true


function reverseString(str) {
    const strArr = str.split("")
    let rev = ""
    strArr.forEach(char => {
        rev = char + rev
    });
    return rev
}
// print(reverseString("pradhuman"))


function smallestLargest(arr) {
    const largest = Math.max(...arr)
    const smallest = Math.min(...arr)
    return { largest, smallest }
}
// print(smallestLargest([1, 2, 6, 9, 0, 3, 4]))


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
    // print(arr.sort((a, b) => a - b))
    return duplicat
}
// print(findDuplicate([1, 2, 3, 4, 1, 2, 3, 4, 5, 6, 7, 5, 4, 2, 2]))


function removeDuplicate(arr) {
    let visited = []
    arr.forEach(ele => {
        if (!visited.includes(ele)) {
            visited.push(ele)
        }
    });
    return visited
}
// print(removeDuplicate([1, 2, 3, 4, 1, 2, 3, 4, 5, 6, 7, 5, 4, 2, 2]))


function countFrequency(arr) {
    let fre = {}
    arr.forEach(key => {
        fre[key] = (fre[key] | 0) + 1
    });
    return fre
}
// print(countFrequency([1, 2, 3, 4, 1, 2, 3, 4, 5, 6, 7, 5, 4, 2, 2]))


function factorial(num) {
    if (num <= 1) {
        return 1
    }
    return num * factorial(num - 1)
}
// print(factorial(5))


function flattenNested(arr) {
    return arr.flat(Infinity)
}
// print(flattenNested([1, 2, [3, 4], 1, [2, 3], [4, 5, [6, 7, 5], 4], 2, 2]))


function countVoiels(str) {
    return str.match(/[aeiou]/gi).length
}
// print(countVoiels('bdjgeysijogy'))


function rotateArrayKsteps(arr, k) {
    const len = arr.length
    k = k % len
    return [...arr.slice(len - k, len), ...arr.slice(0, len - k)];

    for (let i = 0; i < k; i++) {
        arr.unshift(arr.pop())
    }
    return arr
}
// print(rotateArrayKsteps([1, 2, 3, 4, 5, 6, 7], 3))


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
// print(student1)
// print(student.getCollage(s1))


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
// print(checkAnagram("pradhu", "upahrd"))

function checkAnagram2(str1, str2) {
    if (str1.length !== str2.length) return false
    str1 = str1.split("").sort()
    str2 = str2.split("").sort()
    const reg = new RegExp('^' + str2 + '$')
    return reg.test(str1)
}
// print(checkAnagram2("pradhu", "urpahd"))


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
// print(sentenceCase("pradhu kumar verma"))


function sentenceCase2(str) {
    return str.split(" ").map(word => word[0].toUpperCase() + word.slice(1)).join(" ")
}
// print(sentenceCase2("pradhu kumar verma"));


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
// print(mergeSortedArray([1, 2, 3, 6, 8], [4, 5, 7, 9]));


function arrayIntersecion(arr1, arr2) {
    let ans = [];
    arr1.forEach(ele => {
        if (arr2.includes(ele)) {
            ans.push(ele)
        }
    })
    return ans;
}
// print(arrayIntersecion([1, 2, 9, 3, 4, 5], [4, 5, 7, 9]));



/*
valid format is:

1234567890          ->  /^\d{10}$/                      or  /^[0-9]{10}$/
(123) 456-7890      ->  /^\(\d{3}\)\s\d{3}\-\d{4}$/     or  /^\(\d{3}\) \d{3}-\d{4}$/
123-456-7890        ->  /^\d{3}\-\d{3}\-\d{4}$/         or  /^\d{3}-\d{3}-\d{4}$/
123.456.7890+       ->  /^\d{3}\.\d{3}\.\d{4}\+$/
91 (123) 456-7890   ->  /^\d{2}\s\(\d{3}\)\s\d{3}\-\d{4}$/ or /^\d{2} \(\d{3}\) \d{3}-\d{4}$/
*/
function validPhone(arr) {
    let ans = { valid: 0, invalid: 0 }
    arr.forEach(number => {
        const len = number.length;
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
// console.log(validPhone(arr))



/*
Explanation of Each
    \b → word boundary, ensures we’re matching full words, not substrings.
    (\w+) → capture group #1, matches one word (\w = letters, digits, underscore).
    \s+ → matches one or more spaces between the words.
    \1 → backreference → matches the same text captured in group #1.
    \b → another word boundary at the end.

    Flags:
        g → global, find all matches instead of stopping at the first.
        i → case-insensitive, so "Quickly Quickly" is caught even if capitalization
*/
function consecutivelyRepeatedWords(str) {
    let matches = [];

    const regex = /\b(\w+)\s+\1\b/gi;
    let duplicates = str.matchAll(regex)

    duplicates.forEach(word => {
        console.log(word)           // word => [f + s, f, s]
        first = word[0].split(" ")[0]
        matches.push(first)
    });

    return matches.join(" ");
}
// console.log(consecutivelyRepeatedWords("Please please help me me Quickly quickly"));

function consecutivelyRepeatedWords2(str) {
    const words = str.split(/\s+/);   // split by spaces
    const matches = [];
    words.forEach(word => {
        const regex = new RegExp(`\\b${word}\\s+${word}\\b`, "i");  // build regex for "word word" (case insensitive)
        const checkReg = new RegExp(`\\b${word}\\b`, 'i')           // build regex for "word" (case insensitive)

        if (regex.test(str) && !checkReg.test(matches.join(" "))) {
            matches.push(word);
        }
    });
    return matches.join(" ");
}
// console.log(consecutivelyRepeatedWords2("Please please help me me Quickly quickly"));



/*
Explanation
    . -> capture any char
    (.) → capture any single character and remamber it .
    \1 → backreference, means "the same character as captured before".
    (.)\1 -> means one char followed by same char -> aa or bb or 11
    {2,} → repeat at least 2 times.

    So together (.)\1{2,} means:
        one character followed by the same character at least two more times.
*/
function consecutivelyRepeatedLetter(str) {
    const words = str.split(/\s+/);   // split by spaces
    const matches = [];
    words.forEach(word => {
        // const regex = new RegExp(`(.)\\1{2,}`, "i");  // build regex for "www" (case insensitive)
        // if (regex.test(word)) {
        if (/(.)\1{2,}/i.test(word)) {
            matches.push(word);
        }
    });
    return matches.join(" ");
}
// console.log(consecutivelyRepeatedLetter("sooo excited fot this cooool event yesss absolutely"));



/*
duplicateContain -> \\b${word}\\b

Step-by-step:
    \\b → word boundary (start).
    ${word} → the current token inserted into the pattern.
    \\b → word boundary (end).
    'i' flag → case-insensitive.
        
    Meaning: match the whole word (as a separate word) anywhere in the tested string, ignoring case.
        Example results
            duplicateContain.test("Please") for word = "Please" → true
            duplicateContain.test("please me") for word = "Please" → true
            duplicateContain.test("pleased") for word = "Please" → false (because of \b)


duplicateWithoutSpace -> /^(\w+)\1$/i  -or- ^(\p{L}+)\1$/iu)

Step-by-step:
    ^ → start of string.
    (\w+) → capture one or more “word characters” (\w = [A-Za-z0-9_]) into group 1.
    \1 → immediately match the exact same text captured in group 1 again.
    $ → end of string.
    \p{L} -> is a Unicode property escape (L = Letter: includes A-Z, a-z, á, é, ü, Я, 文, etc.).
    i → case-insensitive (so "HelloHELLO" works)
    u → Unicode mode (needed for \p{L}).

    Meaning: the entire string is exactly some word repeated twice back-to-back (no separator). Examples: "hellohello", "abcabc", "Pleaseplease" (case-insensitive). The capture usually becomes half the string (for even lengths) where the first half equals the second half.
        Example results
           duplicateWithoutSpace.test("Pleaseplease") → true (group1 = Please, \1 = please)
           duplicateWithoutSpace.test("meme") → true because m + m? — actually greedy capture will find the correct split if possible; for "meme" group1 can be "me" and \1 "me" → true.
           duplicateWithoutSpace.test("abcab") → false (not an exact double)
           duplicateWithoutSpace.test("hello-hello") → false (hyphen is not \w)


duplicateWithSpace -> \\b${word}\\s+${word}\\b

Step-by-step:
    \\b → word boundary (start).
    ${word} → the first occurrence of the token.
    \\s+ → one or more whitespace characters (space, tab, newline).
    ${word} → the second occurrence of the same token.
    \\b → word boundary (end).
    'i' → case-insensitive.

    Meaning: find two occurrences of the same token separated by at least one whitespace character (e.g. "hello hello", "hello hello", "hello\t hello"). This will not match glued forms (no whitespace).
        Example results
            For word = "Please":
            /\bPlease\s+Please\b/i.test("Please please") → true (Tabs/newlines count as whitespace so \s+ covers them)
            /\bPlease\s+Please\b/i.test("Please     please") → true
            /\bPlease\s+Please\b/i.test("Pleaseplease") → false (no whitespace)
            /\bPlease\s+Please\b/i.test("Please-Please") → false (hyphen is not whitespace)
*/
function consecutivelyRepeatedWords3(str) {
    const words = str.split(/\s+/);   // split by spaces
    const matches = [];
    words.forEach(word => {

        // regex 1: "word" (for duplicate check in matches array)
        const duplicateContain = new RegExp(`\\b${word}\\b`, 'i')

        // regex 2: doubled word inside itself (like "Pleaseplease")
        const duplicateWithoutSpace = /^(\w+)\1$/i;

        // regex 3: "word word" (two tokens, with/without spaces)
        const duplicateWithSpace = new RegExp(`\\b${word}\\s+${word}\\b`, "i");

        // Case 1: handle glued double words like "Pleaseplease"
        if (duplicateWithoutSpace.test(word) && !duplicateContain.test(matches.join(" "))) {
            matches.push(word.slice(0, word.length / 2)); // push half (e.g. "Please")
        }

        // Case 2: handle separated doubles like "help help" or "meme meme"
        if (duplicateWithSpace.test(str) && !duplicateContain.test(matches.join(" "))) {
            matches.push(word);
        }
    });
    return matches.join(" ");
}
// console.log(consecutivelyRepeatedWords3("Please please help me me Quicklyquickly"));


/*
Write a regex to validate a strong password with these rules:
    At least 8 characters long
    Must contain at least 1 lowercase, 1 uppercase, 1 digit, and 1 special character (!@#$%^&*)

Examples ✅
    Passw0rd!
    Hello@123
Not match ❌
    password (no uppercase, no digit, no special)
    PASSWORD123 (no lowercase, no special)
    Pass123 (too short)

    
Answer Explanation:
    ^ → start
    (?=.*[a-z]) → at least one lowercase
    (?=.*[A-Z]) → at least one uppercase
    (?=.*\d) → at least one digit
    (?=.*[!@#$%^&*]) → at least one special
    [A-Za-z\d!@#$%^&*]{8,} → allowed characters, minimum length 8
    $ → end
*/
function isStrongPassword(pass) {
    return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/.test(pass);
}
// console.log(isStrongPassword("Passw0rd!"));     // true
// console.log(isStrongPassword("Pasw0rd!🙂"));    // false
// console.log(isStrongPassword("password123"));   // false


function isStrongPassword2(pass) {
    return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/.test(pass);
}
// console.log(isStrongPassword2("Passw0rd!"));    // true
// console.log(isStrongPassword2("Pasw0rd!🙂"));   // true
// console.log(isStrongPassword2("password123"));  // false




// =========================================================================================================


/*
function swap(arr, i, j) {
    arr[i] = arr[i] + arr[j];
    arr[j] = arr[i] - arr[j];
    arr[i] = arr[i] - arr[j];
}

// 1. Write a function to move all negative numbers to the left side of the array and positive numbers to the right side, in-place.
// Example: [3, -2, -5, 7, 1, -8] → [-2, -5, -8, 7, 1, 3].

function negativePositive(arr) {
    const negative = arr.filter(num => num < 0);
    const positive = arr.filter(num => num > 0);
    return [...negative, ...positive]
}
console.log(negativePositive([3, -2, -5, 7, 1, -8]))

function negativePositiveInplace(arr) {
    let left = 0, right = arr.length - 1;
    while (left < right) {
        if (arr[left] < 0) {
            left++;
        } else if (arr[right] > 0) {
            right--;
        } else {
            swap(arr, left, right);
            left++;
            right--;
        }
    }
    return arr;
}
console.log(negativePositiveInplace([3, -2, -5, 7, 1, -8]));



// Given an array, replace every second element with its square.
// Example: [2, 3, 4, 5, 6] → [2, 9, 4, 25, 6].
function replaceSecondSqure(arr) {
    for (let i = 1; i < arr.length; i += 2) {
        arr[i] = arr[i] ** 2
    }
    return arr;
}
console.log(replaceSecondSqure([2, 3, 4, 5, 6]))

function replaceSecond(arr) {
    return arr.map((val, i) => (i % 2 === 1 ? val * val : val));
}
console.log(replaceSecond([2, 3, 4, 5, 6]));



// Write a function that checks if an array is sorted in ascending order. Return true or false.
function isAscending(arr) {
    return arr[0] < arr[1] ? true : false
}
console.log(isAscending([2, 3, 4, 5, 9]))



// Remove all duplicates from an array without using Set().
// Example: [1, 2, 3, 2, 4, 1, 5] → [1, 2, 3, 4, 5].
function removeDuplicate(arr) {
    let unique = []
    arr.forEach(element => {
        if (!unique.includes(element)) {
            unique.push(element)
        }
    });
    return unique
}
console.log(removeDuplicate([1, 2, 3, 2, 4, 1, 5]));

function removeDuplicate(arr) {
    return arr.reduce((unique, ele) => {
        if (!unique.includes(ele)) {
            unique.push(ele);
        }
        return unique;
    }, []);
}
console.log(removeDuplicate([1, 2, 3, 2, 4, 1, 5]));



// Given two arrays, return the common elements between them.
// Example: [1, 2, 3, 4] and [3, 4, 5, 6] → [3, 4].
function intersection(arr1, arr2) {
    let common = []
    arr1.forEach(element => {
        if (arr2.includes(element)) {
            common.push(element)
        }
    });
    return common
}
console.log(intersection([1, 2, 3, 4], [3, 4, 5, 6]));

function intersection(arr1, arr2) {
    return arr1.filter(ele => arr2.includes(ele))
}
console.log(intersection([1, 2, 3, 4], [3, 4, 5, 6]));



// Replace every 4th word in a string with "X".
// Example: "I love to write code every day" → "I love to X code every day".
let str = "I love to write code every day"
function replaceFourthWordToX(str) {
    str = str.split(" ")
    for (let i = 3; i < str.length; i += 4) {
        str[i] = "X"
    }
    return str.join(" ");
}
console.log(replaceFourthWordToX(str))

function replaceFourthWordToX(str) {
    return str.split(" ").map((word, index) => index % 4 === 3 ? "X" : word).join(" ");
}
console.log(replaceFourthWordToX(str))



// Count the number of vowels in a given string.
function voilsCount(str) {
    console.log(str.match(/[aeiou]/gi).length)

    let voil = 0
    for (let i = 0; i < str.length; i++) {
        if ("aeiouAEIOU".includes(str[i])) {
            voil++
        }
    }
    console.log(voil)
}
voilsCount(str)


// Check if two strings are anagrams of each other.
// Example: "listen" and "silent" → true.
function isAnagram(str1, str2) {
    let isAna = str1.split("").sort().join("") === str2.split("").sort().join("")
    console.log(isAna)

    isAna = str1.length === str2.length
    for (let i = 0; i < str1.length; i++) {
        if (!str2.includes(str1[i])) {
            isAna = false
        }
    }
    console.log(isAna)
}
isAnagram("listen", "silent")



// Reverse the order of characters in each word, but keep the word order same.
// Example: "I love JS" → "I evol SJ".
function reverseCurrWord(str) {
    let rev = ""
    for (let i = str.length - 1; i >= 0; i--) {
        rev += str[i]
    }
    return rev
}

function reverseWord(str) {
    let wordArr = []
    let curr = ""
    for (let i = 0; i < str.length; i++) {
        if (str[i] === ' ') {
            wordArr.push(reverseCurrWord(curr))
            curr = ""
        } else {
            curr += str[i]
        }
    }
    wordArr.push(reverseCurrWord(curr))
    console.log(wordArr.join(" "))

    return str.split(" ").map(word => word.split("").reverse().join("")).join(" ");
}
console.log(reverseWord("I love JS"))



// Replace all words with length greater than 4 with "****".
// Example: "I enjoy coding in JavaScript" → "I **** **** in ****".
str = "I enjoy coding in JavaScript"
function replaceAllWord_LenGreater4(str) {
    str = str.split(" ")
    for (let i = 0; i < str.length; i++) {
        if (str[i].length > 4) {
            str[i] = "X"
        }
    }
    return str.join(" ");
}
console.log(replaceAllWord_LenGreater4(str))

function replaceAllWord_LenGreater4(str) {
    return str.split(" ").map(word => word.length > 4 ? "****" : word).join(" ");
}
console.log(replaceAllWord_LenGreater4(str))



// Write a regex to check if a string is a valid Indian mobile number (starts with 6–9, followed by 9 more digits).
console.log(
    /^[6-9]\d{9}/.test("9564895652"),    // start with 9 with more 9 digits
    /^[6-9]\d{9}/.test("6564895652"),    // start with 6 with more 9 digits
    /^[6-9]\d{9}/.test("8564895652"),    // not start with 7 with more 9 digits
    /^[6-9]\d{9}/.test("94895652")       // start with 9 but not more 9 digits
)



// Detect consecutive duplicate letters in a string.
// Example: "heelloo wooorld" → "ee oo ooo".
console.log(
    "heelloo".match(/(.)\1/g),              // ['ee', 'll', 'oo']
    "heelloo".match(/(.)\1{1,}/g),          // ['ee', 'll', 'oo']
    "heelloo wooorld".match(/(.)\1{1,}/g),  // ['ee', 'll', 'oo', 'ooo']
    "heelloo wooorld".match(/(.)\1{2,}/g)   // ['ooo']
)



// Validate if a string is a valid date in format DD/MM/YYYY.
console.log(
    /\d{2}\/\d{2}\/\d{4}/.test("10/10/2003"), // true
    /\d{2}\/\d{2}\/\d{4}/.test("0/10/2003"),  // false
    /\d{2}\/\d{2}\/\d{4}/.test("10/1032003")  // false
)

console.log(
    /^([012][1-9]|3[01])\/(0\d|1[0-2])\/\d{4}$/.test("01/01/2003"), // true
    /^([012][1-9]|3[01])\/(0\d|1[0-2])\/\d{4}$/.test("31/10/2003"), // true
    /^([012][1-9]|3[01])\/(0\d|1[0-2])\/\d{4}$/.test("18/12/2003"), // true
    /^([012][1-9]|3[01])\/(0\d|1[0-2])\/\d{4}$/.test("32/10/2003"), // false
    /^([012][1-9]|3[01])\/(0\d|1[0-2])\/\d{4}$/.test("00/08/2003"), // false
    /^([012][1-9]|3[01])\/(0\d|1[0-2])\/\d{4}$/.test("16/13/2003"), // false
    /^([012][1-9]|3[01])\/(0\d|1[0-2])\/\d{4}$/.test("10/12/20303") // false
)

*/

// Rearrange an array such that all odd numbers appear before even numbers, while maintaining their original order.
// Example: [4, 1, 3, 2, 7, 8] → [1, 3, 7, 4, 2, 8].
function evenOdd(arr) {
    const even = arr.filter(ele => ele % 2 === 0);
    const odd = arr.filter(ele => ele % 2 === 1);
    return [...odd, ...even]
}
console.log(evenOdd([4, 1, 3, 2, 7, 8]))



// Given an array of numbers, replace each element with the sum of all elements to its right.
// Example: [4, 2, 1] → [3, 1, 0].
function rightSum(arr) {
    let sum = 0;
    for (let i = arr.length - 1; i >= 0; i--) {
        const curr = arr[i]
        arr[i] = sum
        sum += curr
    }
    return arr
}
console.log(rightSum([4, 2, 1]))



// Write a function that finds the second largest unique number in an array.
// Example: [5, 2, 9, 1, 9, 7] → 7.
function secondHighestUnique(arr) {
    arr.sort((a, b) => b - a)
    const unique = new Set(arr)
    return [...unique][1]
}
console.log(secondHighestUnique([5, 2, 9, 1, 9, 7]))



// Rotate an array in-place by k positions (without using .slice() or extra arrays).
function rotateArrayKsteps(arr, k) {
    for (let i = 0; i < k; i++) {
        arr.unshift(arr.pop())
    }
    return arr
}
console.log(rotateArrayKsteps([5, 2, 9, 1, 9, 7], 3))
console.log(rotateArrayKsteps([1, 2, 3, 4, 5], 2))



// Given an array of 0s and 1s, find the longest consecutive sequence of 1s.
// Example: [1, 1, 0, 1, 1, 1, 0, 1] → 3.
function longestConsecutiveSequence(arr) {
    // return arr.join("").match(/(1)\1+/g).sort((a, b) => b.length - a.length)[0]

    const arrStr = arr.join("")
    const repeted = arrStr.match(/(1)\1+/g)
    repeted.sort((a, b) => b.length - a.length)
    return [repeted[0], repeted[0].length]
}
console.log(longestConsecutiveSequence([1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 1]))

function maxOnes(arr) {
    let max = 0;
    let curr = 0;
    for (let ele of arr) {
        curr = ele === 1 ? curr + 1 : 0;
        max = Math.max(max, curr)
    }
    return max
}
console.log(maxOnes([1, 1, 0, 1, 1, 1, 0, 1]));



// Replace every nth character in a string with *. (Example: replace every 3rd character).
// "abcdefghi" → "ab*de*gh*".
function replaceNthChar(str, n) {
    return str.split("").map((char, index) => index % n === n - 1 ? "*" : char).join("")
}
console.log(replaceNthChar("abcdefghi", 3))

function replaceNthChar2(str, n) {
    str = str.split("")
    for (let i = n - 1; i < str.length; i += n) {
        str[i] = "*"
    }
    return str.join("")
}
console.log(replaceNthChar2("abcdefghi", 3))



// Find the longest word in a sentence.
// "I am practicing JavaScript daily" → "JavaScript".
function longestWord(str) {
    return str.split(" ").sort((a, b) => b.length - a.length)[0]
}
console.log(longestWord("I am practicing JavaScript daily"))



// Write a function that returns the frequency of each word in a sentence.
// "this is is a test this" → {this:2, is:2, a:1, test:1}.
function wordFrequency(str) {
    str = str.split(" ");
    let fre = {}
    for (let i = 0; i < str.length; i++) {
        const word = str[i]
        fre[word] = (fre[word] | 0) + 1
    }
    return fre
}
console.log(wordFrequency("this is is a test this"))

function charFrequency(str) {
    let fre = {}
    for (let i = 0; i < str.length; i++) {
        const char = str.charAt(i);
        fre[char] = (fre[char] | 0) + 1
    }
    return [fre, str.length]
}
console.log(charFrequency("this is is a test this"))



// Check if a string is a pangram (contains every letter of the English alphabet at least once).
function isPangram(str) {
    str = str.toLowerCase();
    return [..."abcdefghijklmnopqrstuvwxyz"].every(ch => str.includes(ch));

    let matches = str.match(/[a-z]/g); // only contain a to z char by matching globaly
    const uniqueMatches = new Set(matches);
    return uniqueMatches.size === 26;

    let char = str.replace(/[^a-z]/g); // only contain a to z char by replacing " "
    let unique = new Set(char)
    return unique.size === 26;
}
console.log(isPangram("The quick brown fox jumps over the lazy dog")); // true

function isPangram3(str) {
    str = str.toLowerCase();
    let freq = {};
    for (let ch of str) {
        if (ch >= 'a' && ch <= 'z') {
            freq[ch] = true;
        }
    }
    return Object.keys(freq).length === 26;
}
console.log(isPangram3("The quick brown fox jumps over the lazy dog")); // true


// Remove all duplicate characters from a string.
// "programmiinng" → "prograg".
function removeDuplicateChar(str) {
    const duplicate = str.match(/(.)\1+/g)
    duplicate.forEach(char => {
        const reg = new RegExp(`${char}`)
        str = str.replace(reg, "")
    });
    return [duplicate, str]
}
console.log(removeDuplicateChar("programmiinng"))



// Write a regex to validate an email address (must contain @, domain, and end with .com or .org).
console.log(/^[\w.-]+@[a-zA-Z]+\.(com|org)$/.test("pra5d@gmail.org"))



// Extract all the hashtags from a sentence.
// "Learning #JavaScript and #Regex is fun" → ["#JavaScript", "#Regex"].
str = "Learning #JavaScript and #Regex is fun"
console.log(str.match(/(?<=#)\w+/g))



// Validate a string as a strong password:
// At least 8 characters and Contains uppercase, lowercase, digit, special char but No spaces
console.log(/^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*])[A-Za-z0-9!@#%^&*]{8,}/.test("Pr1@PPPPPP"))



// OOP / Classes (2 Qs)

// Create a class BankAccount with properties accountNumber, balance. Add methods:
// deposit(amount)
// withdraw(amount) (check sufficient balance)
// getBalance()

// Create a class Playlist to store songs (title, artist). Add methods:
// addSong(title, artist)
// removeSong(title)
// getAllSongs()
// searchByArtist(artist)
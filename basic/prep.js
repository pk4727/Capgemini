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

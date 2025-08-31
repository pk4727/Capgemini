/* With these, you can handle searching, extracting, replacing, validating, and splitting almost any string problem in JS.

🔹 Regex Object Methods

test(str) → Checks if regex matches; returns true/false.
exec(str) → Finds first match and returns detailed info (with groups).



🔹 String Methods with Regex

match(regex)                → Returns matches as an array (or null).
matchAll(regex)             → Returns all matches with groups in array (iterator).
search(regex)               → Returns index of first match (or -1).
replace(regex, replacement) → Replaces the first (or all, if /g) matches.
replaceAll(regex, replacement) → Replaces all matches (requires /g).
split(regex)                → Splits string using regex as delimiter.



🔹Regex Flags in JavaScript

g (global)      → Makes the regex continue searching beyond the first match, so it finds all matches in a string instead of stopping at the first.
i (ignore case) → Makes pattern matching case-insensitive, treating uppercase and lowercase letters as the same.
m (multiline)   → Changes how ^ and $ behave: instead of matching only the very start or end of the whole string, they also work at the start and end of each line within the string.
s (dotall)      → Allows the dot (.) to match newline characters as well, so the dot truly means "any character".
u (unicode)     → Enables full Unicode support, so the regex can properly recognize characters outside the basic ASCII set, like emoji or accented characters.
y (sticky)      → Makes the regex match exactly from the current position in the string (lastIndex), without skipping ahead to search further.



🔹 Regex Special Characters & Constructs

.  → Matches any single character except newline.
\d → Matches any digit (0–9).
\D → Matches any non-digit character.
\w → Matches word characters (letters, digits, underscore).
\W → Matches non-word characters.
\s → Matches whitespace (spaces, tabs, line breaks).
\S → Matches non-whitespace.


🔹 Anchors & Boundaries

^  → Asserts start of string (or line in multiline mode).
$  → Asserts end of string (or line in multiline mode).
\b → Word boundary (position between word and non-word).


🔹 Groups & Alternation

(abc)       → Capturing group, remembers the match.
(?:abc)     → Non-capturing group, groups without remembering.
(?<name>abc) → Named capturing group.
a|b         → Alternation (OR) operator.


🔹 Quantifiers

a*      → Zero or more occurrences.
a+      → One or more occurrences.
a?      → Zero or one occurrence.
a{3}    → Exactly three occurrences.
a{2,5}  → Between two and five occurrences.


🔹 Lookarounds

(?=...)  → Positive lookahead (something must follow).
(?!...)  → Negative lookahead (something must not follow).
(?<=...) → Positive lookbehind (something must precede).
(?<!...) → Negative lookbehind (something must not precede).
*/




// 🔹 Regex Object Methods -------------------------------------------------------------

// 1. test(str) → checks if a match exists
// console.log(
/\d+/.test("abc123"), // true
    // Regex: /\d+/     -> Find one or more digits in the string

    /[A-Z]/.test("hello"), // false
    // Regex: /[A-Z]/   -> any uppercase English letter. but No +, so it means exactly one uppercase letter somewhere in the string.



    // 2. exec(str) → return detailed match info (first match + groups)
    /(\d+)([a-z]+)/.exec("123abc456"),
    // ['123abc', '123' , 'abc']
    /*
    Regex explained: /(\d+)([a-z]+)/  👉 Together: it tries to match "digits followed by lowercase letters".
         
        (\d+)       → 1st capturing group ->  So this captures "123".
            \d = digit (0–9)
            + = one or more digits
    
        ([a-z]+)    → 2nd capturing group -> So this captures "abc".
            [a-z] = lowercase letters
            + = one or more letters
    */




    //  🔹 String Methods with Regex ------------------------------------------------------------------------

    // 3. match(regex) → returns array of match or maches if global g
    "a1b2c3".match(/\d/g), // ["1","2","3"]
    "hEllo".match(/[A-Z]/) // ['E']
/*
Regex: /\d/g 
    \d → matches a digit (0–9).
    g → global flag → find all matches, not just the first.
        String: "a1b2c3" -> Finds "1", "2", "3".
 
Regex: /[A-Z]/      → any uppercase letter (from A to Z).
    No g flag → returns the first match only (if found).
    String: "hello" -> It has only lowercase letters → ❌ no uppercase match.
*/
// )


// 4. matchAll(regex) → returns nested array with all matches with groups (iterator)
let text = "a1 b2 c3";
let matches = [...text.matchAll(/(\w)(\d)/g)];
// console.log(matches) // [Array(3), Array(3), Array(3)] where Array(3) = ['a1', 'a', '1']
/*
Regex explained : /(\w)(\d)/g   -> Together: match one word character immediately followed by one digit.
    (\w) → 1st capturing group = a word character (letter, digit, _).
    (\d) → 2nd capturing group = a digit.
    g flag → find all matches in the string.
*/



// 5. search(regex) → returns the index of first match (or -1)
// console.log(
"hello world".search(/world/), // 6
    "hello".search(/\d/), // -1
    /*
    Regex: /world/  → looks for substring "world".
    Regex: /\d/ → looks for a digit.
    */



    // 6. replace(regex, replacement) → replace first/all depending on flag
    "hello 123 456".replace(/\d+/, "#"),   // "hello # 456"
    "hello 123 456".replace(/\d+/g, "#"),   // "hello # #"
    "a1b2c3".replace(/\d/, "*"),      // "a*b2c3"
    "a1b2c3".replace(/\d/g, "*"),      // "a*b*c*"
    /*
    Regex: /\d+/    -> .replace(..., "#") → replaces the first match only (because no g flag).
        \d → digit (0–9)
        + → one or more digits
        So this matches "123" -> '#
    
    Regex: /\d/g    -> .replace(..., "*") → replaces every digit with "*"
        \d → digit (0–9)
        g flag → match all digits in the string.
    */



    // 7. replaceAll(regex, replacement) → replace all (must use /g)
    "1,2,3".replaceAll(/\d/g, "X"), // "X,X,X"
    /*
    Regex: /\d/g    -> Finds every digit in the string and Replaces each with "X".
        \d → matches a digit (0–9).
        g → global flag → match all digits.
    */



    // 8. split(regex) → split by regex
    "a,b;c|d".split(/[,;|]/), // ["a", "b", "c", "d"]
    /*
    Regex: /[,;|]/
        Inside [...] → character class.
        , → comma
        ; → semicolon
        | → vertical bar (pipe)
            So /[,;|]/ means: split on any one of these characters.
    
    String: "a,b;c|d"   -> ["a", "b", "c", "d"]
        Splits at , → "a" and "b;c|d"
        Then splits at ; → "b" and "c|d"
        Then splits at | → "c" and "d"
    */



    // 🔹 Regex Flags Examples and Advanced Patterns ------------------------------------------------------------------

    /abc/i.test("ABC"), // true (ignore case)
    "a\nb".match(/a.b/s), // ["a\nb"] (dot matches newline)
    "a\nb".match(/^b/m), // ["b"] (multiline match)
    /*
    Regex: /abc/i
        abc → literal letters "abc".
        i → ignore case (case-insensitive).
    
    Regex: /a.b/s
        . → means “any character except newline” (by default).
        With s (dotall), . also matches newlines(\n).
    
        String: "a\nb" = 'a.b'
    
    Regex: /^b/m
        ^b → means “start of string is 'b” (default).
        With m -> check in multiline,
        ^ and $ also match at the start/end of each line, not just the whole string.
    
        String: "a\nb"
            Line 1 = "a"
            Line 2 = "b"
            With m, ^b matches "b" at the start of line 2.
    */



    // 1. Lookahead & Lookbehind
    "abc123".match(/\d+(?=3)/),   // ["12"]  (before 3)
    "abc123".match(/(?<=c)\d+/),  // ["123"] (after 'c')
    /*
    Regex: /\d+(?=3)/
        \d+ → one or more digits.
        (?=3) → positive lookahead = digits must be immediately followed by "3".
        
        String: "abc123"
            Digits: "123".
            Lookahead says: "Only match digits that come right before a 3".
            So regex matches "12" → ✅ (since "12" is followed by "3").
    
    Regex: /(?<=c)\d+/
        (?<=c) → positive lookbehind = digits must be immediately after "c".
        \d+ → one or more digits.
    
        String: "abc123"
            "c123" → "123" comes **after "c"`.
            So regex matches "123".
    */



    // 2. Word Boundaries
    "cat scatter".match(/\bcat\b/), // ["cat"] (full word only)
    /*
    Regex: /\bcat\b/
        \b → word boundary = a position between a word character ([a-zA-Z0-9_]) and a non-word character (like space, punctuation, start, or end).
        cat → literal text "cat".
        So /\bcat\b/ means: Match "cat" only if it is a full word (surrounded by non-word boundaries).
    
        String: "cat scatter"
            "cat" at the beginning → ✅
                Left side = start of string (boundary).
                Right side = space " " (boundary).
                So "cat" matches.
            "scatter" contains "cat" but it is not a whole word.
                Left side of "cat" = "s" (a word char).
                So it fails the boundary condition.
    */



    // 3. Quantifiers
    "aaa".match(/a{2,3}/), // ["aaa"] (2–3 times)
    "aaab".match(/a+?/),   // ["a"]  (lazy match)
    /*
    Regex: /a{2,3}/
        {2,3} → match between 2 and 3 as in a row.
    
        String: "aaa"
            "aaa" has 3 as. 
            Since 3 is within the allowed range (2–3), it matches the whole "aaa".
    
    Regex: /a+?/
        a+ → match 1 or more as.
        ? → makes it lazy (non-greedy) → match as few as possible while still succeeding.
        
        String: "aaab"
            Normally /a+/ (greedy) would match "aaa".
            But /a+?/ (lazy) matches just the first "a".
    */


    'bdjgeysijogy'.match(/[aeiou]/gi),  // count voils in string ignor case


    // 🔹 1. Validation -> Used to check if a string matches a required format.
    /^\d{10}$/.test("1234567890"),   // true → valid 10-digit number // ✅ Examples: phone numbers, emails, passwords, postal codes.


    // 🔹 2. Searching -> Find if a pattern exists in a string.
    "Hello123".search(/\d+/),  // 5 (position of first digit) // ✅ Example: detect if a string contains digits.


    // 🔹 3. Extracting (Capturing Groups) -> Pull out parts of a string.
    "Price: $120".match(/\$(\d+)/),  // "120" // ✅ Example: extract numbers, dates, usernames, etc.


    // 🔹 4. Replacing (Substitution) -> Replace text that matches a pattern.
    "Hello 123".replace(/\d+/, "XYZ"),  // "Hello XYZ" // ✅ Example: mask phone numbers, format text.


    // 🔹 5. Splitting Strings -> Split based on regex instead of fixed characters.
    "one,two;three|four".split(/[,;|]/), // ["one", "two", "three", "four"] // ✅ Example: parse CSV, multiple delimiters.


    // 🔹 6. Removing Unwanted Characters
    "abc123!@#".replace(/[^a-z0-9]/gi, ""), // "abc123" // ✅ Example: keep only alphanumeric characters.
    "abc123!@#".replace(/[a-z0-9]/gi, ""), // "!@#" // ✅ Example: remove only alphanumeric characters.


    // 🔹 7. Lookaheads / Lookbehinds (Advanced Validation) -> Check presence of conditions without consuming characters.
    /(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{6,}/.test("Pass123"), // true // ✅ Example: password rules.


    // 🔹 8. Anchoring -> Force match at start (^) or end ($).
    /^Hello/.test("Hello World"), // true
    /World$/.test("Hello World"), // true


    // 🔹 9. Optional / Repetition ->
    "color".match(/colou?r/),  // matches "color" or "colour"
    "ahaaa".match(/ha+/),       // matches "ha", "haa", "haaa"


    // 🔹 10. Escaping Special Characters by \char
    /^\d+\.\d+$/.test("3.14") // true (matches decimals like 3.14) -> // ✅ Example: match literal . * ? etc.
// )

let allMatch = "ahaaha".matchAll(/(ha)+/g)       // matches "ha" or haha
allMatch.forEach(match => {
    // console.log(match)
});


// console.log(
"Price: $120 and 300".match(/(?<=\$)\d+/g), // ["120"]
    "user@gmail.com test.user@gmail.com".match(/\b(?:test\.)\w+@\w+\.com/g), // ["test.user@gmail.com"]

    "Price: $120 and 300".match(/(?<!\$)\d+/g), // ["300"]
    "user@gmail.com test.user@gmail.com".match(/(?<!test\.)\w+@\w+\.com/g), // ["user@gmail.com"]

    // ?=
    "123abc".match(/\d+(?=abc)/g),  // lookahead -> 123
    "abc123".match(/(?<=abc)\d+/g) // lookbehind -> 123
// )


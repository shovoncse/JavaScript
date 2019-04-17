// let re
// re = /hello/
// re = /hello/i   // "i" flag = case insensitive 
// re = /hello/g   // "g" flag = Global Search

// console.log(re)
// console.log(re.source)

// exex() - Returns result in an array or null
// const result = re.exec('hello World')
// console.log(result)
// console.log(result[0])
// console.log(result.input)
// console.log(result.index)

// test() - Returns true or false
// const result = re.test('Hello')
// console.log(result)

// match() - Returns true or false
// const str = 'Hello there'
// const result = str.match(re);
// console.log(result)

// Search() - Returns the index of the first match if not found return -1
// const str = 'Jhon hello there'
// const str = 'Jhon kello there'
// const result = str.search(re);
// console.log(result)

// replace() - Returns a new string with sum or all matches of a pattern
// const str = 'Hello There'
// const newStr = str.replace(re, 'Hi');
// console.log(newStr)

// CLASS 1 ENDS

let re;
// Literal Charecters
re = /hello/
re = /hello/i

// metacharacter Symbols
re = /^h/i // must start with
re = /ld$/i // must ends with
re = /^hello$/i // must start & ends with
re = /^h.llo$/i // Matches any ONE Character
re = /h*llo/i // Matches any ONE Character 0 or more times
re = /gre?a?y/i // Optional carecter
re = /gre?a?y\?/i // Escape carecter

// Brackets [] - Character Sets
re = /gr[ae]y/i // Must be an a or e
re = /[GF]ray/i // Must be an G or F
re = /[^GF]ray/i // Must be anything except G or F
re = /[A-Z]ray/ // Match any uppercase letter
re = /[a-z]ray/ // Match any lowercase letter
re = /[A-Za-z]ray/ // Match any lowercase / Uppercase letter
re = /[0-9]ray/  //Must any Digit

// Braces {} - Quantifiers
re = /hel{2}o/i //Must occur exactly {m} amount of times
re = /hel{2,4}o/i //Must occur exactly from 2 to 4 amount of times
re = /hel{2,}o/i //minimum 2 times l

// Parentheses () - Grouping
// re = /[0-9]x{3}/ //0xxx
re = /([0-9]x){3}/ //1x2x4x
re = /^([0-9]x){3}$/ //1x2x4x ^ - $

// Short Hand Character Classes
re = /\w/; // One Word Character - alphanumeric or _
re = /\w+/; // One or More Word Character - alphanumeric or _
re = /\W/; // Non-Word Character
re = /\d/ // Match any Digit (one)
re = /\d+/ // Match any Digit (One or more)
re = /\D/ // Non Digit
re = /\s/ // Match whitespace char
re = /\S/ // Match non-whitespace char
re = /Hell\b/i // word boundary

// Assertion
re = /x(?=y)/ // Match x only if followed by y
re = /x(?!y)/ // Match x only if not followed by y

// String To Match
const str = 'Hello, xy to hell';



// Log Result
const result = re.exec(str);
console.log(result);

function reTest(re, str){
    if(re.test(str)){
        console.log(`${str} matches ${re.source}`);
    }else{    
        console.log(`${str} does not matches ${re.source}`);
    }
}

reTest(re, str);

// Class 2 - 3- 4 Ends
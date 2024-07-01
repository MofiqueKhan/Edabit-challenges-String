// 11.

// Write a template string according to the following example:

// Example
const a = "John";
const b = "Joe";
const c = "Jack";
const template = `Their names were:  ${a},  ${b}  and  ${c}.` 
//  "Their names were:  John,  Joe  and  Jack."
// console.log(template , "Their names were:  John,  Joe  and  Jack.");

// 12.

// Given a string, return true if its length is even or false if the length is odd.

// Examples
function oddOrEven(str){
    return str.length % 2 === 0 ? true : false
}
// console.log( oddOrEven("apples") , true);
// // The word "apples" has 6 characters.
// // 6 is an even number, so the program outputs true.

// console.log( oddOrEven("pears") , false);
// // "pears" has 5 letters, and 5 is odd.
// // Therefore the program outputs false.

// console.log( oddOrEven("cherry") , true);


// 13.

// You need to create two functions to substitute toString() and parseInt(); A function called intToString() that converts integers into strings and a function called stringToInt() that converts strings into integers.

// Examples:
function stringToInt(val){
    if(typeof(val) === "string"){
        return +val
    }
}

function intToString(val){
    if(typeof(val) === "number"){
        return val + ""
    }
}
// console.log( intToString(4) , "4");

// console.log( stringToInt("4") , 4);

// console.log( intToString(29348) , "29348");

// 14.

// Create a function that takes a word and returns the new word without including the first character.

// Examples
function newWord(str){
    // return str.slice(1)
    let result = ""
    for(let i = 1 ; i < str.length ; i++){
        result += (str[i])
    }
    return result 
}
// console.log( newWord("apple") , "pple");

// console.log( newWord("cherry") , "herry");

// console.log( newWord("plum") , "lum");

// 15.
// Create a function that takes a name and returns a greeting in the form of a string. Don't use a normal function, use an arrow function.

// Examples

let helloName = str => `Hello ${str}!`
// console.log( helloName("Gerald") , "Hello Gerald!");

// console.log( helloName("Tiffany") , "Hello Tiffany!");

// console.log( helloName("Ed") , "Hello Ed!");
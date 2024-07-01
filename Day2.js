// 11.

// Write a template string according to the following example:

// Example
const a = "John";
const b = "Joe";
const c = "Jack";
const template = `Their names were:  ${a},  ${b}  and  ${c}.`;
//  "Their names were:  John,  Joe  and  Jack."
// console.log(template , "Their names were:  John,  Joe  and  Jack.");

// 12.

// Given a string, return true if its length is even or false if the length is odd.

// Examples
function oddOrEven(str) {
  return str.length % 2 === 0 ? true : false;
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
function stringToInt(val) {
  if (typeof val === "string") {
    return +val;
  }
}

function intToString(val) {
  if (typeof val === "number") {
    return val + "";
  }
}
// console.log( intToString(4) , "4");

// console.log( stringToInt("4") , 4);

// console.log( intToString(29348) , "29348");

// 14.

// Create a function that takes a word and returns the new word without including the first character.

// Examples
function newWord(str) {
  // return str.slice(1)
  let result = "";
  for (let i = 1; i < str.length; i++) {
    result += str[i];
  }
  return result;
}
// console.log( newWord("apple") , "pple");

// console.log( newWord("cherry") , "herry");

// console.log( newWord("plum") , "lum");

// 15.
// Create a function that takes a name and returns a greeting in the form of a string. Don't use a normal function, use an arrow function.

// Examples

let helloName = (str) => `Hello ${str}!`;
// console.log( helloName("Gerald") , "Hello Gerald!");

// console.log( helloName("Tiffany") , "Hello Tiffany!");

// console.log( helloName("Ed") , "Hello Ed!");

// 16.
// Create a function that takes an array of numbers or letters and returns a string.

// Examples
function arrayToString(arr) {
  return arr.join("");
}
// console.log( arrayToString([1, 2, 3, 4, 5, 6]) , "123456");

// console.log( arrayToString(["a", "b", "c", "d", "e", "f"]) , "abcdef");

// console.log( arrayToString([1, 2, 3, "a", "s", "dAAAA"]) , "123asdAAAA");

// 17.
// Create a function that takes an array and a string as arguments and returns the index of the string.

// Examples
function findIndex(arr, str) {
  return arr.indexOf(str);
  // for(let i = 0 ; i < arr.length ; i++){
  //     if(arr[i] === str){
  //         return i
  //     }
  // }
  // return -1
}
// console.log( findIndex(["hi", "edabit", "fgh", "abc"], "fgh") , 2);

// console.log( findIndex(["Red", "blue", "Blue", "Green"], "blue") , 1);

// console.log( findIndex(["a", "g", "y", "d"], "d") , 3);

// console.log( findIndex(["Pineapple", "Orange", "Grape", "Apple"], "Pineapple") , 0);

// 18.
// Create a function that returns a number, based on the string provided. Here is a list of all digits:

// String	Number

function word(letter) {
  let obj = {
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
    zero: 0,
  };
  return obj[letter];
}
// console.log(word("one"), 1);

// console.log(word("two"), 2);

// console.log(word("nine"), 9);

// 19.
// Create a function that returns true if a string contains any spaces.

// Examples
function hasSpaces(str){
    // for(let char of str) {
    //     if(char === " "){
    //         return true
    //     }
    // }
    // return false
    return str.includes(" ")
}
// console.log( hasSpaces("hello") , false);

// console.log( hasSpaces("hello, world") , true);

// console.log( hasSpaces(" ") , true);

// console.log( hasSpaces("") , false);

// console.log( hasSpaces(",./!@#") , false);

// 20.
// Create a function that takes a string (a random name). If the last character of the name is an "n", return true, otherwise return false.

// Examples
function isLastCharacterN(str){
    // for(let i = 0 ; i < str.length ; i++){
    //     if(str[str.length - 1] === "n"){
    //         return true
    //     }
    // }
    // return false
    return str.endsWith("n")
}
console.log( isLastCharacterN("Aiden") , true);

console.log( isLastCharacterN("Piet") , false);

console.log( isLastCharacterN("Bert") , false);

console.log( isLastCharacterN("Dean") , true);

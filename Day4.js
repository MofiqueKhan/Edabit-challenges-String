// 32.

// For this challenge, you will NOT be given a string. Your task isn't to add "Do not" before the given string. If there is no given string, you will not return "Do not do anything." Do not check the examples to know how to do this challenge.

// Examples
function reversePsychology(str) {
  if (!str) {
    return "Do not do anything.";
  } else if (str.startsWith("Do not")) {
    return str;
  }
  return "Do not" + " " + str + ".";
}
// console.log( reversePsychology("wash the dishes") , "Do not wash the dishes.");

// console.log( reversePsychology("eat your lunch") , "Do not eat your lunch.");

// console.log( reversePsychology("go to school") , "Do not go to school.");

// console.log( reversePsychology() , "Do not do anything.");

// 33.
// Write a function that validates whether two strings are identical. Make it case insensitive.

// Examples
function match(str1, str2) {
  // return str1.toLowerCase() == str2.toLowerCase()
  return str1.toLowerCase().localeCompare(str2.toLowerCase()) === 0;
}
// console.log(match("hello", "hELLo"), true);

// console.log(match("motive", "emotive"), false);

// console.log(match("venom", "VENOM"), true);

// console.log(match("mask", "mAskinG"), false);

// 33.
// Create a function that takes a string txt and a number n and returns the repeated string n number of times.

// If given argument txt is not a string, return Not A String !!

// Examples
function repeatString(str, times) {
  // if(typeof(str) !== "string"){
  //     return "Not A String !!"
  // }

  // return str.repeat(times)

  return typeof str !== "string" ? "Not A String !!" : str.repeat(times);
}
// console.log( repeatString("Mubashir", 2) , "MubashirMubashir");

// console.log( repeatString("Matt", 3) , "MattMattMatt");

// console.log( repeatString(1990, 7) , "Not A String !!");

// 34.
// Create a function that checks if the argument is an integer or a string. Return "int" if it's an integer and "str" if it's a string.

// Examples
function intOrString(val) {
  // return typeof(val)=== "number" ? "int" : typeof(val) === "string" ? "str" : typeof(val);
  if (typeof val === "string") {
    return "str";
  } else if (typeof val === "number") {
    return "int";
  }
  return typeof val;
}
// console.log(intOrString(8), "int");

// console.log(intOrString("Hello"), "str");

// console.log(intOrString(9843532), "int");

// console.log(intOrString([]), "object");

// 35.
// Write a function that takes an integer and:

// If the number is a multiple of 3, return "Hello".
// If the number is a multiple of 5, return "World".
// If the number is a multiple of both 3 and 5, return "Hello World".
// Examples
function helloWorld(n) {
  if (n % 3 === 0 && n % 5 === 0) {
    return "Hello World";
  } else if (n % 3 === 0) {
    return "Hello";
  } else if (n % 5 === 0) {
    return "Word";
  } else {
    return n;
  }
}
// console.log(helloWorld(3), "Hello");

// console.log(helloWorld(5), "World");

// console.log(helloWorld(15), "Hello World");

// 36.
// Write two functions:

// toInt() : A function to convert a string to an integer.
// toStr() : A function to convert an integer to a string.
// Examples

function toInt(str) {
  // return +str
  return parseInt(str);
}
function toStr(num) {
  // return num + ""
  return num.toString();
}
// console.log( toInt("77") , 77);

// console.log( toInt("532") , 532);

// console.log( toStr(77) , "77");

// console.log( toStr(532) , "532");

// 37.
// Create a function that returns the string "Burp" with the amount of "r's" determined by the input parameters of the function.

// Examples
function longBurp(num) {
  // return `Bu${"r".repeat(num)}p`
  // return `Bu${Array(num).fill('r').join('')}p`;
  let burp = "Bu";
  for (let i = 0; i < num; i++) {
    burp += "r";
  }
  return burp + "p";
}
// console.log( longBurp(3) , "Burrrp");

// console.log( longBurp(5) , "Burrrrrp");

// console.log( longBurp(9) , "Burrrrrrrrrp");

// 38.
// Create a function that takes a string and returns a string with spaces in between all of the characters.

// Examples
function spaceMeOut(str) {
  // return str.split('').map(char => `${char}`).join(' ');
  let result = "";
  for (let i = 0; i < str.length; i++) {
    result += str[i];
    if (i < str.length - 1) {
      result += " ";
    }
  }
  return result;
}
// console.log( spaceMeOut("space") , "s p a c e");

// console.log( spaceMeOut("far out") , "f a r   o u t");

// console.log( spaceMeOut("elongated musk") , "e l o n g a t e d   m u s k");

// 39.
// Create a function which makes the last character of a string repeat n number of times.

// Examples
function modifyLast(str, n) {
  // let lastChar = str.slice(-1).repeat(n-1)
  // return str + lastChar

  let lastChar = str.slice(-1);
  let result = str;
  for (let i = 0; i < n; i++) {
    result += lastChar;
  }
  return result;
}
// console.log(modifyLast("Hello", 3), "Hellooo");

// console.log(modifyLast("hey", 6), "heyyyyyy");

// console.log(modifyLast("excuse me what?", 5), "excuse me what?????");

// 40.
// You can assign variables from nested arrays like this:

const arr = ["cars", "planes", ["trains", ["motorcycles"]]]

// let trans1 = arr[0]
// let trans2 = arr[1]
// let trans3 = arr[2][0]
// let trans4 = arr[2][1][0]

const [trans1 , trans2 ,[trans3,[trans4]]] = arr

// console.log(trans1) // outputs "cars"
// console.log(trans2) // outputs "planes"
// console.log(trans3) // outputs "trains"
// console.log(trans4) // outputs "motorcycles"



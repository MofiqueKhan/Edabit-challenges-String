// 1.

// Write a function that returns the string "something" joined with a space " " and the given argument a.

// Examples
function giveMeSomething(str) {
  // return "something" + " " + str
  return `something ${str}`;
}
// console.log( giveMeSomething("is better than nothing") , "something is better than nothing");

// console.log( giveMeSomething("Bob Jane") , "something Bob Jane");

// console.log( giveMeSomething("something") , "something something");

// 2.

// A student learning JavaScript was trying to make a function. His code should concatenate a passed string name with string "Edabit" and store it in a variable called result. He needs your help to fix this code.

// Examples
function nameString(str) {
  var name = str + "Edabit";
  return name;
}
// console.log(nameString("Mubashir"), "MubashirEdabit");

// console.log(nameString("Matt"), "MattEdabit");

// console.log(nameString("javaScript"), "javaScriptEdabit");

// 3.

// Create a function that takes a boolean variable flag and returns it as a string.

// Examples
function boolToString(flag) {
  // return flag.toString()
  // return `${flag}`
  return flag + "";
}
// console.log( boolToString(true) , "true");

// console.log( boolToString(false) , "false");

// 4.
// Create a function that will handle simple math expressions. The input is an expression in the form of a string.

// Examples
function calculator(str) {
  return eval(str);
}
// console.log( calculator("23+4") , 27);

// console.log( calculator("45-15") , 30);

// console.log( calculator("13+2-5*2") , 5);

// console.log( calculator("49/7*2-3") , 11);

// 5.

// Emmy has written a function that returns a greeting to users. However, she's in love with Mubashir, and would like to greet him slightly differently. She added a special case in her function, but she made a mistake.

// Can you help her?

// Examples
function greeting(str) {
  if (str === "Mubashir") {
    return `Hello, my Love!`;
  }
  return `Hello, ${str}!`;
}
// console.log(greeting("Matt"), "Hello, Matt!");

// console.log(greeting("Helen"), "Hello, Helen!");

// console.log(greeting("Mubashir"), "Hello, my Love!");

// 6.
// Create a function that takes two strings as arguments and return either true or false depending on whether the total number of characters in the first string is equal to the total number of characters in the second string.

// Examples
function comp(str1, str2) {
  //   if (str1.length === str2.length) {
  //     return true;
  //   }
  //   return false;
  return str1.length === str2.length ? true : false;
}
// console.log(comp("AB", "CD"), true);

// console.log(comp("ABC", "DE"), false);

// console.log(comp("hello", "edabit"), false);

// 7.
// Create a function that returns true if a string is empty and false otherwise.

// Examples
function isEmpty(str) {
  return str.length === 0 ? true : false;
}
// console.log( isEmpty("") , true);

// console.log( isEmpty(" ") , false);

// console.log( isEmpty("a") , false);

// 8.
// Write a function that returns the length of a string. Make your function recursive.

// Examples
function length(str) {
  if (str === "") {
    return 0;
  } else {
    return 1 + length(str.substring(1));
  }
}
console.log(length("apple"), 5);

console.log(length("make"), 4);

console.log(length("a"), 1);

console.log(length(""), 0);

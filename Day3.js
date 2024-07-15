// 21.

// Luke Skywalker has family and friends. Help him remind them who is who. Given a string with a name, return the relation of that person to Luke.

// Person	Relation
// Darth Vader	father
// Leia	sister
// Han	brother in law
// R2D2	droid
// Examples

function relationToLuke(str) {
  let obj = {
    "Darth Vader": "father",
    Leia: "sister",
    Han: "brother in law.",
    "R2D2	": "droid",
  };
  if (obj[str]) {
    return `Luke, I am your ${obj[str]}`;
  }
}
// console.log(relationToLuke("Darth Vader"), "Luke, I am your father.");
// console.log(relationToLuke("Leia"), "Luke, I am your sister.");
// console.log(relationToLuke("Han"), "Luke, I am your brother in law.");

// 22.
// Create a function that takes a string; we'll say that the front is the first three characters of the string. If the string length is less than three characters, the front is whatever is there. Return a new string, which is three copies of the front.

// Examples
function frontThree(str) {
  //   if (str.length >= 3) {
  //     return str.slice(0, 3).repeat(3);
  //   }
  let result = "";
  for (let i = 0; i <= 2; i++) {
    for (let j = 0; j <= 2; j++) result += str[j];
  }
  return result;
}
// console.log(frontThree("Python"), "PytPytPyt");

// console.log(frontThree("Cucumber"), "CucCucCuc");

// console.log(frontThree("bioshock"), "biobiobio");

// 23.

// Create a function that takes an object as an argument and returns a string with facts about the city. The city facts will need to be extracted from the object's three properties:

// name
// population
// continent
// The string should have the following format: X has a population of Y and is situated in Z (where X is the city name, Y is the population and Z is the continent the city is situated in).

// Examples
function cityFacts(obj) {
  return `${obj.name} has a population of ${obj.population} and it situated in ${obj.continent}`;
}
// console.log( cityFacts({
//   name: "Paris",
//   population: "2,140,526",
//   continent: "Europe"
// }) , "Paris has a population of 2,140,526 and is situated in Europe");

// console.log( cityFacts({
//   name: "Tokyo",
//   population: "13,929,286",
//   continent: "Asia"
// }) , "Tokyo has a population of 13,929,286 and is situated in Asia");

// 24.
// Create a function that takes in a word and determines whether or not it is plural. A plural word is one that ends in "s".

// Examples
function isPlural(str) {
  return str.endsWith("s");
}
// console.log( isPlural("changes") , true);

// console.log( isPlural("change") , false);

// console.log( isPlural("dudes") , true);

// console.log( isPlural("magic") , false);

// 25.
// Create a function that takes a string and returns the concatenated first and last character.

// Examples
function firstLast(str) {
  // return str.slice(0,1) + str.slice(-1)
  return str[0] + str[str.length - 1];
}
// console.log( firstLast("ganesh") , "gh");

// console.log( firstLast("kali") , "ki");

// console.log( firstLast("shiva") , "sa");

// console.log( firstLast("vishnu") , "vu");

// console.log( firstLast("durga") , "da");

// 26.
// Write a function that stutters a word as if someone is struggling to read it. The first two letters are repeated twice with an ellipsis ... and space after each, and then the word is pronounced with a question mark ?.

// Examples
function stutter(str) {
  // return `${str.slice(0,2)}... ${str.slice(0,2)}... ${str}?`;
  let result = "";
  for (let i = 0; i < 2; i++) {
    result += str[i];
  }
  return `${result}... ${result}... ${str}?`;
}
// console.log(stutter("amazing") , "am... am... amazing?");
// console.log(stutter("excellent") , "ex... ex... excellent?");
// console.log(stutter("fantastic") , "fa... fa... fantastic?");
// console.log( stutter("incredible") , "in... in... incredible?");
// console.log( stutter("enthusiastic") , "en... en... enthusiastic?");
// console.log( stutter("outstanding") , "ou... ou... outstanding?");

// 27.
// Create a function that takes as a parameter an array of "stringified" numbers and returns an array of numbers.

// Example:

// console.log( // ["1", "3", "3.6"] , [1, 3, 3.6]);
// Examples
function toNumberArray(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(+arr[i]);
  }
  return result;
}
// console.log( toNumberArray(["1", "2", "3"]) , [1, 2, 3]);

// console.log( toNumberArray(["9.4", "4.2"]) , [9.4, 4.2]);

// console.log( toNumberArray(["91", "44"]) , [91, 44]);

// console.log( toNumberArray(["9.5", "8.8"]) , [9.5, 8.8]);

// 28.
// Given a fraction as a string, return whether or not it is greater than 1 when evaluated.

// Examples
function greaterThanOne(str) {
  let result = eval(str);
  if (result > 1) {
    return true;
  }
  return false;
}
// console.log( greaterThanOne("1/2") , false);

// console.log( greaterThanOne("7/4") , true);

// console.log( greaterThanOne("10/10") , false);

//29.
// Create a function that takes in a current mood and return a sentence in the following format: "Today, I am feeling {mood}". However, if no argument is passed, return "Today, I am feeling neutral".

// Examples
function moodToday(str = "neutral") {
  return `Today, I am feeling ${str}`;
}
// console.log( moodToday("happy") , "Today, I am feeling happy");

// console.log( moodToday("sad") , "Today, I am feeling sad");

// console.log( moodToday() , "Today, I am feeling neutral");

// 30.
// Create a function that returns the number of syllables in a simple string. The string is made up of short repeated words like "Lalalalalalala" (which would have 7 syllables).

// Examples
function countSyllables(str){
  // return str.length / 2
}
console.log(countSyllables("Hehehehehehe"), 6);

console.log(countSyllables("bobobobobobobobo"), 8);

console.log(countSyllables("NANANA"), 3);

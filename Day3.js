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
    for(let j = 0 ; j <=2 ; j++)
    result += str[j];
  }
  return result
}
// console.log(frontThree("Python"), "PytPytPyt");

// console.log(frontThree("Cucumber"), "CucCucCuc");

// console.log(frontThree("bioshock"), "biobiobio");


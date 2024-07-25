// 51.

// Write a function that takes an integer and returns a string with the given number of "a"s in Edabit.

// Notes
// The string must start with "Ed" and end with "bit".
// You'll only be given integers as test input.
// Examples
function howManyTimes(n) {
  // return `Ed${"a".repeat(n)}bit`
  let result = "Ed";
  for (let i = 0; i < n; i++) {
    result += "a";
  }
  return result + "bit";
}
// console.log(howManyTimes(5), "Edaaaaabit");

// console.log(howManyTimes(0), "Edbit");

// console.log(howManyTimes(12), "Edaaaaaaaaaaaabit");

// 52.
// Create a function that repeats each character in a string n times.

// Examples
function repeat(str, n) {
  // let result = ""
  // for(let i = 0 ; i < str.length ; i++){
  //     result += str[i].repeat(n)
  // }
  // return result

  return str
    .split("")
    .map((char) => char.repeat(n))
    .join("");
}
// console.log(repeat("mice", 5), "mmmmmiiiiiccccceeeee");

// console.log(repeat("hello", 3), "hhheeellllllooo");

// console.log(repeat("stop", 1), "stop");

// 53.

// Google's logo can be stretched depending on how many pages it lets you skip forward to.

// Image of Goooooooooogle

// Let's say we wanted to change the number of pages that Google could skip to. Create a function where given a number of pages n, return the word "Google" but with the correct number of "o"s.

// Examples
function googlify(n) {
  //   if (n > 0) {
  //     let result = "G";
  //     for (let i = 0; i < n; i++) {
  //       result += "o";
  //     }
  //     return result + "gle";
  //   }else{
  //     return "invalid"
  //   }

  return n > 0 ? `G${"o".repeat(n)}gle` : "invalid";
}
// console.log(googlify(10), "Goooooooooogle");

// console.log(googlify(23), "Gooooooooooooooooooooooogle");

// console.log(googlify(2), "Google");

// console.log(googlify(-2), "invalid");

// Notes
// If n is equal to or less than 1, return invalid.

// 54.

// Write a function that maps files to their extension names.

// Examples
function getExtension(arr) {
//   let result = [];
//   for (let i = 0; i < arr.length; i++) {
//     let lastPart = arr[i].split(".");
//     result.push(lastPart[lastPart.length - 1]);
//   }
//   return result;

return arr.map(file => {
    let part = file.split(".");
    return part[part.length - 1]
})
}
// console.log(getExtension(["code.html", "code.css"]), ["html", "css"]);

// console.log(getExtension(["project1.jpg", "project1.pdf", "project1.mp3"]), [
//   "jpg",
//   "pdf",
//   "mp3",
// ]);

// console.log(
//   getExtension(["ruby.rb", "cplusplus.cpp", "python.py", "javascript.js"]),
//   ["rb", "cpp", "py", "js"]
// );

// 55.
// Write a function that returns true if all characters in a string are identical and false otherwise.

// Examples
function isIdentical(str){
    // return str.split('').every(cur => cur === str[0] )
    for(let i = 0 ; i < str.length ; i++){
        if(str[i] !== str[0]){
            return false
        }
    }
    return true
}
// console.log( isIdentical("aaaaaa") , true);

// console.log( isIdentical("aabaaa") , false);

// console.log( isIdentical("ccccca") , false);

// console.log( isIdentical("kk") , true);


// 56.

// 41.

// For each of the 6 coffee cups I buy, I get a 7th cup free. In total, I get 7 cups. Create a function that takes n cups bought and return as an integer the total number of cups I would get.

// Examples
function totalCups(num) {
  // return parseInt(num / 6 ) + num
  return Math.floor(num / 6) + num;
}
// console.log( totalCups(6) , 7);

// console.log( totalCups(12) , 14);

// console.log( totalCups(213) , 248);

// 42.
// Create a function that takes a string and changes the word amazing to not amazing. Return the string without any change if the word edabit is part of the string.

// Examples
function amazingEdabit(str) {
  // return str.includes("edabit") ? str : str.replace("amazing" , "not amazing.")
  if (!str.includes("edabit")) {
    return str.replace("amazing", "not amazing.");
  }
  return str;
}
// console.log(amazingEdabit("edabit is amazing."), "edabit is amazing.");

// console.log(amazingEdabit("Mubashir is amazing."), "Mubashir is not amazing.");

// console.log(amazingEdabit("Infinity is amazing."), "Infinity is not amazing.");

// 43.
// Create a function that takes the number of daily average recovered cases recovers, daily average newCases, current activeCases, and returns the number of days it will take to reach zero cases.

// Examples
function endCorona(recovers, newCases, activeCases) {
  return Math.ceil(activeCases / (recovers - newCases));
}
// console.log( endCorona(4000, 2000, 77000) , 39);

// console.log( endCorona(3000, 2000, 50699) , 51);

// console.log( endCorona(30000, 25000, 390205) , 79);

// 44.
// Create a function that takes two numbers and returns their sum as a binary string.

// Examples
function addBinary(num1, num2) {
  const sum = num1 + num2;
  return sum.toString(2);
}
// console.log( addBinary(1, 1) , "10");

// console.log( addBinary(1, 2) , "11");

// console.log( addBinary(4, 5) , "1001");

// 45.
// Write a function that takes two numbers and returns if they should be added, subtracted, multiplied or divided to get 24. If none of the operations can give 24, return null.

// Examples
// console.log( // operation(15, 9) , "added");

// console.log( // operation(26, 2) , "subtracted");

// console.log( // operation(11, 11) , null);
// Notes
// Only integers are used as test input.
// Numbers should be added, subtracted, divided or multiplied in the order they appear in the parameters.
// The function should return either "added", "subtracted", "divided", "multiplied" or null.

// 46.
// Create a function that takes an array and returns the sum of all numbers in the array.

// Examples
function getSumOfItems(arr) {
  // let result = 0;
  // for(let i = 0 ; i < arr.length ; i++){
  //     result += arr[i]
  // }
  // return result

  return arr.reduce((acc, el) => acc + el, 0);
}
// console.log( getSumOfItems([2, 7, 4]) , 13);

// console.log( getSumOfItems([45, 3, 0]) , 48);

// console.log( getSumOfItems([-2, 84, 23]) , 105);

// 47.
// A taxi journey costs $3 for the first kilometer travelled. However, all kilometers travelled after that will cost $2 each.

// Create a function which returns the distance that the taxi must've travelled, given the cost as a parameter.

// Examples
function journeyDistance(payment) {
  // return Math.ceil(payment / 2 - 1 )
  if (payment <= 3) return 1;
  return ~~((payment - 3) / 2) + 1;
}
// console.log( journeyDistance(3) , 1);
// // The first kilometer costs $3

// console.log( journeyDistance(9) , 4);
// // The first kilometer costs $3 plus the other three kilometers (costing $2 each)

// console.log( journeyDistance(5) , 2);

// 48.
// A student learning JavaScript was trying to make a function that sorts all the letters of a word, but their code is broken, and they can't figure out why.

// Spot and fix the error(s) in the code to make the function work.

// Examples
function sortWord(str) {
  return str.split("").sort().join("");
}
// console.log( sortWord("dcba") , "abcd");

// console.log( sortWord("Unpredictable") , "Uabcdeeilnprt");

// console.log( sortWord("pneumonoultramicroscopicsilicovolcanoconiosis") , "aacccccceiiiiiilllmmnnnnooooooooopprrsssstuuv");

// 49.
// Create a function that has some arguments and returns the type of the fifth argument. In case the arguments were less than 5, return "Not enough arguments".

// Examples
// function fifth(){
//     for(let i = 0 ; i < arguments.length ; i++){
//         if(arguments.length >= 5){
//             return typeof(arguments[4])
//         }
//     }
//     return "Not enough arguments"
// }

function fifth(...args) {
  if (arguments.length >= 5) {
    return typeof arguments[4];
  }
  return "Not enough arguments";
}
// console.log(fifth(1, 2, 3, 4, 5), "number");

// console.log(fifth("a", 2, 3, true, "five"), "string");

// console.log(fifth(), "Not enough arguments");

// 50.

// Backpack Bill and Wallet Will set off for the annual festival. As they approach the stalls, Bill retorts that he'll be able to bring home more stuff than Will. Taking this as a challenge, Will refutes and a competition spurs into action.

// Backpack Bill has an infinite inventory space, but a limited number of coins.
// Wallet Will has an infinite number of coins, but a limited inventory space.
// Create a function that returns the name of the man who can bring home the most items. The parameters are given as follows:

// Bill's amount of money.
// Will's amount of inventory space.
// The item's price.
// The item's size.
// Worked Example
// console.log( // whoWinsTonight(40, 95, 5, 10) , "Will");

// // The item costs 5 coins and takes up 10 inventory spaces.
// // Bill can only buy a maximum of 8 items (40 coins DIV 5 = 8).
// // Will can only bring home a maximum of 9 items. (95 inventory spaces DIV 10 = 9).
// // Will is the winner.
// Examples
function whoWinsTonight(bill , will , price , size){
    const billItems = Math.floor(bill / price);
    const willItems = Math.floor(will / size);

    if(billItems > willItems){
        return "Bill"
    }else if(billItems < willItems){
        return "Will"
    }else{
        return "Tie"
    }
}
// console.log( whoWinsTonight(20, 20, 5, 10) , "Bill");

// console.log( whoWinsTonight(10, 2, 20, 1) , "Will");

// console.log( whoWinsTonight(3, 7, 2, 5) , "Tie");

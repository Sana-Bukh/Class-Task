
//       Question (1)
//  Sum of all digits of a number

// let number = prompt("Enter a number:");
// let numStr = number.toString();
// let Sum = 0;

// for (let i = 0; i < numStr.length; i++) {
//     Sum += parseInt(numStr[i]);
// }
// console.log( Sum);


//     Question (2)
// Sum of the range of 2 numbers

// let start = +prompt("Enter first number:");
// let end = +prompt("Enter second number:");
// let sum = 0;

// for (let i = start; i <= end; i++) {
//     sum += i;
// }
// console.log( sum);


//        Question(3)
// Calculate the average of numbers in an array

// let numbers = [5, 10, 15, 20, 25];
// let sum = 0;

// for (let i = 0; i < numbers.length; i++) {
//     sum += numbers[i];
// }

// let average = sum / numbers.length;

// console.log( average);


//   Question (4)
// Compare strings by count of characters 

// let word1 = "Apple";
// let word2 = "Banana";
// let word3 = "Mango";

// if (word1.length === word2.length) {
//     console.log(word1 + " and " + word2 + " have the same number of characters.");
// } else {
//     console.log(word1 + " and " + word2 + " do not have the same number of characters.");
// }

// if (word1.length === word3.length) {
//     console.log(word1 + " and " + word3 + " have the same number of characters.");
// } else {
//     console.log(word1 + " and " + word3 + " do not have the same number of characters.");
// }


// Question(5)
//  Swap the strings first and last character

let word = prompt("Enter a word:");

if (word.length >= 2) {
    let firstChar = word[0];
    let lastChar = word[word.length - 1];
    let swappedWord = lastChar + word.substring(1, word.length - 1) + firstChar;

    console.log("Original word:", word);
    console.log("Swapped word:", swappedWord);
} 






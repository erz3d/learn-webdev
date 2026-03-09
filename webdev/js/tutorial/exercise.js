const prompt = require("prompt-sync")();

// Generate random number between 0 and 10
// function getRandom(max) {
//      return Math.floor(Math.random() * (max + 1));
// }
// let solution = getRandom(10);

// function isRight(n) {
//     return solution === n;
// }

// function guess() {
//     const input = prompt("==> ") * 1;
//     return isRight(input)
// }

// console.log("Guess the generated number between 1 and 10. (3 chances)\n");

// for (let i = 0; i < 3; i++) {
//     if (guess()) {
//         console.log("\nCongrats, you won !");
//         process.exit(0);
//     }
// }
// console.log("\nOut of chance. You lost...")

// Is it a prime number

// function isPrime(n) {
//     if (n < 2) {
//         return false;
//     }
//     for (let i = n - 1; i > 1; i--) {
//         if (n % i === 0) {
//             return false;
//         }
//     }
//     return true; 
// }

// console.log(isPrime(0));
// console.log(isPrime(1));
// console.log(isPrime(2));
// console.log(isPrime(3));
// console.log(isPrime(5));
// console.log(isPrime(8));
// console.log(isPrime(11));

// Is  pallindrome

// function isPallindrome(str) {
//     let invert = []
//     letters = str.split('');

//     invert = letters.reverse();
//     invert = invert.join('')
//     console.log(invert);
    
//     return str.toUpperCase() === invert.toUpperCase();
// }

// console.log(isPallindrome("kayak"));
// console.log(isPallindrome("pop"));
// console.log(isPallindrome("name"));

// const students = [
//     {
//         name: "John",
//         grade: [18, 20, 19]
//     },
//     {
//         name: "Jane",
//         grade: [15, 17, 16]
//     },
//     {
//         name: "Doe",
//         grade: [12, 14, 13]
//     },
//     {
//         name: "Alice",
//         grade: [16, 18, 17]
//     },
//     {
//         name: "Bob",
//         grade: [10, 12, 11],
//     }       
// ];

// function avg(list) {
//     let sum = 0;
//     for (let i in list) {
//             sum += list[i];
//     }
//     return sum / list.length;
// }

// function insAvg(list)  {
//     for (let student of list) {
//         student.average = avg(student.grade);
//     }
// }

// function compare(a, b) {
//     return b.average - a.average;
// }


// insAvg(students);
// console.log(students);

// console.log(students.sort(compare));


// Word frequency

const sentence = "Carrot Carrot Bunny Tomato Chicken Carrot Cow";
const frequencies = {};


const words = sentence
.toLowerCase()
.split(" ");

for (let word of words) {
    if (frequencies[word]) {
        frequencies[word]++;
    } else {
        frequencies[word] = 1;
    }
}

console.log(words);
console.log(frequencies);
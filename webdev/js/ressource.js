const prompt = require("prompt-sync")();

// Sorting fucntion
function compare(a, b) {
    return b - a  // Or b.variable - a.variable if comparing object attribute 
}

function sorting(list) {
    return list.sort(compare);  // return to user console.log(), or no return to just just sort an array in place
}

// ========== //

// Averager function
function average(list) {
    let sum = 0;
    for (let i in list) {
            sum += list[i];
    }
    return sum / list.length;
}

// ========= //

// Reverse a string
function reverseStr(str) {
    let reverse = []
    letters = str.split('');        // Divides the string in an array

    reverse = letters.reverse();    // Reverse the array
    reverse = reverse.join('')      // Joins the array in a string      
    
    return reverse;                 // Returns the reversed string
}


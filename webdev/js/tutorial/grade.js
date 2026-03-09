//Manage grades

const grades = [12, 16, 15, 18, 20];
const prompt = require("prompt-sync")();

function display(list) {
    console.clear();
    console.log(list);
    average(list);
    console.log("");
}

function addGrade(list, value) {
    list.push(value);
}

function remGrade(list, index) {
    list.splice(index, 1);
}

function subGrade(list, index, value) {
    list.splice(index, 1, value)
}

function average(list) {
    let sum = 0;
    for (let i in list) {
        sum += list[i];
    }
    let avg = sum / list.length;
    console.log("Average: " + avg);
}


// Start loop for menu
while (true) {
    // Display the menu
    console.log("1- Add\n2- Remove\n3- Substitute\n4- Average\n5- Exit\n");
    let choice  = parseInt(prompt("==> "));

    let value = 0;
    let index = 0;
    
    if (choice === 1) {
        console.log("Enter value ");
        value = parseInt(prompt("==> "));
        addGrade(grades, value);
        display(grades);
    }

    if (choice === 2) {
        console.log("Enter index ");
        index = parseInt(prompt("==> "));
        remGrade(grades, index);
        display(grades);
    }

    if (choice === 3) {
        console.log("Enter index and value ");
        index = parseInt(prompt("index ==> "));
        value = parseInt(prompt("value ==> "));
        subGrade(grades, index, value);
        display(grades);
    }

    if (choice === 4) {
        average(grades);
    }

    if (choice === 5) {
        console.log("End of session");
        process.exit(0);
    }
}
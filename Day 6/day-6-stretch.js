// Exercise 1
function isHarshad(number) {
    let sumOfDigits = 0;
    for (let value of String(number)) {
        sumOfDigits += parseFloat(value);
    }
    if (number % sumOfDigits === 0) return true;
    else return false;
}

console.log(isHarshad(75)); // ➞ false // 7 + 5 = 12, 75 is not exactly divisible by 12
console.log(isHarshad(171)); // ➞ true// 1 + 7 + 1 = 9, 9 exactly divides 171
console.log(isHarshad(481)); // ➞ true
console.log(isHarshad(89)); // ➞ false
console.log(isHarshad(516)); // ➞ true
console.log(isHarshad(200)); // ➞ true

// Exercise 2

function capToFront(string) {
    let output = "";
    for (let letter of string) {
        if (letter.toUpperCase() == letter) output += letter;
    }
    for (let letter of string) {
        if (letter.toLowerCase() == letter) output += letter;
    }
    return output;
}

console.log(capToFront("hApPy")); // ➞ "APhpy"
console.log(capToFront("moveMENT")); // ➞ "MENTmove"
console.log(capToFront("shOrtCAKE")); // ➞ "OCAKEshrt"

// Exercise 3

function bumpyRoad(string) {
    let counter = 0;
    for (let letter of string) {
        if (letter === 'n') counter++;
    }
    if (counter < 15) return "Woohoo!"; 
    else return "Car Dead";
}
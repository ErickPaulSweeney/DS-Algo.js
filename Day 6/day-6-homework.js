// Exercise 1
function evenlyDivisible(a, b, c) {
    let output = 0;
    for (; a <= b; a++) {
        if (a % c === 0) output += a;
    }
    return output;
}

console.log(evenlyDivisible(1, 10, 20)); // should return 0
// No number between 1 and 10 can be evenly divided by 20.
console.log(evenlyDivisible(1, 10, 2)); // should return 30
// 2 + 4 + 6 + 8 + 10 = 30
console.log(evenlyDivisible(1, 10, 3)); // should return 18
// 3 + 6 + 9 = 18

// Exercise 2

function removeDups(arr){
    let output = [];
    for (let element of arr) {
        if (!output.includes(element)) output.push(element);
    }
    return output;
}

console.log(removeDups([1, 0, 1, 0]));// should return [1, 0]
console.log(removeDups(["The", "big", "cat"]));// should return ["The", "big", "cat"]
console.log(removeDups(["John", "Taylor", "John"]));// should return ["John", "Taylor"]

// Exercise 3

function isAnagram(str1, str2){
    str1 = str1.toLowerCase().split('').sort().join('');
    str2 = str2.toLowerCase().split('').sort().join('');
    return str1 == str2;
}

console.log(isAnagram("cristian", "Cristina"));// should return true
console.log(isAnagram("Dave Barry", "Ray Adverb"));// should return true
console.log(isAnagram("Nope", "Note"));// should return false

// Exercise 4

function highestDigit(num){
    let output = 0; 
    for (let digit of String(num)) {
        if (digit > output) output = parseInt(digit);
    }
    return output;
}

console.log(highestDigit(379));// should return 9
console.log(highestDigit(2));// should return 2
console.log(highestDigit(377401));// should return 7
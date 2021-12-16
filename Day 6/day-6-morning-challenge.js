// Exercise 1

function factorChain(numbers) {
    for (let i = 0; i < numbers.length - 1; i++) {
        if (numbers[i + 1] % numbers[i] !== 0) return false;
    }
    return true;
}

console.log(factorChain([1, 2, 4, 8, 16, 32])); // should return true
console.log(factorChain([1, 1, 1, 1, 1, 1])); // should return true
console.log(factorChain([2, 4, 6, 7, 12])); // should return false
console.log(factorChain([10, 1])); // should return false

// Exercise 2

function isIsogram(str) {
    let letters = [];
    for (let index in str) {
        if (!letters.includes(str[index].toLowerCase())) letters.push(str[index].toLowerCase());
        else return false;
    }
    return true;
}

console.log(isIsogram("Algorism"));// should return true
console.log(isIsogram("PasSword"));// should return false // Not case sensitive.
console.log(isIsogram("Consecutive"));// should return false
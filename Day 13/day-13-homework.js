// Exercise 1

function combinations(...num) {
    let numbers = [...num];
    return numbers.reduce((accumulator, currentElement) => {
        currentElement != 0 ? accumulator *= currentElement : accumulator *= 1;
        return accumulator;
    })
}

console.log(combinations(2, 3)); // ➞ 6
console.log(combinations(3, 7, 4)); // ➞ 84
console.log(combinations(2, 3, 0, 5)); // ➞ 30
console.log(combinations(2, 3, 4, 5)); // ➞ 120

// Exercise 2

function primeNumbers(num) {
    let output = 0;
    let isPrime = (num) => {
        for (let i = 2; i * i <= num; i++) {
            if (num % i == 0) return false;
        }
        return num > 1;
    }
    for (let n = 0; n <= num; n++) {
        if (isPrime(n)) output++;
    }
    return output;
}

console.log(primeNumbers(10)); // ➞ 4
// 2, 3, 5 and 7
console.log(primeNumbers(20)); // ➞ 8
// 2, 3, 5, 7, 11, 13, 17 and 19
console.log(primeNumbers(30)); // ➞ 10
// 2, 3, 5, 7, 11, 13, 17, 19, 23 and 29

// Exercise 3

function countIdenticalArrays(arr, arr1, arr2, arr3) {
    let arrays = JSON.parse(JSON.stringify([arr, arr1, arr2, arr3]));
    let output = {}; 
    arrays.forEach((x) => output.hasOwnProperty(x) ? output[x]++ : output[x] = 1);
    for (let index in output) {
        if (output[index] > 1) return output[index]; 
    }
    return 0;
}

console.log(countIdenticalArrays([0, 0, 0], [0, 1, 2], [0, 0, 0], [2, 1, 0])); // ➞ 2
console.log(countIdenticalArrays([0, 1, 0], [0, 1, 2], [0, 2, 0], [2, 1, 0])); // ➞ 0
console.log(countIdenticalArrays([0, 1, 2], [0, 1, 2], [0, 1, 2], [2, 1, 0])); // ➞ 3

// Exercise 4

function redundant(str) {
    return function() {
        return str;
    }
}

const f1 = redundant("apple")
console.log(f1(), typeof redundant("apple")); // ➞ "apple" function
const f2 = redundant("pear")
console.log(f2(), typeof redundant("pear")); // ➞ "pear" function 
const f3 = redundant("")
console.log(f3(), typeof redundant("")); // ➞ "" function
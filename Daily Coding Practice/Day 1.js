// Reverse binary string

function reversedBinaryInteger(num) {
    return parseInt((num.toString(2).split('').reverse().join('')), 2); 
}

console.log(reversedBinaryInteger(10)); // ➞ 5
// 10 = 1010 -> 0101 = 5

console.log(reversedBinaryInteger(12)); // ➞ 3
// 12 = 1100 -> 0011 = 3

console.log(reversedBinaryInteger(25)); // ➞ 19
// 25 = 11001 -> 10011 = 19

console.log(reversedBinaryInteger(45)); // ➞ 45
// 45 = 101101 -> 101101 = 45

// Sort the unsortable

function sortIt(arr) {
   return arr.sort((a, b) => a - b);  
}

console.log(sortIt([4, 1, 3])); // ➞ [1, 3, 4]
console.log(sortIt([[4], [1], [3]])); // ➞ [[1], [3], [4]]
console.log(sortIt([4, [1], 3])); // ➞ [[1], 3, 4]
console.log(sortIt([[4], 1, [3]])); // ➞ [1, [3], [4]]
console.log(sortIt([[3], 4, [2], [5], 1, 6])); // ➞ [1, [2], [3], 4, [5], 6]
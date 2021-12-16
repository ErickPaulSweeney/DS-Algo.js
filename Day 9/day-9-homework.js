// Exercise 1
function integerBoolean(str) {
    return str.split('').map(element => element == 1 ? true : false); 
}

console.log(integerBoolean("100101")); // ➞ [true, false, false, true, false, true]
console.log(integerBoolean("10")); // ➞ [true, false]
console.log(integerBoolean("001")); // ➞ [false, false, true]

function largerThanRight(arr) {
    let output = []; 
    while (arr.length > 0) {
        if (arr[0] == arr[1]) arr.shift(); 
        else if (arr[0] == Math.max(...arr)) {
            output.push(arr[0]);
            arr.shift();
        }
        else arr.shift();
    }
    return output;
}

console.log(largerThanRight([3, 13, 11, 2, 1, 9, 5])); // ➞ [13, 11, 9, 5] // 13 is larger than all numbers to its right, etc.
console.log(largerThanRight([5, 5, 5, 5, 5, 5])); // ➞ [5] // Must be strictly larger. // Always include the last number.
console.log(largerThanRight([5, 9, 8, 7])); // ➞ [9, 8, 7]

// Exercise 3
function century(num) {
    num = Math.ceil(num / 100); 
    if (num == 21) return `${num}st century`; 
    if (num == 12) return `${num}st century`; 
    if (num == 13) return `${num}rd century`;
    else return `${num}th century`
}

console.log(century(1756)); // ➞ "18th century"
console.log(century(1555)); // ➞ "16th century"
console.log(century(1000)); // ➞ "10th century"
console.log(century(1001)); // ➞ "11th century"
console.log(century(2005)); // ➞ "21st century"

// Exercise 4
function peelLayerOff(arr) {
    let output = []; 
    let isInner = (arr, row, col) => row > 0 && row < arr.length - 1 && col > 0 && col < arr[row].length - 1; 
    for (let i = 0; i < arr.length; i++) {
        output.push([]); 
        for (let j = 0; j < arr[i].length; j++) {
            if (isInner(arr, i, j)) {
                output[i].push(arr[i][j]);
            }
        }
    }
    output.shift();
    output.pop(); 
    return output;
}

console.log(peelLayerOff([
  ["a", "b", "c", "d"],
  ["e", "f", "g", "h"],
  ["i", "j", "k", "l"],
  ["m", "n", "o", "p"]
])); // ➞ [
//   ["f", "g"],
//   ["j", "k"]
// ]

console.log(peelLayerOff([
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15],
  [16, 17, 18, 19, 20],
  [21, 22, 23, 24, 25],
  [26, 27, 28, 29, 30],
  [31, 32, 33, 34, 35]
])); // ➞ [
//   [7, 8, 9],
//   [12, 13, 14],
//   [17, 18, 19],
//   [22, 23, 24],
//   [27, 28, 29]
// ]

console.log(peelLayerOff([
  [true, false, true],
  [false, false, true],
  [true, true, true]
])); // ➞ [[false]]

console.log(peelLayerOff([
  ["hello", "world"],
  ["hello", "world"]
])); // ➞ []
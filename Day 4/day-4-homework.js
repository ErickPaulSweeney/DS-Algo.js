// Exercise 1

function isSymmetrical(number) {
    number = number.toString();
    for (let i = 0, j = number.length - 1; i < j; i++, j--) {
        if (number[i] !== number[j]) return false;
    }
    return true
}

console.log(isSymmetrical(7227)); // ➞ true
console.log(isSymmetrical(12567)); // ➞ false
console.log(isSymmetrical(44444444)); // ➞ true
console.log(isSymmetrical(9939)); // ➞ false
console.log(isSymmetrical(1112111)); // ➞ true

// Exercise 2
// Part 1
function map(array) {
    let output = [];
    for (let entry in array) {
        output.push(array[entry]['name']);
    }
    return output;
}

let students = [{name: 'Raj', score: 100},{name:'John', score: 90}, {name: 'Michael', score: 88}]

map(students) // Expected output ['Raj', 'John', 'Michael']

// Part 2
function filter(arr) {
    let output = [];
    function isPrime(num) {
        if (num < 2) return false;
        for (let i = 2; i < num; i++) {
            if (num % i === 0) return false;
        }
        return true;
    }
    for (let value of arr) {
        if (isPrime(value)) output.push(value);
    }
    return output;
}

let numbers = [20, 12, 7, 13, 53];

filter(numbers); // Expected output [7, 13, 53]

// Part 3

function every(arr) {
    for (let value of arr) {
        if (value % 2 != 0) return false;
    }
    return true;
}

let numbers = [12, 100, 8, 4, 1];

every(numbers); // false

// Exercise 3

function spotlightSum(grid, n) {
    let output = 0;
    let nRow, nCol;
    for (let row in grid) {
        for (let col in grid[row]) {
            if (grid[row][col] === n) nRow = Number(row), nCol = Number(col);
        }
    }
    output += 
        grid[nRow - 1][nCol - 1] + // upper left
        grid[nRow - 1][nCol] + // above
        grid[nRow - 1][nCol + 1] + // upper right
        grid[nRow][nCol - 1] +  // left
        grid[nRow][nCol] + // center
        grid[nRow][nCol + 1] + // right
        grid[nRow + 1][nCol - 1] + // lower left
        grid[nRow + 1][nCol] + // below
        grid[nRow + 1][nCol + 1]; // lower right
    return output;
}

const grid = [
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
  [21, 22, 23, 24, 25, 26, 27, 28, 29, 30],
  [31, 32, 33, 34, 35, 36, 37, 38, 39, 40],
  [41, 42, 43, 44, 45, 46, 47, 48, 49, 50],
  [51, 52, 53, 54, 55, 56, 57, 58, 59, 60],
  [61, 62, 63, 64, 65, 66, 67, 68, 69, 70],
  [71, 72, 73, 74, 75, 76, 77, 78, 79, 80],
  [81, 82, 83, 84, 85, 86, 87, 88, 89, 90],
  [91, 92, 93, 94, 95, 96, 97, 98, 99, 100]
]

console.log(spotlightSum(grid, 45)); // ➞ 405
console.log(spotlightSum(grid, 45)); // ➞ 405
console.log(spotlightSum(grid, 19)); // ➞ 171
console.log(spotlightSum(grid, 48)); // ➞ 432
console.log(spotlightSum(grid, 88)); // ➞ 792
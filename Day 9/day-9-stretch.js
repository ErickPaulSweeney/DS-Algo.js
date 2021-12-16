// Exercise 1
function multTable(num) {
    let output = []; 
    for (let i = 1; i <= num; i++) {
        output.push([]); 
        for (let j = 1; j <= num; j++) {
            output[i - 1].push(i * j); 
        }
    }
    return output; 
}

console.log(multTable(2)); // ➞ [
//   [1, 2],
//   [2, 4]
// ]

console.log(multTable(3)); // ➞ [
//   [1, 2, 3],
//   [2, 4, 6],
//   [3, 6, 9]
// ]

console.log(multTable(5)); // ➞ [
//   [1, 2, 3, 4, 5],
//   [2, 4, 6, 8, 10],
//   [3, 6, 9, 12, 15],
//   [4, 8, 12, 16, 20],
//   [5, 10, 15, 20, 25]
// ]

// Exercise 2
function transposeMatrix(matrix) {
    let output = ""; 
    for (let i = 0; i < matrix[0].length; i++) {
        for (let j = 0; j < matrix.length; j++) {
            output += matrix[j][i] + " "; 
        }
    }
    return output; 
}

console.log(transposeMatrix([
  ["Enter"],
  ["the"],
  ["Matrix!"]
])); // ➞ "Enter the Matrix!"

console.log(transposeMatrix([
  ["The", "are"],
  ["columns", "rows."]
])); // ➞ "The columns are rows."

console.log(transposeMatrix([
  ["You", "the"],
  ["must", "table"],
  ["transpose", "order."]
])); // ➞ "You must transpose the table order."
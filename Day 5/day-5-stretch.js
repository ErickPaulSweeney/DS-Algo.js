// Exercise 1
// Part 1 

function num_of_digits(num) {
    let output = 0;
    for (let i = 1; num / i >= 1; i += '0') {
        if (num / 1 >= 1) output++;
    }
    return output;
}

// Part 2

function num_of_digits(num) {
    return num.toString().length;
}

console.log(num_of_digits(1000)); // 4
console.log(num_of_digits(12)); // 2
console.log(num_of_digits(1305981031)); // 10
console.log(num_of_digits(0)); // 1

// Exercise 2

function spotlightSum(grid, n) {
    let output = 0;
    let nRow, nCol;
    for (let row in grid) {
        for (let col in grid[row]) {
            if (grid[row][col] === n) nRow = Number(row), nCol = Number(col);
        }
    }
    console.log(nRow, nCol);
    if (nRow === 0 && nCol === 0) {
        output += 
            grid[nRow][nCol] + // center
            grid[nRow][nCol + 1] + // right
            grid[nRow + 1][nCol] + // below
            grid[nRow + 1][nCol + 1]; // lower right
        return output;
    }
    else if (nRow === 0 && nCol === 9) {
        output += 
            grid[nRow][nCol - 1] +  // left
            grid[nRow][nCol] + // center
            grid[nRow + 1][nCol - 1] + // lower left
            grid[nRow + 1][nCol];  // below
        return output;
    }
    else if (nRow === 9 && nCol === 0) {
        output += 
            grid[nRow - 1][nCol] + // above
            grid[nRow - 1][nCol + 1] + // upper right
            grid[nRow][nCol] + // center
            grid[nRow][nCol + 1]; // right
        return output;
    }
    else if (nRow === 9 && nCol === 9) {
        output += 
            grid[nRow - 1][nCol - 1] + // upper left
            grid[nRow - 1][nCol] + // above
            grid[nRow][nCol - 1] +  // left
            grid[nRow][nCol]; // center
        return output;
    }
    else if (nRow === 0) {
        output += 
            grid[nRow][nCol - 1] +  // left
            grid[nRow][nCol] + // center
            grid[nRow][nCol + 1] + // right
            grid[nRow + 1][nCol - 1] + // lower left
            grid[nRow + 1][nCol] + // below
            grid[nRow + 1][nCol + 1]; // lower right
        return output;
    }
    else if (nCol === 0) {
        output += 
            grid[nRow - 1][nCol] + // above
            grid[nRow - 1][nCol + 1] + // upper right
            grid[nRow][nCol] + // center
            grid[nRow][nCol + 1] + // right
            grid[nRow + 1][nCol] + // below
            grid[nRow + 1][nCol + 1]; // lower right
        return output;
    }
    else if (nRow === 9) {
        output += 
            grid[nRow - 1][nCol - 1] + // upper left
            grid[nRow - 1][nCol] + // above
            grid[nRow - 1][nCol + 1] + // upper right
            grid[nRow][nCol - 1] +  // left
            grid[nRow][nCol] + // center
            grid[nRow][nCol + 1]; // right
        return output;
    }
    else if (nCol === 9) {
        output += 
            grid[nRow - 1][nCol - 1] + // upper left
            grid[nRow - 1][nCol] + // above
            grid[nRow][nCol - 1] +  // left
            grid[nRow][nCol] + // center
            grid[nRow + 1][nCol - 1] + // lower left
            grid[nRow + 1][nCol]; // below
        return output;
    }
    else { 
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
  [81, 82, 83, 84, 85, 96, 87, 88, 89, 90],
  [91, 92, 93, 94, 95, 96, 97, 98, 99, 100]
]

console.log(spotlightSum(grid, 45)); // ➞ 405

// The 8 numbers surrounding 45 on the grid are:
// [34, 35, 36, 44, 46, 54, 55, 56]
// Total of the numbers is 360.
// Include 45 in the total (360 + 45 = 405)
// Return the answer.

console.log(spotlightSum(grid, 96)); // ➞ 466 // since we have 2 96 values we will pick the one with highest row. So since it is atlast row it will only have 5 neighbours which are `85, 96, 87, 95, 97` so summing all `96 + 96 + 85 + 87 + 95 + 97` i.e `466`
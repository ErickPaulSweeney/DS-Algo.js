// Exercise 1

function sudokuValidator(arr) {
    let uniqueCheck = (area) => {
        return (new Set(area)).size === area.length; 
    }
    let getColumn = (arr, col) => {
        let column = [];  
        for (let i = 0; i < arr.length; i++) {
            column.push(arr[i][col]); 
        }
        return column; 
    }
    let getGrid = (arr, row, col) => {
        let grid = []; 
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                grid.push(arr[row + i][col + j]); 
            }
        }
        return grid; 
    }
    // horizontal
    for (let i = 0; i < arr.length; i++) {
        if (!uniqueCheck(arr[i])) return false;
    }
    // vertical
    for (let i = 0; i < arr.length; i++) {
        if (!uniqueCheck(getColumn(arr, i))) return false; 
    }
    // 3x3
    let gridStarts = [[0, 0], [0, 3], [0, 6], [3, 0], [3, 3], [3, 6], [6, 0], [6, 3], [6, 6]]; 
    for (let i = 0; i < gridStarts.length; i++) {
        if (!uniqueCheck(getGrid(arr, gridStarts[i][0], gridStarts[i][1]))) return false; 
    }
    return true;
}

console.log(sudokuValidator([
  [ 1, 5, 2, 4, 8, 9, 3, 7, 6 ],
  [ 7, 3, 9, 2, 5, 6, 8, 4, 1 ],
  [ 4, 6, 8, 3, 7, 1, 2, 9, 5 ],
  [ 3, 8, 7, 1, 2, 4, 6, 5, 9 ],
  [ 5, 9, 1, 7, 6, 3, 4, 2, 8 ],
  [ 2, 4, 6, 8, 9, 5, 7, 1, 3 ],
  [ 9, 1, 4, 6, 3, 7, 5, 8, 2 ],
  [ 6, 2, 5, 9, 4, 8, 1, 3, 7 ],
  [ 8, 7, 3, 5, 1, 2, 9, 6, 4 ]
])); // ➞ true

console.log(sudokuValidator([
  [ 1, 1, 2, 4, 8, 9, 3, 7, 6 ],
  [ 7, 3, 9, 2, 5, 6, 8, 4, 1 ],
  [ 4, 6, 8, 3, 7, 1, 2, 9, 5 ],
  [ 3, 8, 7, 1, 2, 4, 6, 5, 9 ],
  [ 5, 9, 1, 7, 6, 3, 4, 2, 8 ],
  [ 2, 4, 6, 8, 9, 5, 7, 1, 3 ],
  [ 9, 1, 4, 6, 3, 7, 5, 8, 2 ],
  [ 6, 2, 5, 9, 4, 8, 1, 3, 7 ],
  [ 8, 7, 3, 5, 1, 2, 9, 6, 4 ]
])); // ➞ false

console.log(sudokuValidator([
  [ 1, 5, 2, 4, 8, 9, 3, 7, 6 ],
  [ 7, 3, 9, 2, 5, 6, 8, 4, 1 ],
  [ 4, 6, 8, 3, 7, 1, 2, 9, 5 ],
  [ 3, 8, 7, 1, 2, 4, 6, 5, 9 ],
  [ 5, 9, 1, 7, 6, 3, 4, 2, 8 ],
  [ 2, 4, 6, 8, 9, 5, 7, 1, 3 ],
  [ 9, 1, 4, 6, 3, 7, 5, 8, 2 ],
  [ 6, 2, 5, 9, 4, 8, 1, 3, 8 ],
  [ 8, 7, 3, 5, 1, 2, 9, 6, 4 ]
])); // ➞ false

console.log(sudokuValidator([
  [ 1, 5, 2, 4, 8, 9, 3, 7, 6 ],
  [ 7, 4, 9, 2, 5, 6, 8, 4, 1 ],
  [ 4, 6, 8, 3, 7, 1, 2, 9, 5 ],
  [ 3, 8, 7, 1, 2, 4, 6, 5, 9 ],
  [ 5, 9, 1, 7, 6, 3, 4, 2, 8 ],
  [ 2, 4, 6, 8, 9, 5, 7, 1, 3 ],
  [ 9, 1, 4, 6, 3, 7, 5, 8, 2 ],
  [ 6, 2, 5, 9, 4, 8, 1, 3, 7 ],
  [ 8, 7, 3, 5, 1, 2, 9, 6, 4 ]
])); // ➞ false

// Exercise 2

function group(arr, n) {
    let output = []; 
    let subarrays = Math.ceil(arr.length / n); 
    for (let i = 0; i < subarrays; i++) {
        output.push([]); 
    }
    while (arr.length > 0) {
        for (let i = 0; i < subarrays; i++) {
            if (arr.length == 0) break;
            output[i].push(arr[0]);
            arr.shift(); 
        }
    }
    return output; 
}


console.log(group([1, 2, 3, 4], 2)); // ➞ [[1, 3], [2, 4]]
console.log(group([1, 2, 3, 4, 5, 6, 7], 4)); // ➞ [[1, 3, 5, 7], [2, 4, 6]]
console.log(group([1, 2, 3, 4, 5], 1)); // ➞ [[1], [2], [3], [4], [5]]
console.log(group([1, 2, 3, 4, 5, 6], 4)); // ➞ [[1, 3, 5], [2, 4, 6]]

// Exercise 3

function wordRank(str) {
    let alphabet = { a: 1, b: 2, c: 3, d: 4, e: 5, f: 6, g: 7, h: 8, i: 9, j: 10, k: 11, l: 12, m: 13, n: 14, o: 15, p: 16, q: 17, r: 18, s: 19, t: 20, u: 21, v: 22, w: 23, x: 24, y: 25, z: 26 };
    str = str.split(/[ .,!]/).map((x) => [x, 0]); 
    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < str[i][0].length; j++) {
            for (let key in alphabet) {
                if (key == str[i][0][j]) str[i][1] += alphabet[key]; 
            }
        }
    }
    let output = [str[0]]; 
    for (let i = 0; i < str.length; i++) {
        str[i][1] > output[0][1] ? output[0] = str[i] : output = output; 
    }
    return output[0][0]; 
}

console.log(wordRank("The quick brown fox.")); // ➞ "brown"
console.log(wordRank("Nancy is very pretty.")); // ➞ "pretty"
console.log(wordRank("Check back tomorrow, man!")); // ➞ "tomorrow"
console.log(wordRank("Wednesday is hump day.")); // ➞ "Wednesday"

// Exercise 4
function asciiCapitalize(str) {
    return str.split('').map((letter, index) => str.charCodeAt(index) % 2 == 0 ? letter.toUpperCase() : letter.toLowerCase()).join('');
}

console.log(asciiCapitalize("to be or not to be!")); // ➞ "To Be oR NoT To Be!"
console.log(asciiCapitalize("THE LITTLE MERMAID")); // ➞ "THe LiTTLe meRmaiD"
console.log(asciiCapitalize("Oh what a beautiful morning.")); // ➞ "oH wHaT a BeauTiFuL moRNiNg."
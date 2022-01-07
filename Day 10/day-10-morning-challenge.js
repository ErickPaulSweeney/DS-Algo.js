// Part 1
let grid = [
    ["-", "-", "-", "#"],
    ["-", "-", "$", "-"],
    ["-", "-", "-", "@"],
    ["-", "&", "-", "-"] ,
]; 

function collectedItems(grid, route){
    let matrix = []; 
    for (let i = 0; i < grid.length; i++) {
        matrix.push([]);
        for (let j = 0; j < grid[i].length; j++) {
            matrix[i].push(grid[i][j]); 
        }
    }
    let output = ``;
    let row = 0
    let col = 0;
    let check = (current) => {
        if (current == `$` || current == `#` || current == `&`) {
            output += current;
        }
        current = `x`
    }
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] == `@`) {
                row = i;
                col = j;
            }
        }
    }
    for (let i = 0; i < route.length; i++) {
        if (route[i] == `u`) {
            row--; 
            check(matrix[row][col], output); 
        } else if (route[i] == `d`) {
            row++; 
            check(matrix[row][col], output); 
        } else if (route[i] == `l`) {
            col--; 
            check(matrix[row][col], output);  
        } else if (route[i] == `r`) {
            col++; 
            check(matrix[row][col], output); 
        }
    }
    return output; 
}

console.log(collectedItems(grid, `luur`)); // `$#`
console.log(collectedItems(grid, `dlll`)); // `&`
console.log(collectedItems(grid, `udlr`)); // ``

// Part 2

let grid = [
    ["-", "-", "-", "#"],
    ["-", "-", "$", "-"],
    ["-", "-", "-", "@"],
    ["-", "&", "-", "-"] ,
]; 

function updatedGrid(grid, route){
    let matrix = []; 
    for (let i = 0; i < grid.length; i++) {
        matrix.push([]);
        for (let j = 0; j < grid[i].length; j++) {
            matrix[i].push(grid[i][j]); 
        }
    }
    let output = ``;
    let row = 0
    let col = 0;
    let check = (current, matrix) => {
        if (current == `$` || current == `#` || current == `&`) {
            output += current; 
        }
        matrix[row][col] = `x`; 
        return matrix; 
    }
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] == `@`) {
                row = i;
                col = j;
            }
        }
    }
    for (let i = 0; i < route.length; i++) {
        if (route[i] == `u`) {
            row--; 
            check(matrix[row][col], matrix); 
        } else if (route[i] == `d`) {
            row++; 
            check(matrix[row][col], matrix); 
        } else if (route[i] == `l`) {
            col--; 
            check(matrix[row][col], matrix);  
        } else if (route[i] == `r`) {
            col++; 
            check(matrix[row][col], matrix); 
        }
    }
    return matrix; 
}

console.log(updatedGrid(grid, `luur`)); // `$#`
console.log(updatedGrid(grid, `dlll`)); // `&`
console.log(updatedGrid(grid, `udlr`)); // ``
// Exercise 1
function formatNumber(number) {
    let billion = 10 ** 9;
    let million = 10 ** 6; 
    let thousand = 10 ** 3; 
    if (number / thousand < thousand) {
        number = number / thousand; 
        return number.toFixed(2) + 'K'; 
    }
    if (number / million < thousand) {
        number = number / million;
        return number.toFixed(2) + 'M'; 
    }
    if (number / billion < thousand) {
        number = number / billion; 
        return number.toFixed(2) + 'B';
    }
}

console.log(formatNumber(10100)); // 10.10K
console.log(formatNumber(2023150)); // 2.02M
console.log(formatNumber(5430120215)); // 5.43B

// Exercise 2

function flipTheMatrix(matrix) {
    let output = [];
    for (let i = 0; i < matrix.length; i++) {
        output.push([]);
        for (let j = 0; j < matrix[i].length; j++) {
            output[i].unshift(matrix[i][j]); 
        }
    }
    return output;
}

console.log(flipTheMatrix([[1, 10, 12], [3, 4, 6], [0, 9, 8]])); // [ [ 12, 10, 1 ], [ 6, 4, 3 ], [ 8, 9, 0 ] ]
console.log(flipTheMatrix([[9, 0, 12], [13, 2, 1]])); // [ [ 12, 0, 9 ], [ 1, 2, 13 ] ]
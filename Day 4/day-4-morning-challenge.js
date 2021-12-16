// Exercise 1
function diceGame(matrix) {
    let output = 0;
    for (let i = 0; i < matrix.length; i++) {
        if (matrix[i][0] === matrix[i][1]) output = 0;
        else output += matrix[i][0] + matrix[i][1];
    }
    return output;
}

console.log(diceGame([[1, 2], [3, 4], [5, 6]])); // should return 21
console.log(diceGame([[5, 6], [6, 4],[1, 1]])); // should return 0 
console.log(diceGame([[4, 5], [4, 5], [4, 5]])); // should return 27

// Exercise 2
function countVowels(word) {
    let counter = 0; 
    for (let i = 0; i < word.length; i++) {
        if ((word[i].toLowerCase() === 'a') || (word[i].toLowerCase() === 'e') || (word[i].toLowerCase() === 'i') || (word[i].toLowerCase() === 'o') || (word[i].toLowerCase() === 'u')) counter++; 
    }
    return counter;
}

console.log(countVowels("Celebration"));// should return 5
console.log(countVowels("Palm"));// should return 1
console.log(countVowels("Prediction"));// should return 4
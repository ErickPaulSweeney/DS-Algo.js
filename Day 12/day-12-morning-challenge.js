 // Exercise 1

function cuttingGrass(heights, ...cuts) {
    let order = [...cuts]; 
    let output = []; 
    for (let i = 0; i < order.length; i++) {
        if (heights.every((x) => x > 0)) { 
            heights = heights.map((el) => el - cuts[i]);
            if (heights.every((x) => x > 0)) output.push(heights); 
            else output.push('Done');
             
        }
        else { 
            output.push('Done');
        }
    }
    return output; 
}

console.log(cuttingGrass([3, 4, 4, 4], 1, 1, 1)); // ➞ [[2, 3, 3, 3], [1, 2, 2, 2], "Done"]
// 1st cut shaves off 1: [3, 4, 4, 4] ➞ [2, 3, 3, 3]
// 2nd cut shaves off 1: [2, 3, 3, 3] ➞ [1, 2, 2, 2]
// 3rd cut shaves off 1: [1, 2, 2, 2] ➞ [0, 1, 1, 1], but one element reached zero so we return "Done".
console.log(cuttingGrass([5, 6, 7, 5], 1, 2, 1)); // ➞ [[4, 5, 6, 4], [2, 3, 4, 2], [1, 2, 3, 1]]
console.log(cuttingGrass([1, 0, 1, 1], 1, 1, 1)); // ➞ ["Done", "Done", "Done"]
console.log(cuttingGrass([5, 6, 7, 5], 100, 10, 1)); // ➞ ["Done", "Done", "Done"]

// Exercise 2

function erase(word) {
    let output = []; 
    for (let value of word) {
        if (value !== '#') output.push(value); 
        else output.pop(); 
    }
    return output.join(''); 
}

console.log(erase("he##l#hel#llo"));  //should return "hello"
console.log(erase("wo##wor#rld#d"));  //should return "world"
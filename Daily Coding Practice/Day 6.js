// Rotation of string

function leftRotations(str) {
    let output = []; 
    for (let i = 0; i < str.length; i++) {
        if (i == 0) output.push(str); 
        else if (i == 1) {
            str = str.split('')
            let temp = str.shift();
            str.push(temp);
            output.push(str.join('')); 
        }
        else {
            let temp = str.shift();
            str.push(temp);
            output.push(str.join(''));
        }
    }
    return output; 
}

function rightRotations(str) {
    let output = []; 
    for (let i = 0; i < str.length; i++) {
        if (i == 0) output.push(str);
        else if (i == 1) {
            str = str.split('');
            let temp = str.pop();
            str.unshift(temp); 
            output.push(str.join('')); 
        }
        else {
            let temp = str.pop(); 
            str.unshift(temp);
            output.push(str.join('')); 
        }
    }
    return output;
}

console.log(leftRotations("abc")); // ➞ ["abc", "bca", "cab"]
console.log(rightRotations("abc")); // ➞ ["abc", "cab", "bca"]
console.log(leftRotations("abcdef")); // ➞ ["abcdef", "bcdefa", "cdefab", "defabc", "efabcd", "fabcde"]
console.log(rightRotations("abcdef")); // ➞ ["abcdef", "fabcde", "efabcd", "defabc", "cdefab", "bcdefa"]

// Build staircase

function buildStaircase(num, str) {
    let output = []; 
    for (let i = 0; i < num; i++) {
        output.push([]);
        for (let j = i + 1; j > 0; j--) {
            output[i].push(str)
        }
        for (let k = num - i - 1; k > 0; k--) {
            output[i].push('_');
        }
    }
    return output;
}

console.log(buildStaircase(3, "#")); // [
//   ["#", "_", "_"],
//   ["#", "#", "_"],
//   ["#", "#", "#"]
// ]

console.log(buildStaircase(4, "#")); // [
//   ["#", "_", "_", "_"],
//   ["#", "#", "_", "_"],
//   ["#", "#", "#", "_"],
//   ["#", "#", "#", "#"]
// ]

console.log(buildStaircase(3, "A")); // [
//   ["A", "_", "_"],
//   ["A", "A", "_"],
//   ["A", "A", "A"]
// ]

// height = 3 and building block = "A"

console.log(buildStaircase(4, "$")); // [
//   ["$", "_", "_", "_"],
//   ["$", "$", "_", "_"],
//   ["$", "$", "$", "_"],
//   ["$", "$", "$", "$"]
// ]
// height = 4 and building block = "$"
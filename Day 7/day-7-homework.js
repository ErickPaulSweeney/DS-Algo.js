// Exercise 1
function clone(arr) {
    let output = []; 
    for (let element of arr) {
        output.push(element); 
    }
    output.push(arr);
    return output;
}

console.log(clone([1, 1])); // ➞ [1, 1, [1, 1]]
console.log(clone([1, 2, 3])); // ➞ [1, 2, 3, [1, 2, 3]]
console.log(clone(["x", "y"])); // ➞ ["x", "y", ["x", "y"]]

// Exercise 2

function iSqrt(num){
    if (num < 0) return "invalid";
    let output = 0; 
    for (; num >= 2; num = parseInt(Math.sqrt(num))) {
        output++;
    }
    return output;
}

console.log(iSqrt(1)); // ➞ 0
console.log(iSqrt(2)); // ➞ 1
console.log(iSqrt(7)); // ➞ 2
console.log(iSqrt(27)); // ➞ 3
console.log(iSqrt(256)); // ➞ 4
console.log(iSqrt(-1)); // ➞ "invalid"

// Exercise 3

function mostExpensiveItem(items){
    let temp = 0; 
    let output = ""; 
    for (let keys in items) {
        if (items[keys] > temp) { 
            output = keys; 
            temp = items[keys];
        }
    }
    return output;
}

console.log(mostExpensiveItem({
  piano: 2000,
})); // ➞ "piano"

console.log(mostExpensiveItem({
  tv: 30,
  skate: 20,
})); // ➞ "tv"

console.log(mostExpensiveItem({
  tv: 30,
  skate: 20,
  stereo: 50
})); // ➞ "stereo"
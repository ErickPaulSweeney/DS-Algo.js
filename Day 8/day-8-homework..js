// Exercise 1 
function zipIt(arr1, arr2) {
    if (arr1.length != arr2.length) return `sizes don't match`; 
    else {
        let output = []; 
        for (let index in arr1) {
            output.push([arr1[index], arr2[index]]);
        }
        return output; 
    }
}


console.log(zipIt(["Elise", "Mary"], ["John", "Rick"])); // should return [["Elise", "John"], ["Mary", "Rick"]]
console.log(zipIt(["Ana", "Amy", "Lisa"], ["Bob", "Josh"])); // should return "sizes don't match"
console.log(zipIt(["Ana", "Amy", "Lisa"], ["Bob", "Josh", "Tim"])); // should return [["Ana", "Bob"], ["Amy", "Josh"],["Lisa", "Tim"]]

// Exercise 2
function measureDepth(arr) {
    let output = 0;
    let current = arr;
    for (; current != undefined; output++) {
        current = current[0];
    }
    return output;
}

console.log(measureDepth([])); // should return 1
console.log(measureDepth([[]])); // should return 2
console.log(measureDepth([[[]]])); // should return 3
console.log(measureDepth([[[[[[[[[[[]]]]]]]]]]])); // should return 11

// Exercise 3

function sliceSum(arr, n) {
    let output = 0;
    for (let i = 0; i < n; i++) {
        output += arr[i];
    }
    return output; 
}

console.log(sliceSum([9, 8, 7, 6], 3)); // should return 24
// The parameter n is specified as 3.
// The first 3 numbers in the list are 9, 8 and 7.
// The sum of these 3 numbers is 24 (9 + 8 + 7).
// Return the answer.
console.log(sliceSum([1, 3, 2], 2)); // should return 4
console.log(sliceSum([4, 2, 5, 7], 4)); // should return 18
console.log(sliceSum([3, 6, 2], 0)); // should return 0

// Exercise 4
function filterArray(arr) {
    let output = [];
    for (let element of arr) {
        if (typeof element == `number`) output.push(element); 
    }
    return output; 
}

console.log(filterArray([1, 2, "a", "b"])); // ➞ [1, 2]
console.log(filterArray([1, "a", "b", 0, 15])); // ➞ [1, 0, 15]
console.log(filterArray([1, 2, "aasf", "1", "123", 123])); // ➞ [1, 2, 123]
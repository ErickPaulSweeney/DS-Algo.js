// Find by id

let users = [
    {id: 1, name: "John"}, 
    {id: 2, name: "Pete"}, 
    {id: 3, name: "Mary"}
]; 

let id = 1; 

console.log(users.find((el) => el.id == id)); 
console.log(users.findIndex((el => el.id == id)));

// Are arrays equal

let arr1 = [1, 2, 3]; 
let arr2 = [1, 2, 3]; 
let arr3 = [2, 3, 4]; 

console.log(arr1.every((el, index) => el == arr2[index])); // true
console.log(arr1.every((el, index) => el == arr3[index])); // false

// Reduce function implementation  

function getMin(minSoFar, currElement) {
    return currElement < minSoFar ? currElement : minSoFar;
}

function getMax(maxSoFar, currElement) {
    return currElement > maxSoFar ? currElement : maxSoFar;
}

function getSum(sumSoFar, currElement) {
    return currElement + sumSoFar;
}

function min(arr) {
    let output = arr[0]; 
    for (let index in arr) {
        output = getMin(output, arr[index]); 
    }
    return output; 
}

function max(arr) {
    let output = arr[0]; 
    for (let index in arr) {
        output = getMax(output, arr[index]); 
    }
    return output; 
}

function max(arr) {
    let output = arr[0]; 
    for (let index in arr) {
        output = getSum(output, arr[index]); 
    }
    return output; 
}

function reduce(arr, callbackFn) {
    let output = arr[0];
    for (let index in arr) {
        output = callbackFn(output, arr[index]); 
    }
    return output; 
}

let arr = [2, -1, 4, 3, 6];

console.log(reduce(arr, getMin));
console.log(reduce(arr, getMax));
console.log(reduce(arr, getSum));

console.log(arr.reduce((prev, curr) => Math.min(prev, curr))); // -1
console.log(arr.reduce((prev, curr) => Math.max(prev, curr))); // 6
console.log(arr.reduce((prev, curr) => prev + curr)); // 14

// Reduce object to array

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let users = [ john, pete, mary ];

function reducer(accumulator, user) {
    accumulator.push(user.name)
    return accumulator; 
}

let names = users.reduce(reducer, []); 
console.log(names); 
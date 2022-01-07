// Exercise 1

let student1 = {
  name: 'Aditya',
  score: 95,
  grade: 7
};

let student2 = {
  name: 'Nikhil',
  score: 75,
  grade: 8
};

let student3 = {
  name: 'Danny',
  score: 84,
  grade: 7
};



let student4 = {
  name: 'Kimiko',
  score: 64,
  grade: 8
};

let students = [student1, student2, student3, student4];

let reducer = (accumulator, student) => {
    accumulator += student.score;
    return accumulator; 
}

console.log((students.reduce(reducer, 0) / students.length)); 

// Exercise 2

// Part 1

let evergreens = [
  { name: "cedar", count: 2 },
  { name: "fir", count: 6 },
  { name: "pine", count: 3 }
];

evergreens.find((el) => el.count > 5); // { name: "fir", count: 6 }

// Part 2

let nums = [11, 7, 3, 1, 12, 14, 13, 18];

console.log(nums.findIndex((el) => el % 2 == 0)); // 4

// Part 3

let arr1 = [ 228, 4782, 171];
let arr2 = [ 1512, 18, 174, 204];

function fabulous(num) {
    return num % 2 == 0 && num % 3 == 0; 
}

console.log(arr1.every(fabulous)); // false
console.log(arr2.every(fabulous)); // true

// Exercise 3

function minMaxTotal(arr) {
    function reducer(accumulator, currentElement) {
        accumulator[0] = Math.min(accumulator[0], currentElement); 
        accumulator[1] = Math.max(accumulator[1], currentElement); 
        accumulator[2] += currentElement; 
        return accumulator;
    }
    return arr.reduce(reducer, [Number.MAX_VALUE, -Number.MAX_VALUE, 0])
}

let arr = new Array(10000000).fill(0).map((item) => Math.floor(Math.random() * 10000 + 10000));
// you can try priting the array to find out whats inside it.

console.time('functionTime');
console.log(minMaxTotal(arr));
console.timeEnd('functionTime');
// Exercise 1

let students = [
    {name: 'Raj', age: 18, location:'Delhi',isMarvelFan: true},
    {name: 'Kumar', age: 25, location:'Mumbai',isMarvelFan: true},
    {name: 'John', age: 21, location:'Kolkata',isMarvelFan: false},
    {name: 'Tom', age: 29, location:'Chennai',isMarvelFan: true},
    {name: 'Brad', age: 23, location:'Mumbai',isMarvelFan: false},
    {name: 'King', age: 31, location:'Mumbai',isMarvelFan: false}
];

function filterStudents(students, filterFunction) {
    let output = []; 
    for (let element of students) {
        if (filterFunction(element)) output.push(element); 
    }
    return output;
}

function isAbove23(student) {
    return student.age > 23;
}

function isFromMumbai(student) {
    return student.location == 'Mumbai'; 
}

function isAMarvelFan(student) {
    return student.isMarvelFan;
}

function isNameStartsWithA(student) {
    return student.name.startsWith('A'); 
}

console.log(filterStudents(students, isAbove23)); 
console.log(filterStudents(students, isFromMumbai)); 
console.log(filterStudents(students, isAMarvelFan)); 
console.log(filterStudents(students, isNameStartsWithA)); 

// Exercise 2

let students = [
    {name: 'Raj', age: 18, location:'Delhi',isMarvelFan: true},
    {name: 'Kumar', age: 25, location:'Mumbai',isMarvelFan: true},
    {name: 'John', age: 21, location:'Kolkata',isMarvelFan: false},
    {name: 'Tom', age: 29, location:'Chennai',isMarvelFan: true},
    {name: 'Brad', age: 23, location:'Mumbai',isMarvelFan: false},
    {name: 'King', age: 31, location:'Mumbai',isMarvelFan: false}
];

// let isAbove23 = (student) => student.age > 23; 
// let isFromMumbai = (student) => student.location == 'Mumbai'; 
// let isAMarvelFan = (student) => student.isMarvelFan;
// let isNameStartsWithA = (student) => student.name.startsWith('A'); 

// function filterStudents(students, filterFunction) {
//     return students.filter(filterFunction);
// }

// console.log(filterStudents(students, isAbove23)); 
// console.log(filterStudents(students, isFromMumbai)); 
// console.log(filterStudents(students, isAMarvelFan)); 
// console.log(filterStudents(students, isNameStartsWithA)); 

// One line solution 

console.log(students.filter((student) => student.age > 23)); 
console.log(students.filter((student) => student.location == 'Mumbai')); 
console.log(students.filter((student) => student.isMarvelFan)); 
console.log(students.filter((student) => student.name.startsWith('A')));

// Exercise 3

let student1 = { name: 'Aditya', score: 95, grade: 7 }; 
let student2 = { name: 'Nikhil', score: 75, grade: 8 }; 
let student3 = { name: 'Danny', score: 84, grade: 7 }; 
let student4 = { name: 'Kimiko', score: 64, grade: 8 };

let students = [student1, student2, student3, student4]

// Part 1
console.log(students.filter((student) => student.score > 80)); 

// Part 2
let numbersList = [11, 55, 32, 66, 82, 90, 1, 5, 93]
console.log(numbersList.filter((num) => num % 2 !== 0));

// Guess the problem

// The parameter name in the function is not optimal and might cause confusion further down the line. 
function isAbove80(student) {
    return student.score > 80; 
} 

// Filter range

let arr = [5, 3, 8, 1];

let filtered = filterRange(arr, 1, 4);

console.log(arr.filter((num, a, b) => num >= a && num <= b)); 

// First half or greater than 10

let numbers = [1, 20, 9, 6, 7, 10];

// function firstHalfOrGreaterthan10(numbers) {
    
// }

console.log(numbers.filter((element, index, numbers) => (index <= Math.floor(numbers.length / 2)) || (element > 10))); 
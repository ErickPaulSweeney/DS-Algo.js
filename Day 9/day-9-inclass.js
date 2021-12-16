// Exercise 1

// Given an array of names, read the documentation of `forEach` method and print 'Hi, Name' for each name inside the array.

let names = ['Akhil', 'Sudhir', 'Vishwa', 'Daniel', 'Sumitra'];

names.forEach(student => console.log(`Hi, ${student}`)); 

// Exercise 2

let student1 = { name: 'Aditya', score: 55, grade: 7 };
let student2 = { name: 'Nikhil', score: 75, grade: 8 };
let student3 = { name: 'Danny', score: 84, grade: 7 }; 
let student4 = { name: 'Kimiko', score: 64, grade: 8 }; 

let students = [student1,student2,student3,student4]; 

// Part 1
// Use forEach to print student info like:
// 'Kimiko scored 64'
function partOne(students) {
    return console.log(`${students.name} scored ${students.score}`); 
}
students.forEach(partOne); 

students.forEach(students => console.log(`${students.name} scored ${students.score}`)); 

// Part 2
// Print the student info `Kimiko scored 64` and if the student scores more than 80 also add 'Well Done, studentName!'
// e.g. 'Danny scored 84. Well Done, Danny!
function partTwo(students) {
    if (students.score > 80) {
        return console.log(`${students.name} scored ${students.score}. Well Done, ${students.name}`); 
    }
    else return console.log(`${students.name} scored ${students.score}.`);
}
students.forEach(partTwo); 

students.forEach(students => students.score > 80 ? console.log(`${students.name} scored ${students.score}. Well Done, ${students.name}`) : console.log(`${students.name} scored ${students.score}.`)); 

// Part 3
// Print the student info like this:
// 1. Aditya scored 55
// 2. Nikhil scored 75
// 3. Danny scored 84
// 4. Kimiko scored 64

function partThree(students, index) {
    return console.log(`${index + 1}. ${students.name} scored ${students.score}`)
}
students.forEach(partThree); 

students.forEach((students, index) => console.log(`${index + 1}. ${students.name} scored ${students.score}`)); 

// Exercise 3

let words = ["Bilbo", "Gandalf", "Nazgul"];

console.log(words.map(word => word.length)); 

// Exercise 4

// Write a function which takes in a list of numbers and returns the list containing cubes of those numbers
// e.g. getCubes([2, 5, 6, 3, 1]) should return [ 8, 125, 216, 27, 1]
let numbers = [2, 5, 6, 3, 1]; 
console.log(numbers.map(num => num ** 3)); // [8, 125, 216, 27, 1]

// Exercise 5

// Given an an array containing various users detail, return a new array containing the names of users.

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

let students = [student1,student2,student3,student4];

console.log(students.map(obj => obj.name)); 

// Exercise 6

// Part 1
let dimensions = [[2, 4], [5, 5], [6,3], [12, 5]];
// Given the array of dimensions (width and height) of rectangles, create a new list which consist of areas of the rectangles.
console.log(dimensions.map(area => area[0] * area[1])); 

// Part 2
// let dimensions = [[2, 4], [5, 5], [6,3], [12, 5]];
// Use the map method to generate a new list which consist of areas of the rectangles. 
console.log(dimensions.map(area => area[0] * area[1])); 

// Part 3
// let dimensions = [[2, 4], [5, 5], [6,3], [12, 5]];
// Use destructuring and map method to generate a new list which consist of areas of the rectangles.
let [ r1, r2, r3, r4 ] = dimensions.map(area => area[0] * area[1]);
console.log(r1, r2, r3, r4); 

// Part 4
let users = [ {firstName: 'Akhil', lastName:'Gupta', age: 33}, {firstName: 'John', lastName:'Davis', age: 25}, {firstName: 'Kimiko', lastName:'Yamaguchi', age: 64}];
// Given the list of users, create a new list consisting of firstName and lastName.
// e.g. list should contain 'Akhil Gupta', 'John Davis', 'Kimiko Yamaguchi'
console.log(users.map(person => `${person.firstName} ${person.lastName}`)); 

// Exercise 7
function jazzify(arr) {
    return arr.map(chord => chord.endsWith('7') ? chord : chord + '7'); 
}

console.log(jazzify(["G", "F", "C"])); // ➞ ["G7", "F7", "C7"]
console.log(jazzify(["Dm", "G", "E", "A"])); // ➞ ["Dm7", "G7", "E7", "A7"]
console.log(jazzify(["F7", "E7", "A7", "Ab7", "Gm7", "C7"])); // ➞ ["F7", "E7", "A7", "Ab7", "Gm7", "C7"]
console.log(jazzify([])); // ➞ []
console.log(jazzify(["F7", "G", "C", "D7"])); // ➞ ["F7", "G7", "C7", "D7"]
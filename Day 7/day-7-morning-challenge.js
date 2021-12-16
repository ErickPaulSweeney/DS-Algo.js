function add(num1) {
    return function(num2) {
        return num1 + num2;
    }
}

console.log(add(3)(4));   // 7
console.log(add(12)(20));  // 32


// Exercise 2

function inBox(box) {
    for (let i = 1; i < box.length - 1; i++) {
        box[i] = box[i].split('');
        for (let j = 1; j < box[i].length - 1; j++) {
            if (box[i][j] === '*') return true;
        }
    }
    return false;
}

console.log(inBox([
  "###",
  "#*#",
  "###"
])); // should return true

let inBox2 = [
  "####",
  "#* #",
  "#  #",
  "####"
]; // should return true

let inBox3 = [
  "*####",
  "#  #",
  "#  #*",
  "####"
]; // should return false

let inBox4 = [
  "#####",
  "#   #",
  "#   #",
  "#   #",
  "#####"
]; // should return false
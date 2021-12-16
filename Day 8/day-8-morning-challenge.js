// Exercise 1
function transformUpvotes(votes) {
    return votes.split(' ').map(element => {
        let flag = element.includes('.');
        if (flag) {
            return element = parseFloat(element) * 1000;
        }
        else return element = parseFloat(element); 
    }); 
}

console.log(transformUpvotes("6.8k 13.5k"));// should return [6800, 13500]
console.log(transformUpvotes("5.5k 8.9k 32"));// should return [5500, 8900, 32]
console.log(transformUpvotes("20.3k 3.8k 7.7k 992"));// should return [20300, 3800, 7700, 992]

// Exercise 2

function reverseImage(box) {
    let output = []; 
    for (let i = 0; i < box.length; i++) {
        output.push([]);
        for (let j = 0; j < box[i].length; j++) {
            if (box[i][j] == 0) output[i].push(1);
            else output[i].push(0); 
        }
    }
    return output;
}

console.log(reverseImage([
  [1, 0, 0],
  [0, 1, 0],
  [0, 0, 1]
]));// should return [[0, 1, 1],[1, 0, 1],[1, 1, 0]]

console.log(reverseImage([
  [1, 1, 1],
  [0, 0, 0]
]));// should return 
  // [
  // [0, 0, 0],
  // [1, 1, 1]
  // ]

console.log(reverseImage([
  [1, 0, 0],
  [1, 0, 0]
]));// should return 
    // [
    // [0, 1, 1],
    // [0, 1, 1]
    // ]
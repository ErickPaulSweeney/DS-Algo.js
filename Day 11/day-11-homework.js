// Exercise 1

function numOfSubbarrays(arr) {
    let output = 0; 
    for (let index in arr) {
        if (Array.isArray(arr[index])) output++;
    }
    return output; 
}

console.log(numOfSubbarrays([[1, 2, 3]])); // ➞ 1
console.log(numOfSubbarrays([[1, 2, 3], [1, 2, 3], [1, 2, 3]])); // ➞ 3
console.log(numOfSubbarrays([[1, 2, 3], [1, 2, 3], [1, 2, 3], [1, 2, 3]])); // ➞ 4
console.log(numOfSubbarrays([1, 2, 3])); //➞ 0

// Exercise 2

function competition_rank(obj, name) {
    let sorted = Object.entries(obj); 
    let ranks = [1]; 
    for (let i = 1; i < sorted.length; i++) {
        ranks[i] = sorted[i][1] == sorted[i - 1][1] ? ranks[i - 1] : i + 1;
    }
    for (let index in sorted) {
        if (sorted[index][0] == name) return ranks[index]; 
    }
}

console.log(competition_rank({
  George: 96,
  Emily: 95,
  Susan: 93,
  Jane: 89,
  Brett: 82
  }, "Jane")); // ➞ 4

console.log(competition_rank({
  Kate: 92,
  Carol: 92,
  Jess: 87,
  Bruce: 87,
  Scott: 84
  }, "Bruce")); // ➞ 3

// Exercise 3

function mapping(arr) {
    let output = {}; 
    for (let value of arr) {
        output[value] = value.toUpperCase(); 
    }
    return output;
}

console.log(mapping(["p", "s"])); // ➞ { "p": "P", "s": "S" }
console.log(mapping(["a", "b", "c"])); // ➞ { "a": "A", "b": "B", "c": "C" }
console.log(mapping(["a", "v", "y", "z"])); // ➞ { "a": "A", "v": "V", "y": "Y", "z": "Z" }

// Exercise 4

function total(arr) {
    function reducer(accumulator, item) {
        accumulator += item.qty * item.price; 
        return accumulator; 
    }
  return arr.reduce(reducer, 0); 
}

let shoppingCart = [{
        product: 'phone',
        qty: 1,
        price: 699
    },
    {
        product: 'Screen Protector',
        qty: 1,
        price: 9.98
    },
    {
        product: 'Memory Card',
        qty: 2,
        price: 20.99
    }
];
console.log(total(shoppingCart)); // should return 750.96
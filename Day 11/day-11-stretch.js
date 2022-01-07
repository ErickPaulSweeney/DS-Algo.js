// Exercise 1
function lcm(num1, num2) {
    let min = Math.min(num1, num2); 
    let max = Math.max(num1, num2);
    let i = max; 
    for (; i % min !== 0; i += max) {

    }
    return i; 
}

console.log(lcm(9, 18)); // ➞ 18
console.log(lcm(8, 5)); // ➞ 40
console.log(lcm(17, 11)); // ➞ 187

// Exercise 2
function addLetters(arr) {
    let alphabet = { a: 1, b: 2, c: 3, d: 4, e: 5, f: 6, g: 7, h: 8, i: 9, j: 10, k: 11, l: 12, m: 13, n: 14, o: 15, p: 16, q: 17, r: 18, s: 19, t: 20, u: 21, v: 22, w: 23, x: 24, y: 25, z: 26 };
    let output = 0; 
    for (let value of arr) {
        for (let key in alphabet) {
            if (value == key) output += alphabet[key]; 
        }
    } 
    for (let key in alphabet) {
        if (output % 26 == 0) return 'z'; 
        else if (output % 26 == alphabet[key]) return key; 
    }
}

console.log(addLetters(["a"])); // ➞ "a"
console.log(addLetters(["a", "b"])); // ➞ "c"
console.log(addLetters(["a", "b", "c"])); // ➞ "f"
console.log(addLetters(["a", "b", "c", "d", "e", "f"])); // ➞ "u"
console.log(addLetters(["y", "a"])); // ➞ "z"
console.log(addLetters(["y", "c"])); // ➞ "b"
console.log(addLetters(["z", "a"])); // ➞ "a"
console.log(addLetters(["x", "y", "z"])); // ➞ "w"
console.log(addLetters([])); // ➞ "z" // look at notes
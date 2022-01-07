// Find common elements

function commonElements(arr1, arr2) {
    let output = [];
    let n = arr1.length;
    let m = arr2.length;
    for (let i = 0, j = 0; i < m && j < n;) {
        if (arr1[i] < arr2[j]) i++;
        else if (arr1[i] > arr2[j]) j++;
        else {
            output.push(arr1[i]);
            i++;
        }
    }
    return output;
}

console.log(commonElements([-1, 3, 4, 6, 7, 9], [1, 3])); // ➞ [3]
console.log(commonElements([1, 3, 4, 6, 7, 9], [1, 2, 3, 4, 7, 10])); // ➞ [1, 3, 4, 7]
console.log(commonElements([1, 2, 2, 2, 3, 4, 5], [1, 2, 4, 5])); // ➞ [1, 2, 4, 5]
console.log(commonElements([1, 2, 3, 4, 5], [10, 12, 13, 15])); // ➞ []

// Vowel-vowel connection

function vowelLinks(str) {
    str = str.split(' '); 
    let reg = /[aeiou]/i
    for (let i = 0; i < str.length - 1; i++) {
        if (reg.test(str[i][str[i].length - 1]) && reg.test(str[i + 1][0])) return true; 
    }
    return false;
}

console.log(vowelLinks("a very large appliance")); // ➞ true
console.log(vowelLinks("go to edabit")); // ➞ true
console.log(vowelLinks("an open fire")); // ➞ false
console.log(vowelLinks("a sudden applause")); // ➞ false
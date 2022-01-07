// Array twins

function twins(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr.slice(0, i + 1).reduce(((a, b) => a + b), 0) == arr.slice(i + 1, arr.length).reduce(((a, b) => a + b), 0)) {
            return i + 1;
        }
    }
    return 'No twin arrays found'
}

console.log(twins([10, 20, 30, 5, 40, 50, 40, 15])); // ➞ 5
// foundIndex 5 : [10+20+30+5+40]=[50+40+15]
console.log(twins([1, 2, 3, 4, 5, 5])); // ➞ 4
// [1, 2, 3, 4] [5, 5]
console.log(twins([3, 3])); // ➞ 1

// Delete occurences

function deleteOccurrences(arr, num) {
    let output = []; 
    let map = {};
    for (let i = 0; i < arr.length; i++) {
        if (map.hasOwnProperty(arr[i])) map[arr[i]]++;
        else map[arr[i]] = 1;
        if (map[arr[i]] <= num) output.push(arr[i]);
    }
    return output; 
}

console.log(deleteOccurrences([1, 1, 1, 1], 2)); // ➞ [1, 1]
console.log(deleteOccurrences([13, true, 13, null], 1)); // ➞ [13, true, null]
console.log(deleteOccurrences([true, true, true], 3)); // ➞ [true, true, true]

// Minimum removals

// function minRemovals(str1, str2) {
//     str1 = str1.split('').sort(); 
//     str2 = str2.split('').sort(); 
//     let common = str1.filter((el) => str2.includes(el)); 
//     return (str1.length - common.length) + (str2.length - common.length); 
// }

function minRemovals(str1, str2) {
    return (str1.length - str1.split('').filter((el) => str2.includes(el)).length) + (str2.length - str1.split('').filter((el) => str2.includes(el)).length); 
}

console.log(minRemovals("abcde", "cab")); // ➞ 2
// Remove "d", "e" to make "abc" and "cab".
console.log(minRemovals("deafk", "kfeap")); // ➞ 2
// Remove "d" and "p" from the first and second word, respectively.
console.log(minRemovals("acb", "ghi")); // ➞ 6
// Remove all letters from both words to get "" and "".

// Character at position

function charAtPos(arr, specifier) {
    return typeof arr == 'string' ? 
    arr.split('').filter((el, ind) => specifier == 'odd' ? ind % 2 === 0 : ind % 2 !== 0).join('') : 
    arr.filter((el, ind) => specifier == 'odd' ? ind % 2 === 0 : ind % 2 !== 0);
}

console.log(charAtPos([2, 4, 6, 8, 10], "even")); // ➞ [4, 8]
// 4 & 8 occupy the 2nd & 4th positions
console.log(charAtPos("EDABIT", "odd")); // ➞ "EAI"
// "E", "A" and "I" occupy the 1st, 3rd and 5th positions
console.log(charAtPos(["A", "R", "B", "I", "T", "R", "A", "R", "I", "L", "Y"], "odd")); // ➞ ["A", "B", "T", "A", "I", "Y"]
// Top note

function getStudentsWithNamesAndTopNotes(arr) {
    let output = [];
    for (let i = 0; i < arr.length; i++) {
        output.push({ name: arr[i].name, topNote: Math.max(...arr[i].notes)})
    }
    return output; 
}

console.log(getStudentsWithNamesAndTopNotes([
  { "name": "John", "notes": [3, 5, 4] },
  { "name": "Max", "notes": [1, 4, 6] },
  { "name": "Zygmund", "notes": [1, 2, 3] }
])); 
// ➞ [
//   { "name": "John", "topNote": 5 },
//   { "name": "Max", "topNote": 6 },
//   { "name": "Zygmund", "topNote": 3 }
// ]

// Reoder digits

function reorderDigits(arr, str) {
    let output = []; 
    for (let i = 0; i < arr.length; i++) {
        output.push(parseFloat(String(arr[i]).split('').sort((a, b) => str == 'asc' ? a - b : b - a).join('')));
    }
    return output;
}

console.log(reorderDigits([515, 341, 98, 44, 211], "asc")); // ➞ [155, 134, 89, 44, 112]
console.log(reorderDigits([515, 341, 98, 44, 211], "desc")); // ➞ [551, 431, 98, 44, 211]
console.log(reorderDigits([63251, 78221], "asc")); // ➞ [12356, 12278]
console.log(reorderDigits([63251, 78221], "desc")); // ➞ [65321, 87221]
console.log(reorderDigits([1, 2, 3, 4], "asc")); //  ➞ [1, 2, 3, 4]
console.log(reorderDigits([1, 2, 3, 4], "desc")); // ➞ [1, 2, 3, 4]
// Missing letter string

function missingLetter(str) {
    let alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    str.split("");
    let section = alphabet.slice(alphabet.indexOf(str[0]), (alphabet.indexOf(str[(str.length - 1)]) + 1)); 
    if (section.length == str.length) return "No Missing Letter"; 
    else {
        for (let i = 0; i < section.length; i++) {
            if (section[i] != str[i]) return section[i]; 
        }
    }
}

console.log(missingLetter("abdefg")); // ➞ "c"
console.log(missingLetter("mnopqs")); // ➞ "r"
console.log(missingLetter("tuvxyz")); // ➞ "w"
console.log(missingLetter("ghijklmno")); // ➞ "No Missing Letter"

// Sort by length

function lastNameLensort(arr) {
    let temp = arr.map((el) => el.split(' '));
    temp.sort((a, b) => {
    if (a[1].length == b[1].length) {
        if (a[1] < b[1]) return -1;
        if (a[1] > b[1]) return 1;
        return 0; 
    }
    if (a[1].length < b[1].length) {
        return -1;
    }
    if (a[1].length > b[1].length) {
        return 1;
    }
    return 0;
    });
return temp.map((el) => el.join(' ')); 
}

console.log(lastNameLensort([
    "Jennifer Figueroa",
    "Heather Mcgee",
    "Amanda Schwartz",
    "Nicole Yoder",
    "Melissa Hoffman"
])); // ["Heather Mcgee", "Nicole Yoder", "Melissa Hoffman", "Jennifer Figueroa", "Amanda Schwartz"]
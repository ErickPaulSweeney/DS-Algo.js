// Distance to nearest vowel

function distanceToNearestVowel(str) {
    let output = []; 
    str = str.split(''); 
    let vowelIndex = []; 
    for (let i = 0; i < str.length; i++) {
        if (/[aeiou]/i.test(str[i])) vowelIndex.push(i); 
    }
    for (let i = 0; i < str.length; i++) {
        output.push(Math.min(...vowelIndex.map((el) => Math.abs(el - i)))); 
    }
    return output;
}

console.log(distanceToNearestVowel("aaaaa")); // ➞ [0, 0, 0, 0, 0]
console.log(distanceToNearestVowel("babbb")); // ➞ [1, 0, 1, 2, 3]
console.log(distanceToNearestVowel("abcdabcd")); // ➞ [0, 1, 2, 1, 0, 1, 2, 3]
console.log(distanceToNearestVowel("shopper")); // ➞ [2, 1, 0, 1, 1, 0, 1]

// Caesar cipher

function caesarCipher(str, num) {
    let alphabetLower = "abcdefghijklmnopqrstuvwxyz"; 
    let alphabetUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; 
    let output = ""; 
    for (let i = 0; i < str.length; i++) {
        if (/[a-z]/.test(str[i])) output += alphabetLower[(alphabetLower.indexOf(str[i]) + num) % 26];
        else if (/[A-Z]/.test(str[i])) output += alphabetUpper[(alphabetUpper.indexOf(str[i]) + num) % 26];
        else output += str[i];
    }
    return output;
}

console.log(caesarCipher("middle-Outz", 2)); // ➞ "okffng-Qwvb"

// m -> o
// i -> k
// d -> f
// d -> f
// l -> n
// e -> g
// -    -
// O -> Q
// u -> w
// t -> v
// z -> b

console.log(caesarCipher("Always-Look-on-the-Bright-Side-of-Life", 5)); // ➞ "Fqbfdx-Qttp-ts-ymj-Gwnlmy-Xnij-tk-Qnkj"
console.log(caesarCipher("A friend in need is a friend indeed", 20)); // ➞ "U zlcyhx ch hyyx cm u zlcyhx chxyyx"

// Nearest greater frequencies

function nearestGreaterFrequencies(arr) {
    let output = []; 
    let frequency = []; 
    let count = arr.reduce((accu, curr) => {
        if (accu.hasOwnProperty(curr)) accu[curr]++;
        else accu[curr] = 1;
        return accu;
    }, {}); 
    for (let i = 0; i < arr.length; i++) {
        frequency.push(count[arr[i]]); 
    }
    for (let i = 0; i < arr.length; i++) {
        let curr = frequency.slice(0, i + 1);
        if ((Math.max(...curr)) == frequency[i]) output.push(-1); 
        else  {
            for (let j = curr.length - 2; j >= 0; j--) {
                if (frequency[i] < frequency[j]) {
                    output.push(arr[j]); 
                    break; 
                }
            }
        }
    }
    return output;
}

console.log(nearestGreaterFrequencies([2, 1, 2, 2, 1, 3])) // [-1, 2, -1, -1, 2, 1]
console.log(nearestGreaterFrequencies([8, 1, 1, 2, 2, 9, 1])) // [-1, -1, -1, 1, 1, 2, -1]
console.log(nearestGreaterFrequencies([5, 3, 3, 9, 8, 1, 1, 2])) // [-1, -1, -1, 3, 3, -1, -1, 1]
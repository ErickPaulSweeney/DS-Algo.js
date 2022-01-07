// Exercise 1

function countLoneOnes(num) {
    let counter = 0;
    num = num.toString().split(''); 
    for (let i = 0; i < num.length; i++) {
        if (num[i] == 1) {
            if (num[i - 1] == undefined) {
                if (num[i + 1] != 1) counter++; 
            }
            else if (num[i + 1] == undefined) {
                if (num[i - 1] != 1) counter++;
            }
            else if (num[i - 1] != 1 && num[i + 1] != 1) counter++; 
        }
    }
    return counter; 
}

console.log(countLoneOnes(101)); // ➞ 2
console.log(countLoneOnes(1191)); // ➞ 1
console.log(countLoneOnes(1111)); // ➞ 0
console.log(countLoneOnes(462)); // ➞ 0

// Exercise 2

function getNumberOrder(num) {
    num = num.toString().split(''); 
    let inc = JSON.parse(JSON.stringify(num)).sort((a, b) => a - b); 
    let dec = JSON.parse(JSON.stringify(num)).sort((a, b) => b - a); 
    if (num.join('') == inc.join('')) return 'Increasing'; 
    else if (num.join('') == dec.join('')) return 'Decreasing'; 
    else return 'Neither'; 
}

console.log(getNumberOrder(1111)); // Increasing(Though it can be decreasing we will give more preference to Increasing)
console.log(getNumberOrder(8)); // Increasing(Though it can be decreasing we will give more preference to Increasing)
console.log(getNumberOrder(81)); // Decreasing
console.log(getNumberOrder(100)); // Decreasing
console.log(getNumberOrder(8181)); // Neither
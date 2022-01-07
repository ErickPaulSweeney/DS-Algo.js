// Exercise 1
function memeSum(num1, num2) {
    if (num2 > num1) {
        let temp = num1; 
        num1 = num2; 
        num2 = temp; 
    }
    let places = []; 
    let i = 0;
    while (num1 > 0) {
        places.push([num1 % 10]); 
        num1 = Math.floor(num1 / 10); 
    }
    while (num2 > 0) {
        places[i].push(num2 % 10);
        num2 = Math.floor(num2 / 10);
        i++; 
    }
    return places.map((subArr) => subArr[1] == undefined ? subArr[0] : subArr[0] + subArr[1]).reverse().join(''); 
}

console.log(memeSum(26, 39)); // ➞ 515
// 2+3 = 5, 6+9 = 15
// 26 + 39 = 515
console.log(memeSum(122, 81)); // ➞ 1103
// 1+0 = 1, 2+8 = 10, 2+1 = 3
// 122 + 81 = 1103
console.log(memeSum(1222, 30277)); // ➞ 31499

// Exercise 2
function numInStr(arr) {
    return arr.filter((element) => (/[\d]/).test(element)); 
}

console.log(numInStr(["1a", "a", "2b", "b"])); // ➞ ["1a", "2b"]
console.log(numInStr(["abc", "abc10"])); // ➞ ["abc10"]
console.log(numInStr(["abc", "ab10c", "a10bc", "bcd"])); // ➞ ["ab10c", "a10bc"]
console.log(numInStr(["this is a test", "test1"])); // ➞ ["test1"]
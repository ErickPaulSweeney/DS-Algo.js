// Exercise 1
function fibStr(num, arr) {
    let output = [];  
    for (let i = 0; i < num; i++) {
        if (i < 2) output.push(arr[i]); 
        else if (i == 2) output.push(arr[1] + arr[0]);
        else output.push(output[i - 1] + output[i - 2]); 
    }
    return output.join(', ');
}

console.log(fibStr(3, ["j", "h"])); // ➞ "j, h, hj"
console.log(fibStr(5, ["e", "a"])); // ➞ "e, a, ae, aea, aeaae"
console.log(fibStr(6, ["n", "k"])); // ➞ "n, k, kn, knk, knkkn, knkknknk"

// Exercise 2
function daysUntil2022(date) {
    let output = 0; 
    let daysPerMonth = { 1: 334, 2: 306, 3: 275, 4: 245, 5: 214, 6: 184, 7: 153, 8: 122, 9: 92, 10: 61, 11: 31, 12: 0 }; 
    let daysPerDay = { 1: 31, 2: 28, 3: 31, 4: 30, 5: 31, 6: 30, 7: 31, 8: 31, 9: 30, 10: 31, 11: 30, 12: 31}; 
    date = date.split('/'); 
    return output += daysPerMonth[date[0]] + (daysPerDay[date[0]] - date[1] + 1); ;
}

console.log(daysUntil2022("12/28/2021")); // should return "4 days"
console.log(daysUntil2022("1/1/2021")); // should return "365 days"
console.log(daysUntil2022("2/28/2021")); // should return "307 days"

// Exercise 3
function multiplicativePersistence(num) {
    if (num < 10) return 0; 
    let output = 0;
    let digits = num.toString().split('');
    let iteration = 10; 
    while (iteration > 9) {
        iteration = digits.reduce((accu, curr) => accu * curr);        
        digits = iteration.toString().split(''); 
        output++; 
    }
    return output;
}

console.log(multiplicativePersistence(77)); // ➞ 4
// 7 x 7 = 49
// 4 x 9 = 36
// 3 x 6 = 18
// 1 x 8 = 8
// It takes 4 iterations to reach a single-digit number.

console.log(multiplicativePersistence(123456)); // ➞ 2
// 1 x 2 x 3 x 4 x 5 x 6 = 720
// 7 x 2 x 0 = 0

console.log(multiplicativePersistence(4)); // ➞ 0
// Because 4 is already a single-digit integer.

// Exercise 4
function additivePersistence(num) {
    if (num < 10) return 0; 
    let output = 0;
    let digits = num.toString().split('');
    let iteration = 10; 
    while (iteration > 9) {
        iteration = digits.reduce((accu, curr) => parseFloat(accu) + parseFloat(curr));        
        digits = iteration.toString().split(''); 
        output++; 
    }
    return output; 
}

console.log(additivePersistence(1679583)); // ➞ 3
// 1 + 6 + 7 + 9 + 5 + 8 + 3 = 39
// 3 + 9 = 12
// 1 + 2 = 3
// It takes 3 iterations to reach a single-digit number.

console.log(additivePersistence(123456)); // ➞ 2
// 1 + 2 + 3 + 4 + 5 + 6 = 21
// 2 + 1 = 3

console.log(additivePersistence(6)); // ➞ 0
// Because 6 is already a single-digit integer.

console.log(additivePersistence(27)); // 1
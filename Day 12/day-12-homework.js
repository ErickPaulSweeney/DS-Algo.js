// Exercise 1

function isParselTongue(arr) {
    arr = arr.split(' '); 
    let flag = true; 
    for (let value of arr) {
        if (value.toLowerCase().includes('ss') || !value.toLowerCase().includes('s')) flag = true; 
        else return false;
    }
    return flag; 
}

console.log(isParselTongue("Sshe ssselects to eat that apple. ")); // ➞ true
console.log(isParselTongue("She ssselects to eat that apple. ")); // ➞ false
// "She" only contains one "s".
console.log(isParselTongue("Beatrice samples lemonade")); // ➞ false
// While "samples" has 2 instances of "s", they are not together.
console.log(isParselTongue("You ssseldom sssspeak sso boldly, ssso messmerizingly.")); // ➞ true

// Exercise 3

function stupidAddition(par1, par2) {
    if (typeof par1 == 'string' && typeof par2 == 'string') return parseFloat(par1) + parseFloat(par2); 
    else if (typeof par1 == 'number' && typeof par2 == 'number') return '' + par1 + par2; 
    else return null; 
} 

console.log(stupidAddition(1, 2)); // ➞ "12"
console.log(stupidAddition("1", "2")); // ➞ 3
console.log(stupidAddition("1", 2)); // ➞ null
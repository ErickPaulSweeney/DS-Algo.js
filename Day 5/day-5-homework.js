// Exercise 1

function largestSwap(num) {
    return num >= parseFloat(num.toString().split('').reverse().join(''));
}

console.log(largestSwap(27)); // ➞ false
console.log(largestSwap(43)); // ➞ true
console.log(largestSwap(14)); // ➞ false
console.log(largestSwap(53)); // ➞ true
console.log(largestSwap(99)); // ➞ true

// Exercise 2

function mean(num) {
    let output = 0;
    for (let digit of String(num)) {
        output += parseFloat(digit);
    }
    return output / num.toString().length;
}

console.log(mean(42)); // ➞ 3
console.log(mean(12345)); // ➞ 3
console.log(mean(666)); // ➞ 6

// Exercise 3 

function canAlternate(str) {
    let zeroes = 0, ones = 0;
    for (let number of str) {
        number == 0 ? zeroes++ : ones++;
    }
    return (zeroes == ones) || ((zeroes + 1) == ones) || (zeroes == (ones + 1));
}

console.log(canAlternate("0001111")); // ➞ true Can make: "1010101"
console.log(canAlternate("01001")); // ➞ true Can make: "01010"
console.log(canAlternate("010001")); // ➞ false
console.log(canAlternate("1111")); // ➞ false

// Exercise 4

function leftDigit(str) {
    for (let digit of str) {
        if (!isNaN(parseFloat(digit))) return parseFloat(digit);
    }
}

console.log(leftDigit("TrAdE2W1n95!")); // ➞ 2
console.log(leftDigit("V3r1ta$")); // ➞ 3
console.log(leftDigit("U//DertHe1nflu3nC3")); // ➞ 1
console.log(leftDigit("J@v@5cR1PT")); // ➞ 5
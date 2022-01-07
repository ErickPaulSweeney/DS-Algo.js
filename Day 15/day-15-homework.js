// Prime factorization

function primeFactorize(num) {
    let output = [];
    let curr = 2;
    for (; num >= 2;) {
        if (num % curr == 0) {
            output.push(curr);
            num = num / curr;
        }
        else curr++;
    }
    return output;
}

console.log(primeFactorize(25)); // ➞ [5, 5]
console.log(primeFactorize(19)); // ➞ [19]
console.log(primeFactorize(77)); // ➞ [7, 11]

// Dance for Cash

const MOVES = ["Shimmy", "Shake", "Pirouette", "Slide", "Box Step", "Headspin", "Dosado", "Pop", "Lock", "Arabesque"];

function danceConvert(pin) {
    let output = [];
    let regex = /[0-9]/g
    let match = pin.match(regex).join(''); 
    if (pin.length !== 4 || (match !== pin)) return "Invalid input.";
    else {
        for (let i = 0; i < pin.length; i++) {
            if (Number(pin[i]) + i > 9) output.push(MOVES[(Number(pin[i]) + i) % 10]);
            else output.push(MOVES[Number(pin[i]) + i]);
        }
    }
    return output;
}

console.log(danceConvert("0000")); // should return ["Shimmy", "Shake", "Pirouette", "Slide"]
console.log(danceConvert("3856")); // should return [ "Slide", "Arabesque", "Pop", "Arabesque" ]
console.log(danceConvert("9999")); // should return [ "Arabesque", "Shimmy", "Shake", "Pirouette" ]
console.log(danceConvert("32a1")); // should return "Invalid input."
console.log(danceConvert("+493")); // should return "Invalid input."
console.log(danceConvert("-324")); // should return "Invalid input."

// Brilliant numbers

function isBrilliant(num) {

    function primeFactorize(num) {
        let output = [];
        let curr = 2;
        for (; num >= 2;) {
            if (num % curr == 0) {
                output.push(curr);
                num = num / curr;
            }
            else curr++;
        }
        return output;
    }

    function digits(num) {
        let count = 0; 
        for (; num != 0; ++count) {
            num = parseInt(num / 10);
        }
        return count;
    }

    let factorized = primeFactorize(num); 
    if (factorized.length != 2) return false; 
    return digits(factorized[0]) == digits(factorized[1]); 
}

console.log(isBrilliant(11)); // ➞ false
// 11 is a prime.
console.log(isBrilliant(9)); // ➞ true
// 9 is equal to the square of a prime: 3²
console.log(isBrilliant(21)); // ➞ true
// 21 is equal to the product of two different primes: 3 x 7
// 3 and 7 have the same digital length.
console.log(isBrilliant(22)); // ➞ false
// 22 is equal to the product of two different primes: 2 x 11
// 2 and 11 have different digital lengths.
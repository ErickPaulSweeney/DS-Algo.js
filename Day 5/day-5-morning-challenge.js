// Exercise 1

function dashed(string) {
    let output = '';
    for (let letter of string) {
        if ((letter.toLowerCase() == 'a') || (letter.toLowerCase() == 'e') || (letter.toLowerCase() == 'i') || (letter.toLowerCase() == 'o') || (letter.toLowerCase() == 'u')) {
            output += '-' + letter + '-';
        }
        else output += letter;
    }
    return output;
}

console.log(dashed("Edabit")); // should return "-E-d-a-b-i-t"
console.log(dashed("Carpe Diem")); // should return "C-a-rp-e- D-i--e-m"
console.log(dashed("Fight for your right to party!")); // should return "F-i-ght f-o-r y-o--u-r r-i-ght t-o- p-a-rty!"

// Exercise 2

function expensiveOrders(object, cost) {
    let output = {};
    for (let item in object) {
        if (object[item] > cost) output[item] = object[item]; 
    }
    return output;
}

console.log(expensiveOrders({ "a": 3000, "b": 200, "c": 1050 }, 1000)); // should return { "a": 3000, "c": 1050 }
console.log(expensiveOrders({ "Gucci Fur": 24600, "Teak Dining Table": 3200, "Louis Vutton Bag": 5550, "Dolce Gabana Heels": 4000 }, 20000)); // should return { "Gucci Fur": 24600 }
console.log(expensiveOrders({ "Deluxe Burger": 35, "Icecream Shake": 4, "Fries": 5 }, 40)); // should return {}

// Exercise 3

function canAlternate(str) {
    let zeroes = 0, ones = 0;
    for (let number of str) {
        number == 0 ? zeroes++ : ones++;
    }
    return (zeroes == ones) || (zeroes++ == ones) || (zeroes == ones++);
}

console.log(canAlternate("0001111")); // ➞ true Can make: "1010101"
console.log(canAlternate("01001")); // ➞ true Can make: "01010"
console.log(canAlternate("010001")); // ➞ false
console.log(canAlternate("1111")); // ➞ false
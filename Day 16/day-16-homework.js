// Sweetest ice cream

class IceCream {
    constructor(flavor, sprinkles) {
        if (flavor == 'Plain') this.sweetness = sprinkles;
        else if (flavor == 'Vanilla' || flavor == 'ChocolateChip') this.sweetness = 5 + sprinkles;
        else if (flavor == 'Strawberry' || flavor == 'Chocolate') this.sweetness = 10 + sprinkles; 
    }
}

function sweetestIcecream(iceCreams) {
    let arr = []; 
    for (let values of iceCreams) {
        arr.push(values.sweetness);
    }
    return Math.max(...arr);
}

ice1 = new IceCream("Chocolate", 13)         // value of 23
ice2 = new IceCream("Vanilla", 0)           // value of 5
ice3 = new IceCream("Strawberry", 7)        // value of 17
ice4 = new IceCream("Plain", 18)             // value of 18
ice5 = new IceCream("ChocolateChip", 3)      // value of 8

console.log(sweetestIcecream([ice1, ice2, ice3, ice4, ice5])); // // should return 23
console.log(sweetestIcecream([ice3, ice1])); // // should return 23
console.log(sweetestIcecream([ice3, ice5])); // // should return 17

// Double swap

function doubleSwap(str, char1, char2) {
    let temp = str.split('').map((el) => {
        if (el == char1) el = char2;
        else if (el == char2) el = char1;
        return el;
    }).join('');
    return temp;
}

console.log(doubleSwap( "aabbccc", "a", "b")); // ➞ "bbaaccc"
console.log(doubleSwap("random w#rds writt&n h&r&", "#", "&")); // ➞ "random w&rds writt#n h#r#"
console.log(doubleSwap("128 895 556 788 999", "8", "9")); // ➞ "129 985 556 799 888"

// Bigrams

function canFind(arr1, arr2) {
    return arr1.every((el) => arr2.some((val) => val.includes(el))); 
}

console.log(canFind(["at", "be", "th", "au"], ["beautiful", "the", "hat"])); // ➞ true
console.log(canFind(["ay", "be", "ta", "cu"], ["maybe", "beta", "abet", "course"])); // ➞ false
// # "cu" does not exist in any of the words.
console.log(canFind(["th", "fo", "ma", "or"], ["the", "many", "for", "forest"])); // ➞ true
console.log(canFind(["oo", "mi", "ki", "la"], ["milk", "chocolate", "cooks"])); // ➞ false

// Do you like chicken curry

function product(num1, num2) {
    return (num3, num4) => {
        return (num5, num6) => {
            return (num1 * num3 * num5) + (num2 * num4 * num6);
        }
    }
}

console.log(product(1,2)(1,1)(2,3)); // ➞ 8
// 1 * 1 * 2 + 2 * 1 * 3
console.log(product(10,2)(5,0)(2,3)); // ➞ 100
// 10 * 5 * 2 + 2 * 0 * 3
console.log(product(1,2)(2,3)(3,4)); // ➞ 30
// 1 * 2 * 3 + 2 * 3 * 4
console.log(product(1,2)(0,3)(3,0)); // ➞ 0
// 1 * 0 * 3 + 2 * 3 * 0
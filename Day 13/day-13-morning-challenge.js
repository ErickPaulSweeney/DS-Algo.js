// Exercise 1

function mapLetters(word) {
    let output = {};
    for (let index in word) {
        if (output.hasOwnProperty(word[index])) {
            output[word[index]].push(index);
        }
        else output[word[index]] = [index];
    }
    return output;
}

// Time complexity: O(n)

// Using reduce method

function mapLetters(str) {
    let reducer = (accumulator, currentElement, currentIndex) => {
        if (accumulator.hasOwnProperty(currentElement)) {
            accumulator[currentElement].push(parseFloat(currentIndex));
        }
        else accumulator[currentElement] = [parseFloat(currentIndex)];
        return accumulator;
    }
    return str.split('').reduce(reducer, {});
}

console.log(mapLetters("dodo")); // should return { d: [0, 2], o: [1, 3] 
console.log(mapLetters("matter")); // { a: [1], e: [4], m: [0], r: [5], t: [2, 3] } 

// Exercise 2

function sortContacts(contacts, order) {
    let output = contacts.map((el) => el.split(' '));
    if (order == 'ASC') {
        output.sort((a, b) => {
            if (a[1] < b[1]) return -1;
            else if (a[1] > b[1]) return 1;
            else if (a[0] < b[0]) return -1;
            else if (a[0] > b[0]) return 1;
            else return 0;
        });
    }
    else {
        output.sort((a, b) => {
            if (a[1] < b[1]) return 1;
            else if (a[1] > b[1]) return -1;
            else if (a[0] < b[0]) return 1;
            else if (a[0] > b[0]) return -1;
            else return 0;
        });
    }
    return output.map((el) => el.join(' '));
}

// Time complexity: O(n^2)

console.log(sortContacts([
    "John Locke",
    "Thomas Aquinas",
    "David Hume",
    "Rene Descartes"
], "ASC"));
// should return [
//   "Thomas Aquinas",
//   "Rene Descartes",
//   "David Hume",
//   "John Locke"
// ]
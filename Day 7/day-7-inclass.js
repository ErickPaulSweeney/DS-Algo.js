// Exercise 1

/*
Write numbersAbove80 function which takes in a list of numbers and return all the numbers above 80 present in the list. You should call `isAbove80` function inside numbersAbove80 function.
*/

function isAbove80(number) {
    return number > 80;
}

function numbersAbove80(numbers) {
    let output = [];
    for (let element in numbers) {
        if(isAbove80(element)) output.push(element);
    }
    return output;
}

// Exercise 2

function isAbove80(number) {
    return number > 80;
}

function isEvenNumber(number) {
    return number % 2 === 0;
}

function isSingleDigit(number) {
    return number >= 0 && number < 10;
}

function numbersAbove80(numbers) {
    let filterFunction = isAbove80;
    let filteredList = [];
    for (let i = 0; i < numbers.length; i++) {
        let number = numbers[i];
        if (filterFunction(number)) {
            filteredList.push(number);
        }
    }
    return filteredList;
}

function numbersWhichAreEven(numbers) {
    let filterFunction = isEvenNumber;
    let filteredList = [];
    for (let i = 0; i < numbers.length; i++) {
        let number = numbers[i];
        if (filterFunction(number)) {
            filteredList.push(number);
        }
    }
    return filteredList;
}

function numbersWhichAreSingleDigit(numbers) {
    let filterFunction = isSingleDigit;
    let filteredList = [];
    for (let i = 0; i < numbers.length; i++) {
        let number = numbers[i];
        if (filterFunction(number)) {
            filteredList.push(number);
        }
    }
    return filteredList;
}

// Guesswork

function filterList(operation, array) {
    let output = [];
    for (let element of array) {
        if (operation(element)) output.push(element); 
    }
    return output;
}

// Exercise 3 

function filterList(numbers, filterFunction) {
    let filteredList = [];
    for (let i = 0; i < numbers.length; i++) {
        let number = numbers[i];
        if (filterFunction(number)) {
            filteredList.push(number);
        }
    }
    return filteredList;
}
let numbers = [4, 12, 54, 95, 1, 33, 100, 88, 3];

//call the function
filterList(numbers, isAbove80);
filterList(numbers, isEvenNumber);
filterList(numbers, isSingleDigit);

// Line 14: 
filterList(numbers, isAbove80);
    isAbove80(4)
        return false
    isAbove80(12) 
        return false
    isAbove80(54)
        return false
return []

// Line 15: 
filterList(numbers, isEvenNumber);
    isEvenNumber(4)
        return true
    isEvenNumber(12)
        return true
    isEvenNumber(54)
        return true
return [4, 12, 54]

// Line 16: 
filterList(numbers, isSingleDigit);
    isSingleDigit(4)
        return true
    isSingleDigit(12)
        return false
    isSingleDigit(54)
        return false
return [4]

// Function trace

welcomeFriends(['John', 'Rose', 'Hammond'], welcome)
    welcome('John')
        return 'John Take care'
    welcome('Rose')
        return 'Good to see you'
    goodbye('Hammond')
        takecare('Rose')
            return 'welcome Take care'
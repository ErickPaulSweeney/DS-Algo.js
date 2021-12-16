// Word Count

let statement = `Hurricane Gonzalo was the second tropical cyclone, after Hurricane Fay, to directly strike the island of Bermuda in a one-week time frame in October 2014 , and was the first Category 4 Atlantic hurricane since Hurricane Ophelia in 2011 . At the time, it was the strongest hurricane in the Atlantic since Igor in 2010.[1] Gonzalo struck Bermuda less than a week after the surprisingly fierce Hurricane Fay; 2014 was the first season in recorded history to feature two hurricane landfalls in Bermuda. A powerful Atlantic tropical cyclone that wrought destruction in the Leeward Islands and Bermuda, Gonzalo was the seventh named storm, sixth and final hurricane and only the second major hurricane of the below-average 2014 Atlantic hurricane season.`
// Write a function which takes a statement and returns an object containing `word` as key and their `frequency` as value

function wordCount(string) {
    string = string.split(' ');
    let output = {};
    for (let word of string) {
        if (output[word.toLowerCase()] === undefined) {
            output[word.toLowerCase()] = 1;
        }
        else output[word.toLowerCase()]++;
    }
    return output; 
}

console.log(wordCount(statement)); 

// Currency Converter

let currencyRates = {
    "success": true,
    "timestamp": 1519296206,
    "base": "EUR",
    "date": "2020-10-07",
    "rates": {
        "AUD": 1.566015,
        "CAD": 1.560132,
        "CHF": 1.154727,
        "CNY": 7.827874,
        "GBP": 0.882047,
        "JPY": 132.360679,
        "USD": 1.23396,
    }
}
// Function takes in the targetCurrency and amount to be converted. Implement the function so that it returns the amount in base currency 'EUR'
// e.g. getCurrencyPrice('AUD', 200) should return '127.71 EUR'
function getCurrencyPrice(targetCurrency, amount) {
    return amount / currencyRates.rates[targetCurrency] + " EUR";
}

// Function Syntax

// Normal function declaration
function calcAverage1(numbers) {
    let output = 0;
    for (let value of numbers) {
        output += value;
    }
    return output / parseInt(numbers.length); 
}

// Function as expression
let calcAverage2 = function(numbers) {
    let output = 0;
    for (let value of numbers) {
        output += value;
    }
    return output / parseInt(numbers.length); 
}

// Arrow function syntax
let calcAverage3 = (numbers) => {
    let output = 0;
    for (let value of numbers) {
        output += value;
    }
    return output / parseInt(numbers.length); 
}

console.log(calcAverage1([23, 1, 15, 9])); 
console.log(calcAverage2([23, 1, 15, 9])); 
console.log(calcAverage3([23, 1, 15, 9])); 

// Function call loop

let sayHello = function(name) {
    console.log('Hello ' + name);
};

let sayGoodbye = function(name) {
    console.log('Goodbye ' + name);
};

let saySomething = sayGoodbye;

let sayings = [sayHello, sayGoodbye, saySomething];

for (let index in sayings) {
    console.log(saying[index]('John'));
}

// Function call with 5

function isAbove80(number) {
    return number > 80;
}

function isEvenNumber(number) {
    return number % 2 === 0;
}

function isSingleDigit(number) {
    return number>=0 && number < 10;
}

let functionArr = [isAbove80, isEvenNumber, isSingleDigit];

let counter = 0; 
for (let value of functionArr) {
    if (value(5)) counter++;
}
console.log(counter);
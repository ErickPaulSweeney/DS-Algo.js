let animals = ['dog', 'cat', 'mouse', 'cow', 'monkey', 'cat'];
console.log(animals.indexOf('cat')); // 1
console.log(animals.indexOf('cat', (animals.indexOf('cat') + 1))); // 5

//

let words = ['respect', 'motion', 'coat', 'confused', 'atten', 'graceful', 'unusual', 'subsequent','guide', 'cost', 'medical'];

function randomWord(array) {
    return array[Math.floor(Math.random() * (array.length))];
}

randomWord();

//

function random_bg_color() {
    let x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    
    var bgColor = "rgb(" + x + "," + y + "," + z + ")";
    
    console.log(bgColor);
    /* for testing it you can paste the below code in browser console and it will change the background color for the current page.
    document.body.style.background = bgColor;
    */
}

random_bg_color();

//

function highLow(string) {
    string = string.split(' ');
    let low = Number(Math.min(...string)); 
    let high = Number(Math.max(...string));
    return high + ' ' + low;
}

console.log(highLow("1 2 3 4 5")); // should return "5 1"
console.log(highLow("1 2 -3 4 5")); // should return "5 -3"
console.log(highLow("1 9 3 4 -5")); // should return "9 -5"
console.log(highLow("13")); // should return "13 13"

//

let user = {
    name:'Raj',
    age: 24,
    profession:'Developer'
};

// write a console statement to print My name is Raj, I am 24 years old and I work as Developer using just string concatenation. 

console.log(`My name is ` + user.name +  `, I am ` + user.age + ` years old and I work as ` + user.profession); 
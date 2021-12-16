// Exercise 1
function chessBoard(code) {
    if ((code[0].toLowerCase() == 'a') || (code[0].toLowerCase() == 'c') || (code[0].toLowerCase() == 'e') || (code[0].toLowerCase() == 'g')) {
        if (code[1] % 2 == 0) {
            return "white";
        }
        else return "black";
    }
    else if ((code[0].toLowerCase() == 'b') || (code[0].toLowerCase() == 'd') || (code[0].toLowerCase() == 'f') || (code[0].toLowerCase() == 'h')) {
        if (code[1] % 2 == 0) {
            return "black";
        }
        else return "white";
    }
}

console.log(chessBoard("a1")); // ➞ "black"
console.log(chessBoard("e5")); // ➞ "black"
console.log(chessBoard("d1")); // ➞ "white"

// Exercise 2
function rev(num) {
    num = Math.abs(num);
    let output = 0; 
    let lastDigit = num % 10; 
    while (num > 0) {
        lastDigit = parseInt(num % 10);
        output = parseInt((output * 10) + lastDigit);
        num = parseInt(num / 10);
    }
    return output;
}

console.log(rev(5121)); // ➞ "1215"
console.log(rev(69)); // ➞ "96"
console.log(rev(-122157)); // ➞ "751221"
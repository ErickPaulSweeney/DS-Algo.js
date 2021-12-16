// Exercise 1
function sockMerchant(sockNumbers) {
    let counter = 0;
    sockNumbers.sort((a, b) => b - a); 
    for (let i = 0; i < sockNumbers.length; i++) {
        if (sockNumbers[i] === sockNumbers[i + 1]) {
            counter++;
            sockNumbers.shift(i, 2);
        }
    }
    return counter;
}

console.log(sockMerchant([10, 20, 20, 10, 10, 30, 50, 10, 20])); // should return 3
console.log(sockMerchant([50, 20, 30, 90, 30, 20, 50, 20, 90])); // should return 4
console.log(sockMerchant([])); // should return 0

// Exercise 2
function changeEnough(change, amountDue) {
    return ((change[0] * 0.25) + (change[1] * 0.1) + (change[2] * 0.05) + (change[3] * 0.01)) >= amountDue;
}

console.log(changeEnough([2, 100, 0, 0], 14.11)); // should return false
console.log(changeEnough([0, 0, 20, 5], 0.75)); // should return true 
console.log(changeEnough([30, 40, 20, 5], 12.55)); // should return true

// Exercise 3
function findNemo(sentence) {
    sentence = sentence.split(` `);
    return sentence.indexOf("Nemo") !== -1 ? `I found Nemo at ${sentence.indexOf("Nemo") + 1}!` : `I can't find Nemo :(`;
}

console.log(findNemo("I am finding Nemo !")); // should return "I found Nemo at 4!"
console.log(findNemo("Nemo is me")); // should return "I found Nemo at 1!"
console.log(findNemo("I Nemo am")); // should return "I found Nemo at 2!"
console.log(findNemo("Memo is here")); // should return "I can't find Nemo :("
console.log(findNemo("")); // should return "I can't find Nemo :("

// Exercise 4
function arrayOperation(x, y, n) {
    let output = [];
    for (; x <= y; x++) {
        if (x % n === 0) output.push(x);
    }
    return output;
}

console.log(arrayOperation(1, 10, 3)); // should return [3, 6, 9]
console.log(arrayOperation(7, 9, 2)); // should return [8]
console.log(arrayOperation(15, 20, 7)); // should return []

// Exercise 5
// Part 1
function hasXWon(board) {
  // vertical 
  if (board[0][0] == 'X' && board[1][0] == 'X' && board[2][0] == 'X') return true;
  else if (board[0][1] == 'X' && board[1][1] == 'X' && board[2][1] == 'X') return true;
  else if (board[0][2] == 'X' && board[1][2] == 'X' && board[2][2] == 'X') return true;
  // horizontal
  else if (board[0][0] == 'X' && board[0][1] == 'X' && board[0][2] == 'X') return true;
  else if (board[1][0] == 'X' && board[1][1] == 'X' && board[1][2] == 'X') return true;
  else if (board[2][0] == 'X' && board[2][1] == 'X' && board[2][2] == 'X') return true;
  // diagonal
  else if (board[0][0] == 'X' && board[1][1] == 'X' && board[2][2] == 'X') return true;
  else if (board[0][2] == 'X' && board[1][1] == 'X' && board[2][0] == 'X') return true;
  else return false
}

// Part 2
function ticTacToeGameStatus(board) {
  // vertical X 
  if (board[0][0] == 'X' && board[1][0] == 'X' && board[2][0] == 'X') return 'Player X has won';
  else if (board[0][1] == 'X' && board[1][1] == 'X' && board[2][1] == 'X') return 'Player X has won';
  else if (board[0][2] == 'X' && board[1][2] == 'X' && board[2][2] == 'X') return 'Player X has won';
  // horizontal X
  else if (board[0][0] == 'X' && board[0][1] == 'X' && board[0][2] == 'X') return 'Player X has won';
  else if (board[1][0] == 'X' && board[1][1] == 'X' && board[1][2] == 'X') return 'Player X has won';
  else if (board[2][0] == 'X' && board[2][1] == 'X' && board[2][2] == 'X') return 'Player X has won';
  // diagonal X
  else if (board[0][0] == 'X' && board[1][1] == 'X' && board[2][2] == 'X') return 'Player X has won';
  else if (board[0][2] == 'X' && board[1][1] == 'X' && board[2][0] == 'X') return 'Player X has won';
    
  // vertical O 
  if (board[0][0] == 'O' && board[1][0] == 'O' && board[2][0] == 'O') return 'Player O has won';
  else if (board[0][1] == 'O' && board[1][1] == 'O' && board[2][1] == 'O') return 'Player O has won';
  else if (board[0][2] == 'O' && board[1][2] == 'O' && board[2][2] == 'O') return 'Player O has won';
  // horizontal O
  else if (board[0][0] == 'O' && board[0][1] == 'O' && board[0][2] == 'O') return 'Player O has won';
  else if (board[1][0] == 'O' && board[1][1] == 'O' && board[1][2] == 'O') return 'Player O has won';
  else if (board[2][0] == 'O' && board[2][1] == 'O' && board[2][2] == 'O') return 'Player O has won';
  // diagonal O
  else if (board[0][0] == 'O' && board[1][1] == 'O' && board[2][2] == 'O') return 'Player O has won';
  else if (board[0][2] == 'O' && board[1][1] == 'O' && board[2][0] == 'O') return 'Player O has won';
  
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] == undefined) return 'Game in progress'
    }
  }
  return 'Game is drawn'  
}

// Expression trace
let a = (80 * 2) % 13 + 30 / (5 * 3);
let b = (3 + a % 4) / (a - 1);
console.log(a, b);

a, b
(80 * 2) % 13 + 30 / (5 * 3), b
160 % 13 + 30 / (5 * 3), b
160 % 13 + 30 / 15, b
4 + 30 / 15, b
4 + 2, b
6, b
6, (3 + a % 4) / (a - 1)
6, (3 + 6 % 4) / (6 - 1)
6, (3 + 2) / (6 - 1)
6, 5 / (6 - 1)
6, 5 / 5
6, 1
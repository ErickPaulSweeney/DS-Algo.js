function diceGame(moves) {
    let players = ['p1', 'p2', 'p3', 'p4'];

    function round(rolls, players) {
        let minIndex = []; 
        let sum = []; 
        for (let i = 0; i < players.length; i++) {
            sum.push(rolls[i][0] + rolls[i][1]);
        }
        min = Math.min(...sum);
        for (let i = 0; i < players.length; i++) {
            if ((rolls[i][0] + rolls[i][1]) == min) {
                minIndex.push(i); 
            }
        } 
        if (minIndex.length > 1) {
            if (rolls[minIndex[0]][0] > rolls[minIndex[1]][0]) {
                players.splice(minIndex[1], 1); 
                return players; 
            }
            else if (rolls[minIndex[0]][0] < rolls[minIndex[1][0]]) {
                players.splice(minIndex[0], 1);
                return players;
            }
            else {
                return players;
            } 
        }
        else {
            players.splice(minIndex, 1);
            return players;
        }
    }

    while (players.length > 1) {
        let rolls = moves.splice(0, players.length); 
        round(rolls, players); 
    }
    return players[0]; 
}

console.log(diceGame([[6, 2], [4, 3], [3, 4], [5, 4], [3, 5], [1, 5], [4, 3], [1, 5], [1, 5], [5, 6], [2, 2]])); // ➞ "p1"

//              p1      p2      p3      p4
// Round 1 -> [6, 2], [4, 3], [3, 4], [5, 4]  Player 3 removed.
// Round 2 -> [3, 5], [1, 5],         [4, 3]  Player 2 removed.
// Round 3 -> [1, 5],                 [1, 5]  No lowest score, players roll again.
// Round 4 -> [5, 6],                 [2, 2]  Player 1 wins!


console.log(diceGame([[6, 2], [4, 3], [3, 4], [5, 4], [1, 5], [1, 5], [4, 3],[3, 6], [1, 2], [3, 6], [1, 5], [1, 5], [1, 6], [4, 5]])); // ➞ "p4"

//              p1      p2      p3      p4
// Round 1 -> [6, 2], [4, 3], [3, 4], [5, 4]  Player 3 removed.
// Round 2 -> [1, 5], [1, 5],         [4, 3]  Lowest score tie, players roll again.
// Round 2 -> [3, 6], [1, 2],         [3, 6]  Player 2 removed.
// Round 3 -> [1, 5],                 [1, 5]  No lowest score, players roll again.
// Round 4 -> [1, 6],                 [4, 5]  Player 4 wins!

console.log(diceGame([[6, 2], [4, 3], [3, 4], [5, 4], [1, 5], [1, 5], [4, 3], [3, 6], [1, 2], [3, 6], [1, 5], [1, 5], [4, 5], [4, 5], [4, 4], [4, 5]])); // "p4"; 
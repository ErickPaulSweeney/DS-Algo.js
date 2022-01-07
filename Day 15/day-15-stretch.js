function totalPoints(guesses, word) {
    let output = 0;
    let guessedWords = []; 
    let letters = {}; 
    for (let i = 0; i < word.length; i++) {
        if (!letters.hasOwnProperty(word[i])) letters[word[i]] = 1;
        else letters[word[i]]++; 
    } 
    for (let i =0; i < guesses.length; i++) {
        if (!guessedWords.includes(guesses[i])) {
            if (guesses[i].length > 2) {
                let flag = true; 
                let tempLet = {}; 
                for (let j = 0; j < guesses[i].length; j++) {
                    if (!tempLet.hasOwnProperty(guesses[i][j])) tempLet[guesses[i][j]] = 1;
                    else tempLet[guesses[i][j]]++;
                }
                for (let key in tempLet) {
                    if (letters[key] == undefined) flag = false;
                    if (tempLet[key] > letters[key]) flag = false;
                }
                if (!flag) continue;
                else if (guesses[i].length == 3) output++;
                else if (guesses[i].length == 4) output += 2;
                else if (guesses[i].length == 5) output += 3;
                else if (guesses[i] == word) output += 4; 
                else output += 54;
                if (flag) guessedWords.push(guesses[i]); 
            }
        }
    }
    return output; 
}

// console.log(totalPoints(["cat", "create", "sat"], "caster")); // 2
// // Since "create" is an invalid word.
// console.log(totalPoints(["trance", "recant"], "recant")); // 58
// // "trance" scores 54 pts, while "recant" scores only 4 because it is the same word as the input.
// console.log(totalPoints(["dote", "dotes", "toes", "set", "dot", "dots", "sted"], "tossed")); // 13
// // Since 2 + 3 + 2 + 1 + 1 + 2 + 2 = 13    

console.log(totalPoints(['abc','abc'],'abcdef')); // output should be 1
console.log(totalPoints(['Abc','abC'],'abcdef')); // output should be 0
console.log(totalPoints(['abc','DEF'],'aBCdef')); // output should be 0
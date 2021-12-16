function guessTheNumberGame() {
    let randomNumber = Math.floor(Math.random() * 101)
    let attempt = 5; 
    check(parseInt(prompt('Enter your guess: ')), 10); 
    function check(guess) {
        if (isNaN(guess)) {
            alert('Guess is not a number');
            check(parseInt(prompt('Enter your guess: ')), 10);
        }
        if (guess == randomNumber) return alert('You won the game');
        else if (guess > randomNumber) {
            alert('Guess is larger')
            attempt--;
            if (attempt > 0) check(parseInt(prompt('Enter your guess: ')), 10); 
            else alert(`Game over. The correct answer is ${randomNumber}`);
        }
        else if (guess < randomNumber) {
            alert('Guess is smaller');
            attempt--;
            if (attempt > 0) check(parseInt(prompt('Enter your guess: ')), 10);
            else alert(`Game over. The correct answer is ${randomNumber}`);
    }
    } 
}
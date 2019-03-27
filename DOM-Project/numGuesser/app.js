/*
GAME FUNCTIONS:
-------------
- Player must guess a number between a min and max.
- Player gets a certain amount of guesses
- Notify Player of guesses Remaining
- Notify the player of the correct answer if loose
- Let player choose to play again
*/

// Game values
let min = 1,
    max = 5,
    winningNum = getRandWinNum(min, max),
    guessesLeft = 3;

// UI Elements
const game = document.querySelector('#game'),
      minNum = document.querySelector('.min-num'),
      maxNum = document.querySelector('.max-num'),
      guessBtn = document.querySelector('#guess-btn'),
      guessInput = document.querySelector('#guess-input'),
      message = document.querySelector('.message');

// Assign UI min and max
minNum.textContent = min;
maxNum.textContent = max;

// Play again event listener
game.addEventListener('mousedown', function(e){
    if(e.target.className === 'play-again'){
        window.location.reload();
    }
});

// Listen for guess
guessBtn.addEventListener('click', function(){
    let guess = parseInt(guessInput.value);

    // Validate
    if(isNaN(guess) || guess < min || guess > max){
        setMessage(`Please enter a number between ${min} and ${max}`, 'red');
    }else{
        // Check if won
        if(guess === winningNum){

            gameOver(true, `${winningNum} is Correct, YOU WIN`);

        }else{

            // Wrong Number
            guessesLeft -= 1;

            if(guessesLeft === 0){

                // Game Over - Lost
                gameOver(false, `Game over, you lost!. The correct number was ${winningNum}`);


            }else{

                // Game continues - answer wrong

                //Change border color
                guessInput.style.borderColor = 'red';
                // Clear input
                guessInput.value = '';

                let guessOrguesses = '';

                guessesLeft === 1 ? guessOrguesses = 'guess' : guessOrguesses = 'guesses' ;

                // Tell User its the wrong number
                setMessage(`${guess} is not correct, ${guessesLeft} ${guessOrguesses} Left `, 'red');

            }
        }
    }
});

// Game Over
function gameOver(won, msg){

    let color;

    won === true ? color = 'green' : color = 'red' ;

    // Disable Input
    guessInput.disabled = true;
    // Change border color
    guessInput.style.borderColor = color;
    // Change text color
    message.style.color = color;
    // Set Message
    setMessage(msg, color);

    // Play again?
    guessBtn.value = 'Play Again';
    guessBtn.className += 'play-again';
}

// Get Random winning number
function getRandWinNum(min, max){
    return Math.floor(Math.random() * ( max - min + 1 ));
}

// Set message
function setMessage(msg, color){
    message.style.color = color;
    message.textContent = msg;
}
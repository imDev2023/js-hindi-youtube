const randomNumber = console.log(parseInt(Math.random()*100+1));

const submit = document.querySelector('#subt');
const userInput = document.querySelector("#guessField");
const guessSlot = document.querySelector(".guesses");
const remaining = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");
const startOver = document.querySelector(".resultParas");

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if(playGame){
    submit.addEventListener('click', (e)=>{
        e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
    })
}

const validateGuess = (guess) => {
    if(isNaN(guess)){
        alert("Please enter a valid Number")
    } else if ( guess <1 || guess > 100){
        alert("Please enter a number between 1 and 100")
    } else {
        prevGuess.push(guess)
        if(numGuess === 11){
            displayGuess(guess)
            displayMessage(`Game Over. Random number was ${randomNumber}`)
            endGame()
        } else {
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

const checkGuess = (guess) =>{
    if(guess === randomNumber){
        displayMessage(`Congratulations, You Won`)
        endGame()
    } else if (guess < randomNumber){
        displayMessage(`Enter a higher value`)
    } else if (guess > randomNumber){
        displayMessage(`Enter a lower value`)
    }
}

const displayGuess = (guess) =>{

}

const displayMessage = (message) =>{
    //
}

const endGame = () =>{

}
const newGame = ()=>{

}

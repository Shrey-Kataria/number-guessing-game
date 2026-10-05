const number_to_Guess = Math.floor(Math.random() * 100) + 1;


let start = document.getElementById("start");

let gameBox = document.getElementById("gameBox");

let guess = document.getElementById("guess");

let message = document.getElementById("message");

let form = document.getElementById("gameForm");

let button = document.getElementById("submit");


function startGame() {

    gameBox.style.display = "block";

}


function numberGuess(event) {

    event.preventDefault();

    let x = Number(guess.value);


    if (x > number_to_Guess) {

        message.innerText = "Number is lower than " + x;

    }

    else if (x < number_to_Guess) {

        message.innerText = "Number is higher than " + x;

    }

    else {

        message.innerText = "Correct Guess!";

        message.style.color = "green";

        button.disabled = true;

    }


    guess.value = "";

}


start.addEventListener("click", startGame);

form.addEventListener("submit", numberGuess);
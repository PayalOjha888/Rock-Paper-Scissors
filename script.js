let message = document.querySelector("#msg");
let userScorePara = document.querySelector("#user-score");
let compScorePara = document.querySelector("#comp-score");
let choices = document.querySelectorAll(".choice");

let userScore = 0;
let compScore = 0;

const genCompChoice = () => {
    //Rock, Paper, Scissor
    const options = ["Rock", "Paper", "Scissor"];
    const randIdx = Math.floor(Math.random() * 3); //We can generate any random number using this method which can be used as array index for choices
    return options[randIdx];
}

const drawGame = () => {
    message.innerText = "Game was Draw. Play again."
    message.style.backgroundColor = "black";
}

const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        userScore++;
        userScorePara.innerText=`${userScore}`;
        message.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
        message.style.backgroundColor = "green";
    }
    else {
        compScore++;
        compScorePara.innerText=`${compScore}`;
        message.innerText = `You lost! ${compChoice} beats your ${userChoice}`;
        message.style.backgroundColor = "red";
    }
}

const playGame = (userChoice) => {
    //generate computer's choice
    const compChoice = genCompChoice();

    if (userChoice === compChoice) {
        drawGame();
    } else {
        let userWin = true;
        if (userChoice === "Rock") {
            userWin = compChoice === "Paper" ? false : true;
        } else if (userChoice === "Paper") {
            userWin = compChoice === "Rock" ? true : false;
        } else {
            userWin = compChoice === "Paper" ? true : false;
        }
        showWinner(userWin, userChoice, compChoice);
    }
}

choices.forEach((choice) => {
    console.log(choice);
    choice.addEventListener("click", () => {
        let userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
})

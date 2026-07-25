function play(playerChoice) {

    let choices = ["Rock", "Paper", "Scissors"];

    let randomIndex = Math.floor(Math.random() * 3);

    let computerChoice = choices[randomIndex];

    document.getElementById("player").innerHTML = playerChoice;
    document.getElementById("computer").innerHTML = computerChoice;

    let result = "";

    if (playerChoice === computerChoice) {
        result = "Draw";
    }
    else if (
        (playerChoice === "Rock" && computerChoice === "Scissors") ||
        (playerChoice === "Paper" && computerChoice === "Rock") ||
        (playerChoice === "Scissors" && computerChoice === "Paper")
    ) {
        result = "You Win!";
    }
    else {
        result = "Computer Wins!";
    }

    document.getElementById("result").innerHTML = result;
}
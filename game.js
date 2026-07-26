let playerScore = 0;
let computerScore = 0;
let drawScore = 0;

function getEmoji(choice) {
    if (choice === "Rock") {
        return "✊";
    }
    else if (choice === "Paper") {
        return "✋";
    }
    else {
        return "✌️";
    }
}

function play(playerChoice) {

    let choices = ["Rock", "Paper", "Scissors"];

    let randomIndex = Math.floor(Math.random() * 3);

    let computerChoice = choices[randomIndex];

    document.getElementById("player").innerHTML =
    getEmoji(playerChoice) + " " + playerChoice;

document.getElementById("computer").innerHTML =
    getEmoji(computerChoice) + " " + computerChoice;

    let result = "";

    if (playerChoice === computerChoice) {
    result = "Draw";
    drawScore++;
    document.getElementById("result").style.color = "orange";
}
else if (
    (playerChoice === "Rock" && computerChoice === "Scissors") ||
    (playerChoice === "Paper" && computerChoice === "Rock") ||
    (playerChoice === "Scissors" && computerChoice === "Paper")
) {
    result = "You Win!";
    playerScore++;
    document.getElementById("result").style.color = "green";
}
else {
    result = "Computer Wins!";
    computerScore++;
    document.getElementById("result").style.color = "red";
}

document.getElementById("result").innerHTML = result;

document.getElementById("playerScore").innerHTML = "You: " + playerScore;
document.getElementById("computerScore").innerHTML = "Computer: " + computerScore;
document.getElementById("drawScore").innerHTML = "Draw: " + drawScore;

    document.getElementById("result").innerHTML = result;

    document.getElementById("playerScore").innerHTML =
        "You: " + playerScore;

    document.getElementById("computerScore").innerHTML =
        "Computer: " + computerScore;

    document.getElementById("drawScore").innerHTML =
        "Draw: " + drawScore;
}


function resetGame() {

    playerScore = 0;
    computerScore = 0;
    drawScore = 0;

    document.getElementById("player").innerHTML = "-";
    document.getElementById("computer").innerHTML = "-";
    document.getElementById("result").innerHTML = "-";

    document.getElementById("playerScore").innerHTML = "You: 0";
    document.getElementById("computerScore").innerHTML = "Computer: 0";
    document.getElementById("drawScore").innerHTML = "Draw: 0";
}
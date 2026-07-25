function play(playerChoice) {

    let choices = ["Rock", "Paper", "Scissors"];

    let randomIndex = Math.floor(Math.random() * 3);

    let computerChoice = choices[randomIndex];

    document.getElementById("player").innerHTML = playerChoice;

    document.getElementById("computer").innerHTML = computerChoice;

}
// main.js
document.addEventListener("DOMContentLoaded", function() {
    let btnstone = document.getElementById("stone");
    let btnPaper = document.getElementById("paper");
    let btnscissor = document.getElementById("scissor");

    let imgComputer = document.querySelector(".computerResult");
    let imgHuman = document.querySelector(".YourChoice");

    let score = {
        human: 0,
        computer: 0,
        ties: 0
    };

    let refreshbtn = document.getElementById("refresh");
    refreshbtn.addEventListener("click", (event)=>{
        refreshnow();
    })

    function refreshnow(){
        window.location.reload();
    }

    let scoreElement = document.getElementById("score");

    btnstone.addEventListener("click", function() {
        playRound("stone");
    });

    btnPaper.addEventListener("click", function() {
        playRound("paper");
    });

    btnscissor.addEventListener("click", function() {
        playRound("scissor");
    });

    function playRound(playerSelection) {
        let choices = ["stone", "paper", "scissor"];
        let computerSelection = choices[Math.floor(Math.random() * 3)];

        imgHuman.src = `images/${playerSelection}.png`;
        imgComputer.src = `images/${computerSelection}.png`;

        let result = determineWinner(playerSelection, computerSelection);
        updateScore(result);
        updateScoreDisplay();
    }

    function determineWinner(player, computer) {
        if (player === computer) {
            return "tie";
        } else if (
            (player === "stone" && computer === "scissor") ||
            (player === "paper" && computer === "stone") ||
            (player === "scissor" && computer === "paper")
        ) {
            return "human";
        } else {
            return "computer";
        }
    }

    function updateScore(result) {
        if (result === "human") {
            score.human++;
        } else if (result === "computer") {
            score.computer++;
        } else {
            score.ties++;
        }
    }

    function updateScoreDisplay() {
        scoreElement.textContent = `Human: ${score.human} | Computer: ${score.computer} | Ties: ${score.ties}`;
    }
});

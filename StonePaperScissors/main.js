// main.js
document.addEventListener("DOMContentLoaded", function() {
    //getting element from index.html
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

    //this will get the elemet
    let refreshbtn = document.getElementById("refresh");
    
    refreshbtn.addEventListener("click", (event)=>{
        refreshnow();
    })

    //this will refresh the whole site to 0
    function refreshnow(){
        window.location.reload();

    }

    let scoreElement = document.getElementById("score");

    //this event listeners will send a decision to playRound function to change 
    //human desicion image
    btnstone.addEventListener("click", function() {
        playRound("stone");
    });

    btnPaper.addEventListener("click", function() {
        playRound("paper");
    });

    btnscissor.addEventListener("click", function() {
        playRound("scissor");
    });

    //This function will show the image with the selection of computer random number
    // and human's clicked image button
    function playRound(playerSelection) {
        let choices = ["stone", "paper", "scissor"];
        let computerSelection = choices[Math.floor(Math.random() * 3)];

        imgHuman.src = `images/${playerSelection}.png`;
        imgComputer.src = `images/${computerSelection}.png`;

        let result = determineWinner(playerSelection, computerSelection);
        updateScore(result);
        updateScoreDisplay();
    }

    // this function will judge both choices and make a winner 
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

    // a function that will update the score
    function updateScore(result) {
        if (result === "human") {
            score.human++;
        } else if (result === "computer") {
            score.computer++;
        } else {
            score.ties++;
        }
    }

    // a function that will keep the scores
    function updateScoreDisplay() {
        scoreElement.textContent = `Human: ${score.human}  
        Computer: ${score.computer} 
         Ties: ${score.ties}`;
    }
});

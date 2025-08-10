// document.getElementById("b").addEventListener("click", function () {
//     alert("Paper clicked!");
// });

document.getElementById("a").addEventListener("click", function () {
    evaluate("rock");
    updateScoreDisplay();
});
document.getElementById("b").addEventListener("click", function () {
    evaluate("paper");
    updateScoreDisplay();
});
document.getElementById("c").addEventListener("click", function () {
    evaluate("scissors");
    updateScoreDisplay();
});

document.getElementById("d").addEventListener("click", function () {
    resetScore();
    updateScoreDisplay();
});

let count = { won: 0, lose: 0, tie: 0 };

function resetScore() {
    count = { won: 0, lose: 0, tie: 0 };
    console.log("Scores reset to zero.");
    document.querySelector(".rps-won").innerHTML = "";
    document.querySelector(".rps-move").innerHTML = "Let's Play Game (click on any one button)";
}

function evaluate(playerMove) {
    const computerGenerated = computerValue();
    let result = "";

    if (playerMove === "rock") {
        if (computerGenerated === "rock") {
            count.tie++;
            result = "It's a tie! Both chose rock.";
        } else if (computerGenerated === "paper") {
            count.lose++;
            result = "You lose! Paper covers rock.";
        } else if (computerGenerated === "scissors") {
            count.won++;
            result = "You win! Rock crushes scissors.";
            console.log("Total moves :- Win = " + count.won + ", Lose = " + count.lose + ", Tie = " + count.tie);
        }
    }
    else if (playerMove === "paper") {
        if (computerGenerated === "rock") {
            count.won++;
            result = "You win! Paper covers rock.";
            console.log("Total moves :- Win = " + count.won + ", Lose = " + count.lose + ", Tie = " + count.tie);
        } else if (computerGenerated === "paper") {
            count.tie++;
            result = "It's a tie! Both chose paper.";
        } else if (computerGenerated === "scissors") {
            count.lose++;
            result = "You lose! Scissors cut paper.";
        }
    }
    else if (playerMove === "scissors") {
        if (computerGenerated === "rock") {
            count.lose++;
            result = "You lose! Rock crushes scissors.";
        } else if (computerGenerated === "paper") {
            count.won++;
            result = "You win! Scissors cut paper.";
            console.log("Total moves :- Win = " + count.won + ", Lose = " + count.lose + ", Tie = " + count.tie);
        } else if (computerGenerated === "scissors") {
            count.tie++;
            result = "It's a tie! Both chose scissors.";
        }
    } else {
        result = "Invalid move! Please choose rock, paper, or scissors.";
    }

    // Display the result in the console and on the webpage
    console.log(result);
    document.querySelector(".rps-won").innerHTML = result;
    document.querySelector(".rps-move").innerHTML = `you : computer = ${playerMove} : ${computerGenerated}`;
}

function computerValue() {
    let value = Math.random();
    if (value < 1 / 3) {
        return 'rock';
    }
    else if (value >= 1 / 3 && value < 2 / 3) {
        return 'paper';
    } else {
        return 'scissors';
    }
}

// enhance user experience
function updateScoreDisplay() {
    document.querySelector(".rps-score").innerHTML = `Win = ${count.won}, Lose = ${count.lose}, Tie = ${count.tie}`;
}
document.getElementById("b").addEventListener("click", function () {
    alert("Paper clicked!");
});

document.getElementById("a").addEventListener("click", function () {
    evaluate("rock");
});
document.getElementById("b").addEventListener("click", function () {
    evaluate("paper");
});
document.getElementById("c").addEventListener("click", function () {
    evaluate("scissors");
});


function evaluate(playerMove) {
    let computerGenerated = computerValue();

    if (playerMove === "rock") {
        if (computerGenerated === "rock") {
            console.log("It's a tie! Both chose rock.");
        } else if (computerGenerated === "paper") {
            console.log("You lose! Paper covers rock.");
        } else if (computerGenerated === "scissors") {
            console.log("You win! Rock crushes scissors.");
        }
    } else if (playerMove === "paper") {
        if (computerGenerated === "rock") {
            console.log("You win! Paper covers rock.");
        } else if (computerGenerated === "paper") {
            console.log("It's a tie! Both chose paper.");
        } else if (computerGenerated === "scissors") {
            console.log("You lose! Scissors cut paper.");
        }
    } else if (playerMove === "scissors") {
        if (computerGenerated === "rock") {
            console.log("You lose! Rock crushes scissors.");
        } else if (computerGenerated === "paper") {
            console.log("You win! Scissors cut paper.");
        } else if (computerGenerated === "scissors") {
            console.log("It's a tie! Both chose scissors.");
        }
    }
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
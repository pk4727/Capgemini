// document.getElementById("b").addEventListener("click", function () {
//     alert("Paper clicked!");
// });

document.getElementById("a").addEventListener("click", function () {
    evaluate("rock");
});
document.getElementById("b").addEventListener("click", function () {
    evaluate("paper");
});
document.getElementById("c").addEventListener("click", function () {
    evaluate("scissors");
});

let count = { won: 0, lose: 0, tie: 0 };
function evaluate(playerMove) {
    const computerGenerated = computerValue();

    if (playerMove === "rock") {
        if (computerGenerated === "rock") {
            count.tie++;
            console.log("It's a tie! Both chose rock.");
        } else if (computerGenerated === "paper") {
            count.lose++;
            console.log("You lose! Paper covers rock.");
        } else if (computerGenerated === "scissors") {
            count.won++;
            console.log("You win! Rock crushes scissors.");
            console.log("Total moves :- Win = " + count.won + ", Lose = " + count.lose + ", Tie = " + count.tie);
            count = { won: 0, lose: 0, tie: 0 };
            return;
        }
    } else if (playerMove === "paper") {
        if (computerGenerated === "rock") {
            count.won++;
            console.log("You win! Paper covers rock.");
            console.log("Total moves :- Win = " + count.won + ", Lose = " + count.lose + ", Tie = " + count.tie);
            count = { won: 0, lose: 0, tie: 0 };
            return;
        } else if (computerGenerated === "paper") {
            count.tie++;
            console.log("It's a tie! Both chose paper.");
        } else if (computerGenerated === "scissors") {
            count.lose++;
            console.log("You lose! Scissors cut paper.");
        }
    } else if (playerMove === "scissors") {
        if (computerGenerated === "rock") {
            count.lose++;
            console.log("You lose! Rock crushes scissors.");
        } else if (computerGenerated === "paper") {
            count.won++;
            console.log("You win! Scissors cut paper.");
            console.log("Total moves :- Win = " + count.won + ", Lose = " + count.lose + ", Tie = " + count.tie);
            count = { won: 0, lose: 0, tie: 0 };
            return;
        } else if (computerGenerated === "scissors") {
            count.tie++;
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
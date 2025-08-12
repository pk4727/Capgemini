// document.getElementById("b").addEventListener("click", function () {
//     alert("🖐 clicked!");
// });

document.getElementById("a").addEventListener("click", function () {
    evaluate("✊"); // Player chooses rock
    updateScoreDisplay();
});
document.getElementById("b").addEventListener("click", function () {
    evaluate("🖐"); // Player chooses paper
    updateScoreDisplay();
});
document.getElementById("c").addEventListener("click", function () {
    evaluate("✌"); // Player chooses scissors
    updateScoreDisplay();
});

// or 

document.body.addEventListener("keydown", function (event) {
    if (event.key === 'r' || event.key === 'R') {
        evaluate("✊"); // Player chooses rock
        updateScoreDisplay();
    }
    else if (event.key === 'p' || event.key === 'P') {
        evaluate("🖐"); // Player chooses Paper
        updateScoreDisplay();
    } else if (event.key === 's' || event.key === 'S') {
        evaluate("✌"); // Player chooses Scissors
        updateScoreDisplay();
    }
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

    if (playerMove === "✊") {
        if (computerGenerated === "✊") {
            count.tie++;
            result = "It's a tie! Both chose ✊.";
        } else if (computerGenerated === "🖐") {
            count.lose++;
            result = "You lose! 🖐 covers ✊.";
        } else if (computerGenerated === "✌") {
            count.won++;
            result = "You win! ✊ crushes ✌.";
            console.log("Total moves :- Win = " + count.won + ", Lose = " + count.lose + ", Tie = " + count.tie);
        }
    }
    else if (playerMove === "🖐") {
        if (computerGenerated === "✊") {
            count.won++;
            result = "You win! 🖐 covers ✊.";
            console.log("Total moves :- Win = " + count.won + ", Lose = " + count.lose + ", Tie = " + count.tie);
        } else if (computerGenerated === "🖐") {
            count.tie++;
            result = "It's a tie! Both chose 🖐.";
        } else if (computerGenerated === "✌") {
            count.lose++;
            result = "You lose! ✌ cut 🖐.";
        }
    }
    else if (playerMove === "✌") {
        if (computerGenerated === "✊") {
            count.lose++;
            result = "You lose! ✊ crushes ✌.";
        } else if (computerGenerated === "🖐") {
            count.won++;
            result = "You win! ✌ cut 🖐.";
            console.log("Total moves :- Win = " + count.won + ", Lose = " + count.lose + ", Tie = " + count.tie);
        } else if (computerGenerated === "✌") {
            count.tie++;
            result = "It's a tie! Both chose ✌.";
        }
    } 
    // else {
    //     result = "Invalid move! Please choose ✊, 🖐, or ✌.";
    // }

    // Display the result in the console and on the webpage
    console.log(result);
    document.querySelector(".rps-won").innerHTML = result;
    document.querySelector(".rps-move").innerHTML = `you : computer = ${playerMove} : ${computerGenerated}`;
}

function computerValue() {
    let value = Math.random();
    if (value < 1 / 3) {
        return '✊';
    }
    else if (value >= 1 / 3 && value < 2 / 3) {
        return '🖐';
    } else {
        return '✌';
    }
}

// enhance user experience
function updateScoreDisplay() {
    document.querySelector(".rps-score").innerHTML = `Win = ${count.won}, Lose = ${count.lose}, Tie = ${count.tie}`;
}
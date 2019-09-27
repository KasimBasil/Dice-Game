var heading = document.querySelector("h1");
var firstDice = document.querySelector("img.left");
var secondDice = document.querySelector("img.right");
var trophy1 = document.querySelector(".trophy-img1");
var trophy2 = document.querySelector(".trophy-img2");
var headingSpan = document.querySelector("a h1 span");
var gameTutrial = document.querySelector("h3");
var instructions = "Game Tutorial : \n 1- Click on 'Press Me' title to start rolling the dice. \n 2- After the result is declared, double click on the result to restart the game. \n 3- Enjoy :)"
function diceRoll() {
    var randomNum1 = Math.random();
    randomNum1 = Math.floor((randomNum1 * 6) + 1);
    var randomNum2 = Math.random();
    randomNum2 = Math.floor((randomNum2 * 6) + 1);
    firstDice.setAttribute("src", "images/dice" + randomNum1 + ".png");
    secondDice.setAttribute("src", "images/dice" + randomNum2 + ".png");
    if (randomNum1 > randomNum2) {
        trophy1.classList.toggle("visible");
        headingSpan.textContent = "Player 1 Wins!";

    }
    else if (randomNum1 < randomNum2) {
        trophy2.classList.toggle("visible");
        headingSpan.textContent = "Player 2 Wins!";

    }
    else {
        headingSpan.textContent = "Draw!";
    }
}

var once = { once: true };
heading.addEventListener("click", diceRoll, once);

function reload() {
    location.reload();
}

heading.addEventListener("dblclick", reload);
gameTutrial.addEventListener("click", function () { alert(instructions); })


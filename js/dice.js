function generateRandomValue(minValue, maxValue) {
    var random = Math.random();
    return Math.floor(random * (maxValue - minValue + 1) + minValue);
}
function changePlayers() {
    let currentPlayerName = document.getElementById("current").innerText;
    let player1Name = document.getElementById("player1").value;
    let player2Name = document.getElementById("player2").value;
    if (currentPlayerName == player1Name) {
        currentPlayerName = player2Name;
    }
    else {
        currentPlayerName = player1Name;
    }
    document.getElementById("current").innerText = currentPlayerName;
}
window.onload = function () {
    let newGameBtn = document.getElementById("new_game");
    newGameBtn.onclick = createNewGame;
    document.getElementById("roll").onclick = rollDie;
    document.getElementById("hold").onclick = holdDie;
};
function createNewGame() {
    document.getElementById("score1").value = "0";
    document.getElementById("score2").value = "0";
    let player1Name = document.getElementById("player1").value;
    let player2Name = document.getElementById("player2").value;
    if (!player1Name || !player2Name) {
        alert("Please enter names for both players!");
        return;
    }
    document.getElementById("turn").classList.add("open");
    document.getElementById("total").value = "0";
    document.getElementById("player1").setAttribute("disabled", "disabled");
    document.getElementById("player2").setAttribute("disabled", "disabled");
    changePlayers();
}
function rollDie() {
    let currTotal = parseInt(document.getElementById("total").value);
    let roll = generateRandomValue(1, 6);
    if (roll == 1) {
        alert("Next plyer's turn");
        changePlayers();
        currTotal = 0;
    }
    else {
        currTotal += roll;
    }
    document.getElementById("die").value = roll.toString();
    document.getElementById("total").value = currTotal.toString();
}
function holdDie() {
    changePlayers();
}

function generateRandomValue(minValue:number, maxValue:number):number{
    var random = Math.random();
    
    return Math.floor(random * (maxValue - minValue + 1) + minValue);

}


function changePlayers():void{
    let currentPlayerName = (<HTMLElement>document.getElementById("current")).innerText;
    let player1Name = (<HTMLInputElement>document.getElementById("player1")).value;
    let player2Name = (<HTMLInputElement>document.getElementById("player2")).value;

    //swap from player to player by comparing current name to player names
    if (currentPlayerName == player1Name) {
        //set currentPlayerName to player 2
        currentPlayerName = player2Name;
    }
    else {
        //set currentPlayerName to player 1
        currentPlayerName = player1Name;
    }

    (<HTMLElement>document.getElementById("current")).innerText = currentPlayerName;

}

window.onload = function(){
    let newGameBtn = document.getElementById("new_game") as HTMLButtonElement;
    newGameBtn.onclick = createNewGame;

    (<HTMLButtonElement>document.getElementById("roll")).onclick = rollDie;

    (<HTMLButtonElement>document.getElementById("hold")).onclick = holdDie;
}

function createNewGame(){
    //set player 1 and player 2 scores to 0
    (<HTMLInputElement>document.getElementById("score1")).value = "0";
    (<HTMLInputElement>document.getElementById("score2")).value = "0";
    //verify each player has a name
    let player1Name = (<HTMLInputElement>document.getElementById("player1")).value;
    let player2Name = (<HTMLInputElement>document.getElementById("player2")).value;
    //if both players don't have a name display error
    if (!player1Name || !player2Name) {
        alert("Please enter names for both players!");
        return;
    }

    //if both players do have a name start the game!
    (<HTMLElement>document.getElementById("turn")).classList.add("open");
    (<HTMLInputElement>document.getElementById("total")).value = "0";
    //lock in player names and then change players
    (<HTMLInputElement>document.getElementById("player1")).setAttribute("disabled", "disabled");
    (<HTMLInputElement>document.getElementById("player2")).setAttribute("disabled", "disabled");
    changePlayers();
}

function rollDie():void{
    let currTotal = parseInt((<HTMLInputElement>document.getElementById("total")).value);
    
    //roll the die and get a random value 1 - 6 (use generateRandomValue function)
    let roll = generateRandomValue(1, 6);
    //if the roll is 1
    if(roll == 1) {
        //  change players
        alert("Next plyer's turn");
        changePlayers();
        //  set current total to 0
        currTotal = 0;
    }

    
    //if the roll is greater than 1
    else{
        //  add roll value to current total
        currTotal += roll;
        
    }


    //set the die roll to value player rolled
    (<HTMLInputElement>document.getElementById("die")).value = roll.toString();
    //display current total on form
    (<HTMLInputElement>document.getElementById("total")).value = currTotal.toString();
}

function holdDie():void{
    alert("Next player turn");
    let dieBox = 0;
    (<HTMLInputElement>document.getElementById("die")).value = dieBox.toString();
    //get the current turn total
    let currTotal = parseInt((<HTMLInputElement>document.getElementById("total")).value);
    //determine who the current player is
    let currentPlayerName = (<HTMLElement>document.getElementById("current")).innerText;
    let player1Name = (<HTMLInputElement>document.getElementById("player1")).value;
    let player2Name = (<HTMLInputElement>document.getElementById("player2")).value;
    //add the current turn total to the player's total score
    if (currentPlayerName == player1Name){
        let score1 = parseInt((<HTMLInputElement>document.getElementById("score1")).value);
        score1 += currTotal;
        (<HTMLInputElement>document.getElementById("score1")).value = score1.toString();
        if(score1 >= 100){
                alert("Congratulation, " + currentPlayerName + " You are Winner!");        
        }
    }
    else {
        let score2 = parseInt((<HTMLInputElement>document.getElementById("score2")).value);
        score2 += currTotal;
        (<HTMLInputElement>document.getElementById("score2")).value = score2.toString();
        if(score2 >= 100){
            alert("Congratulation, " + currentPlayerName + " You are Winner!");        
    }
    }

    //reset the turn total to 0
    currTotal = 0;
    (<HTMLInputElement>document.getElementById("total")).value = currTotal.toString();

    //change players
    changePlayers();
}
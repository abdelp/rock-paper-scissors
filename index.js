const message = "Choose: \nrock \npaper\nscissors";

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function computerPlay() {
    return getRandomInt(1, 3);
}

function playRound(playerSelection, computerSelection) {
    let result;

    switch(playerSelection - computerSelection) {
    case 0:
        // code block
        result = "Empate";
        break;
    case -1:
    case 2:
        result = "Perdiste";
        break;
    case -2:
    case 1:
        result = "Ganaste";
        break;
    }

    console.log(result);

    return result;
}

function game() {
    let gamesCount = 0;
    let userWins = 0;
    let computerWins = 0;
    let winnerMessage;

    while(gamesCount < 5) {
        const playerSelection = window.prompt(message);
        let playerSelectionNumber;

        switch(playerSelection.trim().toLowerCase()) {
        case 'rock':
            // code block
            playerSelectionNumber = 1;
            break;
        case 'paper':
            playerSelectionNumber = 2;
            break;
        case 'scissors':
            playerSelectionNumber = 3;
            break;                        
        }

        if(playerSelectionNumber) {
            const computerSelection = computerPlay();
            let result = playRound(playerSelectionNumber, computerSelection);

            result == "Ganaste" ? userWins++ : result == "Perdiste" ? computerWins++ : 0;
            
            gamesCount++;
        } else {
            alert("Invalid option, please, select a valid one");
        }

    }

    switch(true){
        case userWins > computerWins: 
            winnerMessage = "Ganastes";
            break;
        case computerWins > userWins:
            winnerMessage = "Perdistes";
            break;
        default: 
            winnerMessage = "Empataron";

    }

    alert(winnerMessage);
}

game();
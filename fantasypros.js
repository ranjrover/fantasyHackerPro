
function fillRanks() {
    const rankValues = {};
    // get our parentDOM ie the table of players and ranks
    const tableDOM = document.getElementById("ranking-table");

    for (let i = 0; i < 500; i++) {
        let currentPlayer = tableDOM.getElementsByClassName("player-cell player-cell__td")[i].innerText;
        const playerArray = currentPlayer.split(" ");
        let playerName = `${playerArray[0]} ${playerArray[1]}`;

        let currentRank = (i + 1);

        rankValues[playerName] = currentRank;
    }
    
    return rankValues;
}

fillRanks();


// send ranks obj back over to espn tab
// move tab back to espn tab

const proRanks = {};

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

window.addEventListener('DOMContentLoaded', function() {
    console.log('script is running on fantasyPros');
    proRanks = fillRanks();
})



// send ranks obj called goodRanks back over to espn tab
// move tab back to espn tab

// chrome.runtime.sendMessage;

// function runFpScript(message, sender, sendResponse) {
//     console.log('content script for fantasy pros received message :)');
// }

// ourButton.addEventListener("click", function() {
//     alert('This click worked');
// });
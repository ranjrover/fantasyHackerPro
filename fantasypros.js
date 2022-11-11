console.log('script is running on fantasyPros');

setTimeout(() => {
    
    const proRanks = fillRanks();

    chrome.runtime.sendMessage({ code: 'ranks-filled', ranks: proRanks }, function() {
        console.log('done');
    });
}, 9999);

// see if the script is running
let heading = document.querySelector("#rankings-app > div.inner > div.ranking-header-wrap--padding-one-banner > div.ranking-header-wrap.clearfix.hide-print > div > div.rankings-page__heading-wrap > h1");
heading.style.color = 'RGB(4, 199, 79)';
let headings = ['LOADING RANKS', 'LOADING RANKS.', 'LOADING RANKS..', 'LOADING RANKS...'];




function fillRanks() {
    const rankValues = {};
    // get our parentDOM ie the table of players and ranks
    // const tableDOM = document.getElementById("ranking-table");
    const allPlayers = document.querySelectorAll('.player-cell.player-cell__td');

    for (let i = 0; i < 500; i++) {
        // let currentPlayer = tableDOM.getElementsByClassName("player-cell player-cell__td")[i].innerText;
        let currentPlayer = allPlayers[i].innerText;
        const playerArray = currentPlayer.split(" ");
        let playerName = `${playerArray[0]} ${playerArray[1]}`;

        let currentRank = (i + 1);

        rankValues[playerName] = currentRank;
    }
    
    return rankValues;
}

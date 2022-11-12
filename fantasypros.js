console.log('script is running on fantasyPros');

setTimeout(() => {
    
    const proRanks = fillRanks();

    chrome.runtime.sendMessage({ code: 'ranks-filled', ranks: proRanks }, function() {
        console.log('done');
    });
}, 5000);

let headings = ['LOADING RANKS', 'LOADING RANKS.', 'LOADING RANKS..', 'LOADING RANKS...'];
let colors = ['red', 'gray', 'red', 'gray'];
const runHeading = flashHeading(headings, colors);
limitedInterval(() => runHeading(), 500, 6000);

function flashHeading(array, array2) {
    let heading = document.querySelector("#rankings-app > div.inner > div.ranking-header-wrap--padding-one-banner > div.ranking-header-wrap.clearfix.hide-print > div > div.rankings-page__heading-wrap > h1");
    let count = 0;
    return function() {
        if (count > array.length - 1) {
            count = 0;
        } 
        heading.style.color = array2[count]
        heading.innerText = array[count];
        heading.style.fontsize = '24px';
        count++;
        return [count, 'inner function has run'];
    }
}

function limitedInterval(callback, wait, limit) {
    let totalTime = wait;
    while (totalTime <= limit) {
        setTimeout(() => {
            callback();
        }, totalTime)
        totalTime += wait;
    }
}

function fillRanks() {
    const rankValues = {};
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


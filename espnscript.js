console.log('content script running');


chrome.runtime.onMessage.addListener(gotMessage);

function gotMessage(theMessage, sender, sendResponse) {
    
}



// player names for espn:
// let espnPlayers = document.getElementsByClassName("AnchorLink link clr-link pointer")[i].innerText;
// player drafted rank:
// let draftedRanks = document.getElementsByClassName("jsx-2810852873 table--cell")[i].innerText;
// div that holds rank, player, etc:
// let playerDivs = document.getElementsByClassName("Table__TR Table__TR--sm Table__odd")[i]


function stylize() {

    for (let i = 0; i < 280; i++) {

        let espnPlayers = document.getElementsByClassName("AnchorLink link clr-link pointer")[i].innerText;
        const playerArray = espnPlayers.split(" ");
        let playerName = `${playerArray[0]} ${playerArray[1]}`;
        let currRank = parseInt(document.getElementsByClassName("Table__TR Table__TR--sm Table__odd")[i].innerText);
        let playerDivs = document.getElementsByClassName("Table__TR Table__TR--sm Table__odd")[i];
        let score = (playerRanks[playerName] - currRank);


        if (score >= -3 && score <= 3) {
            playerDivs.style.backgroundColor = 'rgba(0, 0, 200, .2)'
        } else if (score <= -4 && score >= -8) {
            playerDivs.style.backgroundColor = 'rgba(0, 135, 0, .2)'
        } else if (score <= -9) {
            playerDivs.style.backgroundColor = 'rgba(0, 135, 0, .5)'
        } else if (score >= 4 && score <= 8) {
            playerDivs.style.backgroundColor = 'rgba(135, 0, 0, .2)'
        } else if (score >= 9) {
            playerDivs.style.backgroundColor = 'rgba(135, 0, 0, .5)'
        } else {
            playerDivs.style.backgroundColor = 'rgba(0, 0, 0, .4)'
        }
    }
}

stylize();
console.log('content script running');

const byTeams = document.querySelector("#fitt-analytics > div > div.jsx-3010562182.shell-container > div.page-container.cf > div.layout.is-full > div > div.jsx-2127519131.container.FFL--container.gameBorder > div.jsx-219853476.draftData > div > div > ul > li:nth-child(2)")
byTeams.click();




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
        let currSpan = document.querySelectorAll(".fw-medium")[i + 4];


        if (score >= -3 && score <= 3) {
            playerDivs.style.backgroundColor = 'rgba(0, 0, 200, .2)'
            currSpan.innerText = `Fine: at ADP`;
            currSpan.style.fontSize = '11px';
        } else if (score <= -4 && score >= -8) {
            playerDivs.style.backgroundColor = 'rgba(0, 135, 0, .2)'
            currSpan.innerText = `Good: ${Math.abs(score)} picks after ADP`;
            currSpan.style.fontSize = '11px';
        } else if (score <= -9) {
            playerDivs.style.backgroundColor = 'rgba(0, 135, 0, .5)'
            currSpan.innerText = `Great: ${Math.abs(score)} picks after ADP`;
            currSpan.style.fontSize = '11px';
        } else if (score >= 4 && score <= 8) {
            playerDivs.style.backgroundColor = 'rgba(135, 0, 0, .2)'
            currSpan.innerText = `Bad: ${score} picks before ADP`;
            currSpan.style.fontSize = '11px';
        } else if (score >= 9) {
            playerDivs.style.backgroundColor = 'rgba(135, 0, 0, .5)'
            currSpan.innerText = `Ouch: ${score} picks before ADP`
            currSpan.style.fontSize = '11px';
        } else {
            playerDivs.style.backgroundColor = 'rgba(0, 0, 0, .4)'
            currSpan.innerText = `DST ADP? Lol`;
            currSpan.style.fontSize = '11px';
        }
    }
}

stylize();
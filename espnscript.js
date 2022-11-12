console.log('content script running');

chrome.runtime.sendMessage('need-ranks', function(response) {
    console.log('received ranks');
    const byTeams = document.querySelector("#fitt-analytics > div > div.jsx-3010562182.shell-container > div.page-container.cf > div.layout.is-full > div > div.jsx-2127519131.container.FFL--container.gameBorder > div.jsx-219853476.draftData > div > div > ul > li:nth-child(2)")
    byTeams.click();

    stylize(response);
})


function stylize(ranksObj) {

    for (let i = 0; i < 280; i++) {

        let espnPlayers = document.getElementsByClassName("AnchorLink link clr-link pointer")[i].innerText;
        const playerArray = espnPlayers.split(" ");
        let playerName = `${playerArray[0]} ${playerArray[1]}`;
        let currRank = parseInt(document.getElementsByClassName("Table__TR Table__TR--sm Table__odd")[i].innerText);
        let playerDivs = document.getElementsByClassName("Table__TR Table__TR--sm Table__odd")[i];
        let score = (ranksObj[playerName] - currRank);
        let currSpan = document.querySelectorAll(".fw-medium")[i + 4];


        if (score >= -3 && score <= 3) {
            playerDivs.style.backgroundColor = 'rgba(0, 0, 200, .2)'
            currSpan.innerText = `Fine: at ADP`;
            currSpan.style.fontSize = '11px';
        } else if (score <= -4 && score >= -12) {
            playerDivs.style.backgroundColor = 'rgba(0, 135, 0, .2)'
            currSpan.innerText = `Good: ${Math.abs(score)} picks after ADP`;
            currSpan.style.fontSize = '11px';
        } else if (score <= -13) {
            playerDivs.style.backgroundColor = 'rgba(0, 135, 0, .5)'
            currSpan.innerText = `Great: ${Math.abs(score)} picks after ADP`;
            currSpan.style.fontSize = '11px';
        } else if (score >= 4 && score <= 12) {
            playerDivs.style.backgroundColor = 'rgba(135, 0, 0, .2)'
            currSpan.innerText = `Early: ${score} picks before ADP`;
            currSpan.style.fontSize = '11px';
        } else if (score >= 13) {
            playerDivs.style.backgroundColor = 'rgba(135, 0, 0, .5)'
            currSpan.innerText = `Ugly: ${score} picks before ADP`
            currSpan.style.fontSize = '11px';
        } else {
            playerDivs.style.backgroundColor = 'rgba(0, 0, 0, .4)'
            currSpan.innerText = `DST ADP: Jokes`;
            currSpan.style.fontSize = '11px';
        }
    }
}
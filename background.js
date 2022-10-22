// assign draft recap "By Team" button to startButton var
// let startButton = document.getElementById("")

// open popup when startButton is clicked so they can select ppr/half/non
// startButton.addEventListener("click", () => 
//     launch the popup with whatever )

chrome.browserAction.onClicked.addListener(startClicked)

function startClicked(tab) {
    let msg = {
        txt: "this message has sent",
        proRanks: fillBase()
    }
    chrome.tabs.sendMessage(tab.id, msg)
}


// now have a html collection of rank elements, need innertext for any given rank num
// sidenote for above dont need html of rank for highstakes need it for draft results aka "new rank"

// now the high stakes ranks

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

// let currentRank = tableDOM.getElementsByClassName(" sticky-cell sticky-cell-one")[i].innerText;
// let currentPlayer = tableDOM.getElementsByClassName("player-cell player-cell__td")[2].innerText


// player names for espn:
// let espnPlayers = document.getElementsByClassName("AnchorLink link clr-link pointer")[i].innerText;
// player drafted rank:
// let draftedRanks = document.getElementsByClassName("jsx-2810852873 table--cell")[i].innerText;
// div that holds rank, player, etc:
// let playerDivs = document.getElementsByClassName("Table__TR Table__TR--sm Table__odd")

let currRank = document.getElementsByClassName("Table__TR Table__TR--sm Table__odd")[0].innerText;
let rankArray = currRank.split("");
let finalRank = `${rankArray[0]}${rankArray[1]}${rankArray[2]}`;
function cleanRank(badRank) {
    let cleaned = '';
    const stringNums = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];

    for (let i = 0; i < badRank.length; i++) {
        let currElement = badRank[i];
        if (stringNums.includes(currElement)) cleaned += currElement;
    }
    return cleaned;
}

function rankCheck(arrayOfRanks) {
    let finalRank = '';
    const stringNums = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];

    for (let i = 0; i < 3; i++) {
        if (stringNums.includes(arrayOfRanks[i])) finalRank += arrayOfRanks[i];
    }

    return finalRank;
}
console.log(finalRank);
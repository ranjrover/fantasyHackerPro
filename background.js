
// this is such a mess, laying out the steps
// user clicks on draft recap 'by team' button
// background script recognizes click and opens the popup
// user clicks the corresponding button on the popup
// ???? then redirected to correct url on a new tab 
// fantasypros script executes on new tab, sends message back containing ranks object
// background script receives message and stores ranks object, then executes espnscript
// espnscript requests the ranks obj from background script as it is necessary for the script to execute
// script executes, divs are altered, all is good :)

// const theRanks = {};

console.log('background script says hello')
console.log('is this change being recognized?')

// this is the drafts by team button

window.addEventListener('DOMContentLoaded', function() {
    const byTeams = document.querySelector("#fitt-analytics > div > div.jsx-3010562182.shell-container > div.page-container.cf > div.layout.is-full > div > div.jsx-2127519131.container.FFL--container.gameBorder > div.jsx-219853476.draftData > div > div > ul > li.jsx-559466336.clr-link.selected-item")
    byTeams.addEventListener('click', function() {
        chrome.action.openPopup();
    })
})

// byTeams.addEventListener('click', () => {
//     chrome.action.openPopup()
// })


// chrome.runtime.onMessage.addLisener(
//     function(request, sender, sendResponse) {
//         if (request.ranks) {
//             theRanks = request.ranks
//         }
//     }
// );
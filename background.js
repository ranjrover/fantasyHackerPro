
// the steps to functionality
// user clicks on draft recap 'by team' button
// background script recognizes click and opens the popup
// user clicks the corresponding button on the popup
// popup.js redirects to correct url on a new tab 
// fantasypros script executes on new tab, stores ranks with chrome.storage
// background script receives message and uses key/value pairs from storage to execute espnscript
// script executes, divs are altered, all is good :)


console.log('background says hello');

let mainTabId = 111;
let proRanks = {};

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.code === 'switching-tabs') {
        getCurrentTab().then(tabid => {
            mainTabId = tabid;
            console.log(mainTabId);
        }).catch(err => {
            console.log(err);
        });
        sendResponse('successfully stored mainTab ID');
    } else if (message.code === 'ranks-filled') {
        let prosTab = sender.tab.id
        console.log(prosTab);
        proRanks = message.ranks;
        chrome.tabs.update(mainTabId, { active: true });
        chrome.tabs.onUpdated.addListener(function() {
            chrome.tabs.remove(prosTab);
        })
        chrome.scripting.executeScript(
            {
                target: { tabId: mainTabId },
                files: ['espnScript.js']
            })
    } else if (message === 'need-ranks') {
        sendResponse(proRanks);
    }
})


async function getCurrentTab() {
    let queryOptions = { active: true, currentWindow: true };
    // `tab` will either be a `tabs.Tab` instance or `undefined`.
    let tabs = await chrome.tabs.query(queryOptions);
    return tabs[0].id;
  }
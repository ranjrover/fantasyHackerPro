
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
    let tabs = await chrome.tabs.query(queryOptions);
    return tabs[0].id;
  }
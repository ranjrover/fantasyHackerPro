console.log('content script running');


chrome.runtime.onMessage.addListener(gotMessage);

function gotMessage(theMessage, sender, sendResponse) {
    
}
chrome.runtime.onInstalled.addListener(function () {
    chrome.storage.sync.set({ colorGreen: '#3aa757' }, function () {
        console.log('The color is green.');
    });
    chrome.storage.sync.set({ colorRed: '#a73a3a' }, function () {
        console.log('The color is red.');
    });
    chrome.storage.sync.set({ colorBlue: '#3a41a7' }, function () {
        console.log('The color is blue.');
    });
    chrome.declarativeContent.onPageChanged.removeRules(undefined, function () {
        chrome.declarativeContent.onPageChanged.addRules([{
            conditions: [new chrome.declarativeContent.PageStateMatcher({
                pageUrl: { hostEquals: 'developer.chrome.com' },
            })
            ],
            actions: [new chrome.declarativeContent.ShowPageAction()]
        }]);
    });
});
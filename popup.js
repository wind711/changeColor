let changeColorRed = document.getElementById('changeColorRed');

chrome.storage.sync.get('colorRed', function (data) {
    changeColorRed.style.backgroundColor = data.colorRed;
    changeColorRed.setAttribute('value', data.colorRed);
});

let changeColorGreen = document.getElementById('changeColorGreen');

chrome.storage.sync.get('colorGreen', function (data) {
    changeColorGreen.style.backgroundColor = data.colorGreen;
    changeColorGreen.setAttribute('value', data.colorGreen);
});

let changeColorBlue = document.getElementById('changeColorBlue');

chrome.storage.sync.get('colorBlue', function (data) {
    changeColorBlue.style.backgroundColor = data.colorBlue;
    changeColorBlue.setAttribute('value', data.colorBlue);
});

changeColorRed.onclick = function (element) {
    let color = element.target.value;
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.tabs.executeScript(
            tabs[0].id,
            { code: 'document.body.style.backgroundColor = "' + color + '";' });
    });
};

changeColorGreen.onclick = function (element) {
    let color = element.target.value;
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.tabs.executeScript(
            tabs[0].id,
            { code: 'document.body.style.backgroundColor = "' + color + '";' });
    });
};

changeColorBlue.onclick = function (element) {
    let color = element.target.value;
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.tabs.executeScript(
            tabs[0].id,
            { code: 'document.body.style.backgroundColor = "' + color + '";' });
    });
};
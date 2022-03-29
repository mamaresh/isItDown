chrome.browserAction.onClicked.addListener(function (tab) {
    chrome.tabs.create({url: "index.html"});
});

function checkHealth(url) {
    return fetch(url)
        .then((response) => {
            const {ok} = response;
            return ok;
        })
        .catch(() => {
            return false;
        });
}

function checkAllHealth(trunkUrl, releaseUrl, newSchemaUrl) {
    Promise.all([checkHealth(trunkUrl), checkHealth(releaseUrl), checkHealth(newSchemaUrl)])
        .then(values => {
            console.log(values);
            let numRunningServices = 0;
            values.forEach(success => {
                if (success) {
                    numRunningServices++;
                }
            });
            if (numRunningServices === values.length) {
                setGreenIcon();
            } else if (numRunningServices === 0) {
                setRedIcon();
            } else {
                setYellowIcon();
            }
        });
}

function setGreenIcon() {
    chrome.browserAction.setIcon({path: 'icons/green-icon.png'});
}

function setRedIcon() {
    chrome.browserAction.setIcon({path: 'icons/red-icon.png'});
}

function setYellowIcon() {
    chrome.browserAction.setIcon({path: 'icons/yellow-icon.png'});
}

function setIcon() {
    checkAllHealth('https://trunk.redfintest.com/distro.html', 'https://release.redfintest.com/distro.html', 'https://newschema.redfintest.com/distro.html');
}

setIcon();
setInterval(setIcon, 1000 * 60 * 5);
chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.create({ url: "index.html" });
});

function checkHealth(url) {
  return fetch(url)
    .then((response) => {
      const { ok } = response;
      return ok;
    })
    .catch(() => {
      return false;
    });
}

function setGreenIcon() {
  chrome.browserAction.setIcon({ path: 'icons/green-icon.png' });
}

function setRedIcon() {
  chrome.browserAction.setIcon({ path: 'icons/red-icon.png' });
}

function setIcon() {
  checkHealth('https://trunk.redfintest.com/distro.html')
    .then((healthy) => {
      if (healthy) {
        setGreenIcon();
      } else {
        setRedIcon();
      }
    })
    .catch(setRedIcon);
}

setIcon();
setInterval(setIcon, 1000 * 60 * 5);
chrome.runtime.sendMessage({
    type: 'pageLoaded',
    url: window.location.hostname
});
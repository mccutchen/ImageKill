// Send a request to the extension so that it knows to set up the page action
// for this tab.
chrome.extension.sendRequest({}, function(response) {});

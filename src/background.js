if (chrome.webNavigation && chrome.webNavigation.onHistoryStateUpdated) {
  chrome.webNavigation.onHistoryStateUpdated.addListener((details) => {
    chrome.tabs.sendMessage(details.tabId, {action: 'rerun', url: details.url});
  });
}

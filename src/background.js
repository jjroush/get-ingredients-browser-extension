chrome.runtime.onInstalled.addListener(function () {
  chrome.contextMenus.create({
    id: "sampleContextMenu",
    title: "Sample Context Menu",
    contexts: ["selection"],
  });
});

chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
  console.log("example chrome plugin - updated");
});

chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "phish-alert",
    title: "Check for Phishing with PhishAlert",
    contexts: ["selection"]
  });
});

chrome.contextMenus.onClicked.addListener(async (info, tab) => {
  if (info.menuItemId === "phish-alert") {
    const selectedText = info.selectionText;

    const response = await fetch("http://localhost:8000/check", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ email_text: selectedText })
    });

    const data = await response.json();
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      func: (verdict) => alert("🛡️ PhishAlert:\n" + verdict),
      args: [data.result]
    });
  }
});

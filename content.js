console.log("✅ content.js injected on", window.location.href);

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  console.log("📩 Content received:", message);
  if (message.type === 'GET_SELECTION') {
    const selection = window.getSelection().toString();
    console.log("✂️  selection is:", selection);
    sendResponse({ text: selection });
  }
  return true;
});
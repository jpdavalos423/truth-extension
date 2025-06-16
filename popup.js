// Load selection into textarea on popup open & handle verify click

// Wait for DOM
document.addEventListener("DOMContentLoaded", () => {
  console.log("🔍 popup.js loaded");
  const textarea = document.getElementById("text-input");
  const verifyButton = document.getElementById("verify-button");
  const loading = document.getElementById("loading");
  const response = document.getElementById("response");

  // Fetch selected text
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    const tab = tabs[0];
    if (!tab?.id) return;
    chrome.tabs.sendMessage(tab.id, { type: "GET_SELECTION" }, (res) => {
      if (!chrome.runtime.lastError && res?.text) {
        textarea.value = res.text;
        verifyButton.disabled = !res.text.trim();
      }
    });
  });

  // Enable verify when textarea not empty
  textarea.addEventListener("input", () => {
    verifyButton.disabled = !textarea.value.trim();
  });

  // Sample output on click
  verifyButton.addEventListener("click", async () => {
    loading.style.display = "block";
    response.style.display = "none";
    verifyButton.disabled = true;

    // Simulate API call
    await new Promise((r) => setTimeout(r, 1000));

    // Sample truth check result
    response.textContent = textarea.value.includes("moon landing")
      ? "✅ The statement appears TRUE based on historical consensus."
      : "❓ Unable to verify definitively—please refine your query.";
    response.style.display = "block";
    loading.style.display = "none";
    verifyButton.disabled = false;
  });
});
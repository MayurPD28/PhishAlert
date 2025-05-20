document.addEventListener("DOMContentLoaded", async () => {
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

    chrome.scripting.executeScript(
        {
            target: { tabId: tab.id },
            func: () => document.body.innerText
        },
        async (results) => {
            const emailContent = results[0].result;

            // Show spinner
            document.getElementById("spinner").style.display = "block";
            document.getElementById("result").innerText = "";

            try {
                const response = await fetch("http://127.0.0.1:8000/check", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ email: emailContent })
                });

                const data = await response.json();

                // Hide spinner and show result
                document.getElementById("spinner").style.display = "none";
                document.getElementById("result").innerText = data.result;
            } catch (error) {
                document.getElementById("spinner").style.display = "none";
                document.getElementById("result").innerText = "Error: Could not reach server.";
            }
        }
    );
});

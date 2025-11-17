// app.js - small starter script added per user's request
// Assumption: by "java part" you meant JavaScript to be loaded by index.html.

document.addEventListener("DOMContentLoaded", () => {
  console.log("app.js loaded — DOMContentLoaded fired");

  // Simple DOM interaction: update the H1 with an extra note
  const h1 = document.querySelector("h1");
  if (h1) {
    h1.textContent = h1.textContent.trim() + " — welcome!";
  }

  // Small visual enhancement to show the script ran
  const style = document.createElement("style");
  style.textContent = `
    h1 { font-family: system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial; color: #2b6cb0; text-align: center; margin-top: 2rem; }
  `;
  document.head.appendChild(style);
});

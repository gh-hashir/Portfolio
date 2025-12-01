let count = 0;
const bar = document.getElementById("bar");
const text = document.getElementById("loading-text");
const loadingScreen = document.getElementById("loading-screen");
const content = document.getElementById("main-content");

const interval = setInterval(() => {
  count++;

  bar.style.width = count + "%";
  text.textContent = "Loading... " + count + "%";

  if (count >= 100) {
    clearInterval(interval);

    loadingScreen.style.opacity = "0";
    loadingScreen.style.transition = "opacity 0.6s ease";

    setTimeout(() => {
      loadingScreen.style.display = "none";
      content.style.display = "block";
    }, 600);
  }
}, 30);

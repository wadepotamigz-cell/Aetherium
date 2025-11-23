// -------------------- COPY BUTTON SCRIPT --------------------
document.querySelectorAll(".copy-card").forEach(card => {
  const block = card.querySelector(".copy-block");
  const btn = card.querySelector(".copy-btn");
  const tooltip = card.querySelector(".tooltip");

  const text = block.getAttribute("data-copy");

  btn.addEventListener("click", () => {
    navigator.clipboard.writeText(text);

    tooltip.classList.add("show");
    setTimeout(() => tooltip.classList.remove("show"), 1000);
  });
});

// -------------------- OVERLAY CLICK-TO-HIDE SCRIPT --------------------
const overlay = document.getElementById("blurOverlay");

if (overlay) {
  overlay.addEventListener("click", () => {
    overlay.style.opacity = "0";            // fade-out animation
    overlay.style.pointerEvents = "none";   // disable clicks after hiding
  });
}

// -------------------- AUDIO AUTOPLAY SCRIPT --------------------
window.addEventListener('load', () => {
    const audio = document.getElementById('bg-music');

    if (!audio) return;

    // Set volume (0.2 = 20% volume)
    audio.volume = 0.5;

    const playPromise = audio.play();

    if (playPromise !== undefined) {
        playPromise
            .then(() => {
                console.log("Background music is playing!");
            })
            .catch(error => {
                console.log("Autoplay blocked. Click anywhere to start audio.");

                // Fallback: play on first user interaction
                document.body.addEventListener('click', () => {
                    audio.play();
                }, { once: true });
            });
    }
});

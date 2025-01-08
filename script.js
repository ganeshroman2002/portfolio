console.clear();

// Create the overlay element
const overlay = document.createElement("div");
overlay.classList.add("overlay");
document.body.appendChild(overlay);

// Apply the glowing effect as the cursor moves
const applyOverlayMask = (e) => {
  const x = e.pageX;
  const y = e.pageY;

  // Update custom properties for overlay
  overlay.style.setProperty("--opacity", "1");
  overlay.style.setProperty("--x", `${x}px`);
  overlay.style.setProperty("--y", `${y}px`);
};

// Add a listener for pointer movements
document.body.addEventListener("pointermove", applyOverlayMask);

function toggleMenu() {
  const navLinks = document.querySelector('.nav-links');
  if (window.innerWidth <= 768) {
      navLinks.classList.toggle('active');
  }
}




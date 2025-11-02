// ===== DARK MODE TOGGLE =====
const toggleBtn = document.getElementById("theme-toggle");
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  toggleBtn.textContent =
    document.body.classList.contains("dark-mode")
      ? "☀️ Light Mode"
      : "🌙 Dark Mode";
});

// ===== FLOATING GHOSTS =====
const canvas = document.getElementById('ghostCanvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const ghosts = [];
for (let i = 0; i < 10; i++) {
  ghosts.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: 20 + Math.random() * 20,
    speed: 0.5 + Math.random(),
  });
}

function drawGhost(g) {
  ctx.beginPath();
  ctx.arc(g.x, g.y, g.r, Math.PI, 0);
  ctx.lineTo(g.x + g.r, g.y + g.r);
  ctx.lineTo(g.x - g.r, g.y + g.r);
  ctx.closePath();
  ctx.fillStyle = 'white';
  ctx.fill();
  ctx.stroke();
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ghosts.forEach(g => {
    drawGhost(g);
    g.y -= g.speed;
    if (g.y < -50) g.y = canvas.height + 50;
  });
  requestAnimationFrame(animate);
}
animate();

window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

// ===== WELCOME POPUP =====
window.addEventListener("load", () => {
  const name = prompt("Hey there! What's your name?");
  
  if (name) {
    // If they type "Dino game" (case-insensitive)
    if (name.trim().toLowerCase() === "dino game") {
      alert("🦖 Taking you to the Dino Game!");
      // Open Chrome Dino game clone in a new tab
      window.open("https://chromedino.com/", "_blank");
    } else {
      alert(`Welcome to the blog, ${name}! 👋`);
    }
  }
});

window.addEventListener("load", () => {
  const code = prompt("insert secret code");
  
  if (code) {
    // If they type "Dino game" (case-insensitive)
    if (code.trim().toLowerCase() === "1234") {
      alert("correct!");
      // Open Chrome Dino game clone in a new tab
      window.open("secret.html", "_blank");
    } else {
      alert(`wrong!`);
    }
  }
});
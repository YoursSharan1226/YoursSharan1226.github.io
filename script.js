// Show nav only after leaving hero (so it appears from "second slide")
const topbar = document.getElementById("topbar");
const hero = document.getElementById("home");

function toggleNav() {
  const heroBottom = hero.getBoundingClientRect().bottom;
  // when hero bottom goes above ~80px, show navbar
  if (heroBottom < 90) topbar.classList.add("visible");
  else topbar.classList.remove("visible");
}

window.addEventListener("scroll", toggleNav);
window.addEventListener("load", toggleNav);

// Footer year
document.getElementById("year").textContent = new Date().getFullYear();
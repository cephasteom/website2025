import './normalize.css'
import './style.css'

// Dark mode toggle
const root = document.documentElement;
const toggleBtn = document.getElementById("theme-toggle");

// Initialise: use saved preference, otherwise system preference
const saved = localStorage.getItem("theme");
if (saved === "dark") {
root.classList.add("dark");
} else if (saved === "light") {
root.classList.remove("dark");
} else {
// no saved preference: follow system
if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    root.classList.add("dark");
}
}

// Update button label
const updateButton = () => {
toggleBtn.textContent = root.classList.contains("dark")
    ? "light"
    : "dark";
};
// updateButton();

// Toggle on click
toggleBtn.addEventListener("click", () => {
root.classList.toggle("dark");
const isDark = root.classList.contains("dark");

// Save preference
localStorage.setItem("theme", isDark ? "dark" : "light");

// updateButton();
});

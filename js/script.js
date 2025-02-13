let lastScrollY = window.scrollY;
const header = document.getElementById("header");

window.addEventListener("scroll", () => {
  if (window.scrollY > lastScrollY) {
    // Scrolling down, hide navbar
    header.classList.add("hide");
  } else {
    // Scrolling up, show navbar
    header.classList.remove("hide");
  }
  lastScrollY = window.scrollY;
});

document.addEventListener("DOMContentLoaded", () => {
  const themeToggle = document.querySelector(".theme");
  const lightIcon = themeToggle.querySelector("img:nth-child(1)");
  const darkIcon = themeToggle.querySelector("img:nth-child(2)");

  // Function to apply the theme
  const applyTheme = (theme) => {
    if (theme === "dark") {
      document.body.classList.add("dark-mode");
      document.body.classList.remove("light-mode");
      localStorage.setItem("theme", "dark");
      lightIcon.style.display = "none";
      darkIcon.style.display = "block";
    } else {
      document.body.classList.add("light-mode");
      document.body.classList.remove("dark-mode");
      localStorage.setItem("theme", "light");
      lightIcon.style.display = "block";
      darkIcon.style.display = "none";
    }
  };

  // Check saved theme on page load
  const savedTheme = localStorage.getItem("theme") || "light";
  applyTheme(savedTheme);

  // Toggle theme on click
  themeToggle.addEventListener("click", (e) => {
    e.preventDefault();
    const currentTheme = document.body.classList.contains("dark-mode")
      ? "light"
      : "dark";
    applyTheme(currentTheme);
  });
});

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

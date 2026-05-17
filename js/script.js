// ======================== typing animation ========================//
var typed = new Typed(".typing", {
    strings: ["", "Web Designer", "Web Developer", "Graphic Designer", "Freelancer"],
    typeSpeed: 100,
    BackSpeed: 60,
    loop: true
});

// ===== HAMBURGER MENU TOGGLE =====
const navToggler = document.querySelector(".nav-toggler");
const aside = document.querySelector(".aside");
const mainContent = document.querySelector(".main-content");

// Toggle menu on click
navToggler.addEventListener("click", () => {
    aside.classList.toggle("open");
    mainContent.classList.toggle("shrink");

    // Animate toggler (hamburger ↔ close)
    navToggler.classList.toggle("active");
});



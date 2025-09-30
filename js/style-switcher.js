/* ===============================================TOGGLE STYLE SWITCHER============================================ */
const styleSwitcherToggler = document.querySelector(".style-switcher-toggler");
if (styleSwitcherToggler) {
    styleSwitcherToggler.addEventListener("click", () => {
        const styleSwitcher = document.querySelector(".style-switcher");
        if (styleSwitcher) {
            styleSwitcher.classList.toggle("open");
        }
    });
}

/* ===============================================HIDE STYLE SWITCHER ON SCROLL==================================== */
window.addEventListener("scroll", () => {
    const styleSwitcher = document.querySelector(".style-switcher");
    if (styleSwitcher && styleSwitcher.classList.contains("open")) {
        styleSwitcher.classList.remove("open");
    }
});

/* ===============================================THEME COLORS============================================ */
function setActivestyle(color) {
    // Remove active class from all styles
    let styles = document.querySelectorAll(".alternate-style");
    styles.forEach((style) => {
        if (style.getAttribute("title") === color) {
            style.removeAttribute("disabled");
        } else {
            style.setAttribute("disabled", "true");
        }
    });
}


/* ===============================================DAY & NIGHT THEME============================================ */
const dayNight = document.querySelector(".day-night");
if (dayNight) {
    dayNight.addEventListener("click", () => {
        const icon = dayNight.querySelector("i");
        if (icon) {
            icon.classList.toggle("fa-sun");
            icon.classList.toggle("fa-moon");
        }
        document.body.classList.toggle("dark");
    });
}

window.addEventListener("load", () => {  // Changed from 'Window' to 'window'
    const dayNight = document.querySelector(".day-night");
    if (dayNight) {
        const icon = dayNight.querySelector("i");
        if (icon) {
            if (document.body.classList.contains("dark")) {
                icon.classList.add("fa-sun");
            } else {
                icon.classList.add("fa-moon");
            }
        }
    }
});
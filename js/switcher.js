/* ===============================================TOGGLE STYLE SWITCHER============================================ */
const SwitcherToggler = document.querySelector(".switcher-toggler");
if (SwitcherToggler) {
    SwitcherToggler.addEventListener("click", () => {
        const Switcher = document.querySelector("switcher");
        if (Switcher) {
            Switcher.classList.toggle("open");
        }
    });
}

/* ===============================================HIDE STYLE SWITCHER ON SCROLL==================================== */
window.addEventListener("scroll", () => {
    const Switcher = document.querySelector(".switcher");
    if (Switcher && styleSwitcher.classList.contains("open")) {
        Switcher.classList.remove("open");
    }
});



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
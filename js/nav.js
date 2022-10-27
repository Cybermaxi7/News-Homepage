const navMenu = document.querySelector(".navigation");
const navToggle = document.querySelector(".mobile-nav-toggle")
const nav = document.querySelector("nav")
navToggle.addEventListener('click', () => {
    const visibility = navMenu.getAttribute("data-visible")

    if (visibility === "false") {
        navMenu.setAttribute("data-visible", true);
        navToggle.setAttribute("aria-expanded", true)
        nav.classList.add("blurBg")

    } else {
        navMenu.setAttribute("data-visible", false)
        navToggle.setAttribute("aria-expanded", false)
        nav.classList.remove("blurBg")
    }

    

})
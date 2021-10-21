// ! get items
const iconOpen = document.getElementById("open");
const iconClose = document.getElementById("close");
const menu = document.querySelector(".sliding-nav");


// ! open menu
iconOpen.addEventListener("click", () => {
    menu.style.transform = "translateX(0rem)"
})

// ! close menu
iconClose.addEventListener("click", () => {
    menu.style.transform = "translateX(20rem)"
})


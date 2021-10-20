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


// ! owl carousel
$('.owl-carousel').owlCarousel({
    rtl: true,
    margin: 20,
    nav: true,
    lazyLoad: true,
    autoplay: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 3
        }
    }
})
// ! owl carousel
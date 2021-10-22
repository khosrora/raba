// ! get items
const tagsBox = document.getElementById("tagsBox");
const tags = document.getElementById("tags");
const chevron = document.getElementById("chevron");




let chev;
tagsBox.addEventListener("click", () => {
    tags.classList.toggle("show");
    if (chev) {
        chevron.innerHTML = `<i class="fas fa-angle-down"></i>`;
        chev = false;
    } else {
        chevron.innerHTML = `<i class="fas fa-angle-up"></i>`;
        chev = true;
    }
    console.log(chev)
})


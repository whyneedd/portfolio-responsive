
const MenuToggle = () => {
    var nav__menu = document.querySelector(".nav__list");
    var nav__humbger = document.querySelector(".humbger");

    nav__humbger.addEventListener("click", () => {
        nav__humbger.classList.toggle("active");
        nav__menu.classList.toggle("active");
    })
}
MenuToggle();
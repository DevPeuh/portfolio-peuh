const header = document.querySelector("header");

window.addEventListener("scroll", () => {
    header.classList.toggle("sticky", window.scrollY > 40);
    document.getElementById("top").classList.toggle("show-top", window.scrollY > 140);
    document.getElementById("top").classList.toggle("hide-top", window.scrollY < 140);
});

let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
    navlist.classList.toggle('open');
    if (window.scrollY < 90) {
        header.classList.toggle("sticky");
    }
};

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navlist.classList.remove('open');
};

const topo = document.getElementById("top");

window.onload = () => {
    topo.classList.toggle("hide-top");
};

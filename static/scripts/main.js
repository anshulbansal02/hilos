const menuOpenBtn = document.getElementById("nav-menu-open-btn");
const menuCloseBtn = document.getElementById("nav-menu-close-btn");
const navMenu = document.getElementsByClassName("nav-links")[0];

menuOpenBtn.addEventListener("click", () => {
    navMenu.style.transition = "all 0.3s ease-out";
    navMenu.style.transform = "translateX(0%)";
});
menuCloseBtn.addEventListener("click", () => {
    navMenu.style.transition = "all 0.26s ease-in";
    navMenu.style.transform = "translateX(-100%)";
});

window.addEventListener("resize", (e) => {
    navMenu.style.transition = "none";
    if (e.target.innerWidth < 768) {
        navMenu.style.transform = "translateX(-100%)";
    } else {
        navMenu.style.transform = "translateX(0)";
    }
});

const headerCarousel = document.getElementById("header-carousel");

const covers = [
    "./assets/covers/cover.jpg",
    "./assets/covers/cover2.jpg",
    "./assets/covers/cover3.jpg",
    "./assets/covers/cover4.jpg",
    "./assets/covers/cover5.jpg",
    "./assets/covers/cover6.jpg",
    "./assets/covers/cover7.jpg",
    "./assets/covers/cover8.jpg",
];
let index = 0,
    duration = 5000;

function crossfade() {
    headerCarousel.className = "cover-background fade-out";

    setTimeout(function () {
        headerCarousel.src = covers[index];
        headerCarousel.className = "cover-background";
    }, 1000);

    index++;
    if (index === covers.length) {
        index = 0;
    }

    setTimeout(crossfade, duration);
}

requestAnimationFrame(crossfade);

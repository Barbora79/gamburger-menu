const gamburger = document.getElementById("gamburger");
const nav = document.querySelector("nav ul");

gamburger .addEventListener("click", () => {
    nav.classList.toggle("active");
});
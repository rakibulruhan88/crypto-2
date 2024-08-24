let menu = document.querySelector(".bx");
let nav = document.querySelector("nav");

menu.addEventListener("click", () => {
  nav.classList.toggle("active");
  menu.classList.toggle("bx-x");
});

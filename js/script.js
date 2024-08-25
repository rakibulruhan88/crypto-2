let menu = document.querySelector(".bx");
let nav = document.querySelector("nav");

menu.addEventListener("click", () => {
  nav.classList.toggle("active");
  menu.classList.toggle("bx-x");
});

let tabs = document.querySelectorAll(".tab");
let cards = document.querySelectorAll(".cards");

tabs.forEach((tab, index) => {
  tab.addEventListener("click", () => {
    tabs.forEach((tab) => {
      tab.classList.remove("click");
    });
    cards.forEach((tab) => {
      tab.classList.remove("click-card");
    });
    tab.classList.add("click");
    cards[index].classList.add("click-card");
  });
});

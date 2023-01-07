const hamburger_btn = document.getElementById("hamburger_button");
const menu = document.querySelector(".mobile-menu");

hamburger_btn.addEventListener("click", () => {
  menu.classList.toggle("hidden");
  menu.classList.toggle("flex");
});

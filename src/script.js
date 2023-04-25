const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector("nav");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  nav.classList.toggle("show");

  if (nav.classList.contains("show")) {
    // hide hamburger button when nav is open
    hamburger.style.display = "none";
  } else {
    // show hamburger button when nav is closed
    hamburger.style.display = "block";
  }
});

nav.addEventListener("click", () => {
  nav.classList.remove("show");
  hamburger.classList.remove("active");
  hamburger.style.display = "block";
});

const header = document.querySelector("header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
});

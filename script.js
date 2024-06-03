// tilt JS
VanillaTilt.init(document.querySelectorAll(".figure"), {
    max: 25,
    speed: 600,
    glare: true,
    reverse: true
});

// AOS JS
AOS.init();

// navbar on scrolling
let nav = document.querySelector("nav");
let home = document.querySelector("#home");
window.addEventListener("scroll", function () {
  nav.classList.toggle("ns", window.scrollY > 0);
})
window.addEventListener("scroll", function () {
  if (window.scrollY >= home.scrollHeight - 100) {
    nav.style.background = "rgba(0, 0, 0, 0.8)";
  }else{
    nav.style.background = "rgba(255, 255, 255, 0.2)";
  }
  if (body.classList.contains("dark")) {
    nav.style.background = "rgba(255, 255, 255, 0.2)";
  }
})

// darkmode
let moon = document.querySelector("#moon");
let body = document.querySelector("body");
moon.addEventListener("click", function(){
  body.classList.toggle("dark")
  if (body.classList.contains("dark")) {
    moon.innerHTML = '<i class="fa-solid fa-sun"></i>';
    moon.style.padding = '6px 13px';
  } else {
    moon.innerHTML = '<i class="fa-solid fa-moon"></i>';
    moon.style.padding = '6px 15px';
  }
})

// carousel-caption
let carousel = document.querySelectorAll(".carousel-caption");
let textNone = document.querySelector("#textNone");
let nilai = 0;
textNone.addEventListener("click", function(){
  if (nilai == 0) {
    for (let i = 0; i < carousel.length; i++) {
      carousel[i].classList.toggle("d-none");
    }
    nilai = 1;
  }else{
    for (let i = 0; i < carousel.length; i++) {
      carousel[i].classList.toggle("d-none");
    }
    nilai = 0;
  }
})
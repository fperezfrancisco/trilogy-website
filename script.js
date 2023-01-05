/** identify buttons */

const signUpBtn = document.querySelector(".sign-up-btn");
const conntactBtn = document.querySelector(".contact-btn");
const learnMoreBtn_about = document.querySelector("#learn-more");
const menuBtn = document.getElementById("menuBtn");
const dropContent = document.getElementById("dropDown-content");
const menuCloseBtn = document.querySelector(".closeBtn");
const navBar = document.querySelector("#navbar");

// const learnMoreBtn_offer = ;

/*
signUpBtn.addEventListener("onclick", () => {
  window.open(
    "https://docs.google.com/forms/d/e/1FAIpQLScQfb0lk0B9FIbXJKTSwI1MmadfXSiUIC3fQJfVg0D_K-BGgw/viewform?usp=pp_url"
  );
});*/

menuBtn.addEventListener("click", toggleMenu);
menuCloseBtn.addEventListener("click", closeMenu);
/*signUpBtn.addEventListener("click", () => {
  window.open(
    "https://docs.google.com/forms/d/e/1FAIpQLScQfb0lk0B9FIbXJKTSwI1MmadfXSiUIC3fQJfVg0D_K-BGgw/viewform?usp=pp_url"
  );
});*/

function toggleMenu() {
  dropContent.classList.toggle("hide");
  dropContent.classList.toggle("show");
}

function closeMenu() {
  dropContent.classList.toggle("hide");
  dropContent.classList.toggle("show");
}

document.addEventListener("scroll", (e) => {
  if (window.scrollY > 50) {
    navBar.classList.add("scroll");
  } else {
    navBar.classList.remove("scroll");
  }
});

function reveal() {
  var reveals = document.querySelectorAll(".reveal");
  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 175;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else if (elementTop >= windowHeight) {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);

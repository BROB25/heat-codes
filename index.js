// swiper js
var swiper = new Swiper(".mySwiper", {
  effect: "cards",
  grabCursor: true,
});

// Portfolio button
const scrollToPortfolio = () => {
  const portfolioSection = document.getElementById('portfolio');
  portfolioSection.scrollIntoView({behavior: "smooth"});
}

// Contact button
const scrollToContact = () => {
  const contactSection = document.getElementById('contact');
  contactSection.scrollIntoView({behavior: "smooth"});
}

// Mobile Menu
// function myFunction() {
//   var x = document.getElementById("myLinks");
//   if (x.style.display === "block") {
//     x.style.display = "none";
//   } else {
//     x.style.display = "block";
//   }
// }

const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', mobileMenu);

function mobileMenu() {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
}

const menuLinks = document.querySelectorAll('.nav-link');

menuLinks.forEach((link) => {
  link.addEventListener('click', () => {
    const menu = document.querySelector('.nav-menu');
    const hamburger = document.querySelector('.hamburger');
    menu.classList.remove('active');
    hamburger.classList.remove('active');
  });
});

// ======== DarkMode ======== \\
let darkModeIcon = document.querySelector('#darkMode-icon');

darkModeIcon.onclick = () => {
  darkModeIcon.classList.toggle('bx-sun');
  document.body.classList.toggle('dark-mode');
}
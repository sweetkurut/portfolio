 // Look for .hamburger
 var hamburger = document.querySelector(".hamburger");
 var header__container = document.querySelector(".header__container");
 // On click
 hamburger.addEventListener("click", function() {
   // Toggle class "is-active"
   hamburger.classList.toggle("is-active");
   header__container.classList.toggle("is-active");
   // Do something else, like open/close menu
 });
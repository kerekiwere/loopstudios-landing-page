const hamburger = document.querySelector(".header__hamburger");
var nav__links = document.querySelectorAll(".nav__link");

hamburger.addEventListener("click", function() {
  document.body.classList.toggle("show-menu");
})

nav__links.forEach(function(nav__link){
  nav__link.addEventListener("click", function(){
    if(document.querySelector('.show-menu')){
      document.body.classList.toggle("show-menu");
    }
  })
})
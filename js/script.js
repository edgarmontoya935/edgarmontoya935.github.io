var menu = document.querySelector(".ham");
var navList = document.querySelector(".nav-list");
var links = document.querySelector(".nav-list li");

menu.addEventListener("click", function(){
    this.classList.toggle("click");
    navList.classList.toggle("open");
})
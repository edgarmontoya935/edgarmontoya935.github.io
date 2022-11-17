const menu = document.querySelector(".ham");
const navList = document.querySelector(".nav-list");
const links = document.querySelector(".nav-list li");

menu.addEventListener("click", function(){
    this.classList.toggle("click");
    navList.classList.toggle("open");
})
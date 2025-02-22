var menubar = document.getElementById("menu-bar");
var menubar2 = document.getElementById("menu-bar2");

var ul = document.getElementById("ul");

menubar.addEventListener("click", ()=>{
    console.log("menubar clicked");
    ul.style.left = "0"
    ul.style.transition  =  "all .4s ease-in-out";
    menubar.style.display = "none"
    menubar2.style.display = "block"
    menubar2.classList.add("bar-img")



});

menubar2.addEventListener("click", ()=>{
    console.log("menubar clicked back");
    ul.style.left = "-200%"
    ul.style.transition  =  "all .4s ease-in-out";
    menubar.style.display = "block"



});







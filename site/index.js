var body=document.getElementById("body");
var container_fluid =document.querySelector(".container-fluid");
var darkmode=document.getElementById("darkmode");
darkmode.addEventListener("click",() => {
    body.classList.toggle("dark")
    container_fluid.classList.toggle("dark");
})
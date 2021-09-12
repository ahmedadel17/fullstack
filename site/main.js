var welcome=document.getElementById("welcome");
var fixed=document.getElementById("fixed");
var second=document.getElementById("second");
var second_c=document.getElementById("second_c");
var dark=document.getElementById("dark");
var darkmode=document.getElementById("darkmode");
second_c.classList.add("displaynone");

welcome.addEventListener("click",() => {
    
    fixed.classList.add("display");
})
second.addEventListener("click",() => 
{
    fixed.classList.add("displaynone");
second_c.classList.add("display");
// second_c.classList.add("ratio ");
// second_c.classList.add("ratio-16x9");
    
})
darkmode.addEventListener("click",() => 
{
    dark.classList.toggle("darkmod");
    
})

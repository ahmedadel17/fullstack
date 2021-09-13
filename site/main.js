var welcome=document.getElementById("welcome");
var fixed=document.getElementById("fixed");
var second=document.getElementById("second");
var second_c=document.getElementById("second_c");
var dark=document.getElementById("dark");
var darkmode=document.getElementById("darkmode");
var third=documnet.getElementById("third");
var third_c=document.getElementById("third_c");
third_c=document.getElementById("third_c");
fixed.classList.add("displaynone");
second_c.classList.add("displaynone");
third_c.classList.add("displaynone");
  welcome.addEventListener("click",() => {
    
      fixed.classList.add("display");
      second_c.classList.add("displaynone");
  third_c.classList.add("displaynone");
  })
  second.addEventListener("click",() => 
  {
      fixed.classList.add("displaynone");
  second_c.classList.add("display");
    second_c.classList.add("ratio ");
    second_c.classList.add("ratio-16x9");
    
  })
  third.addEventListener("click",() => 
  {
      fixed.classList.add("dislaynone");
      second_c.classList.add("displaynone");
      third_c.classList.add("display");
      third_c.classList.add("displayfixed");

    
  })
  darkmode.addEventListener("click",() => 
  {
      dark.classList.toggle("darkmod");
    
  })

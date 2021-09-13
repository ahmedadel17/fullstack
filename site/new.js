var first_c =document.getElementById("first_c");
var second_c=document.getElementById("second_c");
var third_c =document.getElementById("third_c");
var fourth_c =document.getElementById("fourth_c");
var fifth_c =document.getElementById("fifth_c");
var sixth_c =document.getElementById("sixth_c");
var first =document.getElementById("first");
var second =document.getElementById("second");
var third =document.getElementById("third");
var fourth= document.getElementById("fourth");
var fifth= document.getElementById("fifth");
var sixth= document.getElementById("sixth");
var learn =document.getElementById("learn");
first_c.classList.add("displaynone");
second_c.classList.add("displaynone");
third_c.classList.add("displaynone");
fourth_c.classList.add("displaynone");
fifth_c.classList.add("displaynone");
sixth_c.classList.add("displaynone");

first.addEventListener("click",() => {
    first_c.classList.remove("displaynone");
    second_c.classList.add("displaynone");
third_c.classList.add("displaynone");
fourth_c.classList.add("displaynone");
fifth_c.classList.add("displaynone");
sixth_c.classList.add("displaynone");
learn.classList.add("displaynone");
    
})
second.addEventListener("click",() => {
    second_c.classList.remove("displaynone");
    first_c.classList.add("displaynone");
    third_c.classList.add("displaynone");
    fourth_c.classList.add("displaynone");
    fifth_c.classList.add("displaynone");
    sixth_c.classList.add("displaynone");
    learn.classList.add("displaynone");

})
third.addEventListener("click",() => {
    third_c.classList.remove("displaynone");
    second_c.classList.add("displaynone");
    first_c.classList.add("displaynone");
    fourth_c.classList.add("displaynone");
    fifth_c.classList.add("displaynone");
   sixth_c.classList.add("displaynone");
   
    

learn.classList.add("displaynone");

})
fourth.addEventListener("click",() => {
    fourth_c.classList.remove("displaynone");
    second_c.classList.add("displaynone");
    first_c.classList.add("displaynone");
    third_c.classList.add("displaynone");
   fifth_c.classList.add("displaynone");
   sixth_c.classList.add("displaynone");

learn.classList.add("displaynone");
    
})
fifth.addEventListener("click",() => {
    fifth_c.classList.remove("displaynone");
    fourth_c.classList.add("displaynone");
    second_c.classList.add("displaynone");
    first_c.classList.add("displaynone");
    third_c.classList.add("displaynone");
    sixth_c.classList.add("displaynone");
    learn.classList.add("displaynone");
})
sixth.addEventListener("click",() => 
{
    sixth_c.classList.remove("displaynone");
    fifth_c.classList.add("displaynone");
    fourth_c.classList.add("displaynone");
    second_c.classList.add("displaynone");
    first_c.classList.add("displaynone");
    third_c.classList.add("displaynone");
    learn.classList.add("displaynone");
    
})
// first.addEventListener("click",() => {
//     first_c.classList.add("display");
//     second_c.classList.add("displaynone");
//     third_c.classList.add("displaynone");
    
// })
// third_c.addEventListener("click",() => 
// {

// second_c.classList.add("displaynone");
// first_c.classList.add("displaynone");
// third_c.classList.remove("displaynone");
// })

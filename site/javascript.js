var first_c =document.getElementById("first_c");
var second_c=document.getElementById("second_c");
var third_c =document.getElementById("third_c");
var first =document.getElementById("first");
var second =document.getElementById("second");
var third =document.getElementById("third");
var learn =document.getElementById("learn");
first_c.classList.add("displaynone");
second_c.classList.add("displaynone");
third_c.classList.add("displaynone");


first.addEventListener("click",() => {
    first_c.classList.remove("displaynone");
    second_c.classList.add("displaynone");
    third_c.classList.add("displaynone");
    learn.classList.add("displaynone");
})
second.addEventListener("click",() => {
    second_c.classList.remove("displaynone");
    first_c.classList.add("displaynone");
    third_c.classList.add("displaynone");
    learn.classList.add("displaynone");})

    third.addEventListener("click",() => {
    third_c.classList.remove("displaynone");
    second_c.classList.add("displaynone");
    first_c.classList.add("displaynone")
    learn.classList.add("displaynone");
        ;})
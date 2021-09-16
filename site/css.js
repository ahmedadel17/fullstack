var darkmodebutton=document.getElementById("darkmodebutton");
var darkmode=document.getElementById("darkmode");
var offcanvasbody=document.querySelector(".offcanvas-body");
var nav_link=document.querySelectorAll(".nav-link");
var offcanvasheader=document.querySelector(".offcanvas-header");
var offcanvas_title=document.querySelector(".offcanvas-title ");
var btn_close=document.querySelector(".btn-close"); 
var navbar_toggler=document.querySelector(".navbar-toggler");
var navbar_toggler_icon=document.querySelector(".navbar-toggler-icon");
var dropdown_toggle=document.querySelector(".dropdown-toggle "); 
var dropdown=document.getElementById("dropdown");
var navbar=document.querySelector(".navbar");
var mode =document.querySelector(".mode");
var first_c = document.getElementById("first_c");
var second_c = document.getElementById("second_c");
var third_c = document.getElementById("third_c");
var fourth_c = document.getElementById("fourth_c");
var fifth_c = document.getElementById("fifth_c");
var sixth_c = document.getElementById("sixth_c");
var seventh_c = document.getElementById("seventh_c");
var eights_c = document.getElementById("eights_c");
var nineth_c = document.getElementById("nineth_c");
var tenth_c = document.getElementById("tenth_c");
var eleventh_c = document.getElementById("elventh_c");
var twelveth_c = document.getElementById("twelveth_c");
var thirteenth_C = document.getElementById("thirteenth_c");
var fourteenth_c = document.getElementById("fourteenth_c");
var fifteenth_c = document.getElementById("fifteenth_c");
var sixteenth_c = document.getElementById("sixteenth_c");
var seventeenth_c = document.getElementById("seventeenth_c");
var eighteenth_c = document.getElementById("eighteenth_c");
var nineteenth_c = document.getElementById("nineteenth_c");
var twentyth_c = document.getElementById('twentyth_c');
var twentyone_c = document.getElementById("twentyone_c");
var twenty_two_c = document.getElementById("twenty_two_c");
var twentythree_c = document.getElementById("twentythree_c");
var first = document.getElementById("first");
var second = document.getElementById("second");
var third = document.getElementById("third");
var fourth = document.getElementById("fourth");
var fifth = document.getElementById("fifth");
var sixth = document.getElementById("sixth");
var seventh = document.getElementById("seventh");
var eights = document.getElementById("eights");
var nineth = document.getElementById("nineth");
var tenth = document.getElementById("tenth");
var eleventh = document.getElementById("eleventh");
var twelveth = document.getElementById("twelveth");
var thirteenth = document.getElementById("thirteenth");
var fourteenth = document.getElementById("fourteenth");
var fifteenth = document.getElementById("fifteenth");
var sixteenth = document.getElementById("sixteenth");
var seventeenth = document.getElementById("seventeenth");
var eighteenth = document.getElementById("eighteenth");
var nineteenth = document.getElementById("nineteenth");
var twentyth = document.getElementById('twentyth');
var twentyone = document.getElementById("twentyone");
var twenty_two = document.getElementById("twenty_two");
var twentythree = document.getElementById("twentythree");
var learn = document.getElementById("learn");
darkmodebutton.addEventListener("click",() => {
    darkmode.classList.toggle("dark");
    offcanvasbody.classList.toggle("dark");
    offcanvasheader.classList.toggle("dark");
    offcanvas_title.classList.toggle("dark");
    btn_close.classList.toggle("color");
    navbar_toggler_icon.toggle("color");
    dropdown_toggle.classlist.toggle("color");
    navbar.classlist.toggle("dark");
    navbar_toggler.classList.toggle("color");
    mode.classList.toggle("modeblack");
    mode.classList.remove("mode");
})
nav_link.forEach(Item => {
    darkmodebutton.addEventListener("click",() => {
    //    Item.classList.remove("nav-link") 
       Item.classList.toggle("dark"); 
        
    })
    
});
const displaynotfn = () => {
    learn.classList.add("displaynone");
    first_c.classList.add("displaynone");
    second_c.classList.add("displaynone");
    third_c.classList.add("displaynone");
    fourth_c.classList.add("displaynone");
    fifth_c.classList.add("displaynone");
    sixth_c.classList.add("displaynone");
    seventh_c.classList.add("displaynone");
    eights_c.classList.add("displaynone");
    nineth_c.classList.add("displaynone");
    tenth_c.classList.add("displaynone");
    eleventh_c.classList.add("displaynone");
    twelveth_c.classList.add("displaynone");
    thirteenth_c.classList.add("displaynone");
    fourteenth_c.classList.add("displaynone");
    fifteenth_c.classList.add("displaynone");
    sixteenth_c.classList.add("displaynone");
    seventeenth_c.classList.add("displaynone");
    eighteenth_c.classList.add("displaynone");
    nineteenth_c.classList.add("displaynone");
    twentyth_c.classList.add("displaynone");
    twentyone_c.classList.add("displaynone");
    
    twentythree_c.classList.add("displaynone");
    twenty_two_c .classList.add("displaynone");

}
displaynotfn();
first_c.classList.remove("displaynone");
first.addEventListener("click", () => {
    displaynotfn();
    first_c.classList.remove("displaynone");

})
second.addEventListener("click", () => {
    displaynotfn();
    second_c.classList.remove("displaynone");





})
third.addEventListener("click", () => {
    displaynotfn();
    third_c.classList.remove("displaynone");






})
fourth.addEventListener("click", () => {
    displaynotfn();
    fourth_c.classList.remove("displaynone");







})
fifth.addEventListener("click", () => {
    displaynotfn();
    fifth_c.classList.remove("displaynone");







})
sixth.addEventListener("click", () => {
    displaynotfn();
    sixth_c.classList.remove("displaynone");





})
seventh.addEventListener("click", () => {
    displaynotfn();
    seventh_c.classList.remove("displaynone");





})
eights.addEventListener("click", () => {
    displaynotfn();
    eights_c.classList.remove("displaynone");





})
nineth.addEventListener("click", () => {
    displaynotfn();
    nineth_c.classList.remove("displaynone");






})
tenth.addEventListener("click", () => {
    displaynotfn();
    tenth_c.classList.remove("displaynone");






})
eleventh.addEventListener("click", () => {
    displaynotfn();
    eleventh_c.classList.remove("displaynone");






})
twelveth.addEventListener("click", () => {
    displaynotfn();
    twelveth_c.classList.remove("displaynone");






})
thirteenth.addEventListener("click", () => {
    displaynotfn();
    thirteenth_c.classList.remove("displaynone");


})
fourteenth.addEventListener("click", () => {
    displaynotfn();
    fourteenth_c.classList.remove("displaynone");


})

fifteenth.addEventListener("click", () => {
    displaynotfn();
    fifteenth_c.classList.remove("displaynone");

})
sixteenth.addEventListener("click", () => {

    displaynotfn();
    sixteenth_c.classList.remove("displaynone");

})
seventeenth.addEventListener("click", () => {
    displaynotfn();
    seventeenth_c.classList.remove("displaynone");

})
eighteenth.addEventListener("click", () => {
    displaynotfn();
    eighteenth_c.classList.remove("displaynone");

})
nineteenth.addEventListener("click", () => {
    displaynotfn();
    nineteenth_c.classList.remove("displaynone");

})
twentyth.addEventListener("click", () => {
    displaynotfn();
    twentyth_c.classList.remove("displaynone");

})
twentyone.addEventListener("click", () => {
    displaynotfn();
    twentyone_c.classList.remove("displaynone");

})
twenty_two.addEventListener("click",() => {
    displaynotfn();
    twenty_two_c.classList.remove("displaynone");
    
})
twentythree.addEventListener("click", () => {
    displaynotfn();
    twentythree_c.classList.remove("displaynone");

})
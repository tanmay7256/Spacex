console.log("Jai ho")
let button = document.querySelector('button');
let innerdiv = document.querySelector(".innerdiv");
// console.log(button1)
// console.log(innerdiv)
button.addEventListener("mouseenter",(e)=>{
    e.preventDefault;
    innerdiv.style.animation = "slidedownbottom 0.5s ease-in-out"
    innerdiv.style.height="100%"
})
button.addEventListener("mouseleave",(e)=>{
    e.preventDefault;
    innerdiv.style.animation="slidebottomup 0.5s ease-in-out"
    innerdiv.style.height="0%"
})
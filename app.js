// ----------------------HEADING-ANIMATION-------
let animated_span=document.querySelectorAll(".animated-span");
animated_span.forEach(element => {
    element.children[0].addEventListener("mouseenter",(e)=>{
        e.preventDefault;
        element.children[1].style.animation="hr_animation_mouse_enter 0.3s ease-in"
        element.children[1].style.width="100%"
    })
    element.children[0].addEventListener("mouseleave",(e)=>{
        e.preventDefault;
        element.children[1].style.animation="hr_animation_mouse_leave 0.3s ease-in"
        element.children[1].style.width="0%"
    })
});
// -----------------------------BUTTON ANIMATION----------------------------------------------
let animated_btn=document.querySelectorAll(".animated-btn");
animated_btn.forEach(element => {
    element.addEventListener("mouseenter",(e)=>{
        e.preventDefault;
        element.style.color="black"
        element.children[0].style.animation="btn_animation_mouse_enter 0.3s ease-in"
        element.children[0].style.height="100%"
    })
    element.addEventListener("mouseleave",(e)=>{
        e.preventDefault;
        element.style.color="white"
        element.children[0].style.animation="btn_animation_mouse_leave 0.3s ease-in"
        element.children[0].style.height="0%"
    })
});
// --------------------------------OBSERVER LISTENER-------------------------------------
let active_div=document.querySelectorAll(".active-div");
const observer=new IntersectionObserver(entries=>{
    entries.forEach( entry=>{
       if (entry.isIntersecting) {
           entry.target.children[0].classList.add("first-div");
           entry.target.children[1].classList.add("second-div");
           entry.target.children[2].classList.add("third-div");
       }
    })
})
active_div.forEach(element => {
    observer.observe(element)
});
// -----------------------------SCROLL__LISTENER--------------------------------------------------
let navbar=document.querySelector(".navbar");
document.addEventListener("scroll",(e)=>{
   scrolldetect();
})

var lastsheight=0;
function scrolldetect(){
    var currsheight=document.documentElement.scrollTop;
    console.log(currsheight)
    if (currsheight > 0 && currsheight >= lastsheight) {
        //down
        if (currsheight>"100") {
            navbar.style.visibility="hidden"
        }
        if (currsheight<screen.height-100) {
            navbar.style.background ="transparent"
        }
    }
    else{
            navbar.style.visibility="visible"
            if (currsheight>screen.height-100) {
                navbar.style.background ="black"
            }
            else {
                navbar.style.background ="transparent"
            }
        //up
    }
    lastsheight=currsheight;
}
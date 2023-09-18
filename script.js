function init() {
    gsap.registerPlugin(ScrollTrigger);
    const locoScroll = new LocomotiveScroll({
        el: document.querySelector('.main'),
        smooth: true
    });
    locoScroll.on('scroll', ScrollTrigger.update);
    ScrollTrigger.scrollerProxy('.main', {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
        pinType: document.querySelector('.main').style.transform ? 'transform' : 'fixed'
    });
}
init()


const cursor=document.querySelector(".cursor")
const main=document.querySelector(".main")
const pg1vid=document.querySelector(".page1 video")
const headings=document.querySelectorAll("#headings h1, #headings h2")

document.addEventListener("mousemove",(e)=>{
    // console.log(cursor.style)
    cursor.style.left=e.x+20+"px"
    cursor.style.top=e.y+20+"px"
})

// headings.forEach((heading) => {
//     heading.addEventListener("mouseenter", () => {
//       cursor.style.transform = "scale(10)";
//     //   cursor.style.transition = "transform 0.2s ease-in-out";
//     });
  
//     heading.addEventListener("mouseleave", () => {
//       cursor.style.transform = "scale(1)";
//     //   cursor.style.transition = "transform 0.2s ease-in-out";
//     });
//   });

pg1vid.addEventListener("mouseover",()=>{
    pg1vid.muted=false
})
pg1vid.addEventListener("mouseout",()=>{
    pg1vid.muted=true
})

gsap.from(".page1 #headings h1,.page1 #headings h2", {
    y: -10,
    rotate: 10,
    opacity: 0,
    delay: 0.3,
    duration: 0.7
})

var tl= gsap.timeline({
    scrollTrigger:{
        trigger:".page1 #headings h1",
        scroller:".main",
        start:"top 27%",
        // markers:true,
        scrub:3
    }
})

tl.to(".page1 #headings h1",{
    x:-80,
},"anim")
tl.to(".page1 #headings h2",{
    x:80,
},"anim")
tl.to(".page1 video",{
    width:"90%",
},"anim")

var tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: ".page1 h1",
        scroller: ".main",
        // markers:true,
        start: "top -100%",
        end: "top -105%",
        scrub: 3
    }
})
tl2.to(".main", {
    backgroundColor: "#fff",
})
tl2.from(".page2 h1",{
    y:50,
    rotate:-20,
    duration:3,
    opacity:0
})
tl2.from(".page2-left h2",{
    x:-50,
    duration:1,
    stagger:0.2,
    delay:2,
    opacity:0
},"anim2")
tl2.from(".page2-right",{
    x:50,
    duration:1,
    stagger:0.2,
    delay:2,
    opacity:0
},"anim2")

var tl3 = gsap.timeline({
    scrollTrigger: {
        trigger: ".page1 h1",
        scroller: ".main",
        // markers:true,
        start: "top -430%",
        end: "top -440%",
        scrub: 3
    }
})

tl3.to(".main",{
    backgroundColor:"#0F0D0D"
})


var boxes = document.querySelectorAll(".box")
boxes.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        var att = elem.getAttribute("data-image")
        cursor.style.width = "470px"
        cursor.style.height = "370px"
        cursor.style.borderRadius = "0"
        cursor.style.mixBlendMode = "normal"
        cursor.style.backgroundImage = `url(${att})`
        cursor.style.boxShadow="0 0 10px #edbfff"
        console.log(cursor.style.mixBlendMode)
    })
    elem.addEventListener("mouseleave",function(){
        elem.style.backgroundColor = "transparent"
        cursor.style.width = "20px"
        cursor.style.height = "20px"
        cursor.style.borderRadius = "50%"
        cursor.style.backgroundImage = `none`
        cursor.style.boxShadow="none"
        cursor.style.mixBlendMode = "difference"

    })
})
const purple=document.querySelector("#purple")
const h4 = document.querySelectorAll("#nav h4");
const text= document.querySelector(".text");
h4.forEach((elem)=>{
    elem.addEventListener("mouseenter",()=>{
        purple.style.display="flex"
        purple.style.opacity=1
        purple.style.justifyContent="center"
        purple.style.alignItems="center"
        const val= elem.textContent;

        text.innerHTML= (val+" ").repeat(100);
     


    })
    elem.addEventListener("mouseleave",()=>{
        purple.style.display="none"
        purple.style.opacity=0
    })
})
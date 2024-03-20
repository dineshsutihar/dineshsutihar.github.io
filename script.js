
const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});


// first page animation
function firstPageAnimation(){
    var tl = gsap.timeline();

    tl.from("#nav",{
        y: "-10",
        opacity: 0,
        duration: 1.5,
        ease : Expo.easeInOut
    })
    .to(".boundingelem",{
        y:0,
        ease: Expo.easeInOut,
        duration: 2,
        delay: -1,
        stagger: .2
    })
    .from("#herofooter",{
        y:-10,
        opacity: 0,
        duration: 1.5,
        delay: -1,
        ease : Expo.easeInOut
    })
}

// circle squize animation on moving mouse
function mouseSqueeze(){
    window.addEventListener("mousemove",function(dets){
        document.querySelector("#minicircle")
    })
}

// circle animation to follow mouse

function circleFollowMouse() {
    window.addEventListener("mousemove",function(dets){
        document.querySelector("#minicircle").style.transform = `translate(${dets.clientX}px,${dets.clientY}px)`;
    })
}

circleFollowMouse();
firstPageAnimation();
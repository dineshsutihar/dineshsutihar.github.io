// preloader 

var loader = document.querySelector("#preloader");

window.addEventListener("load", function () {
    loader.style.display = "none";
    circleFollowMouse();
    firstPageAnimation();
    mouseSqueeze();

});


const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

// first page animation
function firstPageAnimation() {
    var tl = gsap.timeline();

    tl.from("#nav", {
        y: "-10",
        opacity: 0,
        duration: 1.5,
        ease: Expo.easeInOut
    })
        .to(".boundingelem", {
            y: 0,
            ease: Expo.easeInOut,
            duration: 2,
            delay: -1,
            stagger: .2
        })
        .from("#herofooter", {
            y: -10,
            opacity: 0,
            duration: 1.5,
            delay: -1,
            ease: Expo.easeInOut
        })
}

// circle squize animation on moving mouse

var timeout;
function mouseSqueeze() {
    // define default scale value
    var xscale = 1;
    var yscale = 1;

    var xprev = 0;
    var yprev = 0;


    window.addEventListener("mousemove", function (dets) {
        clearTimeout(timeout);

        xscale = gsap.utils.clamp(.8, 1.2, dets.clientX - xprev);
        yscale = gsap.utils.clamp(.8, 1.2, dets.clientY - yprev);

        xprev = dets.clientX;
        yprev = dets.clientY;

        circleFollowMouse(xscale, yscale);

        timeout = setTimeout(function () {
            document.querySelector("#minicircle").style.transform = `translate(${dets.clientX}px,${dets.clientY}px) scale(${1},${1})`;
        }, 100)
    })
}

// circle animation to follow mouse

function circleFollowMouse(xscale, yscale) {
    window.addEventListener("mousemove", function (dets) {
        document.querySelector("#minicircle").style.transform = `translate(${dets.clientX}px,${dets.clientY}px) scale(${xscale},${yscale})`;
    })
}


document.querySelectorAll(".element").forEach(element => {
    var rotate = 0;
    var diffrot = 0;

    element.addEventListener("mouseleave", function () {

        gsap.to(element.querySelector("img"), {
            opacity: 0,
            display: "none",
            ease: Power3,
            duration: 0.5,
        });
        gsap.to(element.querySelector("h1"), {
            opacity: 1,
            ease: Power3,
            rotate: 0,
        })
        gsap.to(element.querySelector("h5"), {
            opacity: 1,
            ease: Power3,
            rotate: 0,
        })
    });
    element.addEventListener("mousemove", function (dets) {

        var diff = dets.clientY - element.getBoundingClientRect();
        diffrot = dets.clientX - rotate;
        rotate = dets.clientX;
        gsap.to(element.querySelector("img"), {
            display: "block",
            opacity: 1,
            ease: Power3,
            top: diff,
            left: dets.clientX - 200,
            rotate: gsap.utils.clamp(-20, 20, diffrot * 0.8),
        })
        gsap.to(element.querySelector("h1"), {
            opacity: 0.2,
            ease: Power3,
            rotate: gsap.utils.clamp(-20, 20, diffrot * 0.8),
        })
        gsap.to(element.querySelector("h5"), {
            opacity: 0.2,
            ease: Power3,
            rotate: gsap.utils.clamp(-20, 20, diffrot * 0.8),
        })
    })
});


const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

function firstPageAnim(){
    var tl = gsap.timeline();

    tl.from(".nav", {
        y: '-10',
        opacity: 0,
        duration: 2,
        ease: Expo.easeInOut
    })
    .to(".boundingelem", {
        y: '0',
        ease: Expo.easeInOut,
        duration: 2,
        delay: -2,
        stagger: .2
    })
    .from(".herofooter", {
        y: '-10',
        opacity: 0,
        duration: 2,
        delay: -1.5,
        ease: Expo.easeInOut
    })
}

function circleMouseFollower(){
    window.addEventListener("mousemove", function (details){
        document.querySelector(".minicircle").style.transform = `translate(${details.clientX}px, ${details.clientY}px)`
    })
}

circleMouseFollower();
firstPageAnim();



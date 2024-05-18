document.addEventListener("DOMContentLoaded", function() {
    gsap.set("#password", {
        opacity: 0,
        x: -100
    });

    gsap.set(".h1-password", {
        opacity: 0,
        y: -100
    });

    gsap.set(".back-menu", {
        opacity: 0
    });

    gsap.to("#password", {
        duration: 1,
        opacity: 1,
        x: 0,
        ease: "power2.inOut"
    });

    gsap.to(".h1-password", {
        duration: 1,
        opacity: 1,
        y: 0,
        ease: "power2.inOut",
        delay: 0.5
    });

    gsap.to(".back-menu", {
        duration: 1,
        opacity: 1,
        ease: "power2.inOut",
        delay: 1
    });
});
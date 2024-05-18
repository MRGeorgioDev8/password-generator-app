document.addEventListener("DOMContentLoaded", function() {
    gsap.set("#password", {
        opacity: 0,
        x: -100
    });

    gsap.to("#password", {
        duration: 1,
        opacity: 1,
        x: 0,
        ease: "power2.inOut"
    });
});
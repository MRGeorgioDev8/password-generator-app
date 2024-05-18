document.addEventListener("DOMContentLoaded", function() {
    gsap.set("#header, #header img", { y: 0 });

    gsap.from("#header", { duration: 1, y: -100, ease: "power2.out" });
    gsap.from("#header img", { duration: 1, y: -100, ease: "power2.out", delay: 0.2 });
});

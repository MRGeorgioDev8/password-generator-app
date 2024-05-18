document.addEventListener("DOMContentLoaded", function() {
    gsap.set("body", { opacity: 0 });

    gsap.to("body", { opacity: 1, duration: 0.6, ease: "power2.inOut" });
});
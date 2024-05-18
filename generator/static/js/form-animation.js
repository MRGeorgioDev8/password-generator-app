document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('myForm');

    gsap.set(form, { opacity: 0, y: 20 });

    gsap.to(form, { opacity: 1, y: 0, duration: 1, ease: "bounce.inOut", delay: 0.5 });
});
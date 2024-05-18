document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('myForm');

    // Устанавливаем начальное состояние формы
    gsap.set(form, { opacity: 0, y: 20 });

    // Анимация появления с эффектом bounceOut
    gsap.to(form, { opacity: 1, y: 0, duration: 1, ease: "bounce.inOut", delay: 0.5 });
});
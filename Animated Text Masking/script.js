const animateButton = document.getElementById('animateButton');
const maskedText = document.querySelector('.masked-text');

animateButton.addEventListener('click', () => {
    // Reset animation
    maskedText.style.animation = 'none';
    setTimeout(() => {
        maskedText.style.animation = '';
    }, 50); // Briefly reset the animation
});

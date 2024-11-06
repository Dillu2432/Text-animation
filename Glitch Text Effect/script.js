const animateButton = document.getElementById('animateButton');
const glitchText = document.querySelector('.glitch');

animateButton.addEventListener('click', () => {
    // Reset animation
    glitchText.style.animation = 'none';
    glitchText:before.style.animation = 'none';
    glitchText:after.style.animation = 'none';

    setTimeout(() => {
        glitchText.style.animation = '';
        glitchText:before.style.animation = '';
        glitchText:after.style.animation = '';
    }, 50); // Briefly reset the animation
});

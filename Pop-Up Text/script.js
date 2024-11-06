const popUpButton = document.getElementById('popUpButton');
const popUpText = document.getElementById('popUpText');

// Show the pop-up text on button click
popUpButton.addEventListener('click', () => {
    popUpText.classList.toggle('hidden'); // Toggle hidden class
    popUpText.classList.toggle('show'); // Show the pop-up with animation

    // Optionally, hide the pop-up after a few seconds
    setTimeout(() => {
        popUpText.classList.remove('show'); // Hide the pop-up
        setTimeout(() => {
            popUpText.classList.add('hidden'); // Remove hidden class after animation
        }, 500); // Wait for the transition to finish
    }, 3000); // Duration to keep the pop-up visible
});

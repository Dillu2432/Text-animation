const countdownElement = document.getElementById('countdown');
const revealMessage = document.getElementById('revealMessage');
let countdownValue = 5; // Countdown starting value

// Update the countdown every second
const countdownInterval = setInterval(() => {
    countdownElement.textContent = countdownValue;
    
    // If the countdown reaches 0
    if (countdownValue === 0) {
        clearInterval(countdownInterval); // Stop the countdown
        revealMessage.classList.remove('hidden'); // Show the reveal message
        countdownElement.classList.add('hidden'); // Hide the countdown
    }
    
    countdownValue--; // Decrease countdown value
}, 1000);

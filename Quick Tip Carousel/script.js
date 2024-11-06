let index = 0;
const tips = document.querySelectorAll('.tip');
const totalTips = tips.length;

function showNextTip() {
  // Hide the current tip
  tips[index].style.opacity = 0;
  
  // Increment the index (loop back to 0 after the last tip)
  index = (index + 1) % totalTips;

  // Show the next tip
  tips[index].style.opacity = 1;

  // Move the carousel to the next tip
  document.querySelector('.carousel').style.transform = `translateX(-${index * 100}%)`;
}

// Automatically move to the next tip every 3 seconds
setInterval(showNextTip, 3000);

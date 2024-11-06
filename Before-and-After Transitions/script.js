const slider = document.getElementById('slider');
const before = document.getElementById('before');
const after = document.getElementById('after');

let isMouseDown = false;

// Function to handle mouse down event
slider.addEventListener('mousedown', (e) => {
    isMouseDown = true;
    updateSlider(e);
});

// Function to handle mouse move event
window.addEventListener('mousemove', (e) => {
    if (!isMouseDown) return;
    updateSlider(e);
});

// Function to handle mouse up event
window.addEventListener('mouseup', () => {
    isMouseDown = false;
});

// Function to update slider position and reveal images
function updateSlider(e) {
    const { left, width } = slider.parentElement.getBoundingClientRect();
    let position = e.clientX - left;
    position = Math.max(0, Math.min(position, width)); // Restrict the position within the container

    slider.style.left = `${position}px`;
    after.style.width = `${position}px`;
}

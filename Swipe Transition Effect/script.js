const slide1 = document.getElementById('slide1');
const slide2 = document.getElementById('slide2');

document.querySelector('.nextButton').addEventListener('click', () => {
    slide1.classList.remove('active');
    slide2.classList.add('active');
});

document.querySelector('.prevButton').addEventListener('click', () => {
    slide2.classList.remove('active');
    slide1.classList.add('active');
});

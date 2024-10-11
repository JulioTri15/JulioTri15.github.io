// Get the hamburger icon and navigation menu
const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('nav');

// Add event listener to toggle the 'active' class when the hamburger is clicked
hamburger.addEventListener('click', () => {
    nav.classList.toggle('active');
});

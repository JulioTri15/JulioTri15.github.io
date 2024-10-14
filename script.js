const hamburger = document.querySelector('.hamburger');
const navList = document.querySelector('.nav-list');

hamburger.addEventListener('click', () => {
    navList.classList.toggle('active'); // Toggle visibility
});

// Array of words to cycle through
const words = ["BS Computer Engineering Graduate", "Aspiring Software Engineer", "Tech Enthusiast"];
let wordIndex = 0;
let charIndex = 0;
const speed = 100; // Typing speed in milliseconds
const delayBetweenWords = 2000; // Delay before erasing in milliseconds
const typewriterElement = document.getElementById("typewriter");

function typeWriter() {
    const currentWord = words[wordIndex];
    
    if (charIndex < currentWord.length) {
        typewriterElement.innerHTML = currentWord.substring(0, charIndex + 1);
        charIndex++;
        setTimeout(typeWriter, speed);
    } else {
        setTimeout(eraseText, delayBetweenWords);
    }
}

function eraseText() {
    const currentWord = words[wordIndex];
    
    if (charIndex > 0) {
        typewriterElement.innerHTML = currentWord.substring(0, charIndex - 1);
        charIndex--;
        setTimeout(eraseText, speed / 2);
    } else {
        // Move to the next word
        wordIndex = (wordIndex + 1) % words.length;
        setTimeout(typeWriter, speed);
    }
}

// Start the typewriter effect
window.onload = () => {
    typeWriter();
};




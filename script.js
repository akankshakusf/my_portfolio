// Typing animation for "I'm Akanksha 👋"
const heroText = document.querySelector('.hero-section h2'); // Select the heading
const textToType = "Hi, I'm Akanksha "; // Text to type out
const waveEmoji = "👋"; // Wave emoji
let index = 0;

// Function to simulate typing
function typeText() {
  if (index < textToType.length) {
    heroText.textContent = textToType.slice(0, index + 1); // Add one character at a time
    index++;
    setTimeout(typeText, 150); // Adjust typing speed (150ms per character)
  } else {
    // Add the wave emoji after typing is complete
    heroText.textContent = textToType + waveEmoji;
    // Add hand wave animation
    const waveSpan = document.querySelector('.hero-section h2 .wave');
    if (waveSpan) {
      waveSpan.classList.add('wave-animation');
    }
  }
}

// Start the typing animation when the page loads
window.onload = () => {
  heroText.textContent = ''; // Clear the text initially
  typeText(); // Start typing
};
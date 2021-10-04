// DOM Elements
const inputEl = document.getElementById('input');
const imageEl = document.getElementById('image');
const retriesCountEl = document.getElementById('retries-left-count');

// Global variables
const images = [
  'images/hangman0.png',
  'images/hangman1.png',
  'images/hangman2.png',
  'images/hangman3.png',
  'images/hangman4.png',
  'images/hangman5.png',
  'images/hangman6.png',
];
const words = [
  'hangman',
  'developer',
  'programmer',
  'nature',
  'ambulance',
  'secret',
  'javascript',
  'earth',
  'animals',
  'brain',
  'forest',
  'wallpaper',
  'typography',
];

let currentImageIndex = 0;
let secretWord = words[Math.floor(Math.random() * words.length)];
let userWord = '';

// Generating the user word
for (let i = 0; i < secretWord.length; i++) {
  userWord += '_';
}

redrawUserWord();
redrawImage();

// Display word
function redrawUserWord() {
  inputEl.textContent = userWord;
}

// Display image
function redrawImage() {
  imageEl.src = images[currentImageIndex];
}

// Event for keypress
window.addEventListener('keydown', handleKeyPress);

// Handling the keypress event
function handleKeyPress(e) {
  // Check if the key which user press is in the secret word or not
  if (secretWord.includes(e.key)) {
    // Changing the userword
    for (let i = 0; i < secretWord.length; i++) {
      if (secretWord[i] == e.key) {
        userWord = userWord.split('');
        userWord[i] = e.key;
        userWord = userWord.join('');
      }
    }
    // Redraw the word
    redrawUserWord();
    // Check if there isn't a _ in word
    if (!userWord.includes('_')) {
      document.querySelector('.main').innerHTML = `
      <div>
          <h2 style="text-align: center;">You Won!</h1><br>
          <h4 style="font-weight: 300;text-align: center;">The word is ${secretWord}</h4>
      </div>
      `;
    }
  } else {
    // Increasing image index
    currentImageIndex += 1;
    // Redraw image
    redrawImage();
    // Check if it's the last image
    if (currentImageIndex >= images.length - 1) {
      document.querySelector('.main').innerHTML = `
      <div>
      <h2 style="text-align: center;">You Lose</h2><br>
      <h4 style="font-weight: 300;text-align: center;">The word is ${secretWord}</h4></div>
      `;
    }
  }
}

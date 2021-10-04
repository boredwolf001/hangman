const inputEl = document.getElementById('input');
const imageEl = document.getElementById('image');

const images = [
  'hangman0.png',
  'hangman1.png',
  'hangman2.png',
  'hangman3.png',
  'hangman4.png',
  'hangman5.png',
  'hangman6.png'
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

for (let i = 0; i < secretWord.length; i++) {
  userWord += '_';
}

function redrawUserWord() {
  inputEl.textContent = userWord;
}

function redrawImage() {
  imageEl.src = images[currentImageIndex];
}

redrawUserWord();

window.addEventListener('keydown', handleKeyPress);

function handleKeyPress(e) {
  if (secretWord.includes(e.key)) {
    for (let i = 0; i < secretWord.length; i++) {
      if (!userWord.includes('_')) {
        document.querySelector('.main').innerHTML = `
        <div>
            <h2 style="text-align: center;">You Won</h2><br>
            <h4 style="text-align: center;">The word is ${secretWord}</h4>
        </div>
        `;
        break;
      }
      if (secretWord[i] == e.key) {
        userWord = userWord.split('');
        userWord[i] = e.key;
        userWord = userWord.join('');
      }
      redrawUserWord();
    }
  } else {
    currentImageIndex += 1;
    redrawImage();
    if (currentImageIndex >= images.length - 1) {
      document.querySelector('.main').innerHTML = `
      <div>
      <h2 style="text-align: center;">You Lose</h2><br>
      <h4 style="text-align: center;">The word is ${secretWord}</h4></div>
      `;
    }
  }
}

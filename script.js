const buttonsDiv = document.getElementById('custom-buttons');
const textInput = document.getElementById('text-input');
const memeTextPreview = document.getElementById('meme-text');
const previewImg = document.getElementById('meme-image');
const memeInputInsert = document.getElementById('meme-insert');
const memeImageContainer = document.getElementById('meme-image-container');

function getInput(event) {
  if (event.target.id === 'text-input') {
    memeTextPreview.innerText = textInput.value;
    memeTextPreview.style.position = 'absolute';
    memeTextPreview.style.zIndex = 9;
  }
}
document.addEventListener('input', getInput);

function memeInserter(event) {
  if (event.target.id === 'meme-insert') {
    const memeFile = memeInputInsert.files;
    previewImg.src = URL.createObjectURL(memeFile[0]);
  }
}
document.addEventListener('input', memeInserter);

function buttonsMemeBoard(element, text) {
  const button = document.createElement('button');
  buttonsDiv.appendChild(button);
  button.id = element;
  button.innerText = text;
}
buttonsMemeBoard('fire', 'Borda de Fogo');
buttonsMemeBoard('water', 'Borda de Água');
buttonsMemeBoard('earth', 'Borda de Terra');

function fireBoard(event) {
  if (event.target.id === 'fire') {
    memeImageContainer.className = 'fire';
  }
}
function waterBoard(event) {
  if (event.target.id === 'water') {
    memeImageContainer.className = 'water';
  }
}
function earthBoard(event) {
  if (event.target.id === 'earth') {
    memeImageContainer.className = 'earth';
  }
}
document.addEventListener('click', fireBoard);
document.addEventListener('click', waterBoard);
document.addEventListener('click', earthBoard);

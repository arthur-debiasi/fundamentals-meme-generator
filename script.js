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

function buttonsMemeBorder(element, text) {
  const button = document.createElement('button');
  buttonsDiv.appendChild(button);
  button.id = element;
  button.innerText = text;
}
buttonsMemeBorder('fire', 'Borda de Fogo');
buttonsMemeBorder('water', 'Borda de Água');
buttonsMemeBorder('earth', 'Borda de Terra');

function fireBorder(event) {
  if (event.target.id === 'fire') {
    memeImageContainer.className = 'fire';
  }
}
function waterBorder(event) {
  if (event.target.id === 'water') {
    memeImageContainer.className = 'water';
  }
}
function earthBorder(event) {
  if (event.target.id === 'earth') {
    memeImageContainer.className = 'earth';
  }
}
document.addEventListener('click', fireBorder);
document.addEventListener('click', waterBorder);
document.addEventListener('click', earthBorder);

function imgPreviewer(event) {
  if (event.target.classList.contains('previewer')) {
    const imgSrc = event.target.src;
    previewImg.src = imgSrc;
  }
}

document.addEventListener('click', imgPreviewer);

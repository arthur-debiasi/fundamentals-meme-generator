const textInput = document.getElementById('text-input');
const memeTextPreview = document.getElementById('meme-text');

const previewImg = document.getElementById('meme-image');
const memeInputInsert = document.getElementById('meme-insert');

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

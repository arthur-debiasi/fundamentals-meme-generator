const textInput = document.getElementById('text-input');
const memeTextPreview = document.getElementById('meme-text');
const memeImageContainer = document.getElementById('meme-image-container');
const memeInputInsert = document.getElementById('meme-insert');

let memeText;
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
    const memeImg = document.createElement('img');
    memeImageContainer.appendChild(memeImg);
    memeImg.src = URL.createObjectURL(memeFile[0]);
    memeImg.style.width = '200px';
    memeImg.style.height = '200px';
  }
}
document.addEventListener('input', memeInserter);

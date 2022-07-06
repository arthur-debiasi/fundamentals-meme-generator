const textInput = document.getElementById('text-input');
const memeTextPreview = document.getElementById('meme-text');
const memeImageContainer = document.getElementById('meme-image-container');

let memeText;
function getInput() {
  memeTextPreview.innerText = textInput.value;
}
document.addEventListener('input', getInput);

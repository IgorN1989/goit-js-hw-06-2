const inputRef = document.querySelector('input#name-input');
const outputRef = document.querySelector('span#name-output');

inputRef.addEventListener('input', event => {
  outputRef.textContent = event.currentTarget.value || 'Anonymous';
});

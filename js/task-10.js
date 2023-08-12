const divBoxesRef = document.querySelector('#boxes');
const inputRef = document.querySelector('input');
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
let size = 30;

createBtn.addEventListener('click', createBoxes);
destroyBtn.addEventListener('click', destroyBoxes);

function createBoxes(amount) {
  amount = inputRef.value;
  const boxes = [];
 
  for (let i = 0; i < amount; i += 1) {
    size += 10;
    const box = document.createElement('div');
    box.style.backgroundColor = getRandomHexColor();
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    boxes.push(box);
  }
   divBoxesRef.append(...boxes);
}

function destroyBoxes() {
  divBoxesRef.innerHTML = '';
  inputRef.value = '';
  size = 30;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

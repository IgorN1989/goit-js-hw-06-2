function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const refs = {
  colorName: document.querySelector('.color'),
  button: document.querySelector('.change-color'),
  body: document.body,
};

refs.button.addEventListener('click', onButtonClick);

function onButtonClick() {
  const bodyColor = getRandomHexColor();
  refs.colorName.textContent = bodyColor;
  refs.body.style.backgroundColor = bodyColor;
}

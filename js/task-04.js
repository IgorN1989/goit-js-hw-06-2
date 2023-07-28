let counterValue = 0;

const refs = {
  decrementBtn: document.querySelector('[data-action="decrement"]'),
  incrementBtn: document.querySelector('[data-action="increment"]'),
  value: document.querySelector('#value'),
};

refs.decrementBtn.addEventListener('click', doMath);
refs.incrementBtn.addEventListener('click', doMath);

function doMath(evt) {
  switch (evt.currentTarget.dataset.action) {
    case 'decrement':
      counterValue -= 1;
      break;

    default:
      counterValue += 1;
  }
  refs.value.textContent = counterValue;
}

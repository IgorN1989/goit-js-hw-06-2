const inputRef = document.querySelector('#validation-input');
const dataLength = Number(inputRef.getAttribute('data-length'));

inputRef.addEventListener('blur', onInputCheck);

function onInputCheck(event) {
  switch (event.currentTarget.value.length) {
    case dataLength:
      event.currentTarget.classList.add('valid');
      event.currentTarget.classList.remove('invalid');
      break;

    default:
      event.currentTarget.classList.add('invalid');
      event.currentTarget.classList.remove('valid');
    }
}
const formRef = document.querySelector('.login-form');

formRef.addEventListener('submit', onFormSubmit);

function onFormSubmit(evt) {
  evt.preventDefault();

  //   const { email, password } = evt.currentTarget.elements;

  //   if (!email.value || !password.value) {
  //     alert('Всі поля повинні бути заповнені');
  //     return;
  //   }

  //   const formData = {
  //     email: email.value,
  //     password: password.value,
  //   };

  const formElements = evt.currentTarget.elements;
  const email = formElements.email.value;
  const password = formElements.password.value;

  if (!email || !password) {
    alert('Всі поля повинні бути заповнені!');
    return;
  }

  const formData = {
    email,
    password,
  };

  console.log(formData);
  formRef.reset();
}

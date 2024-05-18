'use strict';
function sendForm(formSelector, inputSelector, errorSelector, requiredText, errorEmail) {
  const inputs = document.querySelectorAll(inputSelector),
    form = document.querySelector(formSelector),
    errors = document.querySelectorAll(errorSelector);

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    let valid = true;

    inputs.forEach((input, index) => {
      if (input.value == "") {
        errors[index].classList.add('active');
        input.classList.add('error_input');
        errors[index].textContent = requiredText;
        valid = false;
      } else {
        errors[index].classList.remove('active');
        input.classList.remove('error_input');
      }

      if (input.type === 'email') {
        if (!input.value.includes('@')) {
          errors[index].classList.add('active');
          input.classList.add('error_input');
          errors[index].textContent = errorEmail;
          valid = false;
        } else {
          errors[index].classList.remove('active');
          input.classList.remove('error_input');
        }
      }
    });

    if (valid) {
      Swal.fire({
        title: 'Uğurlu Qeydiyyat!',
        text: 'Sizin qeydiyyatınız tamamlanmışdır.',
        icon: 'success',
        confirmButtonText: 'Bağla'
      });
    }
  });
}

sendForm('form', 'input', '.error', 'Xahiş olunur sahəni doldurasınız', 'Xahiş olunur e-poçt adresinizi düzgün daxil edin');

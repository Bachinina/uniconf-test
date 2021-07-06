const forms = document.querySelectorAll('form');
forms.forEach(function (form) {
  const successBlock = document.querySelector('[ data-success-block=' + form.getAttribute('data-success') + ']');

  const items = form.querySelectorAll('[data-form-el-wrap]');

  items.forEach(function (item) {
    const el = item.querySelector('[data-form-el]');
    const errorBlock = item.querySelector('[data-form-el-error]');

    const addValidation = function (el, errorBlock, wrap) {
      if (el.getAttribute('name') == 'name') {
        const regexName = /^\D+$/;
        const setStandarttValidity = function () {
          wrap.classList.remove('invalid');
          errorBlock.textContent = 'Заполните поле';
          el.setCustomValidity('');
        };

        el.addEventListener('input', function () {
          if (!regexName.test(el.value)) {
            if (el.value) {
              wrap.classList.add('invalid');
              errorBlock.textContent = 'Цифры в имени не допустимы';
              el.setCustomValidity('Цифры в имени не допустимы');
            } else {
              setStandarttValidity();
            }
          } else {
            setStandarttValidity();
          }
        });
      }
    };

    const checkValid = function () {
      if (this.checkValidity()) {
        item.classList.remove('invalid');
      }
    };

    addValidation(el, errorBlock, item);
    el.addEventListener('invalid', function () {
      item.classList.add('invalid');

      el.addEventListener('input', checkValid);
    });
  });


  var onLoad = function () {
    const submitBtn = form.querySelector('[type="submit"]');
    submitBtn.blur();
    submitBtn.classList.add('disabled');

    const successMessage = document.createElement('div');
    successMessage.classList.add('form-success');
    successMessage.innerText = 'Заявка отправлена';
    form.appendChild(successMessage);


    if (successBlock !== null) {
      setTimeout(function () {
        form.remove();
        successBlock.classList.remove('inactive')
      }, 1500);
    }
  };
  var onError = function (message) {
    console.log(message);
  };

  form.addEventListener('submit', function (evt) {
    evt.preventDefault();
    window.backend.xhRequest(form.method, form.action, onLoad, onError, new FormData(form));
  });
});

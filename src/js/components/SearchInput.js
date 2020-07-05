export default class SearchInput {
  constructor(form, func) {
    this.form = form;
    this.func = func;
    this.setEventListener();
  }

  setEventListener() {
    this.form.addEventListener('submit', (event) => this.submit(event));
  }

  submit(event) {
    event.preventDefault();
    const input = this.form.elements[0];
    const isValidInput = this.checkInputValidity(input);
    if (isValidInput) {
      this.func(this.form.request.value);
    };
  }
  checkInputValidity(elem) {
    if (elem.validity.valueMissing) {
      elem.setAttribute('placeholder', 'Это поле обязательно для заполнения');
      elem.classList.add('search__input_red');
      return false;
    } if (elem.validity.tooShort) {
      this.form.reset();
      elem.setAttribute('placeholder', 'Должно быть от 3 до 100 символов');
      elem.classList.add('search__input_red');
      return false;
    }
    if (elem.validity.tooLong) {
      this.form.reset();
      elem.setAttribute('placeholder', 'Должно быть от 3 до 100 символов');
      elem.classList.add('search__input_red');
      return false;
    }
    elem.classList.remove('search__input_red');
    return true;
  }

}

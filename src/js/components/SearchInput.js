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
    this.func(this.form.request.value);
  }
}

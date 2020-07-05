export default class SearchInput {
  constructor(api, form, cardNews, cardList, block, dataStorage) {
    this.api = api;
    this.form = form;
    this.cardNews = cardNews;
    this.cardList = cardList;
    this.block = block;
    this.dataStorage = dataStorage;
    this.setEventListener();
  }

  setEventListener() {
    this.form.addEventListener('submit', (event) => this.submit(event));
  }

  submit(event) {
    event.preventDefault();
    if (this.cardList.container.childElementCount > 1) {
      while (this.cardList.container.childNodes[2]) {
        this.cardList.container.removeChild(this.cardList.container.childNodes[2]);
      }
    }
    this.dataStorage.title(this.form.request.value);
    this.getRequest(this.form.request.value);
    //this.form.reset();
  }

  getRequest(request) {
    this.api.getNews(request)
      .then((data) => {
        this.dataStorage.storage(data)
        if (data.articles.length === 0) {
          this.block.setAttribute('style', 'display: block');
          this.cardList.container.parentElement.parentElement.setAttribute('style', 'display: none');
        } else {
          this.block.setAttribute('style', 'display: none');
          this.cardList.container.parentElement.parentElement.setAttribute('style', 'display: block');
        }
        data.articles.forEach((item) => {
          this.cardList.add(this.cardNews.create(item));
        })
      })
      .catch(error => {
        console.log(error)
      })
  }
}

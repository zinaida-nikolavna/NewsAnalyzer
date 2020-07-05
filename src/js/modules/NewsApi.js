export default class NewsApi {
  constructor(dateToday, dateFrom, apiKey) {
    this.dateToday = dateToday;
    this.dateFrom = dateFrom;
    this.apiKey = apiKey;
  }
  getNews(query) {
    this.query = query;
    return fetch(`https://praktikum.tk/news/v2/everything?q=${this.query}&from=${this.dateFrom}&to=${this.dateToday}&pageSize=100&language=ru&apiKey=${this.apiKey}`)
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
      })
      .catch(() => Promise.reject(new Error("Не могу получить данные карточек")));
  }
}

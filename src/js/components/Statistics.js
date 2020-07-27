import { data } from "autoprefixer";

export default class Statistics {
  constructor(data, request) {
    const {
      totalResults,
    } = data;
    this.data = data;
    this.totalResults = totalResults;
    this.request = request;
  }

  setTitle() {
    const title = document.querySelector('.request__title');
    title.textContent = `«${this.request}»`;
  }
  setTotalNews() {
    const totalNews = document.querySelector('.request__quantity');
    totalNews.textContent = this.totalResults;
  }
  setTotalTitle() {
    const totalTitle = document.getElementById('request__title-mention');
    const titleMention = this.data.articles.filter((item) => {
      return item.title.toLowerCase().includes(this.request.toLowerCase());
    })
    totalTitle.textContent = titleMention.length;
  }
  setDateGraph() {
    const options = { weekday: 'short', day: 'numeric' };
    const ANALYTIC_PERIOD = 6;

    for (let j = 0; j <= ANALYTIC_PERIOD; j++) {
      document.getElementById(`graph__date-${j}`).textContent = new Date(new Date().setDate(new Date().getDate() - j)).toLocaleDateString("ru-RU", options);
    }

    for (let i = 0; i <= ANALYTIC_PERIOD; i++) {
      const arrayDate = this.data.articles.filter((item) => {
        console.log(document.getElementById(`graph__date-${i}`).textContent === new Date(item.publishedAt).toLocaleDateString("ru-RU", options));
        return document.getElementById(`graph__date-${i}`).textContent === new Date(item.publishedAt).toLocaleDateString("ru-RU", options);
      });
      const copyarrayDate = arrayDate;
      arrayDate.filter((item) => {
        item.title.toLowerCase().includes(this.request.toLowerCase());
      })
      copyarrayDate.filter((item) => {
        if (item.description !== null) {
          item.description.toLowerCase().includes(this.request.toLowerCase());
        }
      })
      const mentions = arrayDate.length + copyarrayDate.length;
      document.getElementById(`graph__quantity-${i}`).textContent = mentions;
      document.getElementById(`graph__quantity-${i}`).setAttribute('style', `width: ${mentions}%`);
    }
  }
  setMonth() {
    const currentMonth = document.getElementById('graph__month');
    const options = { month: 'long' };
    currentMonth.textContent = `(${new Date(new Date().setDate(new Date().getDate())).toLocaleDateString("ru-RU", options)})`;
  }
}

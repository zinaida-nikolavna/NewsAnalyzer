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
    //return titleMention.length;
  }
  /*setTotalMentions(titleMention) {
    const descriptionMention = this.data.articles.filter((item) => {
      return item.description.toLowerCase().includes(this.request.toLowerCase());
    })
    console.log(descriptionMention.length + titleMention);
    return descriptionMention.length + titleMention;
  }*/
}

import { options } from '../constants/constants.js';
export default class NewsCard {

  create(data) {
    const {
      title,
      description,
      url,
      urlToImage,
      publishedAt,
      source: {
        name: sourceName,
      },
    } = data;
    this.title = title;
    this.description = description;
    this.url = url;
    this.urlToImage = urlToImage;

    this.publishedAt = new Date(publishedAt).toLocaleDateString("ru-RU", options);
    this.sourceName = sourceName;

    const template = document.getElementById('news-card-template');
    const newsCard = template.content.cloneNode(true);

    const card = newsCard.querySelector('.card');
    const cardImage = newsCard.querySelector('.card__image');
    const cardDate = newsCard.querySelector('.card__data');
    const cardTitle = newsCard.querySelector('.card__title');
    const cardText = newsCard.querySelector('.card__text');
    const cardSource = newsCard.querySelector('.card__source');

    card.setAttribute('href', `${this.url}`);
    cardImage.setAttribute('style', `background-image: url(${this.urlToImage})`);
    cardDate.textContent = this.publishedAt;
    cardTitle.textContent = this.title;
    cardText.textContent = this.description;
    cardSource.textContent = this.sourceName;

    return newsCard;
  }

}

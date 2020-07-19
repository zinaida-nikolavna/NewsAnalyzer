export default class NewsCardList {
  constructor(container) {
    this.container = container;
  }

  add(card) {
    this.card = card;
    this.container.append(this.card);
  }
}

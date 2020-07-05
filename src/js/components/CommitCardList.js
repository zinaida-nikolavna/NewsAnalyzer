export default class CommitCardList {
  constructor(container) {
    this.container = container;
  }

  add(card) {
    this.card = card;
    this.container.append(this.card);
  }
}

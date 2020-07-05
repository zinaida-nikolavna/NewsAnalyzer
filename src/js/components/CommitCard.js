import { options } from '../constants/constants.js';
export default class CommitCard {
  constructor(data) {
    const {
      commit: {
        message,
        committer: {
          name,
          email,
          date
        }
      },
      author: {
        avatar_url
      }
    } = data;
    this.name = name;
    this.email = email;
    this.date = new Date(date).toLocaleDateString("ru-RU", options);
    this.message = message;
    this.avatar_url = avatar_url;
  }
  create() {
    const template = document.getElementById('commit-card-template');
    const commitCard = template.content.cloneNode(true);

    const author = commitCard.querySelector('.commit__author');
    const email = commitCard.querySelector('.commit__email');
    const message = commitCard.querySelector('.commit__text');
    const photo = commitCard.querySelector('.commit__photo');
    const date = commitCard.querySelector('.commit__date');

    author.textContent = this.name;
    email.textContent = this.email;
    date.textContent = this.date;
    message.textContent = this.message;
    photo.setAttribute('style', `background-image: url(${this.avatar_url})`);

    return commitCard;
  }
}

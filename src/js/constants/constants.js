export { API_KEY, todayDate, fromDate, newsCardList, form, notFound, commitsCardList, options };

const todayDate = `${new Date().getFullYear()}-${new Date().getMonth() + 1}-${new Date().getDate()}`;
const sevenDay = new Date(new Date().setDate(new Date().getDate() - 7));
const fromDate = `${sevenDay.getFullYear()}-${sevenDay.getMonth() + 1}-${sevenDay.getDate()}`;
const API_KEY = 'b2d8c2d2189d416894d3c9c77ce6d1b7';
const newsCardList = document.querySelector('.card-list__container');
const form = document.forms.search;
const notFound = document.querySelector('.not-found');
const commitsCardList = document.querySelector('.swiper__wrapper');
const options = { year: 'numeric', month: 'long', day: 'numeric' }


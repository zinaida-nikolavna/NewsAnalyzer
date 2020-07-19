import "./css/main.css";

import NewsApi from './js/modules/NewsApi.js';
import NewsCard from './js/components/NewsCard.js';
import NewsCardList from './js/components/NewsCardList.js';
import SearchInput from './js/components/SearchInput.js';
import Loader from './js/components/Loader.js';
import DataStorage from './js/modules/DataStorage.js';
import { API_KEY, todayDate, fromDate, newsCardList, form, notFound, newsList, button, loadGo, searchbtn, searchInput } from './js/constants/constants.js';

const api = new NewsApi(fromDate, todayDate, API_KEY);
const cardList = new NewsCardList(newsCardList);
const cardNews = new NewsCard;
const dataStorage = new DataStorage;
const load = new Loader(button, loadGo);

function storageNews() {
  if (localStorage.getItem('data')) {
    const cards = dataStorage.getData();
    const request = dataStorage.getRequest();
    form.request.value = request;
    cards.articles.forEach((item) => {
      cardList.add(cardNews.create(item));
    })
    showHideArticles(cards.articles.length);
    clickButton();
  }
}

function clickButton() {
  const step = 3;
  let card = 0;
  const arrayCards = Array.from(document.querySelectorAll('.card-list__container .card'));
  arrayCards.slice(step).forEach(e => e.style.display = 'none');
  card += step;
  button.addEventListener('click', (e) => {
    const tmp = arrayCards.slice(card, card + step);
    tmp.forEach(e => e.style.display = 'block');
    card += step;
    if (tmp.length < 3) {
      button.remove();
    }
  })
}

function showHideArticles(data) {
  if (data === 0) {
    notFound.setAttribute('style', 'display: block');
    newsList.setAttribute('style', 'display: none');
  } else {
    notFound.setAttribute('style', 'display: none');
    newsList.setAttribute('style', 'display: block');
  }
  if (data > 3) {
    button.setAttribute('style', 'display: inline-block');
  } else {
    button.setAttribute('style', 'display: none');
  }
}

const getDataNews = function dataNews(request) {
  load.render(true);
  searchbtn.setAttribute('disabled', 'true');
  searchbtn.classList.add('search__button_disabled');
  searchInput.setAttribute('disabled', 'true');
  newsList.setAttribute('style', 'display: none');
  dataStorage.title(request);
  if (newsCardList.childElementCount > 1) {
    while (newsCardList.childNodes[2]) {
      newsCardList.removeChild(newsCardList.childNodes[2]);
    }
  }
  api.getNews(request)
    .then((data) => {
      showHideArticles(data.articles.length);
      data.articles.forEach((item) => {
        cardList.add(cardNews.create(item));
      })
      clickButton();
      dataStorage.storage(data);
      load.render(false);
      searchbtn.removeAttribute('disabled');
      searchbtn.classList.remove('search__button_disabled');
      searchInput.removeAttribute('disabled');
    })
    .catch(error => {
      console.log(error)
    })
}
const searchRequest = new SearchInput(form, getDataNews);
storageNews();

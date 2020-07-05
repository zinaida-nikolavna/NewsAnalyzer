import "./css/main.css";

import NewsApi from './js/modules/NewsApi.js';
import NewsCard from './js/components/NewsCard.js';
import NewsCardList from './js/components/NewsCardList.js';
import SearchInput from './js/components/SearchInput.js';
import DataStorage from './js/modules/DataStorage.js';
import { API_KEY, todayDate, fromDate, newsCardList, form, notFound, newsList, button } from './js/constants/constants.js';

const api = new NewsApi(fromDate, todayDate, API_KEY);
const cardList = new NewsCardList(newsCardList);
const cardNews = new NewsCard;
const dataStorage = new DataStorage;

const getDataNews = function dataNews(request) {
  dataStorage.title(request);
  if (newsCardList.childElementCount > 1) {
    while (newsCardList.childNodes[2]) {
      newsCardList.removeChild(newsCardList.childNodes[2]);
    }
  }
  api.getNews(request)
    .then((data) => {
      dataStorage.storage(data)
      if (data.articles.length === 0) {
        notFound.setAttribute('style', 'display: block');
        newsList.setAttribute('style', 'display: none');
      } else {
        notFound.setAttribute('style', 'display: none');
        newsList.setAttribute('style', 'display: block');
      }
      if (data.articles.length > 3) {
        button.setAttribute('style', 'display: inline-block');
      } else {
        button.setAttribute('style', 'display: none');
      }
      let step = 3;
      let card = 0;
      data.articles.forEach((item) => {
        cardList.add(cardNews.create(item));
      })
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
    })
    .catch(error => {
      console.log(error)
    })
}
const searchRequest = new SearchInput(form, getDataNews);

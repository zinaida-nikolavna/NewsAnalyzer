import "./css/main.css";

import NewsApi from './js/modules/NewsApi.js';
import NewsCard from './js/components/NewsCard.js';
import NewsCardList from './js/components/NewsCardList.js';
import SearchInput from './js/components/SearchInput.js';
import DataStorage from './js/modules/DataStorage.js';
import { API_KEY, todayDate, fromDate, newsCardList, form, notFound } from './js/constants/constants.js';

const api = new NewsApi(fromDate, todayDate, API_KEY);
const cardList = new NewsCardList(newsCardList);
const cardNews = new NewsCard;
const dataStorage = new DataStorage;
const searchRequest = new SearchInput(api, form, cardNews, cardList, notFound, dataStorage);



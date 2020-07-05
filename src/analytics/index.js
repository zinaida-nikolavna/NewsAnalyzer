import "../css/analytics.css";
import DataStorage from '../js/modules/DataStorage.js';
import Statistics from '../js/components/Statistics.js';

const storage = new DataStorage;
const statistic = new Statistics(storage.getData(), storage.getRequest());
statistic.setTitle();
statistic.setTotalNews();
statistic.setTotalTitle();
statistic.setDateGraph();
statistic.setMonth();


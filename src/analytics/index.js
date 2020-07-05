import "../css/analytics.css";
import DataStorage from '../js/modules/DataStorage.js';
import Statistics from '../js/components/Statistics.js';
import Chart from '../js/components/Chart.js';
import { todayDate } from '../js/constants/constants.js';

const storage = new DataStorage;
const statistic = new Statistics(storage.getData(), storage.getRequest());
const chart = new Chart(storage.getData(), storage.getRequest());
statistic.setTitle();
statistic.setTotalNews();
statistic.setTotalTitle();
chart.setDate();
chart.setMonth();


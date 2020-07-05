import "../css/about.css";
import GithubApi from '../js/modules/GithubApi.js';
import CommitCard from '../js/components/CommitCard.js';
import CommitCardList from '../js/components/CommitCardList.js';
import { commitsCardList } from '../js/constants/constants.js';
import { initSlider } from '../js/components/Slider.js';


const gitApi = new GithubApi('https://api.github.com/repos/zinaida-nikolavna/NewsAnalyzer/commits');
const commitList = new CommitCardList(commitsCardList);

gitApi.getCommits()
  .then((data) => {
    data.forEach((item) => {
      commitList.add(new CommitCard(item).create());
    })
    initSlider();
  })
  .catch(error => {
    console.log(error)
  })



export default class DataStorage {
  storage(data) {
    localStorage.setItem('data', JSON.stringify(data));
  }
  title(request) {
    localStorage.setItem('request', JSON.stringify(request));
  }
  getData() {
    return JSON.parse(localStorage.getItem('data'));
  }
  getRequest() {
    return JSON.parse(localStorage.getItem('request'));
  }
}

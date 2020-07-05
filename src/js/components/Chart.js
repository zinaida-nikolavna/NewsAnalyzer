export default class Chart {
  constructor(data, request) {
    this.data = data;
    this.request = request;
  }
  setDate() {
    const date_1 = document.getElementById('graph__date-1');
    const date_2 = document.getElementById('graph__date-2');
    const date_3 = document.getElementById('graph__date-3');
    const date_4 = document.getElementById('graph__date-4');
    const date_5 = document.getElementById('graph__date-5');
    const date_6 = document.getElementById('graph__date-6');
    const date_7 = document.getElementById('graph__date-7');
    const options = { weekday: 'short', day: 'numeric' };

    date_1.textContent = new Date(new Date().setDate(new Date().getDate())).toLocaleDateString("ru-RU", options);
    date_2.textContent = new Date(new Date().setDate(new Date().getDate() - 1)).toLocaleDateString("ru-RU", options);
    date_3.textContent = new Date(new Date().setDate(new Date().getDate() - 2)).toLocaleDateString("ru-RU", options);
    date_4.textContent = new Date(new Date().setDate(new Date().getDate() - 3)).toLocaleDateString("ru-RU", options);
    date_5.textContent = new Date(new Date().setDate(new Date().getDate() - 4)).toLocaleDateString("ru-RU", options);
    date_6.textContent = new Date(new Date().setDate(new Date().getDate() - 5)).toLocaleDateString("ru-RU", options);
    date_7.textContent = new Date(new Date().setDate(new Date().getDate() - 6)).toLocaleDateString("ru-RU", options);

    for (let i = 1; i <= 7; i++) {
      const arrayDate = this.data.articles.filter((item) => {
        return document.getElementById(`graph__date-${i}`).textContent === new Date(item.publishedAt).toLocaleDateString("ru-RU", options);
      });
      console.log(arrayDate);
      const copyarrayDate = arrayDate;
      arrayDate.filter((item) => {
        item.title.toLowerCase().includes(this.request.toLowerCase());
      })
      copyarrayDate.filter((item) => {
        if (item.description !== null) {
          item.description.toLowerCase().includes(this.request.toLowerCase());
        }
      })
      const mentions = arrayDate.length + copyarrayDate.length;
      if (window.matchMedia('(max-width: 1000px)').matches) {
        document.getElementById(`graph__quantity-${i}`).textContent = mentions;
        document.getElementById(`graph__quantity-${i}`).setAttribute('style', `width: ${mentions * 2}%`);
        if (mentions * 2 > 100) {
          document.getElementById(`graph__quantity-${i}`).setAttribute('style', `width: 100%`);
        }
      } else {
        document.getElementById(`graph__quantity-${i}`).textContent = mentions;
        document.getElementById(`graph__quantity-${i}`).setAttribute('style', `width: ${mentions}%`);
      }
    }
  }
  setMonth() {
    const currentMonth = document.getElementById('graph__month');
    const options = { month: 'long' };
    currentMonth.textContent = `(${new Date(new Date().setDate(new Date().getDate())).toLocaleDateString("ru-RU", options)})`;
  }
}

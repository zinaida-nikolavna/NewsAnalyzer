import Swiper from 'swiper';
import '../../../node_modules/swiper/css/swiper.min.css';
export function initSlider() {
  const mySwiper = new Swiper('.swiper__container', {
    slideClass: 'swiper__slide',
    wrapperClass: 'swiper__wrapper',
    pagination: {
      el: '.swiper__pagination',
      bulletClass: 'swipper__pagination-bullet',
      bulletActiveClass: 'swipper__pagination-bullet_active',
    },
    navigation: {
      nextEl: '.swiper__button-next',
      prevEl: '.swiper__button-prev',
    },
    slidesPerGroup: 3,
    loop: true,
    slidesPerView: 'auto',
    centeredSlides: true,
    grabCursor: true,
    breakpoints: {
      320: {
        centeredSlides: false,
        spaceBetween: 8,
      },
      768: {
        centeredSlides: false,
        spaceBetween: 8,
      },
      1440: {
        centeredSlides: true,
        spaceBetween: 16,
      }
    }
  })
}

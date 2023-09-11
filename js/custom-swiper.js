const bigSwiper = new Swiper(".big-examples-swiper", {
  direction: "horizontal",
  loop: false,

  spaceBetween: 40,
  slidesPerView: 2,
  grabCursor: true,
  freeMode: true,

  navigation: {
    nextEl: ".examples-swipe-prev",
    prevEl: ".examples-swipe-next",
  },

  breakpoints: {
    320: {
      direction: "vertical",
      slidesPerView: 8,
      mousewheel: true,
      keyboard: true,
      cssMode: true,
    },
    768: {
      direction: "vertical",
      slidesPerView: 8,
      mousewheel: true,
      keyboard: true,
      cssMode: true,
    },
    1440: {
      direction: "horizontal",
    },
  },
});

const imgSwiper = new Swiper(".img-examples-swiper", {
  direction: "horizontal",
  loop: false,
  spaceBetween: 10,
  slidesPerView: 1,

  navigation: {
    nextEl: ".img-swipe-next",
    prevEl: ".img-swipe-prev",
  },
});

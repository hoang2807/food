
const slideBlogs_detail =
  new Swiper(".qualifications-swiper", {
    direction: "horizontal",
    slidesPerView: 1,
    spaceBetween: 38,
    speed: 1000,
    watchOverflow: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    breakpoints: {
      200: {
        slidesPerView: 1,
        spaceBetween: 16,
      },
      480: {
        slidesPerView: 1,
      },
      992: {
        slidesPerView: 1,
        spaceBetween: 24,
      },
      1200: {
        slidesPerView: 1,
        spaceBetween: 38,
      },
    },
    navigation: {
      nextEl: ".qualifications .swiper-button-next",
      prevEl: ".qualifications .swiper-button-prev",
    },
  }) || false;
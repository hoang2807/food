function changeImage(image) {
  const bigImage = document.getElementById('bigImage')
  bigImage.src = image.src
}

const slideBlogs_detail =
  new Swiper(".related-food .swiper", {
    direction: "horizontal",
    slidesPerView: 3,
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
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 24,
      },
      1200: {
        slidesPerView: 3,
        spaceBetween: 38,
      },
    },
    navigation: {
      nextEl: ".related-food .swiper-button-next",
      prevEl: ".related-food .swiper-button-prev",
    },
  }) || false;
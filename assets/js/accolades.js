document.querySelectorAll(".accolades-slider").forEach((el) => {
  new Swiper(el, {
    loop: true,
    speed: 3000,
    spaceBetween: 30,
    slidesPerView: 1.6,
    allowTouchMove: true,
    autoplay: { delay: 0, disableOnInteraction: false, pauseOnMouseEnter: true },
    breakpoints: {
      576: { slidesPerView: 2.4 },
      768: { slidesPerView: 3.4 },
      1200: { slidesPerView: 5.6 },
    },
  });
});

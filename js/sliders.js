
// شروع swiperjs
var swiper = new Swiper(".swiper-home-slider-farsh", {
    // slidesPerView: 3,
    // spaceBetween: 30,
    breakpoints: {
      0: {
        // موبایل
        spaceBetween: 10,
        slidesPerView: 1,
        loop: true,
      },
      768: {
        // تبلت
        spaceBetween: 10,
        slidesPerView: 3,
        loop: true,
      },
      1024: {
        // دسکتاپ
        spaceBetween: 30,
        slidesPerView: 4,
      },
    },
  });
  
  // پایان swiperjs
  
  // شروع اسلایدر دسته ها
  var swiper = new Swiper(".home-container-category-list-Swiper-moblie", {
    spaceBetween: 5,
  });
  // پایان اسلایدر دسته ها

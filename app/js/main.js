// Вращение заднего фона страницы
const bg = document.querySelector('.main-bg');
let latestScrollY = 0;
let ticking = false;

window.addEventListener('scroll', () => {
  latestScrollY = window.scrollY;
  if (!ticking) {
    window.requestAnimationFrame(() => {
      const angle = latestScrollY * 0.08;
      bg.style.transform = `translate(-50%, -50%) rotate(${angle}deg)`;
      ticking = false;
    });
    ticking = true;
  }
});

const base = {
  loop: false,
  spaceBetween: 20,

}

const introSwiper = new Swiper('.intro__cards', {
  // «десктоп»-режим
  ...base,
  slidesPerView: 4,

  breakpoints: {
    0: {slidesPerView: 1, spaceBetween: 20, centeredSlides: true},
    768: {slidesPerView: 2, spaceBetween: 40, centeredSlides: false},
    993: {centeredSlides: false, slidesPerView: 2.5},
    1200: {centeredSlides: false, slidesPerView: 4},
  },

  pagination: {
    el: '.intro__cards-pagination',
    clickable: true
  }
});

const trustSwiper = new Swiper('.trust__cards', {
  ...base,
  slidesPerView: 4,
  breakpoints: {
    0: {slidesPerView: 1, spaceBetween: 20, centeredSlides: true},
    768: {slidesPerView: 2, spaceBetween: 40, centeredSlides: false},
    993: {centeredSlides: false, slidesPerView: 2.5},
    1200: {centeredSlides: false, slidesPerView: 4},
  },
  pagination: {
    el: '.trust__cards-pagination',
    clickable: true
  }
});

const tariffsSwiper = new Swiper('.conditions-tariffs__cards', {
  ...base,
  slidesPerView: 3,           // desktopSlides = 3
  breakpoints: {
    0: {slidesPerView: 1, spaceBetween: 20, centeredSlides: true},
    768: {slidesPerView: 1.8, spaceBetween: 40, centeredSlides: false},
    993: {centeredSlides: false, slidesPerView: 2},
    1200: {centeredSlides: false, slidesPerView: 3},
  },
  pagination: {
    el: '.conditions-tariffs__cards-pagination',
    clickable: true
  }
});

const conditionsIntroSwiper = new Swiper('.conditions-intro__cards', {
  ...base,
  slidesPerView: 4,
  breakpoints: {
    0: {slidesPerView: 1, spaceBetween: 20, centeredSlides: true},
    768: {slidesPerView: 2, spaceBetween: 40, centeredSlides: false},
    993: {centeredSlides: false, slidesPerView: 2.5},
    1200: {centeredSlides: false, slidesPerView: 4},
  },
  pagination: {
    el: '.conditions-intro__cards-pagination',
    clickable: true
  }
});

const platformSwiper = new Swiper('.platform-intro__cards', {
  ...base,
  slidesPerView: 4,
  breakpoints: {
    0: {slidesPerView: 1, spaceBetween: 20, centeredSlides: true},
    768: {slidesPerView: 2, spaceBetween: 40, centeredSlides: false},
    993: {centeredSlides: false, slidesPerView: 2.5},
    1200: {centeredSlides: false, slidesPerView: 4},
  },
  pagination: {
    el: '.platform-intro__cards-pagination',
    clickable: true
  }
});

const forecastsSwiper = new Swiper('.forecasts-intro__cards', {
  ...base,
  slidesPerView: 4,
  breakpoints: {
    0: {slidesPerView: 1, spaceBetween: 20, centeredSlides: true},
    768: {slidesPerView: 2, spaceBetween: 40, centeredSlides: false},
    993: {centeredSlides: false, slidesPerView: 2.5},
    1200: {centeredSlides: false, slidesPerView: 4},
  },

  pagination: {
    el: '.forecasts-intro__cards-pagination',
    clickable: true
  }
});

const newsSwiper = new Swiper('.news-intro__cards', {
  ...base,
  slidesPerView: 4,
  breakpoints: {
    0: {slidesPerView: 1, spaceBetween: 20, centeredSlides: true},
    768: {slidesPerView: 2, spaceBetween: 40, centeredSlides: false},
    993: {centeredSlides: false, slidesPerView: 2.5},
    1200: {centeredSlides: false, slidesPerView: 4},
  },

  pagination: {
    el: '.news-intro__cards-pagination',
    clickable: true
  }
});

const documentsSwiper = new Swiper('.documents-intro__cards', {
  ...base,
  slidesPerView: 3,

  breakpoints: {
    0: {slidesPerView: 1, spaceBetween: 20, centeredSlides: true},
    768: {slidesPerView: 1.5, spaceBetween: 40, centeredSlides: false},
    901: {slidesPerView: 1.8, spaceBetween: 40, centeredSlides: false},
    993: {slidesPerView: 2.5, centeredSlides: false},
    1200: {slidesPerView: 3, centeredSlides: false},
  },

  pagination: {
    el: '.documents-intro__cards-pagination',
    clickable: true
  }
});

function makeLinkedSwipers(tabsSelector, contentSelector) {
  const section = document.querySelector('.instruments-tabs');
  const container = document.querySelector('.instruments-tabs__container');
  const tabs = document.querySelector(tabsSelector);
  const pages = document.querySelector(contentSelector);
  if (!tabs || !pages || !container || !pages) return;

  const bgList = [
    '../images/instruments-currency-bg.avif',
    '../images/instruments-stocks-bg.avif',
    '../images/instruments-crypto-bg.avif',
    '../images/instruments-commodities-bg.avif',
    '../images/instruments-indices-bg.avif'
  ];

  const isDesktop = window.matchMedia('(pointer: fine) and (hover: hover)').matches;
  // разрешение свайпа только на мобилках
  const allowTouch = !isDesktop;

  const swiperBtns = new Swiper(tabs, {
    slidesPerView: 5,
    spaceBetween: 10,
    watchSlidesProgress: true,
    slideToClickedSlide: true,		// Переключение по клику


    freeMode: allowTouch,			// только на мобилках - свободное листание списка
    allowTouchMove: allowTouch,		// полностью дизейбл перетаскивание
    simulateTouch: true,

    breakpoints: {
      320: {slidesPerView: 2},
      640: {slidesPerView: 3},
      768: {slidesPerView: 4},
      1024: {slidesPerView: 5},
    }
  });

  const swiperPage = new Swiper(pages, {
    spaceBetween: 100,
    thumbs: {
      swiper: swiperBtns,
    },
    simulateTouch: true,
    allowTouchMove: allowTouch,

  });

  // удаление tabindex у оберток, чтобы Tab не мог зацепиться за них
  if (isDesktop) {
    swiperBtns.slides.forEach(s => s.removeAttribute('tabindex'));
    swiperPage.slides.forEach(s => s.removeAttribute('tabindex'));
  }

  // функция, которая ставит или убирает фон
  function updateBackground(idx) {
    const url = bgList[idx] || bgList[0];
    if (window.innerWidth > 500) {
      container.style.transition = 'background-image .4s ease-in-out';
      container.style.backgroundImage = `url('${url}')`;
    } else {
      // убираем bg-картинку
      container.style.backgroundImage = 'none';
    }
  }

  // смена фона у контейнера при каждом слайде
  swiperPage.on('slideChange', () => {
    updateBackground(swiperPage.activeIndex);
  });

  // при изменении окна
  window.addEventListener('resize', () => {
    updateBackground(swiperPage.activeIndex);
  });

  // начальная установка
  updateBackground(swiperPage.activeIndex)
}

makeLinkedSwipers('.swiper-btns', '.swiper-page');
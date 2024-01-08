$(function () {
  // 헤더하단메뉴
  $('#header .gnb')
    .on('mouseenter', function () {
      $('#header').addClass('on');
    })
    .on('mouseleave', function () {
      $('#header').removeClass('on');
    });

  // 메인슬라이더
  var mainSlider = new Swiper('.main_slider', {
    loop: true,
    spaceBetween: 160,
    loopAdditionalSlides: 1,
    speed: 900,
    simulateTouch: true,

    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    scrollbar: {
      el: '.swiper-scrollbar',
    },
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
  });

  // 인기메뉴 슬라이더
  var mainPopularSlide = new Swiper('.main_popular_slider', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    loop: true,
    // speed: 200,
    // spaceBetween : 30,

    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 234,
      modifier: 1,
      slideShadows: false,
    },
    navigation: {
      nextEl: '.swiper-button-next2',
      prevEl: '.swiper-button-prev2',
    },
    autoplay: {
      delay: 5000,
      disableOnInteraction: true,
    },
  });

  // 배라대표메뉴 슬라이더
  var mainBestSlider = new Swiper('.main_best_slider', {
    effect: 'coverflow',
    centeredSlides: true,
    slidesPerView: 'auto',
    spaceBetween: -100,
    loop: true,

    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 450,
      modifier: 1,
      slideShadows: true,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
  });

  // 탑버튼
  $('#footer .top_wrap').hide();
  $(function () {
    $(window).scroll(function () {
      if ($(this).scrollTop() > 200) {
        $('.top_wrap').fadeIn();
      } else {
        $('.top_wrap').fadeOut();
      }
    });
    // 패밀리사이트
    $('.family_wrap').on('click', function () {
      $(this).find('.family').slideToggle();
    });
    $('#footer .top_wrap').click(function () {
      $('html').animate({ scrollTop: 0 }, 500);
      return false;
    });
  });
  $(function () {
    $('.btn_wrap').on('click', function () {
      $(this).find('.tab').slideToggle();
    });
  });
});

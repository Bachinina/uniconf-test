$(document).ready(function () {
  // SLIDERS
  const prevArrow = '<button class="slider-btn prev" type="button" aria-label="Предыдущий слайд"><svg><use xlink:href="#icon-arrow-left"></use></svg></button>';
  const nextArrow = '<button class="slider-btn next" type="button" aria-label="Следующий слайд"><svg><use xlink:href="#icon-arrow-right"></use></svg></button>';
  const paging = function (slider, i) {
    const current = i + 1;

    return (
      '<button class="slider-pag">${current}' + current + '</button>'
    );
  };


  $('[data-main-slider]').each(function () {
    const mainSlider = $(this);
    mainSlider.slick({
      appendArrows: $(this).closest('[data-main-slider-wrap]').find('[data-main-slider-control]'),
      appendDots: $(this).closest('[data-main-slider-wrap]').find('[data-main-slider-control]'),
      fade: true,
      speed: 1100,
      draggable: false,
      waitForAnimate: true,
      lazyLoad: 'ondemand',
      prevArrow: prevArrow,
      nextArrow: nextArrow,
      pauseOnHover: false,
      arrows: true,
      dots: true,
      autoplay: true,
      autoplaySpeed: 5000,
      customPaging: paging,
      responsive: [{
        breakpoint: 1199,
        settings: {
          draggable: true,
        }
      }]
    });
  })



});

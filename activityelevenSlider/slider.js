$('.slider').bxSlider({
  auto: false,
  pager: true,
  pagerType: 'short',
  minSlides: 3,
  maxSlides: 3,
  moveSlides: 1,
  slideWidth: 800,
  slideMargin: 40
});


$(document).ready(function() {
  var slider = $('#slider').bxSlider({
    pagerCustom: '#pager',
    onSliderLoad: function(currentIndex) {
      updatePager(currentIndex + 1);
    },
    onSlideAfter: function($slideElement, oldIndex, newIndex) {
      updatePager(newIndex + 1);
    },
    pause: 3000, // Set the time between transitions to 3 seconds
    randomStart: true, // Select the first image randomly
    moveSlides: 1 // Move one slide at a time
  });

  // Randomize the starting slide
  var randomSlide = Math.floor(Math.random() * slider.getSlideCount());
  slider.goToSlide(randomSlide);

  function updatePager(currentSlide) {
    $('#pager').text(currentSlide + ' / ' + slider.getSlideCount());
  }
});

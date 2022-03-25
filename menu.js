$(function() {
  $('.header-btn').on('click', function() {
    $('.header-btn__bar1, .header-btn__bar2').toggleClass('open');
    $('.header-btn__text').toggleClass('active');
  })
});

console.log('hello');
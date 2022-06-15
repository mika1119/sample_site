// $(function() {
//   $('.header-btn').on('click', function() {
//     $('.header-btn__bar1, .header-btn__bar2').toggleClass('open');
//     $('.header-btn__text').toggleClass('active');
//     $(".is-open").slideToggle();
//   })
// });

console.log('hello');

let btn = document.getElementById('header-btn');
let nav = document.getElementById('nav');

// let text = document.getElementById('header-btn__text');

// let bar1 = document.getElementById('header-btn__bar1');
// let bar2 = document.getElementById('header-btn__bar2');

btn.addEventListener('click', e => {
  // text.classList.toggle('active');
  // bar1.classList.toggle('open');
  // bar2.classList.toggle('open');
  btn.classList.toggle('is-open');
  nav.classList.toggle('is-open');
})
// $(function() {
//   $('.header-btn').on('click', function() {
//     $('.header-btn__bar1, .header-btn__bar2').toggleClass('open');
//     $('.header-btn__text').toggleClass('active');
//     $(".is-open").slideToggle();
//   })
// });

// console.log('hello');

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

// let hello = "hello js!!";
// // window.alert(hello);
// console.log(hello);
// hello = "hello world!!"
// console.log(hello);

// const arry = [1,2,3,4];
// console.log(arry);
// arry.push(5);
// console.log(arry);
// arry[1] = 1 + 2;
// console.log(arry);

const webapp = document.getElementById('webapp');
console.log(webapp);
console.log(webapp.innerHTML);
console.log(webapp.textContent);

webapp.textContent = "hello world!";

// const catchContainer = document.getElementById("catch");
// console.log(catchContainer);
// console.log(catchContainer.innerHTML);
// console.log(catchContainer.textContent);

const webtxt = document.getElementById('webtxt');
console.log(webtxt);
webtxt.textContent = 2 + 5;

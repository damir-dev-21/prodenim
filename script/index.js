
const body = document.querySelector('body')
const hamburger = document.querySelector('.header__body__toggle');
const nav = document.querySelector('.nav');


hamburger.addEventListener('click',()=>{
  console.log("!");
  nav.classList.toggle('open')
  hamburger.classList.toggle("changed")
})



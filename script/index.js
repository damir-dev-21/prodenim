const body = document.querySelector('body')
const hamburger = document.querySelectorAll('.header__body__toggle');
const sliderPrev = document.querySelector('.swiper-button-prev')
const sliderNext = document.querySelector('.swiper-button-next')
const nav = document.querySelectorAll('.nav');
const main = document.querySelector(".main")
const main_title = document.querySelector(".main__title").querySelector("h3")
const images = document.querySelectorAll(".photos")
const modal = document.querySelector('.modal-img')
const overlay = document.querySelector('.overlay')



images.forEach(e=>{
 
   let u = e.querySelectorAll("img")

    u.forEach(i=>{
      i.addEventListener('click',()=>{
        modal.classList.add('active')
        overlay.classList.add('active')
        modal.style.backgroundImage = `url(${i.getAttribute("src")})`
        modal.style.backgroundRepeat = 'no-repeat'
        modal.style.backgroundPosition = 'center center'
        modal.style.backgroundSize = 'cover'
        console.log(i.getAttribute("src"));
      })
    })
  
})



const width = document.documentElement.clientWidth
const map = document.getElementById('map')

if(width === 900){
  map.innerHTML = 
  `
  <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6122.4243173051445!2d66.7210773!3d39.891882!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f4d738e791c37f5%3A0xd6960063af50b670!2sAfrasiab%20Jeans%20Textile%20Ltd.!5e0!3m2!1sru!2s!4v1637054035594!5m2!1sru!2s" height="450" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
  `
}



let autoplay = {
  delay: 6000
}

hamburger.forEach(i=>{

  i.addEventListener('click', () => {
    nav.forEach(e=>{
      i.classList.toggle("changed")
      e.classList.toggle('open')
      sliderNext.classList.toggle('slider-close')
      sliderPrev.classList.toggle('slider-close')
      autoplay.delay = false
      sw(autoplay.delay)
    })
  })
})


function sw(auto){
  const swiper = new Swiper(".mySwiper", {
    cssMode: true,
    autoplay: auto,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
    },
    loop: true,
    loopedSlides: 3,
    mousewheel: true,
    keyboard: true,
  });
}

sw(autoplay.delay)


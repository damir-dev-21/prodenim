
const body = document.querySelector('body')
const hamburger = document.querySelector('.header__body__toggle');
const nav = document.querySelector('.nav');
const main = document.querySelector(".main")
const main_title = document.querySelector(".main__title").querySelector("h3")

hamburger.addEventListener('click',()=>{
  nav.classList.toggle('open')
  hamburger.classList.toggle("changed")
})

function changeBgSst(){
  main.classList.remove("main-ajt")
  main.classList.remove("main-mst")
  main.classList.add("main-sst")
  main_title.textContent = "SST"
}
function changeBgMst(){
  main.classList.remove("main-ajt")
  main.classList.remove("main-sst")
  main.classList.add("main-mst")
  main_title.textContent = "MST"

}
function changeBgAjt(){
  main.classList.remove("main-mst")
  main.classList.remove("main-sst")
  main.classList.add("main-ajt")
  main_title.textContent = "AJT"
}

function start(){
  changeBgSst()
}

start()

// ---
const hamMenuBtn = document.querySelector('.header__main-ham-menu-cont')
const smallMenu = document.querySelector('.header__sm-menu')
const headerHamMenuBtn = document.querySelector('.header__main-ham-menu')
const headerHamMenuCloseBtn = document.querySelector(
  '.header__main-ham-menu-close'
)

const headerSmallMenuLinks = document.querySelectorAll('.header__sm-menu-link')

hamMenuBtn.addEventListener('click', () => {
  if (smallMenu.classList.contains('header__sm-menu--active')) {
    smallMenu.classList.remove('header__sm-menu--active')
  } else {
    smallMenu.classList.add('header__sm-menu--active')
  }
  if (headerHamMenuBtn.classList.contains('d-none')) {
    headerHamMenuBtn.classList.remove('d-none')
    headerHamMenuCloseBtn.classList.add('d-none')
  } else {
    headerHamMenuBtn.classList.add('d-none')
    headerHamMenuCloseBtn.classList.remove('d-none')
  }
})

for (let i = 0; i < headerSmallMenuLinks.length; i++) {
  headerSmallMenuLinks[i].addEventListener('click', () => {
    smallMenu.classList.remove('header__sm-menu--active')
    headerHamMenuBtn.classList.remove('d-none')
    headerHamMenuCloseBtn.classList.add('d-none')
  })
}

// ---
const headerLogoConatiner = document.querySelector('.header__logo-container')

headerLogoConatiner.addEventListener('click', () => {
  location.href = 'index.html'
})


// CAROUSEL JS

let slideCount = 1;

slideDisplay(slideCount);

function slideAll(num) {
  slideDisplay(slideCount += num);
}

function recentSlide(num) {
  slideDisplay(slideCount = num);
}

function slideDisplay(num) {
    let i;
    let slideEl =  document.getElementsByClassName("slide-content");
    let boxEl =  document.getElementsByClassName("box");
    if (num > slideEl.length) {
          slideCount = 1 
        }
    if (num < 1) {
        slideCount = slideEl.length
        }
        
    for (i = 0; i < slideEl.length; i++) {
      slideEl[i].style.display = "none";
    }
    for (i = 0; i < boxEl.length; i++) {
      boxEl[i].className = boxEl[i].className.replace("active", "");
    }
    slideEl[slideCount - 1].style.display = "block";
    boxEl[slideCount - 1].className += " active";
}


// Nav-fixed
const header = document.querySelector('header');
const backTop = document.querySelector('#back-top')

window.onscroll = () => {
   if (window.scrollY > 0) {                                                // kalo posisinya di paling atas, value scrollY = 0, kalo discroll valuenya naik
      header.classList.add('nav-fixed');
      backTop.classList.remove('hidden');
      backTop.classList.add('flex');
   } else {
      header.classList.remove('nav-fixed');
      backTop.classList.remove('flex');
      backTop.classList.add('hidden');
   }
}

// ----- Hamburger -----
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', () => {
   hamburger.classList.toggle('hamburger-active');
   navMenu.classList.toggle('hidden');
})

// Klik di luar hamburger
window.addEventListener('click', (event) => {
   if (event.target != hamburger && event.target != navMenu) {
      hamburger.classList.remove('hamburger-active');
      navMenu.classList.add('hidden');
   }
})

// ----- Dark Mode -----
const darkToggle = document.querySelector('.dark-toggle');
const html = document.querySelector('html');

darkToggle.addEventListener('click', () => {
   darkToggle.classList.toggle('dark-toggle-animate');
   html.classList.toggle('dark');

   // biar pas direfresh, status dark modenya tetep sesuai pilihan dan ga kereset - (dokumentasi dark mode)
   (html.classList.contains('dark')) ? localStorage.theme = 'dark' : localStorage.theme = 'light';
})

// pindahin posisi toggle sesuai mode (in case kalo halaman direfresh)
if (localStorage.theme === 'dark'){
   darkToggle.classList.add('dark-toggle-animate');
 } 


// ----- Page read/view button -----
const blog1 = document.querySelector('.blog-page-1');
const blog2 = document.querySelector('.blog-page-2');
const blog3 = document.querySelector('.blog-page-3');

const projectLaravel = document.querySelector('.project-page-laravel');

function pageReadBtn (pageNumber) {
   pageNumber.classList.replace('hidden', 'flex')
}
function pageCloseBtn (pageNumber) {
   pageNumber.classList.replace('flex', 'hidden')
}


// ----- View images -----
const jumboImg = document.querySelector('.jumbo-img');
const thumbnailList = document.querySelector('.thumbnail-list');
const thumbnailsImg = document.querySelectorAll('.thumbnail-img');
const firstThumbnail = thumbnailList.firstElementChild.querySelector('img');

firstThumbnail.classList.add('thumbnail-active');

thumbnailList.addEventListener('click', (e) => {
   if(e.target.className == 'thumbnail-img') {
      jumboImg.src = e.target.src;

      jumboImg.classList.add('fade')
      setTimeout(() => {
         jumboImg.classList.remove('fade')
      }, 500);

      thumbnailsImg.forEach((thumbnail) => {
         thumbnail.classList.remove('thumbnail-active');                                    // paksa semua .thumbnail yang memiliki .active, menjadi .thumbnail aja (reset)         
      });
      e.target.classList.add('thumbnail-active');
   }
})
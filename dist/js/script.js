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

// Hamburger
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

// Dark Mode
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
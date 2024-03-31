// Navbar
const header = document.querySelector('header');
const menu = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
  header.classList.toggle('shadow', window.scrollY > 0);
});
menu.onclick = () => {
  navbar.classList.toggle('active');
}
window.onscroll = () => {
  navbar.classList.remove('active');
}

// Dark Mode
const darkmode = document.querySelector('#darkmode');
const logo = document.querySelector('.logo-img')
darkmode.addEventListener('click', () => {
  if(darkmode.classList.contains('bx-moon')){
    darkmode.classList.replace('bx-moon','bx-sun');
    document.body.classList.add('active');
    logo.src = './image/logo-darkmode.svg'
  }else{
    darkmode.classList.replace('bx-sun','bx-moon');
    document.body.classList.remove('active');
    logo.src = './image/logo-lightmode.svg'
  }
})

// Footer
document.getElementById('year').innerText = new Date().getFullYear();

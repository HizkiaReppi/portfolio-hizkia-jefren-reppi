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

const form = document.getElementById('contact-form');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  Swal.fire({
    title: 'Kirim Pesan Berhasil',
    text: 'Pesan Anda Telah Saya Terima, Terimakasih Telah Menghubungi Saya',
    icon: 'success'
  });
});


// Scroll Up
const scrollUp = document.querySelector('#scroll-up');

window.addEventListener('scroll', () => {
  if(window.scrollY > 100){
    scrollUp.style.display = 'flex';
  } else {
    scrollUp.style.display = 'none';
  }
});

scrollUp.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

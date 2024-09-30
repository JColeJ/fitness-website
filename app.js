let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
  menu.classList.toggle('bx-x');
  navbar.classList.toggle('active');
}

window.onscroll = () => {
  menu.classList.remove('bx-x');
  navbar.classList.remove('active');
}

// Typing Text Code

const typed = new Typed('.multiple-text', {
  strings: ['Physical Fitness', 'Weight Loss', 'Bulking', 'Athleticism', 'Endurance', 'Weight Lifting'],
  typeSpeed: 70,
  backSpeed: 70,
  backDelay: 1000,
  loop: true,
});
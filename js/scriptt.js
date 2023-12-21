const menuToogle = document.querySelector('.menu-toggle input'); 
const nav = document.querySelector('nav ul');


menuToogle.addEventListener('click', function() {
nav.classList.toggle('slide');
});
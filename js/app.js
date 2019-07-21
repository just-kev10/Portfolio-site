/*
* Open the drawer when the menu ison is clicked.
*/
var menu = document.querySelector('#menu');
var main = document.querySelector('main');
var drawer = document.querySelector('.nav');
var navitem1 = document.querySelectorAll('.nav__item')[0];
var navitem2 = document.querySelectorAll('.nav__item')[1];
var navitem3 = document.querySelectorAll('.nav__item')[2];

menu.addEventListener('click', function (e) {
    drawer.classList.toggle('open');
    e.stopPropagation();
});
main.addEventListener('click', function () {
    drawer.classList.remove('open');
});

navitem1.addEventListener('click', function () {
    drawer.classList.remove('open');
});
navitem2.addEventListener('click', function () {
    drawer.classList.remove('open');
});
navitem3.addEventListener('click', function () {
    drawer.classList.remove('open');
});




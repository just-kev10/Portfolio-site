/*
* Open the drawer when the menu ison is clicked.
*/
var menu = document.querySelector('#menu');
var main = document.querySelector('main');
var drawer = document.querySelector('.nav');
var navitem = document.querySelectorAll('.nav__item')

menu.addEventListener('click', function (e) {
    drawer.classList.toggle('open');
    e.stopPropagation();
});

main.addEventListener('click', function () {
    drawer.classList.remove('open');
});

navitem.forEach(function (event) {
    event.addEventListener('click', function () {
        drawer.classList.remove('open');
    });
});
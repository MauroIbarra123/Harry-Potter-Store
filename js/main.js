const menu_btn = document.querySelector('.nav__icon');
const close_btn = document.querySelector('.nav__close-icon');
const menu = document.querySelector('.nav__list');
const menu__left = document.querySelector('.nav__menu-izq');
const nav_bg_overlay = document.querySelector('.bg-overlay');
const categories = document.querySelector('.categories')
const sublist = document.querySelector('.nav__sublist')
const contact = document.querySelector('.contact');



const navOpen = ()=>{
    menu.classList.add('show');
    menu__left.classList.add('show')
    nav_bg_overlay.classList.add('active');
    //Lo de abajo sirve para que no podamos scrollear en el nav 
    menu_btn.classList.add('active');
    document.body.style = 'visibility: visible; height:100vh; width:100vw; overflow:hidden;'; 
    close_btn.style = "opacity: 1";
    sublist.classList.toggle('on');
    contact.classList.toggle('on');
}

const navClose = ()=>{
    menu.classList.remove('show');
    menu__left.classList.remove('show');
    nav_bg_overlay.classList.remove('active');
    document.body.style = 'visibility: visible; height:initial; width:100%; overflow-x:hiden;';
    close_btn.style = "opacity: 0";
    sublist.classList.toggle('on');
    contact.classList.toggle('on');

}

const openItem = ()=>{
    sublist.classList.toggle('on');
    contact.classList.toggle('on');
    menu.classList.toggle('on');
}





menu_btn.addEventListener('click',navOpen);
close_btn.addEventListener('click', navClose);
nav_bg_overlay.addEventListener('click', navClose);
categories.addEventListener('click', openItem)
close_btn.addEventListener('click', closeItem)



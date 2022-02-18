const carritoB4 = document.querySelector(".nav__carrito");
const carrito = document.querySelector("#carrito");
const close = document.querySelector('.fa-xmark');

const carritoOpen = ()=>{
    carrito.classList.add('open');
    document.body.style = 'visibility: visible; height:100vh; width:100vw; overflow:hidden;'; 


} 
const carritoClose = ()=>{
    carrito.classList.remove('open');
    document.body.style = 'visibility: visible; height:initial; width:100%; overflow-x:hiden;';
} 

carritoB4.addEventListener('click', carritoOpen);
close.addEventListener('click', carritoClose);
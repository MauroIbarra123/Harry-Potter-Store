const carritoB1 = document.querySelector(".header__carrito");
const carritoB2 = document.querySelector(".nav2-carrito");
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

carritoB1.addEventListener('click', carritoOpen);
carritoB2.addEventListener('click', carritoOpen);
close.addEventListener('click', carritoClose);

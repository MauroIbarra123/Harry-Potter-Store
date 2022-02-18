slider = document.querySelector('.slider__list');
slider2 = document.querySelector('.slider__list2');
slider3 = document.querySelector('.slider__item:nth-child(3)');
window.addEventListener('load', function(){
 new Glider(slider, {
     slidesToShow: 3,
     slidesToScroll: 1,
     dots: '.slider__indicadores1',
     arrows: {
         prev: '.slider__anterior1',
         next: '.slider__siguiente1'
     }
 });
 new Glider(slider2, {
    slidesToShow: 3,
    slidesToScroll: 2,
    dots: '.slider__indicadores2',
    arrows: {
        prev: '.slider__anterior2',
        next: '.slider__siguiente2'
    }
});
});

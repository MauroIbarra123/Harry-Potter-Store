// SCROLL BAR
header_nav = document.querySelector('.header__row1')
document.addEventListener('scroll', ()=>{
    var scroll_position = window.scrollY
    if (scroll_position > 100){

        header_nav.style.backgroundColor = "#29323c"; 
        header_nav.style.boxShadow = "2px 2px 10px #121212";

    }
    else{
        header_nav.style.backgroundColor = "transparent";
        header_nav.style.boxShadow = "none";
    }
})
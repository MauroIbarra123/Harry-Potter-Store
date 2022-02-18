// SCROLL BAR
nav400 = document.querySelector('.nav__400')

document.addEventListener('scroll', ()=>{
    var scroll_position = window.scrollY
    if (scroll_position > 100){
        nav400.style.backgroundColor = "#29323c"; 
        nav400.style.boxShadow = "2px 2px 10px #121212";

    }
    else{
        nav400.style.backgroundColor = "transparent";
        nav400.style.boxShadow = "none";
    }
})
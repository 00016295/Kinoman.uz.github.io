// sidebar
let btn = document.querySelector('#btn')
    let sidebar = document.querySelector('.sidebar')
    btn.onclick = function (){
        sidebar.classList.toggle('active')
    };
// poster-slider
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n){
    showSlides(slideIndex += n);
}

function currentSlide(n){
    showSlides(slideIndex = n);

}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("container");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1}
    if (n < 1) { slideIndex = slides.length }
    for( i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    } 

    slides[slideIndex - 1].style.display = "block";
}


var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {

  let slides = document.getElementsByClassName("carousel__slide");
  let dots = document.getElementsByClassName("carousel__point");

  if( n > slides.length) {
    slideIndex = 1
  }
  if( n < 1) {
    slideIndex = slides.length
  }
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace("carousel__active-dot", "")
    // slides[i].className = slides[i].className.replace("carousel__slide-active", "")
  }
  slides[slideIndex - 1].style.display = 'block';
  // slides[slideIndex - 1].className += ' carousel__slide-active';
  dots[slideIndex - 1].className += ' carousel__active-dot';
}
 

// setInterval( plusSlides, 20000,slideIndex);
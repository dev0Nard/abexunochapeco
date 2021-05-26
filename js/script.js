const header = document.getElementById('header');
const toggle = document.getElementById('toggle');
const navbar = document.getElementById('navbar');

document.onclick = function(e){
    if(e.target.id !== 'header' && e.target.id !== 'toggle' && e.target.id !== 'navbar'){
        toggle.classList.remove('active');
        navbar.classList.remove('active');
    }
}

toggle.onclick = function(){
    toggle.classList.toggle('active');
    navbar.classList.toggle('active');
}


//slides

const countries = document.querySelector(".countries"),
  sports = document.querySelector(".sports"),
  countriesSlider = document.querySelector(".main__slider--countries"),
  sportsSlider = document.querySelector(".main__slider--sports"),
  main = document.querySelector(".main");

countries.addEventListener("click", function() {
  countriesSlider.style.visibility = "visible";
  sportsSlider.style.visibility = "hidden";
  main.classList.remove("main--sports");
  this.classList.add("active");
  sports.classList.remove("active");
});

sports.addEventListener("click", function() {
  countriesSlider.style.visibility = "hidden";
  sportsSlider.style.visibility = "visible";
  main.classList.add("main--sports");
  this.classList.add("active");
  countries.classList.remove("active");
});

$(".main__slider").slick({
  centerMode: true,
  infinite: false,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: false,
  initialSlide: 2,
  responsive: [
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 1,
        fade: true
      }
    }
  ]
});

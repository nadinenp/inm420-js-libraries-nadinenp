// HERO 
// Swiper
document.addEventListener("DOMContentLoaded", function () {
    var swiper = new Swiper(".mySwiper", {
      pagination: {
        el: ".swiper-pagination",
        type: "fraction",
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  });

// MAIN
// Flickity
$(document).ready(function() {
    // Flickity initialization
    $('.main-carousel').flickity({
      // options
      cellAlign: 'left',
      contain: true
    });
});
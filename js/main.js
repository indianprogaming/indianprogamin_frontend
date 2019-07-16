$(document).ready(function(){
    $(".owl-carousel").owlCarousel(
      {
        items : 4,
        dots : true,
        autoplay : true,
        autoplayTimeout : 2000,
        responsiveClass : true,
        responsive : {
          0:{
            items:1,
            nav:false
        },
        768:{
            items:4,
            nav:false,
            loop:false
        }
        }
      }
    );
     });
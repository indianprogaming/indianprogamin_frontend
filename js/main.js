$(document).ready(function(){
    $(".upcoming-matches-slider").owlCarousel(
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
    $(".top-game-slider").owlCarousel(
      {
        items : 6,
        dots : true,
        autoplay:true,
        autoplayTimeout: 4000,
        responsiveClass:true,
        responsive:{
          0:{
            items:2,
            nav:false
        },
        768:{
            items:6,
            nav:false,
            loop:false
        }
        }
      }
    );
     });
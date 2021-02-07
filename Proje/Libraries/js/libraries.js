$(function(){
  $('.slider').owlCarousel({
    items: 4,
          margin:10,
          responsiveClass:true,
					loop: true,
					nav: true,
					dots: true,
					autoplay: false,
					navSpeed: 1000,
					smartSpeed: 2000,
					navText:["<i class='fas fa-arrow-left'></i>","<i class='fas fa-arrow-right'></i>"],
          responsive:{
            0:{
              items:1,
            },
            400:{
              items:1,
            },
            600:{
              items:2,
            },
            700:{
              items:2,
            },
            1000:{
              items:3,
      
            },
            1300:{
              items:3,
      
            },
            1900:{
              items:3,
            },
          },
        })
})
$(function(){
  
  $('.testimonials-slider').owlCarousel({
    items: 4,
          margin:10,
          responsiveClass:true,
          loop: true,
          nav: true,
          dots: true,
          autoplay: false,
          navSpeed: 1000,
          smartSpeed: 2000,
          navText:["<i class='fas fa-arrow-left'></i>","<i class='fas fa-arrow-right'></i>"],
          responsive:{
            0:{
              items:1,
            },
            400:{
              items:1,
            },
            600:{
              items:2,
            },
            700:{
              items:2,
            },
            1000:{
              items:3,
      
            },
            1300:{
              items:4,
      
            },
            1900:{
              items:4,
            },
          },
        })
})







$(document).ready(function(){

$('a[href^="#"]').click(function(){ 
let anchor = $(this).attr('href');  
$('html, body').animate({           
scrollTop:  $(anchor).offset().top-190
}, 600);                           
});


	 $('.slider').slick({
	  infinite: true,
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  dots: false,
	  arrows: true,
	  prevArrow: $('.teachers__prev'),
	  nextArrow: $('.teachers__next'),
	  responsive: [
	  {
      breakpoint: 3000,
      settings: {
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
      }
    }
  ]
	});

	 $('.slider-two').slick({
	  infinite: true,
	  slidesToShow: 4,
	  slidesToScroll: 1,
	  dots: false,
	  arrows: true,
	  prevArrow: $('.reviews__prev'),
	  nextArrow: $('.reviews__next'),
	  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 834,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 709,
      settings: {
        slidesToShow: 1,
        autoWidth:true
      }
    }
  ]
	});
});
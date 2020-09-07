
$(document).ready(function(){
  function mA1Helper(options) {
        this.options = $.extend({           
            init: true,
        }, options);
        

        this.clicker = function() {
            var elements = $('[data-click="true"]');
            for (var i = 0; i < elements.length; i++) {
                $(elements[i]).on("click", function() {
                    $($(this).data('target')).show();

                    $($(this).data('target')).children().first().on('click', function(e) {
                        e.stopPropagation();
                    });

                    $($(this).data('target')).on('click', function() {
                        $(this).hide();
                    });
                });
            }
        }

        this.toggleClick = function() {
            var elements = $('[data-toggle="true"]');
            for (var i = 0; i < elements.length; i++) {
                $(elements[i]).on("click", function() {
                    $($(this).data('target')).slideToggle();
                });
            }
        }


     
        
        this.clicker();
        this.toggleClick();
    }
      window.onload = function () {   
      if(ymaps.geolocation.country=="Россия"){
            jQuery(".city-case").lvovich.cityIn(ymaps.geolocation.city);
      }else{
            jQuery(".city-case").text("странах СНГ");
      }
    }

    $(function() {
        (new mA1Helper({
            
        }));
    });

 $(document).ready(function() {

        $('.confident-link').click(function() {
            $('.hidden-conf').show();
            if ($(window).height() < 760) {
                $('.conf-info').css({
                    'height': ($(window).height() - 120),
                    'overflow-y': 'scroll'
                });
            };
            return false;
        });
        $('.close-conf').click(function() {
            $('.hidden-conf').hide();
            return false;
        });
        if ($('select').length) {} else {
            $('.c-s').css({
                'display': 'none'
            })
        }


    });
    $('.close-mouse').on('click', function(event) {
        event.preventDefault();
        $(".popup-callback").hide();
        $(".popup-phone").hide();
        $(".modal_mouse_out").hide();
    });
    $('.mouse_moved').mouseleave(function(){
    var displayP1 = $(".popup-phone").css('display');
    var displayP2 = $(".popup-callback").css('display');
    if ( displayP1 == 'none' && displayP2 == 'none'){
        $('.modal_mouse_out').show();
    }
    else{
        $('.modal_mouse_out').hide();
    }
});

    $('.popup-mouseleave .close-modal,.popup-mouseleave .close-img').on('click', function(event) {
        event.preventDefault();
        $('.popup-mouseleave').addClass('hide');
    });
    $('.close-phone').click(function(){
       $('.popup-phone').hide();
    });

     var countryCodeLocation = $("input[name='country_code']").val(); 

	var url_site= document.location.href;
    const url = new URL(url_site);
	if(url.searchParams.get('callback')!=null){
		alert('Есть параметр callback, со значением:' + url.searchParams.get('callback')); 
	}


	var nDate = new Date();
	nDate.setMonth(nDate.getMonth()); 
	nDate = nDate.valueOf();
	nDate = +nDate + 172800 * 1000;
	nDate = new Date(nDate);
	var monthA=['01','02','03','04','05','06','07','08','09','10','11','12'];
	var date= nDate.getDate() + "." + monthA[nDate.getMonth()] + "." + nDate.getFullYear();
	$(".x_price_previous").text(date);


    var state_popup= true;
    $('body').mouseleave(function(){
    	if(state_popup){
  				$('.popup-sample').show(100);
  				state_popup= false;
  		}
	});

	$(".close").click(function() {
  		$('.popup-sample').hide(100);
	});    

    localStorage.test;
    if(localStorage.test==false){
    	localStorage.test= 60;
    }

    $(".lastpack").text(localStorage.test);
	function timeCounter(){
		if(localStorage.test>7){ 
			--localStorage.test;			
	  		$(".lastpack").text(localStorage.test);
	 			setTimeout(arguments.callee,3000);
	  		}
  		}  
  		setTimeout( timeCounter,3000 );
  		$.mask.definitions['9'] = false;
		$.mask.definitions['5'] = "[0-9]";
  		$(".input-form[name='phone']").mask("+39 (555) 55-55-555");

});

   

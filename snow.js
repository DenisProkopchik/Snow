$(document).ready(function(){
	$(window).scroll(function() {
		var height = $(window).scrollTop();
	  if(height > 5){
			$('header').addClass('header-scroll');
		} else{
			$('header').removeClass('header-scroll');
		}	if(height > 5){
			$('.header-link').addClass('header-link-scroll');
		} else{
			$('.header-link').removeClass('header-link-scroll');
		}	if(height > 5){
			$('.header-logo-top').addClass('header-logo-white');
		} else{
			$('.header-logo-top').removeClass('header-logo-white');
			}	if(height > 5){
			$('.bar').addClass('burger-scroll');
		} else{
			$('.bar').removeClass('burger-scroll');
		}	
	});	
  
	$('.burger').click(function(event){
		$('.header-right').toggleClass('header-mobile');
   	$('body').toggleClass('lock');
   	$('.footer-top').toggleClass('footer-top-menu');
   	var heightMenu = $(window).scrollTop();
   		if (heightMenu < 5) {
   			$('.bar').toggleClass('.burger-scroll-mobile');
   			$('.header-logo-top').toggleClass('.header-logo-mobileWhite');
   		} else{
   			$('.bar').toggleClass('.burger-scroll-mobile, burger-scroll');
   			$('.header-logo-top').toggleClass('.header-logo-mobileWhite 	header-logo-white');
   		}
   	});

	$('.header-link').click(function(event){
		$('body').removeClass('lock');
		$('.header-right').removeClass('header-mobile');
		document.getElementById('checkbox2').checked = false;{
			$('body').removeClass('lock');
			$('.header-logo-top').removeClass('.header-logo-mobileWhite');
		}
	});	
});
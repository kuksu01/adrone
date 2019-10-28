// JavaScript Document




	$(document).ready(function(e) {
		/* desktop-header-animate */
		$('.fixed-nav-box').css('margin-top', '0px').hide(0);	
		
		$(window).scroll(function( ) { 
			if($(this).scrollTop( ) > 140) {
				$('.top-nav-box').css('margin-top', '-75px').css('z-index', '1');
				$('.fixed-nav-box').css('margin-top', '-75px').css('opacity', '1').css('z-index', '2').show(0);	
			}else {
				$('.top-nav-box').css('margin-top', '0px').css('z-index', '2');
				$('.fixed-nav-box').css('margin-top', '0px').css('opacity', '0').css('z-index', '1').show(0);
			}
		});
		
		
		
		$('.top-main-menu li').mouseover(function( ) {
			$(this).find('.top-sub-menu').stop( ).fadeIn(80);
		});
		$('.top-main-menu>li').mouseleave(function( ) {
			$(this).find('.top-sub-menu').stop( ).fadeOut(80);
		});
		
		$('.fixed-main-menu li').mouseover(function( ) {
			$(this).find('.fixed-sub-menu').stop( ).fadeIn(80);
		});
		$('.fixed-main-menu>li').mouseleave(function( ) {
			$(this).find('.fixed-sub-menu').stop( ).fadeOut(80);
		});	
	});


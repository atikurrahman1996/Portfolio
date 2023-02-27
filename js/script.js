(function($){
	'use script';
	// WOW JS
	new WOW().init();
	// Menu Responsive
	$('.mobile-menu').click(function(){
		$('.menu ul').slideToggle();
	});
	// Scroll Area
	$(document).ready(function(){
	    $('.scroll-area').click(function(){
	      	$('html').animate({
	        	'scrollTop' : 0,
	      	},200);
	      	return false;
	    });
	    $(window).on('scroll',function(){
	      	var a = $(window).scrollTop();
	      	if(a>400){
	            $('.scroll-area').slideDown(300);
	        }else{
	            $('.scroll-area').slideUp(200);
	        }
	    });
	});
	// Counter
	$('.counter').counterUp({
        delay: 10,
        time: 2000
    });
	// Portfolio MixitUp
	var mixer = mixitup('.portfolio-all');
	var mixer = mixitup('.containerEl');
	var mixer = mixitup('.containerEl', {
		selectors: {
			target: '.blog-item'
		},
		animation: {
			duration: 100
		}
	});
	// Portfolio Single Popup
	$('.portfolio-item a').magnificPopup({
	  	type: 'image',
	   	gallery: {
	    	enabled: true
	  	},
	});
	// Testimonial
	$(".testimonial-full").owlCarousel({
  		loop:true,
  		center:true,
  		items:1,
  		autoplay: true,
  		mouseDrag:false,
  		autoplayTimeout:6000,
  		smartSpeed:500
  	});
  	// Sticky Menu
	$(window).on('scroll',function(){
		var scroll = $(window).scrollTop();
		if(scroll < 150){
			$('.header').removeClass('sticky');
		}else{
			$('.header').addClass('sticky');
		}
	});
	// Menu Current Class Add
	let mainNavLinks = document.querySelectorAll(".menu ul li a");
	let mainSections = document.querySelectorAll("main section");
	let lastId;
	let cur = [];
	window.addEventListener("scroll", event => { 
	  let fromTop = window.scrollY;
	  	mainNavLinks.forEach(link => {
	    let section = document.querySelector(link.hash);
	   	if (
	      section.offsetTop <= fromTop &&
	      section.offsetTop + section.offsetHeight > fromTop
	    ) {
	      link.classList.add("current");
	    } else {
	      link.classList.remove("current");
	    }
	  	});
	});
	// One Page Nav
	$(window).on("load",function(){
		/* Page Scroll to id fn call */
		$(".menu a,a[href='#top'],a[rel='m_PageScroll2id']").mPageScroll2id(200);
		// demo functions 
		$("a[rel='next']").click(function(e){
			e.preventDefault();
			var to=$(this).parent().parent("section").next().attr("id");
			$.mPageScroll2id("scrollTo",to);
		});
	});
}(jQuery));
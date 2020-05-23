var $header = $("nav .navbar-header");

!function Slider(){

	var $slider = $(".rslides");
	var $sliderSection = $("section#slider");
	var $mobileSlederControls = $("section div.rslides-controls");

	//$slider.removeClass("v-off");
	$slider.responsiveSlides({
		auto: false,             // Boolean: Animate automatically, true or false
  		speed: 500,            // Integer: Speed of the transition, in milliseconds
  		timeout: 4000,          // Integer: Time between slide transitions, in milliseconds
  		pager: true,           // Boolean: Show pager, true or false
  		nav: true,             // Boolean: Show navigation, true or false
  		random: false,          // Boolean: Randomize the order of the slides, true or false
  		pause: false,           // Boolean: Pause on hover, true or false
  		pauseControls: true,    // Boolean: Pause when hovering controls, true or false
  		prevText: "Previous",   // String: Text for the "previous" button
  		nextText: "Next",       // String: Text for the "next" button
  		maxwidth: "",           // Integer: Max-width of the slideshow, in pixels
  		navContainer: ".rslides-controls",       // Selector: Where controls should be appended to, default is after the 'ul'
  		manualControls: ".rslides-tabs",     // Selector: Declare custom pager navigation
  		namespace: "rslides",   // String: Change the default namespace used
  		before: function(){},   // Function: Before callback
  		after: function(){}     // Function: After callback
	});

	$(window).on('scroll',function(e){
		if( window.scrollY + $header.height() >= $slider.offset().top && 
			window.scrollY + $header.height() <= $slider.offset().top + $slider.height() - $(window).height()/2){
			if(!$mobileSlederControls.hasClass("on")){
				$mobileSlederControls.addClass("on");
			}
		}else{
			if($mobileSlederControls.hasClass("on")){
				$mobileSlederControls.removeClass("on");
			}
		}
	});

}();
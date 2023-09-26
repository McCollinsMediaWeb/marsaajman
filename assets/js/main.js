$(function(){
	$(".typed").typed({
		strings: ["Marsa Ajman", "Marsa Ajman", "Marsa Ajman"],
		// Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
		stringsElement: null,
		// typing speed
		typeSpeed: 100,
		// time before typing starts
		startDelay: 100,
		// backspacing speed
		backSpeed: 100,
		// time before backspacing
		backDelay: 500,
		// loop
		loop: true,
		// false = infinite
		loopCount: 100,
		// show cursor
		showCursor: true,
		// character for cursor
		cursorChar: "|",
		// attribute to type (null == text)
		attr: null,
		// either html or text
		contentType: 'html',
		// call when done callback function
		callback: function() {},
		// starting callback function before each string
		preStringTyped: function() {},
		//callback for every typed string
		onStringTyped: function() {},
		// callback for reset
		resetCallback: function() {}
	});
	$(".typed1").typed({
		strings: ["Started", "Started", "Started"],
		// Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
		stringsElement: null,
		// typing speed
		typeSpeed: 100,
		// time before typing starts
		startDelay: 100,
		// backspacing speed
		backSpeed: 100,
		// time before backspacing
		backDelay: 500,
		// loop
		loop: true,
		// false = infinite
		loopCount: 100,
		// show cursor
		showCursor: false,
		// character for cursor
		cursorChar: "|",
		// attribute to type (null == text)
		attr: null,
		// either html or text
		contentType: 'html',
		// call when done callback function
		callback: function() {},
		// starting callback function before each string
		preStringTyped: function() {},
		//callback for every typed string
		onStringTyped: function() {},
		// callback for reset
		resetCallback: function() {}
	});
	windowHeight = jQuery(window).innerHeight();
	windowWidth = jQuery(window).innerWidth();
	jQuery(".DropDownMenuIcon , .menudrop , .closeBtn1").click(function () {
		jQuery("body").toggleClass("ActivePanel");
	});
	jQuery(".EnquireBtn , .menudrop1 ,.closeBtn2 , .GridEnquire").click(function () {
		jQuery("body").toggleClass("ActiveForm");
	});
	

 	jQuery('.image-item img').css('height', (windowHeight)+'px');
	 jQuery('.image-item img').css('width', (windowWidth)+'px');
	 jQuery('.heightFull').css('height', (windowHeight)+'px');
	 jQuery('.widthFull').css('width', (windowWidth)+'px');
	 jQuery(window).scroll(function () {
		var scroll = jQuery(window).scrollTop();
	
		if (scroll >= 100) {
		  jQuery("body").addClass("StickHeader");
		} else {
		  jQuery("body").removeClass("StickHeader");
		}
	  });

	  $('.centerslider').slick({
		centerMode: true,
		centerPadding: '60px',
		slidesToShow: 5,
		autoplay: true,
		autoplaySpeed: 2000,
		infinite: true,
		lazyLoad: 'ondemand',
		responsive: [
		  {
			breakpoint: 768,
			settings: {
			  arrows: false,
			  centerMode: true,
			  centerPadding: '40px',
			  slidesToShow: 3
			}
		  },
		  {
			breakpoint: 480,
			settings: {
			  arrows: false,
			  centerMode: true,
			  centerPadding: '40px',
			  slidesToShow: 1
			}
		  }
		]
	  });

	  if (jQuery(window).width() < 1000) {
        jQuery(".ImageSwitcher")
        .fadeOut(400, function() {
          jQuery(this).attr('src',jQuery(this).attr('data-mobile'));
        })
        .fadeIn(400);
    }
    else {
      jQuery(".ImageSwitcher")
        .fadeOut(400, function() {
          jQuery(this).attr('src',jQuery(this).attr('data-desktop'));
        })
        .fadeIn(400);
    }
	 
});

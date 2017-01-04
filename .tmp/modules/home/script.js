(function(){
	'use strict';
	var mod = $('#mod-home');

	function TheBestAntoree(){
		mod.find("#why .list").slick({
			slidesToShow:3,
			slidesToScroll:1,
			responsive: [
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					infinite: true,
					dots: false
				}
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
			]
		});
	}

	function popupBanner() {
		if (mod.length) {
			mod.find('#youtube-1').on('click', function(event) {
				event.preventDefault();
				helperJs.bzPopup({
					rel: '#popup-banner',
					width: 640
				});
			});
		}
	}

	function popupAds() {
		mod.find('#popup-ad button#popup').on('click', function(event) {
			helperJs.bzPopup({
				rel: '#popup-ads',
				width: 900
			});
		});
		setTimeout(function() {
			mod.find('#popup-ad button#popup').trigger('click');
		},5000);

	}

	function bestTeacher() {
		mod.find('.teacher-grid-list').gridderExpander({
			scroll: false,
			animationSpeed: 400,
			animationEasing: "easeInOutExpo",
			nextText: "",
			prevText: "",
			closeText: "",
			onStart: function(){
	            //Gridder Inititialized
	        },
	        onContent: function(){
	            //Gridder Content Loaded
	        },
	        onClosed: function(){
	            //Gridder Closed
	        }
	    });
	}

	function maxHeigthLearn() {
		var maxHeight = 0;
		mod.find('.head-learn .h3Title').each(function(index) {
			if($(this).height() > maxHeight){
				maxHeight = $(this).height();
			}
			// console.log($(this).height());
		})
		mod.find('.head-learn .h3Title').each(function(index) {
			$(this).height(maxHeight);
		})
	}
	$(document).ready(function() {
		TheBestAntoree();
		// slideClient();
		popupBanner();
		popupAds();
		bestTeacher();
		maxHeigthLearn();
		// slideMedia();
		// requiredSafari();
	});

})();
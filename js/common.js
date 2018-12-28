$(document).ready(function(){

    // Mobile menu
	$(function() {
		function burger() {
			$('.main-nav').toggleClass('nav-show');
		};
		$('.menu-bars').click(function() {
			burger();
		});
		$(document).click(function(event) {
			if ($(event.target).closest(".main-nav").length) return;
			if ($(event.target).closest(".menu-bars").length) return;
			$('.main-nav').removeClass('nav-show');
			event.stopPropagation();
		});
	});

});

$(document).ready(function() {

    // Mobile menu ========================================
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

    // Fleet info ========================================
    $('.fleet-about_name').click(function() {
        var parentClass = $(this).parent();
        var parentMainClass = parentClass.parent();
        var mainClass = $(parentMainClass).find('.fleet-about_info');
        mainClass.slideToggle();

        $(document).mouseup(function(e) {
            var div = $(parentClass);
            if (!div.is(e.target) &&
                div.has(e.target).length === 0) {
                $(mainClass).fadeOut();
            }
        });
    });

    // type ship =========================================
    $('.typeShip-btn').click(function() {
        $('.typeShip-list').slideToggle();
		$(this).toggleClass('arrowRotate');
    });


});

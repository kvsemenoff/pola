
$(document).ready(function(){

    ymaps.ready(init);

    function init() {
        var center = [54.725524, 20.496887];

        var center2 = [54.725524, 20.496887];
        var center3 = [57.578393, 39.847802];
        if ($('#mape').length) {
            var myMap = new ymaps.Map('mape', {
                center: center,
                controls: [],
                zoom: 16,  
                controls: ['smallMapDefaultSet']
            }, {
                searchControlProvider: 'yandex#search'
            });

            myMap.behaviors.disable('scrollZoom'); 

            var myPlacemark = new ymaps.Placemark(center, {
                // Свойства.
                // Содержимое иконки, балуна и хинта.
                balloonContent: 'улица Ивана Франко, 4к4',
                hintContent: 'улица Ивана Франко, 4к4'
            }, {
                // Опции.
                iconLayout: 'default#image',
                iconImageHref: 'img/map-ic.png',
                iconImageSize: [42, 42]
                // preset: 'twirl#violetIcon'
            });
            myMap.geoObjects.add(myPlacemark);
        }
        if ($('#contactsmap').length) {
       


            var myMap2 = new ymaps.Map('contactsmap', {
                center: center,
                controls: [],
                zoom: 4,  
                controls: ['smallMapDefaultSet']
            }, {
                searchControlProvider: 'yandex#search'
            });

            myMap2.behaviors.disable('scrollZoom');

            var myPlacemark2 = new ymaps.Placemark(center2, {
                // Свойства.
                // Содержимое иконки, балуна и хинта.
                balloonContent: '<div class="balun-content"><span class="balun-content__title">Россия, г.Калиниград</span><span class="balun-content-subtitle">Адрес:</span>  Советский пр-т, д. 34<br><br><span class="balun-content-subtitle">Телефон:</span>(4012) 33 76 44<br>(4012) 91 81 39</div>',
                hintContent: ''
            }, {
                // Опции.
                iconLayout: 'default#image',
                iconImageHref: 'img/balun.png',
                iconImageSize: [32, 55]
                // preset: 'twirl#violetIcon'
            });

            var myPlacemark3 = new ymaps.Placemark(center3, {
                // Свойства.
                // Содержимое иконки, балуна и хинта.
                balloonContent: '<div class="balun-content"><span class="balun-content__title">Россия, г.Ярославль</span><span class="balun-content-subtitle">Адрес:</span>  Советский пр-т, д. 34<br><br><span class="balun-content-subtitle">Телефон:</span>(4012) 33 76 44<br>(4012) 91 81 39</div>',
                intContent: ''
            }, {
                // Опции.
                iconLayout: 'default#image',
                iconImageHref: 'img/balun.png',
                iconImageSize: [32, 55]
                // preset: 'twirl#violetIcon'
            });

     
            myMap2.geoObjects.add(myPlacemark2);
            myMap2.geoObjects.add(myPlacemark3);
        }
    }


//     ymaps.ready(init);

//     function init() {



//         var center = [54.725524, 20.496887];
// alert('ss');
//         var myMap = new ymaps.Map('.homemap', {
//             center: center,
//             controls: [],
//             zoom: 14,  
//             controls: []
//         });
        
       


        


        
        //myMap.behaviors.disable('scrollZoom');
        // myMap2.behaviors.disable('scrollZoom');
     
        // var myPlacemark = new ymaps.Placemark(center, {
        // }, {
        // });

        // var myPlacemark2 = new ymaps.Placemark(center, {
        // }, {
        // });


       // myMap.geoObjects.add(myPlacemark);
        
        // myMap2.geoObjects.add(myPlacemark2);
        
    //}


    var homeslider = $(".homeslider");
    homeslider.owlCarousel({
        loop:true,
        nav:true, 
        autoplay:false,
        smartSpeed:1000,
        margin:0,
        mouseDrag:true,
        touchDrag: true,
        onInitialized: function(e) {
            $('.how-countbox__main').text('1');
            $('.houcountvalue').text(this.items().length);
           
          },
        navText:['<span class="review-buttons review-buttons__left"></span>','<span class="review-buttons review-buttons__right"></span>'],
        responsive:{
            0:{
                items:1
            },      
            990:{
                items:1
            },  
            1248:{
                items:1
            }
        }
    });

    var reviewslider = $(".review-slider");
    reviewslider.owlCarousel({
        loop:true,
        nav:true, 
        autoplay:false,
        smartSpeed:1000,
        margin:0,
        mouseDrag:true,
        touchDrag: true,
        navText:['<span class="review-buttons review-buttons__left"></span>','<span class="review-buttons review-buttons__right"></span>'],
        responsive:{
            0:{
                items:1
            },      
            990:{
                items:2
            },  
            1248:{
                items:3
            }
        }
    });

    var actionsslider = $(".actions-slider");
    actionsslider.owlCarousel({
        loop:true,
        nav:true, 
        autoplay:false,
        smartSpeed:1000,
        margin:0,
        mouseDrag:true,
        touchDrag: true,
        navText:['<span class="review-buttons review-buttons__left"></span>','<span class="review-buttons review-buttons__right"></span>'],
        responsive:{
            0:{
                items:1
            },      
            990:{
                items:1
            },  
            1248:{
                items:1
            }
        }
    });




});

















$(document).ready(function(){

   


    


 

    function createCookie(name,value,days) {
        var expires = "";
        if (days) {
            var date = new Date();
            date.setTime(date.getTime() + (days*24*60*60*1000));
            expires = "; expires=" + date.toUTCString();
        }
        document.cookie = name + "=" + value + expires + "; path=/";
    }

    function readCookie(name) {
        var nameEQ = name + "=";
        var ca = document.cookie.split(';');
        for(var i=0;i < ca.length;i++) {
            var c = ca[i];
            while (c.charAt(0)==' ') c = c.substring(1,c.length);
            if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
        }
        return null;
    }

    function eraseCookie(name) {
        createCookie(name,"",-1);
    }



    $('.online-page__menu li a').click(function(e){ 
        e.preventDefault();
        $('.online-pa').removeClass('online-pa__active');
        
        var menuIndex = $(this).parent().index();
        $(".online-pa:eq(" + menuIndex + ")").addClass("online-pa__active");

        $('.online-page__menu li').removeClass('online-page__active-item');

        $(this).parent('li').addClass('online-page__active-item');
    });
    

    $('ul.mobile-menu').html($('ul.main-menu').html());

    $('.opp-copy').html($('.opp-container').html());
    
    $(".s-msk a:not('.cities-active')").on("click", function(e){
        e.preventDefault();
        $('#mape').removeClass('map-active');
        $('#mape1').addClass('map-active');
    });

    $(".s-spb a:not('.cities-active')").on("click", function(e){
        e.preventDefault();
        $('#mape1').removeClass('map-active');
        $('#mape').addClass('map-active');
    });

    $(".cities a.cities-active").on("click", function(e){
        e.preventDefault();
    });

    $('.burger-box').click(function(){
        $(this).find('#nav-icon').toggleClass('open');
    });
    $('.main-menu a[href^="#"]').click(function(e){ 
        e.preventDefault();
        var $element = $('a[name=' + $(this).attr('href').substr(1) + ']');
        if($element.length == 1) { 
            $('html, body').animate({ scrollTop: $element.offset().top }, 500); 
        }     
    });

    

    $('a[data-modal="modal"]').on("click", function(e){

        e.preventDefault();
        var  id = $(this).attr('href'),
        winW = $(window).width(),
        winH = $(window).height();
        $(id).css("left", winW/2-$(id).innerWidth()/2);
        $(id).css("top", winH/2-$(id).innerHeight()/2);
        $('body').append('<div class="mask"></div>');
        $(id).fadeIn();
    });

    $('a[data-modal="mobile-panel"]').on("click", function(e){
        e.preventDefault();
        var  id = $(this).attr('href'),
        winW = $(window).width(),
        winH = $(window).height();
        $(id).css("left", winW/2-$(id).innerWidth()/2);
        $(id).css("top", '80px');
        $(id).fadeIn();
    });


   
    $('a[data-modal="modal-video"]').on("click", function(e){
        e.preventDefault();
        var  id = $(this).attr('href'),
        winW = $(window).width(),
        winH = $(window).height();
        $(id).css("left", winW/2-$(id).innerWidth()/2);
        $(id).css("top", winH/2-$(id).innerHeight()/2);
        $('body').append('<div class="mask"></div>');
        $(id).fadeIn();
    });
    
    $('body').on("click", 'a[data-modal="modalForVideos"]', function(e){
        e.preventDefault();
        var  id = $(this).attr('href'),
        winW = $(window).width(),
        winH = $(window).height();
        $(id).css("left", winW/2-$(id).innerWidth()/2);
        $(id).css("top", '35px');
        $('body').append('<div class="mask"></div>');
        $(id).fadeIn();
    });

    $('body').on("click", ".burger-box", function(e){
        e.preventDefault();
        if (!$( "#nav-icon" ).hasClass( "open" )) {
            $('.modal-window-mobile-panel').hide();
        }
    });

    $('body').on("click", ".modal-close", function(e){
        e.preventDefault();
        $('.mask').remove();
        $('.modal-window').hide();
        $('.modal-window-video').hide();
        stopVideo();
    });
    $('body').on("click", ".mask", function(e){
        e.preventDefault();
        $('.mask').remove();
        $('.modal-window').hide();
        $('.modal-window-video').hide();
         stopVideo();
    });
    $('body').on("click", ".modal-close-btn", function(e){
        e.preventDefault();
        $('.mask').remove();
        $('.modal').hide();
        $('.modal-window-video').hide();
        stopVideo();
    });
    $('body').on("click", ".mask", function(e){
        e.preventDefault();
        $('.mask').remove();
        $('.modal').hide();
        $('.modal-window-video').hide();
    });

    function cleanTnanks(){

        $('.mask').remove();
        $('.modal-window').hide();
        $('input[type=text]').removeClass('error-input');
        $("input[type=text]").val("");
        $("textarea").val("");
        $('a[href="#thanks"]').trigger('click');
    };

    $(".form-callback").submit(function() { 

        var tel = $(this).find('input[name="phone"]');
        var empty = false;
        if (tel.val() == ""){
            empty = true;
        }
        if (empty == true){
            tel.addClass("error-input");
            tel.focus();
        }else{

            var form_data = $(this).serialize(); 

            $.ajax({
                type: "POST", 
                url: "/sendmessage.php", 
                data: form_data,
                success: function() {
                    cleanTnanks();
                }
            });
            cleanTnanks();
        }
        return false;
    });

    $(".feedback-form").submit(function() { 

        var tel = $(this).find('input[name="phone"]');
        var empty = false;
        if (tel.val() == ""){
            empty = true;
        }
        if (empty == true){
            tel.addClass("error-input");
            tel.focus();
        }else{

            var form_data = $(this).serialize(); 

            $.ajax({
                type: "POST", 
                url: "/sendmessage.php", 
                data: form_data,
                success: function() {
                    cleanTnanks();
                }
            });
            cleanTnanks();
        }
        return false;
    });



    
    $('.your-gorod__box ul li').on("click", function(e){
        e.preventDefault();
        $('.city-box a').html($(this).html());
        $('.mask').remove();
        $('.modal-window').hide();
    });


    new WOW().init();  

    var allowed = {
        1: true,
        3: true,
        6: true,
        9: true,
        11: true
    };

    var months = ["1", "3", "6", "9", "11"];
    var months_srt = ["за 1 месяц", "за 3 месяца", "за 6 месяцев", "за 9 месяцев", "за 11 месяцев"];

    $( "#months-slider" ).slider({
        animate: "slow",
        // values: [1, 11],
        min: 1,
        max: months.length, 
        range: "min",    
       // value: 3,
       
        slide: function( event, ui ) { 
            colWatch = ui.value;
            // $(this).find('.ui-slider-handle span').html( ui.value);
            // calculate();
            // if(!allowed[ui.value])
            //     return false;
            //alert('dd');
        }

    })
    .slider("pips", {
        rest: "label",
        labels: months
    })
    .on("slidechange", function(e,ui) {
        //console.log(months_srt[ui.value-1]);
        chancgeMonthsLables(months_srt[ui.value-1])
    });
  
    function chancgeMonthsLables(str){
        $('#month-label-1').html(str);
        $('#month-label-2').html(str);
    }

   // $("#months-slider").slider().slider("pips");


});

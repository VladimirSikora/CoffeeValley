$(document).ready(function() {
    $(".cartNav").css({display: "none"});
    $("#navLogo").removeClass('empty');
    $("#navLogoSticky").addClass('empty');


    //counter
    $('.minus').click(function () {
        var $input = $(this).parent().find('input');
        var count = parseInt($input.val()) - 1;
        count = count < 1 ? 1 : count;
        $input.val(count);
        $input.change();
        return false;
    });
    $('.plus').click(function () {
        var $input = $(this).parent().find('input');
        $input.val(parseInt($input.val()) + 1);
        $input.change();
        return false;
    });

    //sticky NavBar

    $(function(){
        $(window).scroll(function() {
            var top = $(document).scrollTop();
            var nav = $("#nav");
            var navLogo = $("#navLogo");
            var navLogoSticky = $("#navLogoSticky");
            var cartNav = $(".cartNav");

            if (top < 90){
                nav.css({top: '0', position: 'relative', display: 'block'});
                navLogo.removeClass('empty');
                navLogoSticky.addClass('empty');
                nav.addClass('floating');
                nav.removeClass('floating2');
                cartNav.css({display: 'none'})
            } else {
                nav.css({top: '0px', position: 'fixed', display: 'block'});
                nav.addClass('floating2');
                nav.removeClass('floating');
                cartNav.css({display: 'block'})
                navLogo.addClass('empty');
                navLogoSticky.removeClass('empty');
            }
        });
    });

    $(".slider-banner").owlCarousel({
        loop:true, //Зацикливаем слайдер
        margin:10, //Отступ от картино если выводите больше 1
        nav:false, //Отключил навигацию
        autoplay:true, //Автозапуск слайдера
        smartSpeed:2000, //Время движения слайда
        autoplayTimeout:4000, //Время смены слайда
        dots:false,
        responsive:{ //Адаптация в зависимости от разрешения экрана
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });
    $(".slider-two").owlCarousel({
        loop:true, //Зацикливаем слайдер
        margin:10, //Отступ от картино если выводите больше 1
        nav:true, //Включил навигацию
        autoplay:true, //Автозапуск слайдера
        smartSpeed:2000, //Время движения слайда
        autoplayTimeout:4000, //Время смены слайда
        responsive:{ //Адаптация в зависимости от разрешения экрана
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });

    $(".slider-product").owlCarousel({
        loop:true, //Зацикливаем слайдер
        margin:10, //Отступ от картино если выводите больше 1
        nav:false, //Отключил навигацию
        autoplay:true, //Автозапуск слайдера
        smartSpeed:2000, //Время движения слайда
        autoplayTimeout:4000, //Время смены слайда
        responsive:{ //Адаптация в зависимости от разрешения экрана
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:4
            }
        }
    });

    $(".makeCoffeeSlider").owlCarousel({
        loop:false, //Зацикливаем слайдер
        margin:10, //Отступ от картино если выводите больше 1
        nav:false, //Отключил навигацию
        autoplay:false, //Автозапуск слайдера
        smartSpeed:2000, //Время движения слайда
        autoplayTimeout:4000, //Время смены слайда
        dots:true,
        responsive:{ //Адаптация в зависимости от разрешения экрана
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });


    //initialization of navigation buttons
    owl = $('.carousel1').owlCarousel();
    $(".prev1").click(function () {
        owl.trigger('prev.owl.carousel');
    });

    $(".next1").click(function () {
        owl.trigger('next.owl.carousel');
    });

    owl2 = $('.carousel2').owlCarousel();
    $(".prev2").click(function () {
        owl2.trigger('prev.owl.carousel');
    });

    $(".next2").click(function () {
        owl2.trigger('next.owl.carousel');
    });

    slideBanner = $('.bannerContent').owlCarousel();
    $(".prev3").click(function () {
        slideBanner.trigger('prev.owl.carousel');
    });

    $(".next3").click(function () {
        slideBanner.trigger('next.owl.carousel');
    });

    makeCoffee = $('.makeCoffeeSlider').owlCarousel();
    $(".prev4").click(function () {
        makeCoffee.trigger('prev.owl.carousel');
    });

    $(".next4").click(function () {
        makeCoffee.trigger('next.owl.carousel');
    });
});

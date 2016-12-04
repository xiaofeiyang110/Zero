define(function(require, exports, module) {

    exports.run = function() {
 		function foldMenu() {

           var  b_width = $(window).width(),
                $menu = $('.menu-sec .nav'),
                menu_width = $menu.width(),
                $item = $('.menu-sec .nav > li'),
                sum = 0,
                num = 0;
           
            if ( !$('.menu-more').length ) {
                if (num > 0) {
                    $('<ul class="menu-more"></ul><span class="btn-plus iconfont icon-arrow-down pull-right"></span>').appendTo($menu);
                }

            } else {
                $('.menu-more > li').appendTo($('.menu-sec .nav'));
            }


            $item.each(function(index) {

                sum = sum + $(this).width();

                if (sum > menu_width -75) {
                    num = index;
                    return false;
                }
            })

            if (num > 0) {

                if ( !$('.menu-more').length ) {
                    $('<ul class="menu-more"></ul><span class="btn-plus iconfont icon-arrow-down pull-right"></span>').appendTo($menu);
                } else {
                    $('.menu-more > li').appendTo($('.menu-sec .nav'));
                }

                $item.filter(function(index) {
                    return index >= num;
                }).appendTo($('.menu-more'));

            }

             $('.menu-sec').css('overflow', 'hidden');

        }

        foldMenu();

        $(window).resize(function() {
            foldMenu();
        })

        $('.btn-plus').click(function() {
            $('.menu-sec').css('overflow', 'visible');
            $(this).toggleClass('btn-plus-focus');
            $('.menu-more').stop().toggle();
        });

        $('.menu-sec .dropdown').click(function() {
          $('.menu-sec').css('overflow', 'visible');
        })


        //course
    	// $('.es-course li > div').hover (function() {
    	// 	$('.mask', $(this)).stop().slideDown('fast');
    	// }, function() {
    	// 	$('.mask', $(this)).stop().slideToggle('fast');
    	// })
    
    
        //search
        $('.navbar-form .btn').click(function(e) {
            $('body').removeClass('menu-open').toggleClass('search-open');
            $('.navbar-collapse').removeClass('in');
            var $haskey = $('.one-nav .form-control').val();
            if ($haskey == '') {
                e.preventDefault();
            }
        })

        $('.navbar-toggle').click(function() {
            $('body').removeClass('menu-open search-open');
        })

        //折叠menu
        $('.menu-btn').click(function() {
            $('body').removeClass('search-open').toggleClass('menu-open');
            $('.navbar-collapse').removeClass('in');
        })


        $('#content-container').on('click', function(e) {
            if ( $('body').hasClass('menu-open') ) {
                $('body').removeClass('menu-open');
                e.preventDefault();
            }
        })      

        $('.carousel').carousel({
            interval: 0
         })

        //gotop
        $(window).scroll(function(){
            if ($(window).scrollTop() > 300) {
                    $('.go-top').show();
                } else {
                    $('.go-top').hide();
                }
         });

        $('.go-top').on('click', function(){
            $(window).scrollTop(0);
        });

    };

});
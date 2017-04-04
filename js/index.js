(function() {

    'use strict'

    $(function() {
        
        $(".live-list ul li >.live-lists").width($(".live-list").width()/$(".live-list ul li").length);

        var mySwiper = new Swiper('.swiper-container', {
            autoplay:3000,
            loop: true,
            pagination: '.pagination',
            paginationClickable: true,
            //其他设置
        });

        var mySwiper = new Swiper('.ticker-b .swiper-container', {
            autoplay:5000,
            loop: true,
            paginationClickable: true,
            mode: 'vertical',
            autoplayDisableOnInteraction : false,
            speed:600,
                //其他设置
        });

        $(".live-list ul li").each(function(index, item) {

            $(this).mouseover(function(e) {
                if (e.type == "mouseover") {
                    $(".ad-content ul li").siblings().hide();
                    $(".ad-content ul li:eq(" + index + ")").show();
                    //$(this).children(".live-lists").children("img").css("border","3px solid #FF8A00")
                } else if (e.type == "mouseout") {}
            })

        })
    })

})();
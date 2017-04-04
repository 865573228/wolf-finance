(function() {

    'use strict'

    $(function() {

        var mySwiper = new Swiper('.swiper-container-index', {
            prevButton: '.swiper-button-prev',
            nextButton: '.swiper-button-next',
        });

        var mySwiper = new Swiper('.swiper-container-adv', {
            pagination: '.swiper-pagination',
            slidesPerView: 2,

        });

        $(".study ul li").each(function(index, item) {

            $(this).click(function() {
                $(this).siblings().css("color", "#000000");
                $(this).css("color", "#fb9400");
                $(".study-content > div").siblings().hide();
                $(".study-content > div:eq(" + index + ")").show();
            })

        });
        
        $("#mobileLogin").validate({
            rules: {
                username: "required",
                password: "required"
            },
            messages: {
                username: "手机号不能为空",
                password: "密码不能为空"
            }
        });
        
        $(".adviserliveul ul li").each(function(index,item){
            $(this).click(function(){
                $(this).siblings().removeClass("yellow");
                $(this).addClass("yellow");
                $(".adviserlive-l > div").siblings().hide();
                $(".adviserlive-l > div:eq("+index+")").slideDown(200);
            })
        });
        
        if (window.location.hash == "#ask") {
            $(".adviserliveul ul li:eq(2)").trigger("click")
        };
        if (window.location.hash == "#myask") {
            $(".adviserliveul ul li:eq(1)").trigger("click")
        };

    })

})();
(function() {

    'use strict'

    $(function() {

        $(".adviser-li ul li").each(function(index, item) {
            $(this).click(function() {
                if ($(this).hasClass("action")) {
                    return false;
                }
                $(this).siblings("li").removeClass("action");
                $(this).addClass("action");
                $(".adviser-reply > div").hide();
                $(".adviser-reply > .reply:eq(" + index + ")").slideDown(200);
            })
        });

        var _arr = [];
        var array = "";

        for (var i = 0; i < icons.list.length; i++) {
            _arr[i] = "<li><img src='" + icons.prefix + icons.list[i].url + "'/></li>";
            array += _arr[i];
        }

        $("#iconImg > ul").append(array);

        $("#iconimgBtn").bind("click", function() {
            $("#iconImg").slideToggle();
        })

        $("#iconImg > ul > li > img").click(function() {
            $("#chatContent").append($(this).clone());
            $("#iconImg").hide();
        })

        if (window.location.hash == "#ask") {
            $(".adviser-li ul li:eq(2)").trigger("click");
        }
        if (window.location.hash == "#myask") {
            $(".adviser-li ul li:eq(1)").trigger("click");
        }

    })

})();
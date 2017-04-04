(function() {

    'use strict'

    $(function() {

        jQuery.validator.addMethod("isMobile", function(value, element) {
            var length = value.length;
            var mobile = /^(13[0-9]{9})|(18[0-9]{9})|(14[0-9]{9})|(17[0-9]{9})|(15[0-9]{9})$/;
            return this.optional(element) || (length == 11 && mobile.test(value));
        }, "请正确填写您的手机号码");

        $("#loginform").validate({
            rules: {
                username: "required",
                password: "required"
            },
            messages: {
                username: "手机号不能为空",
                password: "密码不能为空"
            }
        });

        $("#registerform").validate({
            rules: {
                username: {
                    required: true,
                    isMobile: true
                },
                password: "required"
            },
            messages: {
                username: {
                    required: "手机号不能为空",
                    isMobile: "请输入正确的手机号"
                },
                password: "密码不能为空"
            }
        });

        if (window.location.hash == "#login" || window.location.hash == "") {
            $("#register").hide();
            $("#login").show();
            $(".lr-content-nav > span:eq(0)").addClass("loginaction");
            $(".lr-content-nav > span:eq(1)").removeClass("loginaction");
        } else if (window.location.hash == "#register") {
            $("#register").show();
            $("#login").hide();
            $(".lr-content-nav > span:eq(0)").removeClass("loginaction");
            $(".lr-content-nav > span:eq(1)").addClass("loginaction");
        }

        window.onhashchange = function() {
            if (window.location.hash == "#login" || window.location.hash == "") {
                $("#register").hide();
                $("#login").show();
                $(".lr-content-nav > span:eq(0)").addClass("loginaction");
                $(".lr-content-nav > span:eq(1)").removeClass("loginaction");
            } else if (window.location.hash == "#register") {
                $("#register").show();
                $("#login").hide();
                $(".lr-content-nav > span:eq(0)").removeClass("loginaction");
                $(".lr-content-nav > span:eq(1)").addClass("loginaction");
            }
        };

    })

})();
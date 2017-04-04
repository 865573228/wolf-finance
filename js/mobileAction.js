$(function() {

    $(".live > ul > li").addClass("past");

    setInterval(function() {

        var id = $(".live > ul > li:eq(0)").attr("id");

        $.ajax({
            url: "",
            type: "get",
            success: function(result) {

//              $(".live > ul").prepend("<li>first<br><br><br><br><br><br><li>");
//              $(".live > ul > li").not(".past").hide().slideDown(300);
//              $(".live > ul > li").addClass("past");

            },
            error: function(msg) {

            }
        });

    }, 2000);

    $("#mobileAdviser").click(function() {
        console.log("mobileAdviser click");
        var id = $(".live > ul > li:last").attr("id");
        $.ajax({
            url: "",
            type: "get",
            success: function(result) {

            },
            error: function(msg) {

            }
        });

    })

})
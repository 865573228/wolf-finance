$(function() {

    $(".adviser-reply > .reply:eq(0) > div").addClass("past");

    setInterval(function() {

        var id = $(".adviser-reply > .reply:eq(0) > div:eq(0)").attr("id");

        $.ajax({
            url: "",
            type:"get",
            success: function(result) {

//              $(".adviser-reply > .reply:eq(0)").prepend("<div>first<br><br><br><br><br><br><div>");
//              $(".adviser-reply > .reply:eq(0) > div").not(".past").hide().slideDown(500);
//              $(".adviser-reply > .reply:eq(0) > div").addClass("past");

            },
            error: function(msg) {

            }
        });

    }, 2000)

    $("#pcAdviser").click(function() {
        var id = $(".adviser-reply > .reply:eq(0) > div:last").attr("id");
        console.log("pcAdviser click");
        $.ajax({
            url: "",
            type:"get",
            success: function(result) {

            },
            error: function(msg) {

            }
        });
    });

})
(function() {
    'use strict'

    Date.prototype.Format = function(fmt) { //author: meizz   
        var o = {
            "M+": this.getMonth() + 1, //月份   
            "d+": this.getDate(), //日   
            "h+": this.getHours(), //小时   
            "m+": this.getMinutes(), //分   
            "s+": this.getSeconds(), //秒   
            "q+": Math.floor((this.getMonth() + 3) / 3), //季度   
            "S": this.getMilliseconds() //毫秒   
        };
        if (/(y+)/.test(fmt))
            fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
        for (var k in o)
            if (new RegExp("(" + k + ")").test(fmt))
                fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
        return fmt;
    }

    var channel = GS.createChannel();

    channel.bind("onRollcall", function(event) {
        alert(event.data.timeout);
    });

    channel.bind("onQA", function(event) {
        alert(event.data.question);
    });

    channel.bind("submitChat", function(event) {});

    channel.send("submitRollcall", {
        "id": 23534677685687
    }, function(resultInfo) {});

    channel.send("submitQuestion", {
        "content": "what's your name?"
    });
    
    channel.bind("onPublicChat", function(e) {
        
        console.log('----------------0-0-----------------');
        console.log("sender"+e.data.sender);
        console.log("senderId"+e.data.senderId);
        console.log("senderUid"+e.data.senderUid);
        console.log("content"+e.data.content);
        console.log("richtext"+e.data.richtext);
        console.log("senderRole"+e.data.senderRole);
        //e.data.sender.indexOf("visitor")?e.data.sender:e.data.senderId)
        $(".mobile-live ul").append(appendMsgForm(e.data.richtext,e.data.sender.indexOf("visitor")?e.data.sender:e.data.senderId));
        $('.mlive-text').scrollTop($('.text-middle')[0].scrollHeight);
    });


    function appendMsgForm(richtext,username) {
        var currentData = new Date().Format("hh:mm");
        var _content = "<li>" +
            "<div class='live-answer'>" +
            "<div class='answer-a'>" + currentData + "<span>" + username + ":</span></div>" +
            "<div class='answer-b'>" + richtext + "</div>" +
            "</div>" +
            "</li>";
        return _content;
    };

    $(function() {
        $(".mlive-text").height($(window).height() - $(".header").height() - $(".mlive-live").height() - $(".mlive-sub").height() - $(".m-title").height());

        $("#mliveBtnsub").click(function(e) {

            if ($("#mlivecontent").val() == "") {

                alert("内容为空");
                return false;
            }

            var newmsg = appendMsgForm($("#mlivecontent").val().trim(),"我");
            //var _content = $(".mobile-live ul").html();
            $(".mobile-live ul").append(newmsg);
            $('.mobile-live ul').scrollTop($('.mobile-live ul')[0].scrollHeight);
            channel.send("submitChat", {
                "richtext": $("#mlivecontent").val().trim()
            });
            $("#mlivecontent").val("");
            $('.mlive-text').scrollTop($('.mlive-text')[0].scrollHeight);
        });

    })

})();
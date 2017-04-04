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
    
    //1. 根据组获得通讯通道
    var channel = GS.createChannel();
    //2. 通过通道监听点名事件
    channel.bind("onRollcall", function(event) {
        alert(event.data.timeout);
    });
    //2. 通过通道监听问答事件
    channel.bind("onQA", function(event) {
        alert(event.data.question);
    });
    //收到公聊消息
    //提交公聊信息
    channel.bind("submitChat", function(event) {
    });
    //3.通过通道提问，提问，私聊，公聊的提交可以设置回调函数，同时 resultInfo 的格式为
    //{result:true|false,data:data},data 即为提交的数据
    channel.send("submitRollcall", {
        "id": 23534677685687
    }, function(resultInfo) {});
    // 4.通过通道提交点名信息
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
        
        $(".text-middle ul").append(appendMsgForm(e.data.richtext,e.data.sender.indexOf("visitor")?e.data.sender:e.data.senderId));
        $('.text-middle').scrollTop($('.text-middle')[0].scrollHeight);
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
        $("#liveBtnsub").click(function(e) {
            
            if($(".live-reply").html().replace(/<div><br><\/div>/g,"").trim()==""){
                alert("输入内容为空");
                return false;
            }
            var newmsg = appendMsgForm($(".live-reply").html().replace(/<div><br><\/div>/g,"").trim(),"我");
            //var _content = $(".text-middle ul").html();
            $(".text-middle ul").append(newmsg);
            $('.text-middle ul').scrollTop($('.text-middle ul')[0].scrollHeight);
            channel.send("submitChat", {
                "richtext": $(".live-reply").html().replace(/<div><br><\/div>/g,"").trim()
            });
            $(".live-reply").empty();
            $('.text-middle').scrollTop($('.text-middle')[0].scrollHeight);
        });
        $("#textfield").click(function(e) {
            $("#textfield").html("");
        });

        var _arr = [];
        var array = "";

        for (var i = 0; i < icons.list.length; i++) {
            _arr[i] = "<li><img src='" + icons.prefix + icons.list[i].url + "'/></li>";
            array += _arr[i];
        };

        $("#iconImg > ul").append(array);
        $("#liveIconbtn").bind("click", function() {
            $("#iconImg").slideToggle(0);
        });
        $("#iconImg > ul > li > img").click(function() {
            $(".live-reply").append($(this).clone());
            $("#iconImg").hide();
        });

    })

})();

    function IsPC() {
        var userAgentInfo = navigator.userAgent;
        var Agents = ["Android", "iPhone",
            "SymbianOS", "Windows Phone",
            "iPad", "iPod"
        ];
        var flag = true;
        for (var v = 0; v < Agents.length; v++) {
            if (userAgentInfo.indexOf(Agents[v]) > 0) {
                flag = false;
                break;
            }
        }
        return flag;
    }

    if (IsPC()) {
        if(window.location.href.indexOf("website")!=-1){
            return false;
        }else{
            window.location.href = "http://localhost:4000/website/index";
        }
    } else {
        if(window.location.href.indexOf("mobile")!=-1){
            return false;
        }else{
            window.location.href = "http://localhost:4000/mobile/index";
        }
    }

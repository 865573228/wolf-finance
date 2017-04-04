var icons = {
    "prefix":"http://static.gensee.com/webcast",
    "list":[
        {"icon":"emotion\\chat.gift.png","url":"/static/emotion/chat.gift.png","zh_CN":"【礼物】","en":"[gift]","type":3,"zh_TW":"【禮物】","ja":"【ギフト】","st":"$^lw^"}
        ,{"icon":"emotion\\emotion.angerly.gif","url":"/static/emotion/emotion.angerly.gif","zh_CN":"【愤怒】","en":"[angry]","type":1,"zh_TW":"【憤怒】","ja":"【怒り】","st":"$^fn^"}
        ,{"icon":"emotion\\emotion.bs.gif","url":"/static/emotion/emotion.bs.gif","zh_CN":"【鄙视】","en":"[despise]","type":1,"zh_TW":"【鄙視】","ja":"【軽蔑】","st":"$^qm^"}
        ,{"icon":"emotion\\emotion.cry.gif","url":"/static/emotion/emotion.cry.gif","zh_CN":"【伤心】","en":"[sad]","type":1,"zh_TW":"【傷心】","ja":"【悲しい】","st":"$^sx^"}
        ,{"icon":"emotion\\emotion.goodbye.gif","url":"/static/emotion/emotion.goodbye.gif","zh_CN":"【再见】","en":"[bye]","type":1,"zh_TW":"【再見】","ja":"【さようなら】","st":"$^zj^"}
        ,{"icon":"emotion\\emotion.laugh.gif","url":"/static/emotion/emotion.laugh.gif","zh_CN":"【高兴】","en":"[happy]","type":1,"zh_TW":"【高興】","ja":"【ハッピー】","st":"$^gx^"}
        ,{"icon":"emotion\\emotion.lh.gif","url":"/static/emotion/emotion.lh.gif","zh_CN":"【流汗】","en":"[sweat]","type":1,"zh_TW":"【流汗】","ja":"【汗】","st":"$^lh^"}
        ,{"icon":"emotion\\emotion.nod.gif","url":"/static/emotion/emotion.nod.gif","zh_CN":"【无聊】","en":"[bored]","type":1,"zh_TW":"【無聊】","ja":"【退屈した】","st":"$^wl^"}
        ,{"icon":"emotion\\emotion.question.gif","url":"/static/emotion/emotion.question.gif","zh_CN":"【疑问】","en":"[doubt]","type":1,"zh_TW":"【疑問】","ja":"【疑い】","st":"$^yw^"}
        ,{"icon":"emotion\\emotion.smile.gif","url":"/static/emotion/emotion.smile.gif","zh_CN":"【你好】","en":"[hello]","type":1,"zh_TW":"【你好】","ja":"【こんにちは】","st":"$^nh^"}
        ,{"icon":"emotion\\feedback.against.gif","url":"/static/emotion/feedback.against.gif","zh_CN":"【反对】","en":"[oppose]","type":2,"zh_TW":"【反對】","ja":"【反対】","st":"$^fd^"}
        ,{"icon":"emotion\\feedback.agreed.png","url":"/static/emotion/feedback.agreed.png","zh_CN":"【赞同】","en":"[agree]","type":2,"zh_TW":"【贊同】","ja":"【承認】","st":"$^zt^"}
        ,{"icon":"emotion\\feedback.applaud.png","url":"/static/emotion/feedback.applaud.png","zh_CN":"【鼓掌】","en":"[clap]","type":2,"zh_TW":"【鼓掌】","ja":"【クラップ】","st":"$^gz^"}
        ,{"icon":"emotion\\feedback.quickly.png","url":"/static/emotion/feedback.quickly.png","zh_CN":"【太快了】","en":"[too fast]","type":2,"zh_TW":"【太快了】","ja":"【速い】","st":"$^tk^"}
        ,{"icon":"emotion\\feedback.slowly.png","url":"/static/emotion/feedback.slowly.png","zh_CN":"【太慢了】","en":"[too slow]","type":2,"zh_TW":"【太慢了】","ja":"【遅すぎる】","st":"$^tm^"}
        ,{"icon":"emotion\\feedback.think.png","url":"/static/emotion/feedback.think.png","zh_CN":"【值得思考】","en":"[be consideration]","type":2,"zh_TW":"【值得思考】","ja":"【約ワース思考】","st":"$^sk^"}
        ,{"icon":"emotion\\rose.down.png","url":"/static/emotion/rose.down.png","zh_CN":"【凋谢】","en":"[wither]","type":3,"zh_TW":"【凋謝】","ja":"【枯れて落ちる】","st":"$^dx^"}
        ,{"icon":"emotion\\rose.up.png","url":"/static/emotion/rose.up.png","zh_CN":"【鲜花】","en":"[flower]","type":3,"zh_TW":"【鮮花】","ja":"【フラワーズ】","st":"$^xh^"}
        ,{"icon":"emotion\\emotion.bz.gif","url":"/static/emotion/emotion.bz.gif","zh_CN":"【闭嘴】","en":"[Silence]","type":1,"zh_TW":"【閉嘴】","ja":"【シャット】","st":"$^bz^"}
        ,{"icon":"emotion\\emotion.fd.gif","url":"/static/emotion/emotion.fd.gif","zh_CN":"【奋斗】","en":"[Strive]","type":1,"zh_TW":"【奮鬥】","ja":"【闘争】","st":"$^fed^"}
        ,{"icon":"emotion\\emotion.gg.gif","url":"/static/emotion/emotion.gg.gif","zh_CN":"【尴尬】","en":"[Embarrassed]","type":1,"zh_TW":"【尷尬】","ja":"【厄介な】","st":"$^gg^"}
        ,{"icon":"emotion\\emotion.gz.gif","url":"/static/emotion/emotion.gz.gif","zh_CN":"【鼓掌】","en":"[Applause]","type":1,"zh_TW":"【鼓掌】","ja":"【拍手を送る】","st":"$^ps^"}
        ,{"icon":"emotion\\emotion.hx.gif","url":"/static/emotion/emotion.hx.gif","zh_CN":"【害羞】","en":"[Shy]","type":1,"zh_TW":"【害羞】","ja":"【シャイ】","st":"$^hx^"}
        ,{"icon":"emotion\\emotion.jk.gif","url":"/static/emotion/emotion.jk.gif","zh_CN":"【惊恐】","en":"[Panic]","type":1,"zh_TW":"【驚恐】","ja":"【ショック】","st":"$^jk^"}
        ,{"icon":"emotion\\emotion.jy.gif","url":"/static/emotion/emotion.jy.gif","zh_CN":"【惊讶】","en":"[Surprised]","type":1,"zh_TW":"【驚訝】","ja":"【驚き】","st":"$^jy^"}
        ,{"icon":"emotion\\emotion.kb.gif","url":"/static/emotion/emotion.kb.gif","zh_CN":"【抠鼻】","en":"[Pick Nose]","type":1,"zh_TW":"【摳鼻】","ja":"【鼻を引いて】","st":"$^kb^"}
        ,{"icon":"emotion\\emotion.kl.gif","url":"/static/emotion/emotion.kl.gif","zh_CN":"【可怜】","en":"[Whimper]","type":1,"zh_TW":"【可憐】","ja":"【哀れな】","st":"$^kl^"}
        ,{"icon":"emotion\\emotion.ll.gif","url":"/static/emotion/emotion.ll.gif","zh_CN":"【流泪】","en":"[Sob]","type":1,"zh_TW":"【流淚】","ja":"【涙】","st":"$^ll^"}
        ,{"icon":"emotion\\emotion.qd.gif","url":"/static/emotion/emotion.qd.gif","zh_CN":"【敲打】","en":"[Hammer]","type":1,"zh_TW":"【敲打】","ja":"【ビート】","st":"$^qd^"}
        ,{"icon":"emotion\\emotion.qh.gif","url":"/static/emotion/emotion.qh.gif","zh_CN":"【强悍】","en":"[Thumbs Up]","type":1,"zh_TW":"【強悍】","ja":"【ダウティ】","st":"$^qh^"}
        ,{"icon":"emotion\\emotion.qq.gif","url":"/static/emotion/emotion.qq.gif","zh_CN":"【亲亲】","en":"[Pucker]","type":1,"zh_TW":"【親親】","ja":"【キス】","st":"$^qq^"}
        ,{"icon":"emotion\\emotion.rb.gif","url":"/static/emotion/emotion.rb.gif","zh_CN":"【弱爆】","en":"[Thumbs Down]","type":1,"zh_TW":"【弱爆】","ja":"【弱いバースト】","st":"$^rb^"}
        ,{"icon":"emotion\\emotion.se.gif","url":"/static/emotion/emotion.se.gif","zh_CN":"【色】","en":"[Drooling]","type":1,"zh_TW":"【色】","ja":"【色】","st":"$^se^"}
        ,{"icon":"emotion\\emotion.tx.gif","url":"/static/emotion/emotion.tx.gif","zh_CN":"【偷笑】","en":"[Chuckle]","type":1,"zh_TW":"【偷笑】","ja":"【クスクス笑い】","st":"$^tx^"}
        ,{"icon":"emotion\\emotion.xu.gif","url":"/static/emotion/emotion.xu.gif","zh_CN":"【嘘】","en":"[Shh]","type":1,"zh_TW":"【噓】","ja":"【ヒス】","st":"$^xu^"}
        ,{"icon":"emotion\\emotion.yun.gif","url":"/static/emotion/emotion.yun.gif","zh_CN":"【晕】","en":"[Hypnotized]","type":1,"zh_TW":"【暈】","ja":"【目まいがする】","st":"$^yun^"}
    ]
}
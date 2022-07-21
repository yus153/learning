// 新聞
const Newspaper = {

    // プロパティ
    name : "毎朝新聞",
    page : "表紙",

    changePage : function(new_page){
        this.page = new_page;
        console.log(this.name + "の" + this.page + "ページを開きました。");
    },

    readPage : function(){
        console.log(this.name + "の" + this.page + "ページを読みます。");
    }
}

// テレビ
const Television = {

    // プロパティ
    name : "リビングのテレビ",
    power: "off",
    channel : 1,

    // メソッド
    onPower : function(){
        if(this.power == "on") return;
        this.power = "on";
        console.log(this.name + "を点けました。");
    },

    changeChannel : function(new_channel){
        this.channel = new_channel;
        console.log(this.name + "のチャンネルを" + this.channel + "に変えました");
    },

    watchChannel : function(){
        console.log(this.name + "の" + this.channel + "チャンネルを観ます。")
    }
}

// 実行
Newspaper.changePage("テレビ欄");
Newspaper.readPage();
Television.onPower();
Television.changeChannel(10);
Television.watchChannel();
Television.changeChannel(4);
Television.watchChannel();
Television.changeChannel(1);
Television.watchChannel();


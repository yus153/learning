
// テレビ
function Television(){
    // プロパティ
    const name = "リビングのテレビ";
    let power = "off";
    let channel = 1;

    // メソッド
    this.onPower = function(){
        if(power == "on") return;
        power = "on";
        console.log(name + "を点けました。")
    }
    this.changeChannel = function(new_channel){
        // 新しいチャンネルを代入する前に値が正しいかチェック
        new_channel = parseInt(new_channel);
        if(isNaN(new_channel)) return;          // チャンネルは数字以外は無視。
        if(new_channel < 1 || new_channel > 100) return; // チャンネルは最低1, 最高100。それ以外は無視。
        channel = new_channel;
        console.log(name + "のチャンネルを" + channel + "に変えました。");
    }
    this.watchChannel = function(){
        console.log(name + "の" + channel + "チャンネルを観ます。")
    }
}

// インスタンス生成
const LivingTelevision = new Television();

// 実行
LivingTelevision.onPower();
LivingTelevision.name = "hoge";
LivingTelevision.channel = -10; // プライベートなプロパティとは別のプロパティにアクセスしている。
LivingTelevision.watchChannel();
// LivingTelevision.changeChannel(-10);
// LivingTelevision.watchChannel();
// console.log(LivingTelevision.channel);
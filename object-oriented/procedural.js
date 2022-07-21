// デフォルト設定
const newspaper_name = "毎朝新聞";
let newspaper_page = "表紙";
const television_name = "リビングのテレビ";
let television_power = "off";
let television_channel = 1;

// 実行
newspaper_page = "テレビ欄";
console.log(newspaper_name + "の" + newspaper_page + "ページを開きました。"); // 毎朝新聞のテレビ欄ページを開きました。
console.log(newspaper_name + "の" + newspaper_page + "ページを読みます。"); // 毎朝新聞のテレビ欄ページを読みます。

if(television_power != "on"){
    television_power = "on";
    console.log(television_name + "を点けました。"); // リビングのテレビを点けました。
}
television_channel = 10;
console.log(television_name + "のチャンネルを" + television_channel + "に変えました。"); // リビングのテレビのチャンネルを10に変えました。
console.log(television_name + "で" + television_channel + "チャンネルを観ます。"); // リビングのテレビで10チャンネルを観ます。

television_channel = 4;
console.log(television_name + "のチャンネルを" + television_channel + "に変えました。"); // リビングのテレビのチャンネルを4に変えました。
console.log(television_name + "で" + television_channel + "チャンネルを観ます。"); // リビングのテレビで4チャンネルを観ます。

television_channel = 1;
console.log(television_name + "のチャンネルを" + television_channel + "に変えました。"); // リビングのテレビのチャンネルを1に変えました。
console.log(television_name + "で" + television_channel + "チャンネルを観ます。"); // リビングのテレビで1チャンネルを観ます。


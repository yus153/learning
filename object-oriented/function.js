// デフォルト設定
const newspaper_name = "毎朝新聞";
let newspaper_page = "表紙";
const television_name = "リビングのテレビ";
let television_power = "off";
let television_channel = 1;

// 関数
// 関数
function changeNewspaperPage(new_page)
{
    newspaper_page = new_page;
    console.log( newspaper_name + "の" + newspaper_page + "ページを開きました。" );
}
function readNewspaperPage()
{
    console.log( newspaper_name + "の" + newspaper_page + "ページを読みます。" );
}
function onTelevisionPower()
{
    if( television_power == "on" ) return;
    television_power = "on";
    console.log( television_name + "を点けました。" );
}
function changeTelevisionChannel(new_channel)
{
    television_channel = new_channel;
    console.log( television_name + "のチャンネルを" + television_channel + "に変えました。" );
}
function watchTelevisionChannel()
{
    console.log( television_name + "で" + television_channel + "チャンネルを観ます。" );
}

// 実行
changeNewspaperPage( "テレビ欄" );  // 毎朝新聞のテレビ欄ページを開きました。
readNewspaperPage();                // 毎朝新聞のテレビ欄ページを読みます。
onTelevisionPower();                // リビングのテレビを点けました。
changeTelevisionChannel( 10 );      // リビングのテレビのチャンネルを10に変えました。
watchTelevisionChannel();           // リビングのテレビで10チャンネルを観ます。
changeTelevisionChannel( 4 );       // リビングのテレビのチャンネルを4に変えました。
watchTelevisionChannel();           // リビングのテレビで4チャンネルを観ます。
changeTelevisionChannel( 1 );       // リビングのテレビのチャンネルを1に変えました。
watchTelevisionChannel();           // リビングのテレビで1チャンネルを観ます。


// 引数にsum関数を与える
let a = 9;
let b = 8;
fn(a, b, sum);
fn(a, b, multiply);
fn(a, b, divide);
fn(a, b, substract);
fn(a, b, test);

/** 高階関数 **/
function fn(a, b, callback) {
    // 引数に関数を与えているのでsumの後ろに()をつける
    // コールバック関数に引数が存在する場合、引数の値が必要
    console.log(callback(a, b));
}


/** コールバック関数群 **/
// 掛け算を返すmultiply関数
function multiply(a, b) {
    return a * b;
}

function sum(a, b) {
    return a + b;
}

function divide(a, b) {
    return a / b;
}

function substract(a, b) {
    return a - b;
}

function test(a, b) {
    return a + 5 * b + a + 1111;
}






// 2つの引数をもつ計算ならなんでも
// callback関数ごと呼び出し先に渡すことができる
// 追加修正する時に呼び出し先のfnを触ることが無いため、コード変更に強くなる
// 引数が同じ複数の関数がある場合に便利

// コールバックとは
// 日本→アメリカよりアメリカ→日本のほうが通話料が安いとする
// 日本→アメリカに電話をかける
// 一旦、日本→アメリカにワン切り電話をする
// アメリカ→日本に電話をする

// 呼び出し元が用意したコールバック関数sumやmultiply
// を呼び出し先fnの処理の中からcallback(a, b)で呼び出している
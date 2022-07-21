let a = 9;
let b = 8;

fn(a, b);

// 普通の引数を持つ関数
function fn(a ,b){
    console.log(sum(a,b));
    console.log(divide(a,b));
    console.log(multiply(a,b))
    console.log(multiply(a,b))
}



// 掛け算を返すmultiply関数
function multiply(a, b){
    return a * b;
}

function sum(a, b){
    return a + b;
}

function divide(a, b) {
    return a / b;
}

function substract(a, b) {
    return a - b;
}


// callback関数として使わない場合、
// 呼び出し先の処理を変更する必要がある
// 具体的には関数の数分のconsole.logを用意する必要がある
// 数が膨大になると見づらいコードになる上、コード変更に弱くなる


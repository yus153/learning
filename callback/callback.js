// コールバックを受け取る関数
function fn(hello){
    // 引数に関数を与えているので引数の関数の後ろに()をつける
    console.log(hello());
}

// コールバック関数
function hi(){
    return "hi";
}

// 引数にhi関数を与える
fn(hi);

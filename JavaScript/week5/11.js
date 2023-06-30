function outerFunc() {
    let x = 10;
    function innerFunc() {
        console.log(x);
    }
    return innerFunc;
}

let myInnerFunc = outerFunc();
myInnerFunc(); // 10을 출력합니다.


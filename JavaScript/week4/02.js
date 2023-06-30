// 제어권
// 1. 호출 시점에 대한 제어권

var count = 0;

var timer = setInterval(function() {
    console.log(count);
    if (++count>4) clearInterval(timer);
}, 300);

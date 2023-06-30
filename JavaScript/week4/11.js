new Promise(function(resolve) {
    setTimeout(function() {
        var name = "에스프레소";
        console.log(name);
        resolve(name);
    }, 500);
})
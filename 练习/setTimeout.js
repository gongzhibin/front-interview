var a = -1;
(function () {
    setTimeout(function () {
        a++ <= 10 && console.log(a);
        console.log(a);
        setTimeout(arguments.callee, 1000);
    }, 1000);
})();


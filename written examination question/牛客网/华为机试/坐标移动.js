var readline = require('readline');
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
var arr = [];
var x = 0;
var y = 0;
rl.on('line', function (input) {

    var reg = /^[AWSD]\d{1,2}$/;
    arr = input.split(';');
    for (var i = 0; i < arr.length; i++) {
        if (reg.test(arr[i])) {
            var direction = arr[i].charAt(0);
            var num = parseInt(arr[i].slice(1));
            console.log(direction, num);
            switch (direction) {
            case 'A': {
                x -= num;
                break;
            }
            case 'W': {
                y += num;
                break;
            }
            case 'S': {
                y -= num;
                break;
            }
            case 'D': {
                x += num;
                break;
            }
            }
        }
    }
    console.log(x + ',' + y);
    //返回初始状态
    x = 0;
    y = 0;
});

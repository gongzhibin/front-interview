var readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
var arr = [];
var flag = 0;
var K;
rl.on('line', function (input) {
    if (flag == 0) {
        flag = 1;
        arr = input.split(' ');
        for (var i = 0; i < arr.length; i++) {
            arr[i] = parseInt(arr[i]);
        }
    } else if (flag == 1) {
        flag = 0;
        K = parseInt(input);
        arr.sort(function (a, b) {
            return a - b;
        });
        console.log(arr[arr.length - K]);

        //初始化
        arr = [];
    }
}).on('close', function () {

});




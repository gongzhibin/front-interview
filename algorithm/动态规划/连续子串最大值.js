var readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
var arr = [];
rl.on('line', function (input) {
    arr = input.split(' ');
    var res = maxsequence(arr);
    console.log(res);
}).on('close', function () {

});

function maxsequence(arr) {
    for (var i = 0; i < arr.length; i++) {
        arr[i] = parseInt(arr[i]);
    }

    var max = arr[0]; //初始化最大值为第一个元素
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
        if (sum > max) {
            max = sum;
        }
        if (sum < 0) {
            sum = 0;
        }

    }
    return max;
}



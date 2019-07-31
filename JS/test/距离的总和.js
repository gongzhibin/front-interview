function solution(arr) {
    //质数总和
    var sum = 0;
    var addNum = 0;
    for (var i = 0; i < arr.length - 1; i++) {
        //求相邻两个偶数直接的质数个数
        var count = 0;
        for (var j = arr[i] + 1; j < arr[i + 1]; j += 2) {
            var flag = true;
            var judgePrime = j;
            //判断是否为素数
            for (var index = 2; index <= Math.sqrt(judgePrime); index++) {
                //暴力求解，若在2-sqrt(num)直接可以除尽则不为质数
                if (judgePrime % index == 0) {
                    flag = false;
                    break;
                }
            }
            //若循环出来了且没进入if则为质数
            if (flag) {
                count++;
            }
        }
        addNum += count * (i + 1);
        sum += addNum;
    }
    return sum;
}

var arr = [];
var length = 0;

var readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.on('line', function (input) {
    if (length == 0) {
        length = parseInt(input);
    } else {
        length--;
        arr.push(parseInt(input));
        if (length == 0) {
            var res = solution(arr);
            console.log(res);

            //初始化
            arr = [];
        }
    }



}).on('close', function () {

});

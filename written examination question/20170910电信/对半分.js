/**
 * Created by zxlg on 2017/4/22.
 */
var readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
var arr = [];
var num = 0;
flag = true;
rl.on('line', function (input) {
    if (flag) {
        num = parseInt(input);
        flag = false;
    } else {
        arr = input.split(' ');
        for (var i = 0; i < arr.length; i++) {
            arr[i] = parseInt(arr[i]);
        }
        arr.sort(function (a, b) {
            return a - b;
        });
        var length = arr.length;
        var half_length = arr.length / 2;
        var sum1 = 0;
        var sum2 = 0;
        if (length % 4 == 0) {
            for (var i = 0; i < half_length; i++) {
                if (i % 2 != 0) {
                    sum1 += arr[i] + arr[length - 1 - i];
                } else {
                    sum2 += arr[i] + arr[length - 1 - i];
                }
            }
        } else {
            for (var i = 0; i < half_length - 1; i++) {
                if (i % 2 == 0) {
                    sum1 += arr[i] + arr[length - 1 - i];
                } else {
                    sum2 += arr[i] + arr[length - 1 - i];
                }
            }
            if (sum1 - sum2 > 0) {
                sum1 += arr[half_length - 1];
                sum2 += arr[half_length];
            }else{
                sum2 += arr[half_length - 1];
                sum1 += arr[half_length];
            }
        }
        console.log(Math.abs(sum1-sum2));


        flag = true;
    }
}).on('close', function () {

});
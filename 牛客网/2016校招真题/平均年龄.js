/**
 * Created by zxlg on 2017/6/14.
 */
var readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.on('line', function (input) {
    var arr = input.split(' ');
    // console.log(arr);
    var W = parseFloat(arr[0]);
    var Y = parseFloat(arr[1]);
    var x = parseFloat(arr[2]);
    var N = parseFloat(arr[3]);
    var age = Y;
    for (var i = 0; i < N; i++) {
        age = (1 - x) * (age + 1) + x * 21;
    }
    console.log(Math.ceil(age));
}).on('close', function () {

});
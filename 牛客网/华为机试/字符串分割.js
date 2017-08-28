/**
 * Created by zxlg on 2017/4/20.
 */
var readline = require('readline')
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
var arr = [];
var newArr = [];
rl.on('line', function (input) {
    arr.push(input);
    if (arr.length == 2) {
        for (var i = 0; i < 2; i++) {
            while (arr[i].length - 8 >= 0) {
                newArr.push(arr[i].substr(0, 8));
                arr[i] = arr[i].slice(8);
            }
            if (arr[i].length != 0) {
                var temp = '';
                var length = 8 - arr[i].length;
                for (var j = 0; j < length; j++) {
                    temp = temp + '0';
                }
                newArr.push(arr[i] + temp);
            }
        }
        console.log(newArr.join('\n'));
    }
})
/**
 * Created by zxlg on 2017/4/21.
 */
var readline = require('readline')
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
var arr = [];
var num = 0;
var line = -1;
rl.on('line', function (input) {
    if (line == -1) {
        line = 1;
        num = parseInt(input);
        arr = [];
    }
    else {
        arr.push(input);
        num--;
        if (num == 0) {
            line = -1;
            arr.sort();
            console.log(arr.join('\n'));
        }
    }
})
/**
 * Created by zxlg on 2017/4/22.
 */
var readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
var arr = [];
rl.on('line', function (input) {
    if (input !== '0') {
        var temp = Math.floor(parseInt(input) / 2);
        arr.push(temp);
    }
    else {
        console.log(arr.join('\n'));
    }
}).on('close', function () {
    console.log(arr.join('\n'));
});

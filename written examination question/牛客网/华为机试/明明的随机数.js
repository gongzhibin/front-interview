/**
 * Created by zxlg on 2017/4/20.
 */

var readline = require('readline');
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
var arr = [];
var line = -1;
var len = 0;
rl.on('line', function (input) {
    input = parseInt(input);
    if (line == -1) {
        line = 1;
        len = input;
        arr=[];
    }
    else {
        if (arr.indexOf(input) === -1) {
            arr.push(input);
        }
        len--;
        if (len === 0) {
            arr.sort(function (a,b) {
                return a-b;
            });
            console.log(arr.join('\n'));
            line = -1;
        }
    }
});
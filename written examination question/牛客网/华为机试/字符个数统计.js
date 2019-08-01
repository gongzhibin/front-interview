/**
 * Created by zxlg on 2017/4/21.
 */
var readline = require('readline');
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
var arr = [];
var count = 0;

rl.on('line', function (input) {
    for (var i = 0; i < input.length; i++) {
        var inputAscii = input.charCodeAt(i);
        if (inputAscii && inputAscii <= 127 && arr[inputAscii] != 1) {//以ascii为index存储数组,为空时加入，不为空不加
            arr[inputAscii] = 1;
        }
    }
    for (var j = 0; j < arr.length; j++) {
        if (arr[j] == 1) {
            count++;
        }
    }
    console.log(count);
});

//时间复杂度过高
// rl.on('line', function (input) {
//     for (var i = 0; i < input.length; i++) {
//         if (input.charCodeAt(i) >= 0 && input.charCodeAt(i) <= 127 && arr.indexOf(input[i]) == -1) {
//             arr.push(input[i]);
//         }
//     }
//     console.log(arr.length);
// })
/**
 * Created by zxlg on 2017/4/22.
 */
var readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.on('line', function (input) {
    var arr = input.split('');
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
        if (input[i] >= 'A' && input[i] < 'Z') {
            var charCode = input[i].charCodeAt(0);
            var pushStr = String.fromCharCode(charCode+1).toLowerCase();
            newArr.push(pushStr);
        }
        else if (input[i] == 'Z') {
            newArr.push('a');
        }
        else if (input[i] >= 'a' && input[i] <= 'c') {
            newArr.push('2');
        }
        else if (input[i] >= 'd' && input[i] <= 'f') {
            newArr.push('3');
        }
        else if (input[i] >= 'g' && input[i] <= 'i') {
            newArr.push('4');
        }
        else if (input[i] >= 'j' && input[i] <= 'l') {
            newArr.push('5');
        }
        else if (input[i] >= 'm' && input[i] <= 'o') {
            newArr.push('6');
        }
        else if (input[i] >= 'p' && input[i] <= 's') {
            newArr.push('7');
        }
        else if (input[i] >= 't' && input[i] <= 'v') {
            newArr.push('8');
        }
        else if (input[i] >= 'w' && input[i] <= 'z') {
            newArr.push('9');
        }
        else {
            newArr.push(input[i]);
        }
    }
    console.log(newArr.join(''));
}).on('close', function () {

});
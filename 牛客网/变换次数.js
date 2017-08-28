/**
 * Created by zxlg on 2017/5/19.
 */
var readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.on('line', function (input) {
    var num = parseInt(input);
    var mul = 1;
    var count = 0;
    while (num >= 10) {
        while (num != 0) {
            mul *= (num % 10);
            num = Math.floor(num / 10);
        }
        num = mul;
        mul = 1;
        count++;
    }
    console.log(count);
}).on('close', function () {

});
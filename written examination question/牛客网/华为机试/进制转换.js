/**
 * Created by zxlg on 2017/4/20.
 */
var readline = require('readline');
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.on('line', function(input) {
    console.log(parseInt(input,16));
});

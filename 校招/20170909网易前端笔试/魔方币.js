var readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.on('line', function (input) {
    var num = parseInt(input);
    var arr = [];
    while (num != 0) {
        if (num % 2 == 0) {
            num = (num - 2) / 2;
            arr.push(2);
        } else {
            num = (num - 1) / 2;
            arr.push(1);
        }
    }
    console.log(arr.reverse().join(''));
}).on('close', function () {

});
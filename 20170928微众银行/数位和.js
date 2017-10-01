var readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.on('line', function (input) {
    var n = parseInt(input);
    var max = 0;
    if (n % 2 != 0) {
        max = Math.floor(n / 2) + 1;
    } else {
        max = Math.floor(n / 2);
    }

    console.log(max);
}).on('close', function () {

});
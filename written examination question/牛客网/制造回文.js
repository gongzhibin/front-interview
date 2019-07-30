var readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.on('line', function (input) {
    var arr = [];
    for (var i = 0; i < 26; i++) {
        arr[i] = 0;
    }
    for (var j = 0; j < input.length; j++) {
        arr[input.charCodeAt(j) - 97]++;
    }
    var sum = 0;
    for (var k = 0; k < arr.length; k++) {
        if (arr[k] % 2 == 1) {
            sum++;
        }
    }
    if (input == '') {
        sum = 1;
    }
    if (sum == 0) {
        sum = 1;
    }
    console.log(sum);
}).on('close', function () {

});

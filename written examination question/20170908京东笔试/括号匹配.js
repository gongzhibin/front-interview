var readline = require('readline');
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.on('line', function (input) {
    var sum = 1;
    var arr = [];
    for (var i = 0; i < input.length; i++) {
        if (input.charAt(i) == '(') {
            arr.push(input.charAt(i));
        } else {
            sum *= arr.length;
            arr.pop();
        }
    }
    console.log(sum);
}).on('close', function () {

});
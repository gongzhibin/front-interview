var readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.on('line', function (input) {
    var str = input;
    var test = function (str) {
        var length = str.length;
        var newLength = length / 2;
        for (var i = 0; i < newLength; i++) {
            if (str.charAt(i) != str.charAt(i + newLength)) {
                return -1;
            }
        }
        return length;
    }
    var answer = test(str.slice(0, -2));
    while (answer == -1) {
        str = str.slice(0, -2);
        answer = test(str);
    }
    
    console.log(answer);
}).on('close', function () {

});


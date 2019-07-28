var readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.on('line', function (input) {
    var arr = input.split(',');
    var str = '';
    var result = '';
    for (var i = 0; i < arr.length; i++) {
        str = arr[i].slice(2);
        var tempStr = '';
        if (str.charAt(0) == 'F') {
            tempStr = str.slice(1);
        }
        else {
            tempStr = str.slice(1) + str.slice(0,1);
        }
        result += tempStr;
    }
    console.log(result);
}).on('close', function () {

});
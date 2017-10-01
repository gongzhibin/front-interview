var readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.on('line', function (input) {
    var strArr = input.split(' ');
    var arr = [];
    var oneNum = 0;
    for (var i = 0; i < strArr.length; i++) {
        arr.push(parseInt(strArr[i]));
    }
    oneNum = 1 + arr[1] - arr[2];
    console.log(oneNum);

}).on('close', function () {

});
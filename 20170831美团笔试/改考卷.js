var readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
var n = 0;
var arr = [];
var flag = 0;
rl.on('line', function (input) {
    if (flag == 0) {
        n = parseInt(input);
        flag++;
    } else {
        arr = input.split(' ');
        for (var i = 0; i < arr.length; i++) {
            arr[i] = parseInt(arr[i]);
        }
        var res = judge(arr);
        if (res) {
            console.log('Yes');
        } else {
            console.log('No');
        }
        n = 0;
        arr = [];
        flag = 0;
    }
}).on('close', function () {

});

function judge(arr) {
    var sum = 0;
    var max = 0;
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    if (max * 2 <= sum) {
        return true;
    }
    return false;
}
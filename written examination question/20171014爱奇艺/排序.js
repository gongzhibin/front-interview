function solution(str) {
    var arr = str.split(' ');
    var sortArr = [];
    var count = 0;
    for (var i = 0; i < arr.length; i++) {
        sortArr[i] = arr[i] = parseInt(arr[i]);

    }
    sortArr.sort(function (a, b) {
        return a - b;
    });
    for (var i = 0; i < arr.length; i++) {
        if (sortArr[i] !== arr[i]) {
            count++;
        }
    }
    return count;
}
var readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
var flag = 0;
rl.on('line', function (input) {
    if (flag == 1) {
        var res = solution(input);
        console.log(res);
        flag = 0;
    }
    flag++;
}).on('close', function () {

});
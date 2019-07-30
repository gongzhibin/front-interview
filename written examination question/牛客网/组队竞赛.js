/**
 * Created by zxlg on 2017/5/19.
 */
var readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
var arr = [];
rl.on('line', function (input) {
    arr.push(input);
    if (arr.length === 2) {
        var n = parseInt(arr[0]);
        if(n==0){
            console.log(0);
            return;
        }
        var newArr = arr[1].split(' ');
        for (var i = 0; i < 3 * n; i++) {
            newArr[i] = parseInt(newArr[i]);
        }
        newArr.sort(function (a, b) {
            return a - b;
        });
        var index = newArr.length - 1;
        var sum = 0;
        for (var j = index; j > n - 1; j--) {
            j--;
            sum += newArr[j];
        }
        console.log(sum);
        arr = [];
    }
}).on('close', function () {

});
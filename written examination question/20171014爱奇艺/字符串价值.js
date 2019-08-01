function solution(str, num) {
    var obj = {};
    var arr = [];
    var count = 0;
    for (var i = 0; i < str.length; i++) {
        if (obj[str.charAt(i)] == undefined) {
            obj[str.charAt(i)] = 1;
        } else {
            obj[str.charAt(i)]++;
        }
    }

    for (var index in obj) {
        arr.push(obj[index]);
    }
    arr.sort(function (a, b) {
        return b - a;
    });
    for (var i = 0; i < num; i++) {
        arr[0]--;
        arr.sort(function (a, b) {
            return b - a;
        });
    }
    for (var i = 0; i < arr.length; i++) {
        count += arr[i] * arr[i];
    }
    return count;
}

var readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
var flag = 0;
var str = '';
var num = 0;
rl.on('line', function (input) {
    if (flag == 0) {
        str = input;
        flag++;
    } else {
        num = parseInt(input);
        var res = solution(str,num);
        console.log(res);

        flag = 0;
        str = '';
        num = 0;
    }
}).on('close', function () {

});
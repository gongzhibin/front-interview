function solution(str) {
    var arr = str.split(',');
    var count = 0;
    for (var i = 0; i < arr.length; i++) {
        var temp = arr[i].split('-');
        if (temp.length == 1) {
            for (var i = 0; i < temp[0].length; i++) {
                if (temp[0].charAt(i) < '0' || temp[0].charAt(i) > '9') {
                    var flag = true;
                }
            }
            if (flag || parseInt(temp[0]) > 65535 || parseInt(temp[0]) < 1) {
                return false;
            } else {
                count++;
            }
        } else {
            var start = parseInt(temp[0]);
            var end = parseInt(temp[1]);
            for (var m = 0; m < 2; m++) {
                for (var i = 0; i < temp[m].length; i++) {
                    if (temp[m].charAt(i) < '0' || temp[m].charAt(i) > '9') {
                        var flag = true;
                    }
                }
            }
            if (flag || start > 65535 || start < 1 || isNaN(end) || end > 65535 || end < 1) {
                return false;
            } else if (start > end) {
                return false;
            } else {
                count += end - start + 1;
            }
        }
    }
    if (count > 1024) {
        return false;
    }
    return true;
}

var readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.on('line', function (input) {
    var res = solution(input);
    console.log(res);
}).on('close', function () {

});
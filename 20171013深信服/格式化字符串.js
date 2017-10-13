function solution(str) {
    var arr = [];
    var ans = '';
    var length = str.length;
    if (length <= 3) {
        ans = str + ' ' + 'bps';
    } else if (length <= 6) {
        var ans1 = Math.round(parseInt(str) / Math.pow(10, 3));
        var ans2 = parseFloat((parseInt(str) / Math.pow(10, 3)).toFixed(2));
        if (ans2 - ans1 == 0) {
            ans = ans1 + ' ' + 'Kbps';
        } else {
            ans = ans2 + ' ' + 'Kbps';
        }
    } else if (length <= 9) {
        var ans1 = parseInt(str) / Math.pow(10, 6);
        var ans2 = parseFloat((parseInt(str) / Math.pow(10, 6)).toFixed(2));
        if (ans2 - ans1 == 0) {
            ans = ans1 + ' ' + 'Mbps';
        } else {
            ans = ans2 + ' ' + 'Mbps';
        }
    } else if (length <= 12) {
        var ans1 = parseInt(str) / Math.pow(10, 9);
        var ans2 = parseFloat((parseInt(str) / Math.pow(10, 9)).toFixed(2));
        if (ans2 - ans1 == 0) {
            ans = ans1 + ' ' + 'Gbps';
        } else {
            ans = ans2 + ' ' + 'Gbps';
        }
    } else {
        var ans1 = parseInt(str) / Math.pow(10, 12);
        var ans2 = parseFloat((parseInt(str) / Math.pow(10, 12)).toFixed(2));
        if (ans2 - ans1 == 0.00) {
            ans = ans1 + ' ' + 'Tbps';
        } else {
            ans = ans2 + ' ' + 'Tbps';
        }
    }

    return ans;
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
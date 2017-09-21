function solution(arr) {
    var set = new Set(arr);
    var str = '';
    set.forEach(function (element) {
        str += element + ',';
    });
    return str.slice(0, str.length - 1);
}
var readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.on('line', function (input) {
    var arr = input.split(',');
    var res = solution(arr);
    console.log(res);
}).on('close', function () {

});
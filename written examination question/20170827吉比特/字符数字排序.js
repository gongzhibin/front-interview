var readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
var arr = [];
var newArr = [];
var answer = '';
rl.on('line', function (input) {
    arr = input.split('');
    for (var i = 0; i < 36; i++) {
        newArr[i] = 0;
    }
    for (var i = 0; i < arr.length; i++) {
        if (parseInt(arr[i]) >= 0) {
            newArr[parseInt(arr[i]) + 26]++;
        } else {
            newArr[arr[i].charCodeAt() - 'a'.charCodeAt(0)]++;
        }
    }
    for (var i = 0; i < 36; i++) {
        if (i < 26) {
            for (var j = 0; j < newArr[i]; j++) {
                answer += String.fromCharCode(i + 'a'.charCodeAt(0));
            }
        }
        else {
            for (var k = 0; k < newArr[i]; k++) {
                answer += String.fromCharCode(i - 26 + '0'.charCodeAt(0));
            }
        }
    }
    console.log(answer);
    newArr = [];
    answer = '';
}).on('close', function () {

});
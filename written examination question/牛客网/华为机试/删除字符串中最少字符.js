/**
 * Created by zxlg on 2017/4/22.
 */
/**
 * Created by zxlg on 2017/4/22.
 */
var readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
var arr = [];
var data = {};
var min = 20;
var str = '';
rl.on('line', function (input) {
    for (var i = 0; i < input.length; i++) {
        if (!data[input[i]]) {
            data[input[i]] = 1;
        }
        else {
            data[input[i]]++;
        }
    }
    for (var key in data) {
        if (min > data[key]) {
            min = data[key];
        }
    }
    for (var newKey in data) {
        if (min != data[newKey]) {
            str += newKey;
        }
    }
    for (var i = 0; i < input.length; i++) {
        if (str.indexOf(input[i]) != -1) {
            arr.push(input[i]);
        }
    }
    console.log(arr.join(''));
    arr = [];
    data = {};
    min = 20;
    str = '';
}).on('close', function () {

});
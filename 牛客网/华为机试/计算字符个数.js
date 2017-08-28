/**
 * Created by zxlg on 2017/4/20.
 */

process.stdin.resume();
process.stdin.setEncoding('ascii');

var input = "";
var input_array = "";
var count = 0;

process.stdin.on('data', function (data) {
    input += data;
});

process.stdin.on('end', function () {
    input_array = input.split("\n");
    var str = input_array[0].toLowerCase();
    var char = input_array[1].toLowerCase();
    for (var i = 0; i < str.length; i++) {
        if (str.charAt(i) == char) {
            count++;
        }
    }
    console.log(count);
});
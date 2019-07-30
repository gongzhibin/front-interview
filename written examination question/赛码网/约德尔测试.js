/**
 * Created by zxlg on 2017/4/22.
 */
// var readline = require('readline')
// var rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// })
// var arr = [];
// var target = '';
// rl.on('line', function (input) {
//     arr.push(input);
//     if (arr.length == 2) {
//         var count = 0;
//         var length = arr[0].length;
//         target = arr[0].replace(/\w/g, '1').replace(/\W/g, '0');
//         for (var i = 0; i < length; i++) {
//             if (arr[1].charCodeAt(i) == target.charCodeAt(i)) {
//                 count++;
//             }
//         }
//         var answer = (count / length * 100).toFixed(2);
//         console.log(answer + '%');
//         arr = [];
//     }
//
// })

/**
 * Created by zxlg on 2017/4/22.
 */
var str1 = read_line().trim();
var str2 = read_line().trim();
var count = 0;
var length = str1.length;
var reg = /[0-9A-Za-z]/;
for (var i = 0; i < length; i++) {
    if (reg.test(str1[i])) {
        if (str2[i] == '1') {
            count++;
        } else {
            if (str2[i] == '0') {
                count++;
            }
        }
    }
}
var answer = (100 *count / length).toFixed(2) + '%';
print(answer);


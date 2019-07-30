/**
 * Created by zxlg on 2017/4/20.
 */
var readline = require('readline')
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
rl.on('line', function (input) {
    var num = parseInt(input);
    getResult(num);
})

var getResult = function (num) {
    var arr = [];
    while (num != 1) {
        for(var i=2;i<=num;i++){
            if(num%i===0){
                arr.push(i);
                num = num/i;
                break;
            }
        }
    }
    console.log(arr.join(' '));
}
//
// /**
//  * Created by zxlg on 2017/4/20.
//  */
// var readline = require('readline')
// var rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// })
// rl.on('line', function (input) {
//     var num = parseInt(input);
//     var arr = [];
//     if (num == 1) {
//         return;
//     }
//     for (var priNum = 2; priNum <= num; priNum++) {
//         for (var i = 2; i <= priNum; i++) {//选取正确的质数
//             if (priNum % i == 0 && priNum != 2) {
//                 break;
//             }
//             if ((priNum == 2 || i == priNum - 1) && num % priNum == 0) {
//                 arr.push(priNum);
//                 num = num / priNum;
//                 priNum = 1;
//                 break;
//             }
//         }
//     }
//     console.log(arr.join(' '));
// })
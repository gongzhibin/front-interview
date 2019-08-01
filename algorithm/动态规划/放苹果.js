/**
 * Created by zxlg on 2017/4/23.
 */

//  https://www.nowcoder.com/questionTerminal/a2a1d0266629404fba582d416d84b6a0
// 把 M 个同样的苹果放在 N 个同样的盘子里，允许有的盘子空着不放，问共有多少种不同的分法？
// 注意：5、1、1 和 1、5、1 是同一种分法，即顺序无关。
//
// 输入描述:
//
//     输入包含多组数据。
//
// 每组数据包含两个正整数 m和n（1≤m, n≤20）。
//
//
// 输出描述:
//
//     对应每组数据，输出一个整数k，表示有k种不同的分法。
//
// 输入例子:
//
//     7 3
//
// 输出例子:
//
//     8
var readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
var arr = [];
rl.on('line', function (input) {
    arr = input.split(' ');
    var result = dp(parseInt(arr[0]), parseInt(arr[1]));
    console.log(result);
}).on('close', function () {

});
var dp = function (m, n) {
    //递归出口，0个苹果，1个盘子
    if (m == 0 || n == 1) {
        return 1;
    }
    //盘子比较多，去除多余的盘子
    else if (n > m) {
        return dp(m, m);
    } else {
        // 苹果比较多：
        // 1：至少有一个空盘子，拿掉这个空盘子
        // 2：每个盘子都有苹果，各拿掉一个苹果（极限是最少的有1个苹果）
        return dp(m, n - 1) + dp(m - n, n);
    }
};


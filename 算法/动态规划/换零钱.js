/**
 * Created by zxlg on 2017/4/23.
 */
// 题目描述
// 考虑仅用1分、5分、10分、25分和50分这5种硬币支付某一个给定的金额。例如需要支付11分钱，有一个1分和一个10分、一个1分和两个5分、六个1分和一个5分、十一个1分这4种方式。
// 请写一个程序，计算一个给定的金额有几种支付方式。
// 注：假定支付0元有1种方式。
//
// 输入描述:
// 输入包含多组数据。
//
// 每组数据包含一个正整数n（1≤n≤10000），即需要支付的金额。
//
//
// 输出描述:
// 对应每一组数据，输出一个正整数，表示替换方式的种数。
//
// 输入例子:
// 11
// 26
//
// 输出例子:
// 4
// 13

var readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.on('line', function(input){
    var money = parseInt(input);
    var result = change(money);
    console.log(result);
}).on('close', function() {

});
var change = function (money) {
    var moneyType = [1, 5, 10, 25, 50];
    //建立长度为money+1的数组,dp[i]为1，其他为0
    var dp = new Array(money + 1);
    for (var i = 0; i < dp.length; i++) {
        if (i == 0) {
            dp[i] = 1;
        }
        else {
            dp[i] = 0;
        }
    }
    for (var i = 0; i < moneyType.length; i++) {
        for (var j = moneyType[i]; j < dp.length; j++) {
            dp[j] += dp[j - moneyType[i]];
        }
    }
    return dp[money];
}
// 题目
// 菜鸟网络仓库有一排小货架，共有N个，货架的底部是空的，现在智能机器人在某个货架下，小明写了一个非常简单的智能机器人移动程序,逻辑如下：每过1分钟，智能机器人必须随机的从一个货架下移动到相邻的一个货架下。比如刚开始智能机器人在第4个货架下，过1分钟后，智能机器人可能会在第3个货架下或者在第5个货架下。如果刚开始时智能机器人在第1个货架下，过1分钟以后，智能机器人一定会在第2个货架下。
// 现在告诉你货架的数目N，已经智能机器人开始所在的位置P，小明很想知道，在M分钟后，智能机器人到达第T货架，一共有多少种行走方案。请帮小明算一算。
// 输入：
// N
// P
// M
// T
// 输出：一共有多少种行走方案

var readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
var length = 4;
var flag = 0;
var arr = [];
rl.on('line', function (input) {
    flag++;
    input = parseInt(input);
    arr.push(input);
    if (flag == length) {
        var res = soulution(arr);
        console.log(res);
        flag = 0;
        arr = [];
    }
}).on('close', function () {

});

function soulution(arr) {
    var n = arr[0];//货架数量
    var p = arr[1];//初始位置
    var m = arr[2];//经过时间
    var t = arr[3];//结束位置
    var dp = [];
    for (var i = 0; i < m + 1; i++) {
        dp[i] = new Array;
        for (var j = 0; j < n + 2; j++) {
            dp[i][j] = 0;
        }
    }
    dp[0][p] = 1;
    for (var i = 1; i < dp.length; i++) {
        for (var j = 1; j < dp[0].length - 1; j++) { //1-n防止数组越界
            dp[i][j] = dp[i - 1][j - 1] + dp[i - 1][j + 1];
        }
    }
    return dp[m][t];
}
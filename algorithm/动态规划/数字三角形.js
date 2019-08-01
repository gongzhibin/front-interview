/**
 * Created by zxlg on 2017/4/24.
 */
//https://www.nowcoder.com/practice/88c6d56d78974869aac605a0d26deded?tpId=3&tqId=10888&rp=7&ru=%2Factivity%2Foj&qru=%2Fta%2Fhackathon%2Fquestion-ranking&tPage=2
//题目描述
//    7
//   3 8
//  8 1 0
// 2 7 4 4
//4 5 2 6 5
//如上图所示，从一个数字三角形的顶部走到底部有很多条不同的路径，规则是只能从当前节点走到下一层相邻的节点，即下一层的左边或右边。例如第三行第二个数字“1”只能走到第四行的第二个数字“7”与第三个数字“4”。
//请寻找最佳一条路径，使得这条路径上节点的数字总和最大。
//
//输入描述:
//输入包含多组。每组数据的第一行包含一个正整数n（1≤n≤100），代表三角形的层数。
//
//紧接着有n行数字，第i（1≤i≤n）行包含i个自然数。
//
//
//输出描述:
//对应每组数据，输出最大的和。
//
//输入例子:
//5
//7
//3 8
//8 1 0
//2 7 4 4
//4 5 2 6 5
//
//输出例子:
//30
var readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
var arr;
var flag = -1;
var n = 0;
rl.on('line', function (input) {
    if (flag == -1) {
        n = parseInt(input);
        //初始化输入数组
        arr = new Array(n);
        for (var i = 0; i < n; i++) {
            arr[i] = new Array(n);
            for (var j = 0; j < n; j++) {
                arr[i][j] = 0;
            }
        }
        flag = 0;
    }
    else {
        var inputArr = input.split(' ');
        for (var i = 0; i < n; i++) {
            if (inputArr[i]) {
                arr[flag][i] = parseInt(inputArr[i]);
            }
        }
        flag++;
        if(flag==n){
            var sum = solution(n,arr);
            console.log(sum);
            flag=-1;
            n=0;
        }
    }
}).on('close', function () {
    
});


var solution = function (n, arr) {
    var max = -1;
    //初始化dp数组，均为0
    var dp = new Array(n);
    for (var i = 0; i < n; i++) {
        dp[i] = new Array(n);
        for (var j = 0; j < n; j++) {
            dp[i][j] = 0;
        }
    }
    //动态规划处理
    for (var i = 0; i < n; i++) {
        for (var j = 0; j <= i; j++) {
            if (i == 0 && j == 0) {
                dp[i][j] = arr[i][j];
            } else if (j == 0) {
                dp[i][j] = dp[i - 1][j] + arr[i][j];
            }
            if (i >= 1 && j >= 1) {
                //这点的最大值等于上面两值中较大的树加上这个点的数值
                dp[i][j] = Math.max(dp[i - 1][j - 1], dp[i - 1][j]) + arr[i][j];
            }
            if (i == n - 1) {//最后一排中取最大值
                if (max < dp[i][j]) {
                    max = dp[i][j];
                }
            }
        }
    }
    return max;
};
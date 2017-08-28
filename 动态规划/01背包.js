// 有N件物品和一个容量为V的背包。
// 第i件物品的费用是c[i]，价值是w[i]。
// 求解将哪些物品装入背包可使价值总和最大。

var v = 10;
var n = 5;
var value = [8, 10, 4, 5, 5];
var weight = [6, 4, 2, 4, 3];
var dp = [];
for (var i = 0; i < n + 1; i++) {
    dp[i] = []
    for (var j = 0; j < v + 1; j++) {
        dp[i][j] = 0;
    }
}`` 

for (var i = 1; i <= n; i++) {
    for (var j = 1; j <= v; j++) {
        if (j >= weight[i]) {
            dp[i][j] = Math.max(dp[i - 1][j], dp[i - 1][j - weight[i]] + value[i]);
        }
        else {
            dp[i][j] = dp[i - 1][j];
        }
    }
}
console.log(dp)
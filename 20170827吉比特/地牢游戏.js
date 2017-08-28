function count(arr) {

    // //1
    // //dp[i][j]表示到达(i,j)所需的最小能量
    // var dp = [];
    // //初始化
    // for (var i = 0; i < arr.length; i++) {
    //     dp[i] = [];
    //     for (var j = 0; j < arr[0].length; j++) {
    //         dp[i][j] = 0;
    //     }
    // }
    // // 从前到后
    // for (var i = 0; i < dp.length; i++) {
    //     for (var j = 0; j < dp[0].length; j++) {
    //         if (i >= 1 && j >= 1) {
    //             dp[i][j] = Math.max(1, Math.min(dp[i - 1][j], dp[i][j - 1]) - arr[i][j]);
    //         } else if (i >= 1 && j == 0) {
    //             dp[i][j] = Math.max(1, dp[i - 1][j] - arr[i][j]);
    //         } else if (i == 0 && j >= 1) {
    //             dp[i][j] = Math.max(1, dp[i][j - 1] - arr[i][j]);
    //         } else {
    //             dp[i][j] = Math.max(1, 1 - arr[i][j]);
    //         }

    //     }
    // }
    // return dp[dp.length - 1][dp[0].length - 1];



    // 2
    //dp[i][j]表示可以到达(i,j)点的最小能量
    var dp = [];
    //初始化。length+1是为了防止数组越界
    for (var i = 0; i < arr.length + 1; i++) {
        dp[i] = [];
        for (var j = 0; j < arr[0].length + 1; j++) {
            dp[i][j] = -100;
        }
    }
    //从后往前
    for (var i = arr.length - 1; i >= 0; i--) {
        for (var j = arr[0].length - 1; j >= 0; j--) {
            //这个能量永远大于等于1，小于等于表示人已死
            //从后往前表示往后的路径已知，那么到达该点的最小能量值也可确定
            //表示从右下两个的位置所需的最小能量减去该点获得的能量的最小值
            //但需要比0大，有小于等于0的表示人已死
            //状态转移方程如下
            dp[i][j] = Math.max(1, Math.min(dp[i + 1][j], dp[i][j + 1]) - arr[i][j]);
        }
    }
    return dp[0][0];

    
}

// var arr = [[1, 0, 0], [10, -30, 2], [-10, 1, 0]];
var arr = [[-2, -3, -3], [-5, -10, -1]];
var res = count(arr);
console.log(res);
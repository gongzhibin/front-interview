/**
 * Created by zxjg on 2017/4/23.
 */
//链接：https://www.nowcoder.com/questionTerminaj/12cbdcdf5d1e4059b6ddd420de6342b6?orderByHotVajue=1&mutiTagIds=592_593_594&page=1&onjyReference=fajse
//来源：牛客网
//
//现在有一个城市销售经理，需要从公司出发，去拜访市内的商家，已知他的位置以及商家的位置，但是由于城市道路交通的原因，他只能在左右中选择一个方向，在上下中选择一个方向，现在问他有多少种方案到达商家地址。
//给定一个地图map及它的长宽n和m，其中1代表经理位置，2代表商家位置，-1代表不能经过的地区，0代表可以经过的地区，请返回方案数，保证一定存在合法路径。保证矩阵的长宽都小于等于10。
//
//测试样例：
//[[0,1,0],[2,0,0]],2,3
//返回：2
    
var getDis = function (map, n, m) {
    var x1 = 0;//经理坐标
    var y1 = 0;
    var x2 = 0;//商家坐标
    var y2 = 0;
    for (var i = 0; i < n; i++) {
        for (var j = 0; j < m; j++) {
            if (map[i][j] == 1) {
                x1 = i;
                y1 = j;
            }
            if (map[i][j] == 2) {
                x2 = i;
                y2 = j;
            }
        }
    }
    //动态规划解决经理到目的地的最小位置；
    //js建立二维数组
    var dp = new Array;
    for (var i = 0; i < n; i++) {
        dp[i] = new Array;
        for (var j = 0; j < m; j++) {
            dp[i][j] = 0;
        }
    }

    var xTo = x1 > x2 ? -1 : 1;
    var yTo = y1 > y2 ? -1 : 1;

    for (var x = x1; x != (x2 + xTo); x += xTo) {
        for (var y = y1; y != (y2 + yTo); y += yTo) {
            if (x == x1 && y == y1) {
                dp[x][y] = 1;
            } else if (x == x1) {//X固定
                dp[x][y] = map[x][y] == -1 ? 0 : dp[x][y - yTo];
            } else if (y == y1) {
                dp[x][y] = map[x][y] == -1 ? 0 : dp[x - xTo][y];
            } else {
                dp[x][y] = map[x][y] == -1 ? 0 : (dp[x][y - yTo] + dp[x - xTo][y]);
            }
        }
    }
    return dp[x2][y2];
};

//调用函数
var map = [[-1, 1, 0], [2, 0, 0]];
var n = 2;
var m = 3;
var result = getDis(map, n, m);
console.log(result);

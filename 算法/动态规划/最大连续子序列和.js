//最大连续子序列之和
// 给定K个整数的序列{ N1, N2, ..., NK }，
// 其任意连续子序列可表示为{ Ni, Ni+1, ..., Nj }，
// 其中 1 <= i <= j <= K。
// 最大连续子序列是所有连续子序中元素和最大的一个， 
// 例如给定序列{ -2, 11, -4, 13, -5, -2 }，
// 其最大连续子序列为{ 11, -4, 13 }，最大和为20。

function dp(arr) {
    var sum = [];
    sum[0] = 0;
    var max = 0;
    for (var i = 1; i < arr.length; i++) {
        sum[i] = Math.max(sum[i - 1] + arr[i], arr[i]);
        max = Math.max(max,sum[i]);
    }
    return max;
}

var arr = [-2, 11, -4, 13, -5, -2];
var result = dp(arr);
console.log(result);
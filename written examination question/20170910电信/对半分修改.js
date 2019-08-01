function solution(arr) {
    arr.sort(function (a, b) {
        return a - b;
    });
    var diff = 0;
    var sum1 = 0;
    var sum2 = 0;
    for (var i = 0; i < arr.length; i++) {
        diff = sum1 - sum2;
        if (diff > 0) {
            sum2 += arr[i];
        }
    }
}
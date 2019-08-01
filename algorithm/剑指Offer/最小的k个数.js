/**
 * Created by zxlg on 2017/5/3.
 */
function GetLeastNumbers_Solution(input, k) {

    var min = input.slice(0,k);
    min.sort(function (a, b) {
        return a - b;
    });
    for (var i = k; i < input.length; i++) {
        if (input[i] < min[k - 1]) {
            min.pop();
            min.push(input[i]);
            min.sort(function (a, b) {
                return a - b;
            });
        }
    }
    return min;
    // write code here
}
console.log(GetLeastNumbers_Solution([1,2,4,7,8,5,3,6],4));
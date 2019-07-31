/**
 * Created by zxlg on 2017/5/3.
 */
function FindGreatestSumOfSubArray(array) {
    var maxSub = [];
    var max;
    for (var i = 0; i < array.length; i++) {
        if (maxSub[i - 1] == undefined || maxSub[i - 1] <= 0) {
            maxSub[i] = array[i];
        }
        else {
            maxSub[i] = maxSub[i - 1] + array[i];
        }
    }
    // var max = Math.max(...maxSub);
    for (var j = 0; j < maxSub.length; j++) {
        if (max != undefined) {
            max = Math.max(max, maxSub[j]);
        } else {
            max = maxSub[j];
        }
    }
    return max;
}
console.log(FindGreatestSumOfSubArray([6, -3, -2, 7, -15, 1, 2, 2]));
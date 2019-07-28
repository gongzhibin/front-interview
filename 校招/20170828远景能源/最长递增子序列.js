function longest_increasing_subsequence_1(arr) {
    //时间复杂度为n^2
    let dp = [];
    for (let i = 0; i < arr.length; i++) {
        dp[i] = 1;
    }
    let max = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < i; j++) {
            if (arr[j] < arr[i]) {
                dp[i] = Math.max(dp[j] + 1, dp[i]);
            }
        }
        max = Math.max(max, dp[i]);
    }
    return max;
}

function longest_increasing_subsequence_2(arr) {
    //时间复杂度为nlogn
    let minNum = [];
    for (let i = 0; i < arr.length; i++) {
        length = minNum.length;
        if (arr[i] > minNum[length - 1] || minNum[length - 1] == undefined) {
            minNum[length] = arr[i];
        } else {
            //二分查找
            let change_index = binary_search(minNum,arr[i]);
            minNum[change_index] = arr[i];
        }
    }
    return minNum.length;
}

function binary_search(arr,search_num){
    let seek_left = 0;
    let seek_right = arr.length - 1;
    let half_length = Math.floor((seek_left + seek_right) / 2);
    while ((seek_right - seek_left) > 1) {
        if (arr[half_length] < search_num) {
            seek_left = Math.floor((seek_left + seek_right) / 2);
        } else if (arr[half_length] > search_num) {
            seek_right = Math.floor((seek_left + seek_right) / 2);
        } else {
            seek_right = half_length;
            break;
        }
        half_length = Math.floor((seek_left + seek_right) / 2);
    }
    return seek_right;
}

let arr = [1, 2, 4, 5, 3, 2];
let res = longest_increasing_subsequence_2(arr);
console.log(res);
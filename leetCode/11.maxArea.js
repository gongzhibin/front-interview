/**
 * @param {number[]} height
 * @return {number}
 */

// 暴力法
var maxArea = function (height) {
    let max = 0;
    for (let i = 0; i < height.length; i++) {
        for (let j = i + 1; j < height.length; j++) {
            max = Math.max(max, Math.min(height[i], height[j]) * (j - i));
        }
    }
    return max;
};

// 双指针法
var maxArea1 = function (height) {
    let max = 0;
    let len = height.length;
    for (let i = 0, j = len - 1; i < height.length, j > i;) {
        if (height[i] > height[j]) {
            max = Math.max(max, height[j] * (j - i));
            j--;
        } else {
            max = Math.max(max, height[i] * (j - i));
            i++;
        }
    }
    return max;
};


console.log(maxArea1([1, 1]));
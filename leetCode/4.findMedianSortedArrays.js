/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
    const len1 = nums1.length;
    const len2 = nums2.length;
    let start = 0;
    let end = len1;
    for (let i = Math.floor(len1 / 2); ;) {
        // 使得左右两边元素个数相等
        let j = Math.floor((len1 + len2) / 2) - i;

        // 二分查找
        if (nums1[i] >= nums2[j - 1] && nums2[j] >= nums1[i - 1]) {
            let left = Math.max(nums1[i - 1], nums2[j - 1]);
            let right = Math.min(nums1[i], nums2[j]);
            if ((i + j) * 2 > len1 + len2) {
                return left;
            }
            if ((i + j) * 2 < len1 + len2) {
                return right;
            }
            return (left + right) / 2;
        }
        if (i < 0 || j > len2 || nums1[i] < nums2[j - 1]) {
            start = i + 1;
            i = Math.floor((start + end) / 2);
            continue;

        }
        if (i > len1 || j < 0 || nums2[j] < nums1[i - 1]) {
            end = i - 1;
            i = Math.floor((start + end) / 2);
            continue;
        }

        // 处理边界情况
        if (i === 0 || i === len1 || j === 0 || j === len2) {
            const leftI = i === 0 ? -Number.MAX_VALUE : nums1[i - 1];
            const leftJ = j === 0 ? -Number.MAX_VALUE : nums2[j - 1];
            const left = Math.max(leftI, leftJ);

            const rightI = i === len1 ? Number.MAX_VALUE : nums1[i];
            const rightJ = j === len2 ? Number.MAX_VALUE : nums2[j];
            const right = Math.min(rightI, rightJ);

            if ((i + j) * 2 > len1 + len2 || right === Number.MAX_VALUE) {
                return left;
            }
            if((i + j) * 2 < len1 + len2 || left === -Number.MAX_VALUE) {
                return right;
            }
            return (left + right) / 2;
        }
    }
};
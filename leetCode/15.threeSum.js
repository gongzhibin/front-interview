/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    const res = [];
    nums.sort((a, b) => a - b);
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] > 0) break;

        if(i > 0 && nums[i] === nums[i - 1]) continue;

        let second = i + 1;
        let last = nums.length - 1;

        while(second < last) {
            if (last < nums.length - 1 && nums[last] === nums[last + 1] || (nums[i] + nums[second] + nums[last]) > 0) {
                last--;
            } else if (second > i + 1 && nums[second] === nums[second - 1] || (nums[i] + nums[second] + nums[last]) < 0) {
                second++;
            } else {
                res.push([nums[i], nums[second++], nums[last--]]);
            }
        }
    }
    return res;
};

var threeSum2 = function(nums) {
    const res = [];
    const hash = {};
    nums.sort((a, b) => a - b);
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] > 0) break;
        for(let j = i + 1; j < nums.length; j++) {
            if (hash[nums[j]]) {
                const [second, last, index] = hash[nums[j]];
                if (index.indexOf(j) > -1) continue;
                const arr = [nums[j], second, last].sort((a, b) => a - b);
                const isIn = res.some(item => JSON.stringify(arr) === JSON.stringify(item));
                if(!isIn) res.push(arr);
            } else {
                const remain = 0 - nums[i] - nums[j];
                hash[remain] = [nums[i], nums[j], [i, j]];
            }
        }
    }
    return res;
};

const res = threeSum2([1,2,-2,-1]);
console.log(res);
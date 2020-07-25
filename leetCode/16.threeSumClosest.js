/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    nums.sort((a, b) => a - b);
    let closest = Number.MAX_SAFE_INTEGER;
    let res = 0;
    for(let i = 0; i < nums.length; i++) {
        let second = i + 1;
        let last = nums.length - 1;
        while(second < last) {
            const sum = nums[i] + nums[second] + nums[last] - target;
            if(closest > Math.abs(sum)) {
                closest = Math.abs(sum);
                res = nums[i] + nums[second] + nums[last];
            }
            if (second > 1 && nums[second] === nums[second - 1] || sum < 0) {
                second++;
            } else if(nums[last] === nums[last + 1] || sum > 0) {
                last--;
            } else if(sum === 0){
                return res;
            }

        }
    }
    return res;
};

const res = threeSumClosest([-1, 2, 1, -4], 1);
console.log(res);
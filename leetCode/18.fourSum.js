/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    nums.sort((a, b) => a - b);
    let res = [];
    for(let i = 0; i < nums.length; i++) {
        if(i > 0 && nums[i] === nums[i - 1]) continue;
        
        for(let j = i + 1; j < nums.length; j++) {
            if(j > i + 1 && nums[j] === nums[j - 1]) continue;

            let third = j + 1;
            let end = nums.length - 1;
            while(third < end) {
                const sum = nums[i] + nums[j] + nums[third] + nums[end];
                if (third > j + 1 && nums[third] === nums[third - 1] || sum < target) { 
                    third++;
                } else if ((end < nums.length - 1) && nums[end] === nums[end + 1] || sum > target) {
                    end--;
                } else {
                    res.push([nums[i], nums[j], nums[third++], nums[end--]])
                };
            }
        }
    }
    return res;
};

const res = fourSum([-1,-5,-5,-3,2,5,0,4],-7);
console.log(res);
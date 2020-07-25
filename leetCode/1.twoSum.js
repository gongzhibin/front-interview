/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let res;
    const isFind = nums.some((first, firstIndex) => {
        const remainNums = nums.slice(firstIndex + 1);
        const value = remainNums.some((last, lastIndex) => {
            res = [firstIndex, firstIndex + 1 + lastIndex];
            return first + last === target;
        });
        return value;
    })
    if(isFind) {
        return res;
    }
    return 'cant find this two nums';
};

const res = twoSum([2, 7, 11, 15], 9);
console.log(res);
// 题目: 数字 n 代表生成括号的对数，请你设计一个函数，用于能够生成所有可能的并且 有效的 括号组合。

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// 1. 暴力破解 复杂度O(n*n)
var twoSum = function (nums, target) {
  let res;
  const isFind = nums.some((first, firstIndex) => {
    const remainNums = nums.slice(firstIndex + 1);
    const value = remainNums.some((last, lastIndex) => {
      res = [firstIndex, firstIndex + 1 + lastIndex];
      return first + last === target;
    });
    return value;
  });
  if (isFind) {
    return res;
  }
  return 'cant find this two nums';
};

// 2. 空间换时间，不用遍历去找和为sum的另一个数据，使用hash方式去找
// 时间复杂度O(n) 空间复杂度O(n)
const twoSum2 = function (nums, target) {
  const numsObj = {};
  nums.forEach((val, key) => {
    numsObj[val] = key;
  });
  let res = []
  nums.some((val, index) => {
    if (typeof numsObj[target - val] === 'number' && numsObj[target - val] !== index) {
      res = [index, numsObj[target - val]];
      return true;
    }
    return false;
  });
  return res;
};

const res = twoSum([2, 7, 11, 15], 9);
console.log(res);
const res2 = twoSum2([2, 7, 11, 15], 9);
console.log(res2);

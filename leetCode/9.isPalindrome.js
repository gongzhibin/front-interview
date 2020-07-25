/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
    x = '' + x;
    const reverseX = x.split('').reverse().join('');
    return x === reverseX;
};

const res = isPalindrome(101);
console.log(res);
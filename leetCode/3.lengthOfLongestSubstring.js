/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    if (s.length === 0) {
        return 0;
    }
    if (s.length === 1) {
        return 1;
    }
    let start = 0;
    let max = 1;
    for (let i = 1; i < s.length; i++) {
        const sub = s.substring(start, i);
        const index = sub.indexOf(s[i]);
        if (index > -1) {
            max = Math.max(max, sub.length);
            start += index + 1;
        } else if (i === s.length - 1) {
            max = Math.max(max, sub.length + 1);
        }
    }
    return max;
};

const res = lengthOfLongestSubstring('abcabcbb');
console.log(res);
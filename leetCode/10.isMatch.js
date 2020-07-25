/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function (s, p) {
    reg = new RegExp(`^${p}$`);
    return reg.test(s);
};

// TODO 实现reg

console.log(isMatch('mississippi', 'mis*is*p*.'));
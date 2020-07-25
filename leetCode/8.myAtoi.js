/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function (str) {
    str = str.trim();
    const reg = /[-+]?\d+/;
    let res = reg.exec(str);
    if (res && res[0] && res.index === 0) {
        res = parseInt(res[0]);
    } else {
        return 0;
    }
    if (res > 2 ** 31 - 1) {
        return 2 ** 31 - 1
    }
    if (res < -(2 ** 31)) {
        return -(2 ** 31)
    }
    return res;
};

const res = myAtoi('   --31  -33');
console.log(res);
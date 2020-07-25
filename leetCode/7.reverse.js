/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
    let temp = '';
    let res = 0;
    if (x >= 0) {
        temp += x;
        res = parseInt(temp.split("").reverse().join(""));

    } else {
        temp += Math.abs(x);
        res = -parseInt(temp.split("").reverse().join(""));
    }
    if (res >= -(2**31) && res <= 2**31-1) {
        return res;
    }
    return 0;
};

const res = reverse(-120);
console.log(res);
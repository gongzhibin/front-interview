/**
 * @param {number} num
 * @return {string}
 */

var intToRoman = function (num) {
    const rules = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    const items = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
    let res = '';
    for (let i = 0; i < rules.length; i++) {
        const temp = Math.floor(num / rules[i]);
        temp && (res += items[i].repeat(temp));
        num = num % rules[i];
    }
    return res;
};

console.log(intToRoman(1994));
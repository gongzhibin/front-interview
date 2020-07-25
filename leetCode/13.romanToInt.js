/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
    const rules = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    const items = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
    let num = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === 'C') {
            if (s[i + 1]) {
                if (s[i + 1] === 'M') {
                    num += 900;
                    i++;
                    continue;
                }
                if (s[i + 1] === 'D') {
                    num += 400;
                    i++;
                    continue;
                }
            }
            num += 100;
            continue;
        }

        if (s[i] === 'X') {
            if (s[i + 1]) {
                if (s[i + 1] === 'C') {
                    num += 90;
                    i++;
                    continue;
                }
                if (s[i + 1] === 'L') {
                    num += 40;
                    i++;
                    continue;
                }
            }
            num += 10;
            continue;
        }

        if (s[i] === 'I') {
            if (s[i + 1]) {
                if (s[i + 1] === 'X') {
                    num += 9;
                    i++;
                    continue;
                }
                if (s[i + 1] === 'V') {
                    num += 4;
                    i++;
                    continue;
                }
            }
            num += 1;
            continue;
        }

        num += rules[items.indexOf(s[i])];
    }
    return num;
};

console.log(romanToInt('MCMXCIV'))
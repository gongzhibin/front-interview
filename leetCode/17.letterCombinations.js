/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    if(digits.length === 0) {
        return [];
    }
    digits = digits.split('').map((val) => parseInt(val));
    const letters = digits.map(val => digitToLetters(val));
    let res = [''];
    let temp = [];
    for(let i = 0; i < letters.length; i++) {
        for(let j = 0; j < letters[i].length; j++) {
            temp = [...temp, ...res.map(val => val + letters[i][j])];
        }
        res = temp;
        temp = [];
    }
    return res;
};

function digitToLetters(digit) {
    const pri = 'a'.charCodeAt() + (digit - 2) * 3;
    if(digit === 7) {
        return [String.fromCharCode(pri), String.fromCharCode(pri + 1), String.fromCharCode(pri + 2), String.fromCharCode(pri + 3)];
    } else if (digit === 8) {
        return [String.fromCharCode(pri + 1), String.fromCharCode(pri + 2), String.fromCharCode(pri + 3)];
    } else if (digit === 9) {
        return [String.fromCharCode(pri + 1), String.fromCharCode(pri + 2), String.fromCharCode(pri + 3), String.fromCharCode(pri + 4)];
    }
    return [String.fromCharCode(pri), String.fromCharCode(pri + 1), String.fromCharCode(pri + 2)];
   
}

var res = letterCombinations('23');
console.log(res);
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if(numRows === 0 || numRows === 1) {
        return s;
    }
    let arr = buildArray(numRows);
    let a = 0;
    let b = 0;
    for(let i = 0; i < s.length; i++) {
        const temp = (numRows > 1) && ((i + 1) % (numRows * 2 - 2));
        if(numRows > 1 && ( temp == 0 || temp >= numRows)) {
            arr[a--][b++] = s[i];
        } else {
            arr[a++][b] = s[i];
        }
    }
    let res = '';
    for(let i = 0; i < arr.length; i++) {
        for(let j = 0; j < arr[i].length; j++) {
            if(arr[i][j]) {
                res += arr[i][j];
            }
        }
    }
    return res;
};

function buildArray(n) {
    let arr = [];
    for (let i = 0; i < n; i++) {
        arr[i] = [];
    }
    return arr;
}

const res = convert('AB', 1);
console.log(res);
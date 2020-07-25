/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
    let len = s.length;
    let dp = buildArray(len);
    let max = 0;
    let maxStr = '';
    for (let i = 0; i < len; i++) {
        dp[i][i] = true;
        if (1 > max) {
            max = 1;
            maxStr = s.slice(i, i + 1);
        }

        (i + 1 < len) && (dp[i][i + 1] = s[i] === s[i + 1]);
        if (dp[i][i + 1] && 2 > max) {
            max = 2;
            maxStr = s.slice(i, i + 1 + 1);
        }
    }

    for (let strLen = 3; strLen <= len; strLen++) {
        for (let i = 1, j = strLen + i - 3; i < len, j < len - 1; i++, j++) {
            dp[i - 1][j + 1] = dp[i][j] && s[i - 1] === s[j + 1];
            if (dp[i - 1][j + 1]) {
                if (strLen > max) {
                    max = strLen;
                    maxStr = s.slice(i - 1, j + 1 + 1);
                }
            }
        }
    }
    return maxStr;
};

function buildArray(n) {
    let arr = [];
    for (let i = 0; i < n; i++) {
        arr[i] = [];
    }
    return arr;
}

const res = longestPalindrome('abcba');
console.log(res);
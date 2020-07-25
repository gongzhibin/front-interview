/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    const dp = [[''], ['()']];
    for(let i = 2; i <= n; i++) {
        dp[i] = [];
        for(let j = 0; j < i; j++) {
            const left = dp[j]
            const right = dp[i - 1 - j];
            for(let k1 = 0; k1 < left.length; k1++) {
                for(let k2 = 0; k2 < right.length; k2++) {
                    dp[i].push(`(${left[k1]})${right[k2]}`)
                }
            }
        }
    }
    return dp[n];
};

const res = generateParenthesis(3);
console.log(res);
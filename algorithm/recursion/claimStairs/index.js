function claimStairs(n) {
    if (n === 1) return 1;
    if (n === 2) return 2;
    return claimStairs(n - 1) + claimStairs(n - 2);
}

function claimStairsByDP(n) {
    const dp = [0, 1, 2];
    for (let i = 3; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }
    return dp[n];
}

console.time('claimStairs');
const a = claimStairs(40);
console.timeEnd('claimStairs'); // claimStairs: 900.785888671875ms

console.time('claimStairsByDP');
const b = claimStairsByDP(40);
console.timeEnd('claimStairsByDP'); // claimStairsByDP: 0.10107421875ms
console.log(a, b); // 165580141 165580141
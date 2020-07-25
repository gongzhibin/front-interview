/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if (strs.length === 0) {
        return '';
    }
    const str = strs[0];
    let prefix = '';
    for (let i = 1; i <= str.length; i++) {
        const temp = str.substring(0, i);
        for (let j = 1; j < strs.length; j++) {
            if (!strs[j].startsWith(temp)) {
                return prefix;
            }
        }
        prefix = temp;
    }
    return prefix;
};

console.log(longestCommonPrefix(['flower', 'flow', 'flight']));

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    if(s.length % 2 !==0 ) {
        return false;
    }
    const sArr = s.split('');
    const stack = [];
    const hash = {
        '(':')',
        '{': '}',
        '[': ']'
    }
    let isValid = sArr.every((s) => {
        if (hash[s]) {
            stack.push(s);
            return true;
        }
        const key = stack.pop();
        if(s === hash[key]) {
            return true;
        }
        return false;
    });

    return isValid && !stack.length;
};

const res = isValid("[[]]][");
console.log(res);
function solution(str) {
    var left = 0;
    var right = 0;
    for (var i = 0; i < str.length; i++) {
        if (str.charAt(i) == '[') {
            left++;
        } else if (str.charAt(i) == ']' && left > 0) {
            left--;
        } else {
            right++;
        }
    }
    for (var i = 0; i < left; i++) {
        str += ']';
    }

    for (var i = 0; i < right; i++) {
        str = '[' + str;
    }

    return str;
}

var readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.on('line', function(input){
    var res = solution(input);
    console.log(res);
}).on('close', function() {

});
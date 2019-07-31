var readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.on('line', function (input) {
    var numStr = '';
    var num = 0;
    var result = '';
    for (var i = 0; i < input.length; i++) {
        if (!((input.charAt(i) >= '0' && input.charAt(i) <= '9') || (input.charAt(i) >= 'a' && input.charAt(i) <= 'z'))) {
            console.log('!error');
            return;
        }
        if (parseInt(input.charAt(i)) >= 0 && parseInt(input.charAt(i)) <= 9) {
            var isNum = true;
            numStr += input.charAt(i);
            continue;
        }
        if (isNum) {
            num = parseInt(numStr);
            for (var j = 0; j < num; j++) {
                result += input.charAt(i);
            }
            isNum = false;
            numStr = '';
        } else {
            result += input.charAt(i);
        }
    }
    var newResult = '';
    var left = 0;
    var length = 0;
    for (var i = 0; i < result.length; i++) {
        if (result.charAt(i) != result.charAt(i + 1)) {
            length = i - left + 1;
            if (length <= 2) {
                for (var j = 0; j < length; j++) {
                    newResult += result.charAt(i);
                }
            } else {
                newResult += length + result.charAt(i);
            }
            left = i + 1;
        }
    }
    if (newResult == input) {
        // console.log(newResult);
        console.log(result);
    } else {
        console.log('!error');
    }
}).on('close', function () {

});
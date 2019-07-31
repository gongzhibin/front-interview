var readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.on('line', function (input) {
    var inputArr = input.split('');
    var arr = [];
    var length = 0;
    for (var i = 0; i < inputArr.length; i++) {
        if (inputArr[i] == 'A' || inputArr[i] == 'T' || inputArr[i] == 'C' || inputArr[i] == 'G') {
            length = 1;
            for (var j = i + 1; j < inputArr.length; j++) {
                if (inputArr[j] == 'A' || inputArr[j] == 'T' || inputArr[j] == 'C' || inputArr[j] == 'G') {
                    length++;
                    if (j == inputArr.length - 1) {
                        arr.push(length);
                        length = 0;
                        i = j;
                    }
                }
                else {
                    arr.push(length);
                    length = 0;
                    i = j;
                    break;
                }
            }
        }
    }
    arr.sort(function (a, b) {
        return a - b;
    });
    console.log(arr[arr.length - 1]);
}).on('close', function () {

});
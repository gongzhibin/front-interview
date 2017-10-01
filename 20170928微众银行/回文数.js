var readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.on('line', function (input) {
    var str = parseInt(input, 2);
    var length = str.length;
    var num = 0;
    var flag = 1;
    var addFlag = 0;
    for (var i = 1; i < length; i++) {
        if (i == 1) {
            num += 2;
        } else {
            num += flag;
        }
        if (i != 1 && addFlag % 2 == 0) {
            addFlag++;
            flag *= 2;
        }
    }
    var countLength = str.length - 2;
    var num = [];
    for(var i=0;i<str.length;i++){
        
    }
    if (countLength % 2 == 0) {
        for (var i = 0; i < countLength/2; i++) {
            // var str = 
        }
    } else {

    }

    console.log(num);
}).on('close', function () {

});
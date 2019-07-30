function solution(arr) {
    var sum = 0;
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] != arr[i - 1]) {
            sum++;
        }
    }
    if (arr[0] != 0) {
        sum++;
    }
    var mod = sum % 2;
    if (mod == 1) {
        return 'Alice';
    } else {
        return 'Bob';
    }
}


var readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
var flag = 0;
rl.on('line', function (input) {
    if (flag == 0) {
        flag = 1;
    } else {
        var arr = input.split(' ');
        for (var i = 0; i < arr.length; i++) {
            arr[i] = parseInt(arr[i]);
        }
        var res = solution(arr);
        console.log(res);
        flag = 0;
    }
}).on('close', function () {

});


// if (arr[i] == 1) {
//     sum++;
//     for (var j = i; j < arr.length; j++) {
//         arr[j] = arr[j] ^ 1;
//         if (arr[j] == 1) {
//             one_num++;
//         }
//     }
//     if (one_num == 0) {
//         var mod = sum % 2;
//         if (mod == 1) {
//             return 'Alice';
//         } else {
//             return 'Bob';
//         }
//     }
// }
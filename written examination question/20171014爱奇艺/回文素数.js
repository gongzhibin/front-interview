function solution(str) {
    var arr = str.split(' ');
    arr[0] = parseInt(arr[0]);
    arr[1] = parseInt(arr[1]);
    var count = 0;
    for (var i = arr[0]; i <= arr[1]; i++) {
        if (isPrime(i) && isPalindrome(i)) {
            count++;
        }
    }
    return count;
}

function isPrime(num) {
    if (num == 1) {
        return false;
    } else if (num == 2) {
        return true;
    }
    var sqrt = Math.ceil(Math.sqrt(num));
    for (var i = 2; i <= sqrt; i++) {
        if (num % i == 0) {
            return false;
        }
    }
    return true;
}

function isPalindrome(num) {
    str = '' + num;
    for (var i = 0; i <= str.length / 2; i++) {
        if (str.charAt(i) !== str.charAt(str.length - 1 - i)) {
            return false;
        }
    }
    return true;
}

var readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.on('line', function (input) {
    var res = solution(input);
    console.log(res);
}).on('close', function () {

});
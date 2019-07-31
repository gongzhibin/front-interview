var readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
var answer = [0, 0, 0, 0, 0, 0, 0];
var item = [];
var ip = [];
var mask = [];
var temp = 0;

rl.on('line', function (line) {
    record(line);
}).on('close', function () {
    output();
});
var record = function (input) {
    item = input.split('~');
    ip = item[0].split('.');
    mask = item[1].split('.');
    temp = answer[5];

    //错误IP
    for (var i = 0; i < 4; i++) {
        if (parseInt(ip[i]) >=0 && parseInt(ip[i]) <= 255) {
            continue;
        }
        else {
            answer[5]++;
            break;
        }
    }
    if (temp != answer[5]) {
        return;
    }
    //错误掩码
    var reg = /01/g;
    var mask2 = '';
    for (var j = 0; j < 4; j++) {
        if (parseInt(mask[j]) >= 0 && parseInt(mask[j]) <= 255) {
            var maskTemp = parseInt(mask[j]).toString(2);
            //不足8位前补0
            while (maskTemp.length < 8) {
                maskTemp = '0' + maskTemp
            }
            mask2 += maskTemp;
        }
        else{
            answer[5]++;
            return;
        }

    }
    if (temp != answer[5]) {
        return;
    }
    if (reg.test(mask2)) {
        answer[5]++;
        return;
    }
    //子网掩码不能全1
    if(!(/0/.test(mask2))){
        answer[5]++;
        return;
    }
    //私网IP
    if (ip[0] == 10 || (ip[0] == 172 && ip[1] >= 16 && ip[1] <= 31) || (ip[0] == 192 && ip[1] == 168)) {
        answer[6]++;
    }
    //A
    if (ip[0] >= 1 && ip[0] <= 126) {
        answer[0]++;
        return;
    }
    //B
    if (ip[0] >= 128 && ip[0] <= 191) {
        answer[1]++;
        return;
    }
    //C
    if (ip[0] >= 192 && ip[0] <= 223) {
        answer[2]++;
        return;
    }
    //D
    if (ip[0] >= 224 && ip[0] <= 239) {
        answer[3]++;
        return;
    }
    //E
    if (ip[0] >= 240 && ip[0] <= 255) {
        answer[4]++;
    }
}

var output = function () {
    console.log(answer.join(' '));
    answer = [0, 0, 0, 0, 0, 0, 0];
}



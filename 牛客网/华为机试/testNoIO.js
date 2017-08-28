var input = "10.70.44.68~255.254.255.0\n1.0.0.1~255.0.0.0\n192.168.0.2~255.255.255.0\n19..0.~255.255.255.0";
var input_array = [];

var answer = [0, 0, 0, 0, 0, 0, 0];
input_array = input.split("\n");
var item = [];
var ip = [];
var mask = [];
var temp = 0;
for (var index = 0; index < input_array.length; index++) {
    item = input_array[index].split('~');
    ip = item[0].split('.');
    mask = item[1].split('.');
    temp = answer[5];
    //错误IP
    for (var i = 0; i < 4; i++) {
        if (ip[i] == '') {
            answer[5]++;
            break;
        }
        if (parseInt(ip[i]) < 0 || parseInt(ip[i]) > 255) {
            answer[5]++;
            break;
        }
    }
    if (temp != answer[5]) {
        continue;
    }
    //错误掩码
    var reg = /01/g;
    var mask2 = '';
    for (var j = 0; j < 4; j++) {
        if (mask[j] == '') {
            answer[5]++;
            break;
        }
        if (parseInt(mask[j]) < 0 || parseInt(mask[j]) > 255) {
            answer[5]++;
            break;
        }
        mask2 += parseInt(mask[j]).toString(2);
    }
    if (reg.test(mask2)) {
        answer[5]++;
        continue;
    }
    if (temp != answer[5]) {
        continue;
    }
    //私网IP
    if (ip[0] == 10 || (ip[0] == 172 && ip[1] >= 16 && ip[1] <= 31) || (ip[0] == 192 && ip[1] == 168)) {
        answer[6]++;
    }
    //A
    if (ip[0] >= 1 && ip[0] <= 126) {
        answer[0]++;
        continue;
    }
    //B
    if (ip[0] >= 128 && ip[0] <= 191) {
        answer[1]++;
        continue;
    }
    //C
    if (ip[0] >= 192 && ip[0] <= 223) {
        answer[2]++;
        continue;
    }
    //D
    if (ip[0] >= 224 && ip[0] <= 239) {
        answer[3]++;
        continue;
    }
    //E
    if (ip[0] >= 240 && ip[0] <= 255) {
        answer[4]++;
    }
}
console.log(answer.join(' '));
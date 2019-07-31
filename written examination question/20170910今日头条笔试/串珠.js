var readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
var n = 0;
var m = 0;
var c = 0;
var flag = 0;
var arr = [];
var ball = [];
var answer = [];
var res = 0;
rl.on('line', function (input) {
    if (flag == 0) {
        arr = input.split(' ');
        n = parseInt(arr[0]);
        m = parseInt(arr[1]);
        c = parseInt(arr[2]);
        flag++;
    }
    else if (flag <= n) {

        var temp = input.split(' ').slice(1);
        for (var i = 0; i < temp.length; i++) {
            temp[i] = parseInt(temp[i]);
        }
        ball.push(temp);
        if (flag < n) {
            flag++;
        } else {
            //answer为二维数组 
            for (var i = 0; i < c + 1; i++) {
                answer[i] = [];
            }
            //answer数组中加入每个颜色的位置
            for (var i = 0; i < ball.length; i++) {
                for (var j = 0; j < ball[i].length; j++) {
                    answer[ball[i][j]].push(i + 1);
                }
            }
            //判定不符合情况长度
            for (var i = 1; i < answer.length; i++) {
                for (var j = 0; j < answer[i].length; j++) {
                    for (var k = 1; k < m; k++) {
                        if (j + k >= answer[i].length) {
                            if (answer[i][j + k - answer[i].length] + answer[i].length - answer[i][j] < m && answer[i][j + k - answer[i].length] + answer[i].length - answer[i][j] > 0) {
                                res++;
                                break;
                            }
                        } else {
                            if (answer[i][j + k] - answer[i][j] < m && answer[i][j + k] - answer[i][j] > 0) {
                                res++;
                                break;
                            }
                        }

                    }

                }
            }
            console.log(res);
            //初始化
            n = 0;
            m = 0;
            c = 0;
            flag = 0;
            arr = [];
            newArr = [];
        }

    }
}).on('close', function () {

});